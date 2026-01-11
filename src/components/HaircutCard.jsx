import { motion } from 'framer-motion'
import { useState } from 'react'
import { ImageSkeleton } from './SkeletonLoader'

export default function HaircutCard({ haircut, index }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="haircut-card card-elevated group cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 z-10">
            <ImageSkeleton className="h-full" />
          </div>
        )}
        <motion.img 
          src={haircut.image} 
          alt={haircut.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          onLoad={() => setImageLoaded(true)}
          className="w-full h-full object-cover"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80"
          animate={{ opacity: isHovered ? 0.6 : 0.8 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Shine effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: isHovered ? '200%' : '-100%' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
        
        {/* Name overlay */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-4 z-10"
          animate={{ y: isHovered ? -4 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h4 
            className="font-display text-2xl text-cream leading-tight"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {haircut.name.toUpperCase()}
          </motion.h4>
        </motion.div>

        {/* Gold accent line */}
        <motion.div
          className="absolute bottom-0 left-4 right-4 h-1 bg-gold"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ originX: 0 }}
        />
      </div>

      {/* Details */}
      <motion.div 
        className="p-5 space-y-4"
        animate={{ backgroundColor: isHovered ? 'rgba(201, 162, 39, 0.05)' : 'transparent' }}
        transition={{ duration: 0.3 }}
      >
        <motion.p 
          className="font-body text-cream/80 text-sm leading-relaxed"
          animate={{ color: isHovered ? 'rgba(245, 240, 230, 0.9)' : 'rgba(245, 240, 230, 0.8)' }}
        >
          {haircut.description}
        </motion.p>
        
        <motion.div 
          className="pt-3 border-t border-gold/20"
          animate={{ borderColor: isHovered ? 'rgba(201, 162, 39, 0.4)' : 'rgba(201, 162, 39, 0.2)' }}
        >
          <p className="text-xs text-gold font-display tracking-wide mb-1">WHY IT WORKS</p>
          <p className="font-body text-cream/60 text-sm">
            {haircut.whyItWorks}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

