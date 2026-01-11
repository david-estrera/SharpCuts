import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import ImageCapture from './components/ImageCapture'
import FaceAnalyzer from './components/FaceAnalyzer'
import ResultsPanel from './components/ResultsPanel'

function App() {
  const [capturedImage, setCapturedImage] = useState(null)
  const [analysisResult, setAnalysisResult] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleImageCapture = (imageData) => {
    setCapturedImage(imageData)
    setAnalysisResult(null)
  }

  const handleAnalysisComplete = (result) => {
    setAnalysisResult(result)
    setIsAnalyzing(false)
  }

  const handleStartAnalysis = () => {
    setIsAnalyzing(true)
  }

  const handleReset = () => {
    setCapturedImage(null)
    setAnalysisResult(null)
    setIsAnalyzing(false)
  }

  return (
    <div className="min-h-screen bg-charcoal">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        
        <section id="analyzer" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              {!capturedImage && (
                <motion.div
                  key="title-capture"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="font-display text-5xl md:text-6xl text-cream text-center mb-4">
                    DISCOVER YOUR LOOK
                  </h2>
                  <p className="text-cream/70 text-center mb-12 max-w-2xl mx-auto font-body text-lg">
                    Upload a photo or use your camera to analyze your face shape and get personalized haircut recommendations
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {!capturedImage ? (
                <ImageCapture key="capture" onCapture={handleImageCapture} />
              ) : !analysisResult ? (
                <FaceAnalyzer 
                  key="analyzer"
                  image={capturedImage}
                  isAnalyzing={isAnalyzing}
                  onStartAnalysis={handleStartAnalysis}
                  onAnalysisComplete={handleAnalysisComplete}
                  onReset={handleReset}
                />
              ) : (
                <ResultsPanel 
                  key="results"
                  result={analysisResult}
                  onReset={handleReset}
                />
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-gold/20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-cream/50 font-body text-sm">
            © 2026 SharpCuts. Powered by AI Face Shape Analysis.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

