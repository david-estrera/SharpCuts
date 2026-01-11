import { motion } from 'framer-motion'

export default function SkeletonLoader({ className = '', count = 1 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className={`bg-charcoal-light rounded-lg overflow-hidden ${className}`}
        >
          <div className="relative overflow-hidden">
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.1
              }}
            />
            {/* Base skeleton */}
            <div className="h-full w-full bg-charcoal-light" />
          </div>
        </motion.div>
      ))}
    </>
  )
}

export function ImageSkeleton({ className = '' }) {
  return (
    <div className={`relative overflow-hidden rounded-lg bg-charcoal-light ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent"
        animate={{ x: ['-100%', '200%'] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <div className="aspect-[4/3] bg-charcoal-light" />
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="card-elevated rounded-lg overflow-hidden">
      <ImageSkeleton />
      <div className="p-5 space-y-3">
        <div className="h-6 bg-charcoal-light rounded w-3/4">
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-gold/10 to-transparent"
            animate={{ x: ['-100%', '200%'] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </div>
        <div className="h-4 bg-charcoal-light rounded w-full" />
        <div className="h-4 bg-charcoal-light rounded w-5/6" />
      </div>
    </div>
  )
}

