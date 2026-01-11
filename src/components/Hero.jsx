import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden pinstripe-bg">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-burgundy/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1 mb-6 text-sm font-body text-gold border border-gold/30 rounded-full">
            AI-POWERED HAIRCUT RECOMMENDATIONS
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-7xl md:text-9xl text-cream leading-none mb-6"
        >
          FIND YOUR
          <br />
          <span className="text-gold">PERFECT CUT</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-xl text-cream/70 max-w-2xl mx-auto mb-10"
        >
          Discover which hairstyles complement your unique face shape. Our AI analyzes your features 
          and recommends cuts that will make you look your absolute best.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a 
            href="#analyzer"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('analyzer')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(201, 162, 39, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gold text-charcoal font-display text-xl tracking-wide rounded gold-glow hover:bg-gold-dark transition-all duration-300"
          >
            ANALYZE MY FACE
          </motion.a>
          <motion.a 
            href="#how-it-works"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            whileHover={{ scale: 1.05, borderColor: 'rgba(201, 162, 39, 0.8)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-cream/30 text-cream font-display text-xl tracking-wide rounded hover:border-gold hover:text-gold transition-all duration-300"
          >
            HOW IT WORKS
          </motion.a>
        </motion.div>

        {/* Feature highlights */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-charcoal-light border border-gold/30 flex items-center justify-center">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl text-cream mb-2">SNAP A PHOTO</h3>
            <p className="font-body text-cream/60">Upload or capture your photo using your device camera</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-charcoal-light border border-gold/30 flex items-center justify-center">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl text-cream mb-2">AI ANALYSIS</h3>
            <p className="font-body text-cream/60">Our AI detects your face shape with advanced neural networks</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-charcoal-light border border-gold/30 flex items-center justify-center">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl text-cream mb-2">GET STYLED</h3>
            <p className="font-body text-cream/60">Receive personalized haircut recommendations that suit you</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-cream/40 text-sm font-body">Scroll to begin</span>
          <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

