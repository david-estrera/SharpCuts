import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-sm border-b border-gold/20"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
            <svg className="w-6 h-6 text-charcoal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="6" cy="6" r="3"/>
              <circle cx="6" cy="18" r="3"/>
              <line x1="20" y1="4" x2="8.12" y2="15.88"/>
              <line x1="14.47" y1="14.48" x2="20" y2="20"/>
              <line x1="8.12" y1="8.12" x2="12" y2="12"/>
            </svg>
          </div>
          <span className="font-display text-3xl text-cream tracking-wide">
            SHARP<span className="text-gold">CUTS</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <motion.a 
            href="#analyzer"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('analyzer')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            className="font-body text-cream/70 hover:text-gold transition-colors relative"
            whileHover={{ y: -2 }}
          >
            Analyzer
            <motion.span
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          <motion.a 
            href="#how-it-works"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            className="font-body text-cream/70 hover:text-gold transition-colors relative"
            whileHover={{ y: -2 }}
          >
            How It Works
            <motion.span
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </nav>

        <motion.a 
          href="#analyzer"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('analyzer')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(201, 162, 39, 0.4)' }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2 bg-gold text-charcoal font-display text-lg tracking-wide rounded hover:bg-gold-dark transition-colors"
        >
          GET STARTED
        </motion.a>
      </div>
    </motion.header>
  )
}

