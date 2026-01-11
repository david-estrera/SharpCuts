import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileMenuOpen(false)
  }

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-sm border-b border-gold/20"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold flex items-center justify-center">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-charcoal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="6" cy="6" r="3"/>
              <circle cx="6" cy="18" r="3"/>
              <line x1="20" y1="4" x2="8.12" y2="15.88"/>
              <line x1="14.47" y1="14.48" x2="20" y2="20"/>
              <line x1="8.12" y1="8.12" x2="12" y2="12"/>
            </svg>
          </div>
          <span className="font-display text-2xl md:text-3xl text-cream tracking-wide">
            SHARP<span className="text-gold">CUTS</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <motion.a 
            href="#analyzer"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('analyzer')
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
              scrollToSection('how-it-works')
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

        {/* Desktop CTA Button */}
        <motion.a 
          href="#analyzer"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('analyzer')
          }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(201, 162, 39, 0.4)' }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-5 py-2 bg-gold text-charcoal font-display text-lg tracking-wide rounded hover:bg-gold-dark transition-colors"
        >
          GET STARTED
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-cream hover:text-gold transition-colors"
          aria-label="Toggle menu"
        >
          <motion.svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </motion.svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gold/20 bg-charcoal/98 backdrop-blur-sm overflow-hidden"
          >
            <nav className="flex flex-col py-4 px-4 space-y-4">
              <motion.a
                href="#analyzer"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('analyzer')
                }}
                className="font-body text-cream/70 hover:text-gold transition-colors py-2"
                whileTap={{ scale: 0.95 }}
              >
                Analyzer
              </motion.a>
              <motion.a
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('how-it-works')
                }}
                className="font-body text-cream/70 hover:text-gold transition-colors py-2"
                whileTap={{ scale: 0.95 }}
              >
                How It Works
              </motion.a>
              <motion.a
                href="#analyzer"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('analyzer')
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gold text-charcoal font-display text-lg tracking-wide rounded text-center mt-2"
              >
                GET STARTED
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

