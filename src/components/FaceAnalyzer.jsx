import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import LoadingSpinner from './LoadingSpinner'
import { ImageSkeleton } from './SkeletonLoader'
import { useFaceClassifier } from '../hooks/useFaceClassifier'

export default function FaceAnalyzer({ 
  image, 
  isAnalyzing, 
  onStartAnalysis, 
  onAnalysisComplete,
  onReset 
}) {
  const { classify, isLoading, error } = useFaceClassifier()
  const [imageLoaded, setImageLoaded] = useState(false)
  const [analysisProgress, setAnalysisProgress] = useState(0)

  useEffect(() => {
    if (isAnalyzing && image) {
      performAnalysis()
    }
  }, [isAnalyzing])

  const performAnalysis = async () => {
    // Simulate progress updates
    const progressInterval = setInterval(() => {
      setAnalysisProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval)
          return prev
        }
        return prev + 10
      })
    }, 200)

    const result = await classify(image)
    
    clearInterval(progressInterval)
    setAnalysisProgress(100)
    
    // Small delay to show 100% before transitioning
    setTimeout(() => {
      if (result) {
        onAnalysisComplete(result)
      }
      setAnalysisProgress(0)
    }, 300)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <div className="card-elevated rounded-xl overflow-hidden p-8">
        {isAnalyzing || isLoading ? (
          <LoadingSpinner 
            message="Analyzing your face shape..." 
            progress={analysisProgress || null}
          />
        ) : (
          <div className="space-y-6">
            {/* Image preview */}
            <motion.div 
              className="relative aspect-[4/3] rounded-lg overflow-hidden border-2 border-gold/30"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {!imageLoaded && (
                <div className="absolute inset-0 z-10">
                  <ImageSkeleton className="h-full" />
                </div>
              )}
              <motion.img 
                src={image} 
                alt="Your photo" 
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: imageLoaded ? 1 : 0 }}
                onLoad={() => setImageLoaded(true)}
                transition={{ duration: 0.5 }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              />
              <motion.div 
                className="absolute bottom-4 left-4 right-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="font-display text-xl text-cream">READY TO ANALYZE</p>
                <p className="font-body text-cream/70 text-sm">Click below to detect your face shape</p>
              </motion.div>
              {/* Scanning effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
              </motion.div>
            </motion.div>

            {/* Error message */}
            {error && (
              <div className="p-4 bg-burgundy/20 border border-burgundy/50 rounded-lg">
                <p className="text-cream font-body text-sm">
                  <span className="text-burgundy-light font-semibold">Note:</span> {error}
                  <br />
                  <span className="text-cream/60">Using demo mode for illustration purposes.</span>
                </p>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex gap-4">
              <motion.button
                onClick={onReset}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-3 border-2 border-cream/30 text-cream font-display text-lg tracking-wide rounded hover:border-gold hover:text-gold transition-all"
              >
                CHOOSE DIFFERENT PHOTO
              </motion.button>
              <motion.button
                onClick={onStartAnalysis}
                whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(201, 162, 39, 0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-3 bg-gold text-charcoal font-display text-lg tracking-wide rounded hover:bg-gold-dark transition-all gold-glow flex items-center justify-center gap-2"
              >
                <motion.svg 
                  className="w-5 h-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </motion.svg>
                ANALYZE MY FACE
              </motion.button>
            </div>

            {/* Info note */}
            <p className="text-center text-cream/50 font-body text-sm">
              Analysis is performed locally in your browser. Your photo is never uploaded to any server.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  )
}

