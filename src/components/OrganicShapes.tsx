import { motion } from 'framer-motion'

export function OrganicShape({
  className = '',
  variant = 'water',
}: {
  className?: string
  variant?: 'water' | 'pipe' | 'air'
}) {
  const paths = {
    water: (
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
        <motion.path
          d="M20 100 Q 50 40 100 80 T 180 100 Q 150 160 100 120 T 20 100Z"
          fill="currentColor"
          animate={{
            d: [
              'M20 100 Q 50 40 100 80 T 180 100 Q 150 160 100 120 T 20 100Z',
              'M20 100 Q 50 60 100 90 T 180 100 Q 150 140 100 110 T 20 100Z',
              'M20 100 Q 50 40 100 80 T 180 100 Q 150 160 100 120 T 20 100Z',
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    ),
    pipe: (
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
        <motion.path
          d="M40 100 C 80 100 80 60 120 60 S 160 100 160 100"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          animate={{
            d: [
              'M40 100 C 80 100 80 60 120 60 S 160 100 160 100',
              'M40 100 C 80 100 80 80 120 80 S 160 100 160 100',
              'M40 100 C 80 100 80 60 120 60 S 160 100 160 100',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    ),
    air: (
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
        <motion.path
          d="M20 80 Q 60 40 100 80 T 180 80"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          animate={{
            d: [
              'M20 80 Q 60 40 100 80 T 180 80',
              'M20 80 Q 60 60 100 80 T 180 80',
              'M20 80 Q 60 40 100 80 T 180 80',
            ],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M20 120 Q 60 80 100 120 T 180 120"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          animate={{
            d: [
              'M20 120 Q 60 80 100 120 T 180 120',
              'M20 120 Q 60 100 100 120 T 180 120',
              'M20 120 Q 60 80 100 120 T 180 120',
            ],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </svg>
    ),
  }

  return (
    <div className={`pointer-events-none opacity-[0.03] ${className}`} aria-hidden="true">
      {paths[variant]}
    </div>
  )
}
