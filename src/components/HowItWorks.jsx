import { motion } from 'framer-motion'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'CAPTURE YOUR PHOTO',
      description: 'Upload a clear photo or use your device camera. Make sure your face is well-lit and facing forward.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'AI ANALYSIS',
      description: 'Our advanced AI analyzes your facial features using machine learning to determine your unique face shape.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'FACE SHAPE DETECTION',
      description: 'The system identifies whether your face is Oval, Round, Square, Heart, Diamond, or another shape.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'PERSONALIZED RECOMMENDATIONS',
      description: 'Receive curated haircut suggestions tailored to your face shape, complete with styling tips and explanations.',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 bg-charcoal-light/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl text-cream mb-4">
            HOW IT <span className="text-gold">WORKS</span>
          </h2>
          <p className="text-cream/70 font-body text-lg max-w-2xl mx-auto">
            Our AI-powered system makes finding your perfect haircut simple and accurate
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="card-elevated rounded-xl p-8 h-full flex flex-col items-center text-center hover:transform hover:scale-105 transition-all duration-300 relative z-10">
                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-lg z-20">
                    <span className="font-display text-2xl text-charcoal">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="text-gold mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-display text-2xl text-cream mb-4">
                    {step.title}
                  </h3>
                  <p className="font-body text-cream/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector lines - Horizontal for all screen sizes */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full h-0.5 bg-gold/30 z-0" style={{ width: '2rem', marginLeft: '0' }}>
                    <motion.div
                      className="h-full bg-gold"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    />
                    {/* Arrow head */}
                    <motion.div
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-gold"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 1 }}
                    />
                  </div>
                )}

                {/* Vertical connector for md screens (2 columns) - from step 2 to step 3 */}
                {index === 1 && (
                  <div className="hidden md:block lg:hidden absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gold/30 z-0" style={{ marginTop: '2rem' }}>
                    <motion.div
                      className="w-full bg-gold"
                      initial={{ height: 0 }}
                      whileInView={{ height: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    />
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-gold"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 p-8 border border-gold/20 rounded-xl bg-charcoal-light/50"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-display text-gold mb-2">100%</div>
              <p className="font-body text-cream/70 text-sm">Privacy Protected</p>
              <p className="font-body text-cream/50 text-xs mt-1">All processing happens locally in your browser</p>
            </div>
            <div>
              <div className="text-4xl font-display text-gold mb-2">AI</div>
              <p className="font-body text-cream/70 text-sm">Powered Analysis</p>
              <p className="font-body text-cream/50 text-xs mt-1">Advanced machine learning algorithms</p>
            </div>
            <div>
              <div className="text-4xl font-display text-gold mb-2">Free</div>
              <p className="font-body text-cream/70 text-sm">To Use</p>
              <p className="font-body text-cream/50 text-xs mt-1">No sign-up required, no hidden fees</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

