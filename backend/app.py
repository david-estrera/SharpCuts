from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import base64
from PIL import Image
import io
import numpy as np
import torch
import torchvision.transforms as T
import torch.nn.functional as F

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend

# Set device (CPU for now, can use CUDA if available)
device = "cuda" if torch.cuda.is_available() else "cpu"
print(f"Using device: {device}")

# Load model once at startup
print("Loading face shape classification model...")
try:
    from huggingface_hub import snapshot_download
    
    # Download entire model repository
    print("Downloading model repository from HuggingFace...")
    cache_dir = snapshot_download(
        repo_id="fahd9999/face_shape_classification",
        repo_type="model"
    )
    print(f"Model repository downloaded to: {cache_dir}")
    
    # Find the .pth model file
    files = os.listdir(cache_dir)
    print(f"Available files: {files}")
    
    # Look for .pth file
    model_file = None
    for file in files:
        if file.endswith('.pth'):
            model_file = os.path.join(cache_dir, file)
            break
    
    if model_file is None:
        raise FileNotFoundError("No .pth model file found in repository")
    
    print(f"Loading PyTorch model from: {model_file}")
    # PyTorch 2.6+ changed default to weights_only=True for security
    # Since this is a trusted model from HuggingFace, we set weights_only=False
    model = torch.load(model_file, map_location=torch.device(device), weights_only=False)
    model.eval()  # Set to evaluation mode
    model.to(device)
    print("Model loaded successfully!")
    
except Exception as e:
    print(f"Error loading model: {e}")
    import traceback
    traceback.print_exc()
    print("Model will not be available. API will return fallback responses.")
    model = None

# Face shape labels (adjust based on your model's output)
FACE_SHAPES = ['Oval', 'Round', 'Square', 'Heart', 'Diamond', 'Oblong', 'Triangle']

def preprocess_image(image):
    """Preprocess image for PyTorch model"""
    # Use ImageNet normalization (standard for most PyTorch models)
    transform = T.Compose([
        T.Resize((224, 224)),  # Resize to 224x224
        T.ToTensor(),          # Convert to tensor and scale to [0, 1]
        T.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])  # ImageNet normalization
    ])
    
    # Ensure RGB
    if image.mode != 'RGB':
        image = image.convert('RGB')
    
    # Apply transforms and add batch dimension
    image_tensor = transform(image).unsqueeze(0)
    return image_tensor.to(device)

@app.route('/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'model_loaded': model is not None
    })

@app.route('/classify', methods=['POST'])
def classify():
    """Classify face shape from image"""
    if model is None:
        return jsonify({
            'error': 'Model not loaded',
            'isFallback': True
        }), 500
    
    try:
        data = request.json
        
        if 'image' not in data:
            return jsonify({'error': 'No image provided'}), 400
        
        # Decode base64 image
        image_data = data['image']
        if ',' in image_data:
            # Remove data URL prefix if present
            image_data = image_data.split(',')[1]
        
        image_bytes = base64.b64decode(image_data)
        image = Image.open(io.BytesIO(image_bytes))
        
        # Preprocess image
        image_tensor = preprocess_image(image)
        
        # Run prediction with PyTorch model
        model.eval()
        with torch.no_grad():  # Disable gradient calculations for inference
            outputs = model(image_tensor)
            
        # Apply softmax to get probabilities
        probabilities = F.softmax(outputs, dim=1)
        predictions = probabilities[0].cpu().numpy()  # Get first batch item and convert to numpy
        
        print(f"Model output shape: {predictions.shape}")
        print(f"Model output: {predictions}")
        
        # Get top predictions
        num_shapes = min(len(predictions), len(FACE_SHAPES))
        top_indices = np.argsort(predictions)[::-1][:num_shapes]
        
        all_results = []
        for idx in top_indices:
            if idx < len(FACE_SHAPES):
                score = float(predictions[idx] * 100)
                all_results.append({
                    'label': FACE_SHAPES[idx],
                    'score': round(score, 1)
                })
        
        # Get top result
        top_idx = top_indices[0]
        top_shape = FACE_SHAPES[top_idx] if top_idx < len(FACE_SHAPES) else 'Oval'
        top_confidence = round(float(predictions[top_idx] * 100), 1)
        
        return jsonify({
            'faceShape': top_shape,
            'confidence': int(top_confidence),
            'allResults': all_results,
            'isFallback': False
        })
            
    except Exception as e:
        print(f"Classification error: {e}")
        import traceback
        traceback.print_exc()
        return jsonify({
            'error': str(e),
            'isFallback': True
        }), 500

if __name__ == '__main__':
    print("Starting Flask server...")
    print("API will be available at http://localhost:5000")
    app.run(host='0.0.0.0', port=5000, debug=True)

