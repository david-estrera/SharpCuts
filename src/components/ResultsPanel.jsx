import { motion } from 'framer-motion'
import HaircutCard from './HaircutCard'
import { getRecommendations, faceShapeInfo } from '../data/haircuts'

export default function ResultsPanel({ result, onReset }) {
  const { faceShape, confidence, allResults, isFallback } = result
  const recommendations = getRecommendations(faceShape)
  const shapeInfo = faceShapeInfo[faceShape] || faceShapeInfo['Oval']

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      {/* Result header */}
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
          className="inline-block mb-6"
        >
          <div className="face-shape-badge">
            <span className="mr-2 text-3xl">{shapeInfo.icon}</span>
            {faceShape.toUpperCase()} FACE
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-cream/60 font-body mb-2">
            Confidence: <span className="text-gold font-semibold">{confidence}%</span>
          </p>
          
          {isFallback && (
            <p className="text-cream/40 font-body text-sm mb-4">
              (Demo mode - actual AI model unavailable)
            </p>
          )}

          <p className="text-cream/80 font-body text-lg max-w-2xl mx-auto">
            {recommendations.description}
          </p>
        </motion.div>

        {/* Face shape traits */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mt-6"
        >
          {shapeInfo.traits.map((trait, i) => (
            <motion.span 
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.1, borderColor: 'rgba(201, 162, 39, 0.5)' }}
              className="px-4 py-1 bg-charcoal-light border border-gold/20 rounded-full text-cream/70 font-body text-sm cursor-default"
            >
              {trait}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Confidence breakdown */}
      {allResults && allResults.length > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-md mx-auto"
        >
          <h3 className="font-display text-xl text-cream text-center mb-4">ANALYSIS BREAKDOWN</h3>
          <div className="space-y-2">
            {allResults.slice(0, 5).map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="font-body text-cream/70 w-20 text-sm">{item.label}</span>
                <div className="flex-1 h-2 bg-charcoal-light rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${item.score}%` }}
                    transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                    className={`h-full rounded-full ${i === 0 ? 'bg-gold' : 'bg-cream/30'}`}
                  />
                </div>
                <span className="font-body text-cream/50 text-sm w-12 text-right">{item.score}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Haircut recommendations */}
      <div>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="font-display text-4xl text-cream text-center mb-8"
        >
          RECOMMENDED <span className="text-gold">HAIRCUTS</span>
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations.haircuts.map((haircut, index) => (
            <HaircutCard key={haircut.id} haircut={haircut} index={index} />
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
      >
        <motion.button
          onClick={onReset}
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(201, 162, 39, 0.6)' }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gold text-charcoal font-display text-xl tracking-wide rounded gold-glow hover:bg-gold-dark transition-all"
        >
          ANALYZE ANOTHER PHOTO
        </motion.button>
      </motion.div>

      {/* Disclaimer */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-center text-cream/40 font-body text-sm max-w-xl mx-auto"
      >
        These recommendations are based on general face shape guidelines. 
        For the best results, consult with a professional barber who can consider your 
        hair texture, lifestyle, and personal style preferences.
      </motion.p>
    </motion.div>
  )
}

