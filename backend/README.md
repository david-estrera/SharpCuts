# Backend API for SharpCuts

This backend API serves the PyTorch face shape classification model (fahd9999/face_shape_classification).

## Setup

1. Install Python dependencies:
```bash
pip install -r requirements.txt
```

2. Run the server:
```bash
python app.py
```

The API will be available at `http://localhost:5000`

## Requirements

- Python 3.9-3.11 (Python 3.14 may have compatibility issues)
- PyTorch 2.0+
- torchvision 0.15+
- Flask 3.0+
- At least 512MB RAM for model loading

## API Endpoints

### Health Check
```
GET /health
```

Response:
```json
{
  "status": "healthy",
  "model_loaded": true
}
```

### Classify Face Shape
```
POST /classify
Content-Type: application/json

{
  "image": "data:image/jpeg;base64,..."
}
```

Response:
```json
{
  "faceShape": "Oval",
  "confidence": 85,
  "allResults": [
    {"label": "Oval", "score": 85.0},
    {"label": "Round", "score": 10.0},
    ...
  ],
  "isFallback": false
}
```

Error Response (when model not loaded):
```json
{
  "error": "Model not loaded",
  "isFallback": true
}
```

## Model Information

- **Model**: fahd9999/face_shape_classification
- **Framework**: PyTorch
- **Architecture**: EfficientNet
- **Size**: ~70MB
- **Download**: Automatic on first run from HuggingFace
- **Cache**: Model is cached in `~/.cache/huggingface/hub/`

## Deployment

### Railway

1. Install Railway CLI:
```bash
npm i -g @railway/cli
```

2. Deploy:
```bash
railway login
railway init
railway up
```

### Render

1. Create new Web Service
2. Root Directory: `backend`
3. Build Command: `pip install -r requirements.txt && pip install torch torchvision`
4. Start Command: `python app.py`
5. Environment: Python 3

### Heroku

1. Create `Procfile`:
```
web: python app.py
```

2. Create `runtime.txt`:
```
python-3.11.0
```

3. Deploy:
```bash
heroku create your-app-name
git push heroku main
```

### Docker

1. Build:
```bash
docker build -t sharpcuts-backend .
```

2. Run:
```bash
docker run -p 5000:5000 sharpcuts-backend
```

## Environment Variables

No required environment variables. The model downloads automatically.

## Troubleshooting

**Model not loading:**
- Ensure internet connection for first download
- Check available memory (needs ~500MB+)
- Verify PyTorch installation: `python -c "import torch; print(torch.__version__)"`

**Port already in use:**
- Change port in `app.py`: `app.run(host='0.0.0.0', port=5000)`

**Slow first request:**
- Normal - model loads on startup (30-60 seconds first time)
- Subsequent requests are fast

**Memory issues:**
- Ensure deployment platform has at least 512MB RAM
- Consider upgrading to 1GB+ for better performance

