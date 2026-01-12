import { motion } from 'framer-motion'
import HaircutCard from './HaircutCard'
import { getRecommendations, faceShapeInfo } from '../data/haircuts'

export default function ResultsPanel({ result, uploadedImage, onReset }) {
  const { faceShape, confidence, allResults, isFallback } = result
  const recommendations = getRecommendations(faceShape)
  const shapeInfo = faceShapeInfo[faceShape] || faceShapeInfo['Oval']

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 md:space-y-12"
    >
      {/* Uploaded photo display */}
      {uploadedImage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="max-w-md mx-auto mb-6 md:mb-8"
        >
          <h3 className="font-display text-xl md:text-2xl text-cream text-center mb-4">YOUR PHOTO</h3>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-2 border-gold/30 shadow-lg">
            <img 
              src={uploadedImage} 
              alt="Your uploaded photo" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      )}

      {/* Result header */}
      <div className="text-center px-2">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
          className="inline-block mb-4 md:mb-6"
        >
          <div className="face-shape-badge text-base md:text-lg px-4 md:px-6 py-2">
            <span className="mr-2 text-2xl md:text-3xl">{shapeInfo.icon}</span>
            {faceShape.toUpperCase()} FACE
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-cream/60 font-body text-sm md:text-base mb-2">
            Confidence: <span className="text-gold font-semibold">{confidence}%</span>
          </p>
          
          {isFallback && (
            <p className="text-cream/40 font-body text-xs md:text-sm mb-4">
              (Demo mode - actual AI model unavailable)
            </p>
          )}

          <p className="text-cream/80 font-body text-base md:text-lg max-w-2xl mx-auto px-4">
            {recommendations.description}
          </p>
        </motion.div>

        {/* Face shape traits */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mt-4 md:mt-6 px-4"
        >
          {shapeInfo.traits.map((trait, i) => (
            <motion.span 
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.1, borderColor: 'rgba(201, 162, 39, 0.5)' }}
              className="px-3 md:px-4 py-1 bg-charcoal-light border border-gold/20 rounded-full text-cream/70 font-body text-xs md:text-sm cursor-default"
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
          className="max-w-md mx-auto px-4"
        >
          <h3 className="font-display text-lg md:text-xl text-cream text-center mb-4">ANALYSIS BREAKDOWN</h3>
          <div className="space-y-2">
            {allResults.slice(0, 5).map((item, i) => (
              <div key={i} className="flex items-center gap-2 md:gap-3">
                <span className="font-body text-cream/70 w-16 md:w-20 text-xs md:text-sm flex-shrink-0">{item.label}</span>
                <div className="flex-1 h-2 bg-charcoal-light rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${item.score}%` }}
                    transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                    className={`h-full rounded-full ${i === 0 ? 'bg-gold' : 'bg-cream/30'}`}
                  />
                </div>
                <span className="font-body text-cream/50 text-xs md:text-sm w-10 md:w-12 text-right flex-shrink-0">{item.score}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Haircut recommendations */}
      <div className="px-2">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="font-display text-3xl md:text-4xl text-cream text-center mb-6 md:mb-8"
        >
          RECOMMENDED <span className="text-gold">HAIRCUTS</span>
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
          className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gold text-charcoal font-display text-lg md:text-xl tracking-wide rounded gold-glow hover:bg-gold-dark transition-all"
        >
          ANALYZE ANOTHER PHOTO
        </motion.button>
      </motion.div>

      {/* Disclaimer */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-center text-cream/40 font-body text-xs md:text-sm max-w-xl mx-auto px-4"
      >
        These recommendations are based on general face shape guidelines. 
        For the best results, consult with a professional barber who can consider your 
        hair texture, lifestyle, and personal style preferences.
      </motion.p>
    </motion.div>
  )
}

