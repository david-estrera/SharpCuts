# ✂️ SharpCuts - AI-Powered Haircut Recommender

A modern, elegant web application that uses AI to analyze your face shape and recommend personalized haircuts. Built with React, Vite, and powered by Hugging Face Transformers.

![SharpCuts](https://img.shields.io/badge/SharpCuts-AI%20Haircut%20Recommender-gold)
![React](https://img.shields.io/badge/React-18.2-blue)
![Vite](https://img.shields.io/badge/Vite-5.1-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🤖 **AI Face Shape Detection** - Uses Hugging Face Transformers to analyze face shapes
- 📸 **Multiple Input Methods** - Upload photos or use your device camera
- 🎨 **Beautiful UI** - Elegant barbershop-inspired design with smooth animations
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Fast & Local** - All processing happens in your browser (no server uploads)
- 🎯 **Personalized Recommendations** - Get haircut suggestions tailored to your face shape
- ✨ **Smooth Animations** - Polished UI with Framer Motion animations
- 🔒 **Privacy-First** - Your photos never leave your device

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/haircut-recommender.git
cd haircut-recommender
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

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
├── public/              # Static assets
│   └── scissors.svg
├── src/
│   ├── components/      # React components
│   │   ├── FaceAnalyzer.jsx
│   │   ├── HaircutCard.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
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
- **@xenova/transformers** - Hugging Face Transformers for browser
- **react-webcam** - Webcam access for photo capture

## 🎯 How It Works

1. **Capture/Upload Photo** - Users can either upload a photo or use their device camera
2. **AI Analysis** - The app uses a face shape classification model to analyze facial features
3. **Face Shape Detection** - Determines face shape (Oval, Round, Square, Heart, Diamond, etc.)
4. **Recommendations** - Provides personalized haircut recommendations based on the detected face shape
5. **Results Display** - Shows detailed information about each recommended haircut

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

### Vite Configuration

The Vite config excludes `@xenova/transformers` from optimization and targets `esnext` for better compatibility with the transformers library.

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

## ⚠️ Note

This application uses a demo/fallback mode when the AI model cannot be loaded. For production use, ensure the Hugging Face model is properly configured and accessible.

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

Made with ✂️ and ❤️

