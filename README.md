# ✂️ SharpCuts - AI-Powered Haircut Recommender

A modern, elegant web application that uses AI to analyze your face shape and recommend personalized haircuts. Built with React, Vite, and powered by Hugging Face Transformers.

![SharpCuts](https://img.shields.io/badge/SharpCuts-AI%20Haircut%20Recommender-gold)
![React](https://img.shields.io/badge/React-18.2-blue)
![Vite](https://img.shields.io/badge/Vite-5.1-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🤖 **AI Face Shape Detection** - Uses Keras model (fahd9999/face_shape_classification) via backend API
- 📸 **Multiple Input Methods** - Upload photos or use your device camera
- 🎨 **Beautiful UI** - Elegant barbershop-inspired design with smooth animations
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🎯 **Personalized Recommendations** - Get haircut suggestions tailored to your face shape
- ✨ **Smooth Animations** - Polished UI with Framer Motion animations
- 🔒 **Privacy-First** - Processing happens on your backend server

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)
- Python 3.9+ (for backend API)
- pip (Python package manager)

### Installation

#### Frontend Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/haircut-recommender.git
cd haircut-recommender
```

2. Install dependencies:
```bash
npm install
```

#### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Create virtual environment (recommended):
```bash
python -m venv venv

# On Windows:
venv\Scripts\activate

# On Mac/Linux:
source venv/bin/activate
```

3. Install Python dependencies:
```bash
pip install -r requirements.txt
pip install jax jaxlib  # Required for Keras backend
```

4. Start the backend server:
```bash
python app.py
```

The backend API will be available at `http://localhost:5000`

#### Running the Application

1. Make sure the backend is running (see Backend Setup above)

2. Start the frontend development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

**Note:** The frontend requires the backend API to be running for AI face shape classification to work. If the backend is not running, the app will fall back to demo mode.

### Building for Production

```bash
npm run build
```

The production build will be in the `dist` directory. Preview it with:

```bash
npm run preview
```

## 🏗️ Project Structure

```
haircut-recommender/
├── backend/             # Python Flask backend
│   ├── app.py          # Flask API server
│   ├── requirements.txt # Python dependencies
│   ├── README.md       # Backend documentation
│   ├── start.sh        # Start script (Linux/Mac)
│   └── start.bat       # Start script (Windows)
├── public/              # Static assets
│   └── scissors.svg
├── src/
│   ├── components/      # React components
│   │   ├── FaceAnalyzer.jsx
│   │   ├── HaircutCard.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── ImageCapture.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── ResultsPanel.jsx
│   │   └── SkeletonLoader.jsx
│   ├── data/            # Data files
│   │   └── haircuts.js
│   ├── hooks/           # Custom React hooks
│   │   └── useFaceClassifier.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **PyTorch** - Deep learning framework for backend
- **Flask** - Python web framework for API
- **react-webcam** - Webcam access for photo capture

## 🎯 How It Works

1. **Capture/Upload Photo** - Users can either upload a photo or use their device camera
2. **AI Analysis** - The backend uses a PyTorch face shape classification model (fahd9999/face_shape_classification) to analyze facial features
3. **Face Shape Detection** - Determines face shape (Oval, Round, Square, Heart, Diamond, Oblong, Triangle)
4. **Recommendations** - Provides personalized haircut recommendations based on the detected face shape
5. **Results Display** - Shows the uploaded photo and detailed information about each recommended haircut

## 🎨 Design Features

- **Barbershop Aesthetic** - Classic barbershop-inspired color scheme (charcoal, gold, cream)
- **Smooth Animations** - Polished transitions and micro-interactions throughout
- **Loading States** - Beautiful loading spinners with progress indicators
- **Skeleton Loaders** - Smooth image loading with shimmer effects
- **Responsive Layout** - Mobile-first design that works on all devices

## 🔧 Configuration

### Tailwind CSS

The project uses Tailwind CSS with custom colors defined in `tailwind.config.js`:
- `charcoal` - Dark background
- `gold` - Accent color
- `cream` - Light text
- `burgundy` - Secondary accent

### Backend API Configuration

The frontend connects to the backend API for face shape classification. Set the API URL using environment variables:

Create a `.env` file in the root directory:
```
VITE_API_URL=http://localhost:5000
```

For production, update this to your deployed backend URL.

### Vite Configuration

The Vite config targets `esnext` for better compatibility.

## 🚀 Deployment

### Frontend Deployment

#### Option 1: Vercel (Recommended)

1. **Install Vercel CLI** (optional):
```bash
npm i -g vercel
```

2. **Deploy from GitHub**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Add environment variable: `VITE_API_URL=https://your-backend-url.com`
   - Deploy!

3. **Deploy via CLI**:
```bash
vercel
```

#### Option 2: Netlify

1. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

2. **Build and deploy**:
```bash
npm run build
netlify deploy --prod --dir=dist
```

3. **Or connect via GitHub**:
   - Push to GitHub
   - Go to [netlify.com](https://netlify.com)
   - Import repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Add environment variable: `VITE_API_URL=https://your-backend-url.com`

#### Option 3: GitHub Pages

1. **Update `vite.config.js`**:
```javascript
export default {
  base: '/your-repo-name/',
  // ... rest of config
}
```

2. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

3. **Add deploy script to `package.json`**:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

4. **Deploy**:
```bash
npm run deploy
```

### Backend Deployment

#### Option 1: Railway

1. **Install Railway CLI**:
```bash
npm i -g @railway/cli
```

2. **Login and initialize**:
```bash
railway login
cd backend
railway init
```

3. **Set environment variables** (in Railway dashboard):
   - No special variables needed (model downloads automatically)

4. **Deploy**:
```bash
railway up
```

#### Option 2: Render

1. **Create new Web Service** on [render.com](https://render.com)

2. **Connect your GitHub repository**

3. **Configure**:
   - **Root Directory**: `backend`
   - **Build Command**: `pip install -r requirements.txt && pip install torch torchvision`
   - **Start Command**: `python app.py`
   - **Environment**: Python 3

4. **Add environment variables** (if needed):
   - None required by default

5. **Deploy**

#### Option 3: Heroku

1. **Install Heroku CLI**:
```bash
# Download from https://devcenter.heroku.com/articles/heroku-cli
```

2. **Create `Procfile` in backend directory**:
```
web: python app.py
```

3. **Create `runtime.txt`**:
```
python-3.11.0
```

4. **Deploy**:
```bash
cd backend
heroku create your-app-name
git init
heroku git:remote -a your-app-name
git add .
git commit -m "Initial commit"
git push heroku main
```

#### Option 4: DigitalOcean App Platform

1. **Create new App** on [digitalocean.com](https://digitalocean.com)

2. **Connect GitHub repository**

3. **Configure**:
   - **Type**: Web Service
   - **Source Directory**: `backend`
   - **Build Command**: `pip install -r requirements.txt && pip install torch torchvision`
   - **Run Command**: `python app.py`
   - **Environment**: Python

4. **Deploy**

#### Option 5: Docker Deployment

1. **Create `Dockerfile` in backend directory**:
```dockerfile
FROM python:3.11-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install --no-cache-dir torch torchvision

# Copy application
COPY . .

# Expose port
EXPOSE 5000

# Run application
CMD ["python", "app.py"]
```

2. **Create `.dockerignore`**:
```
venv/
__pycache__/
*.pyc
.env
```

3. **Build and run**:
```bash
cd backend
docker build -t sharpcuts-backend .
docker run -p 5000:5000 sharpcuts-backend
```

4. **Deploy to Docker Hub**:
```bash
docker tag sharpcuts-backend yourusername/sharpcuts-backend
docker push yourusername/sharpcuts-backend
```

### Full Stack Deployment (Frontend + Backend)

#### Using Docker Compose

1. **Create `docker-compose.yml` in root**:
```yaml
version: '3.8'

services:
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    environment:
      - FLASK_ENV=production
    restart: unless-stopped

  frontend:
    build:
      context: .
      dockerfile: Dockerfile.frontend
    ports:
      - "80:80"
    environment:
      - VITE_API_URL=http://backend:5000
    depends_on:
      - backend
    restart: unless-stopped
```

2. **Create `Dockerfile.frontend`**:
```dockerfile
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

3. **Create `nginx.conf`**:
```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

4. **Deploy**:
```bash
docker-compose up -d
```

### Environment Variables

#### Frontend (.env)
```
VITE_API_URL=https://your-backend-url.com
```

#### Backend
No required environment variables. The model downloads automatically from HuggingFace.

### Post-Deployment Checklist

- [ ] Backend is accessible and `/health` endpoint returns `{"status": "healthy", "model_loaded": true}`
- [ ] Frontend environment variable `VITE_API_URL` points to backend URL
- [ ] CORS is enabled on backend (already configured)
- [ ] SSL/HTTPS is enabled (recommended)
- [ ] Backend has sufficient memory (model requires ~500MB+ RAM)
- [ ] Backend has internet access for initial model download

### Troubleshooting Deployment

**Backend Issues:**
- **Model not loading**: Ensure backend has internet access and sufficient memory
- **Port conflicts**: Change port in `app.py` if 5000 is taken
- **Python version**: Use Python 3.9-3.11 (3.14 may have compatibility issues)

**Frontend Issues:**
- **API connection errors**: Verify `VITE_API_URL` is set correctly
- **Build errors**: Check Node.js version (18+ required)
- **CORS errors**: Ensure backend CORS is configured correctly

**Performance:**
- Backend model loads on startup (takes 30-60 seconds first time)
- Subsequent requests are fast
- Consider using a service with persistent storage to cache the model

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Hugging Face](https://huggingface.co/) for the face shape classification model
- [Unsplash](https://unsplash.com/) for haircut images
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for styling utilities

## ⚠️ Important Notes

- **Model Loading**: The PyTorch model downloads automatically from HuggingFace on first run (~70MB). This may take 30-60 seconds.
- **Fallback Mode**: The application uses a demo/fallback mode when the AI model cannot be loaded. For production use, ensure the backend has internet access and sufficient memory.
- **Python Version**: Python 3.9-3.11 recommended. Python 3.14 may have compatibility issues with some dependencies.
- **Memory Requirements**: Backend requires at least 512MB RAM for model loading and inference.

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

Made with ✂️ and ❤️

