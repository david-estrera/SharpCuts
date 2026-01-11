import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function LoadingSpinner({ message = 'Analyzing...', progress = null }) {
  const [animatedProgress, setAnimatedProgress] = useState(0)

  useEffect(() => {
    if (progress !== null) {
      const timer = setTimeout(() => {
        setAnimatedProgress(progress)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [progress])

  return (
    <div className="relative flex flex-col items-center justify-center py-16">
      {/* Barber Pole Animation */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="relative w-20 h-48 rounded-full overflow-hidden border-4 border-gold shadow-2xl"
      >
        <div className="absolute inset-0 barber-pole-animate" />
        {/* Glass shine effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
        {/* Rotating shine */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-transparent via-gold/20 to-transparent"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      {/* Decorative caps */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
        className="relative -mt-1"
      >
        <div className="w-24 h-5 bg-gradient-to-b from-gold to-gold-dark rounded-b-lg shadow-lg" />
      </motion.div>

      {/* Progress bar */}
      {progress !== null && (
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '100%' }}
          transition={{ delay: 0.5 }}
          className="mt-8 w-full max-w-xs"
        >
          <div className="h-2 bg-charcoal-light rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${animatedProgress}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-gold to-gold-dark rounded-full shadow-lg"
            />
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center text-cream/60 font-body text-sm mt-2"
          >
            {animatedProgress}% complete
          </motion.p>
        </motion.div>
      )}

      {/* Loading text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 text-center"
      >
        <motion.p 
          key={message}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="font-display text-2xl text-cream tracking-wider mb-2"
        >
          {message}
        </motion.p>
      </motion.div>

      {/* Animated dots */}
      <div className="flex gap-2 mt-4">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 rounded-full bg-gold"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.4, 1, 0.4],
              y: [0, -8, 0]
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Status messages */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 space-y-2"
      >
        <motion.p 
          className="text-cream/50 font-body text-sm max-w-xs text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Our AI is examining your facial features to determine your face shape
        </motion.p>
      </motion.div>

      {/* Scanning lines effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent"
          animate={{ y: [0, 400, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  )
}

