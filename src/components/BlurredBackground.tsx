import { FC, ReactNode } from 'react'
import { cn } from '../utils'

interface BlurredBackgroundProps {
  children: ReactNode
  imageURI: string
  fallbackBg?: string
  className?: string
}

export const BlurredBackground: FC<BlurredBackgroundProps> = ({
  children,
  imageURI,
  fallbackBg = '#303030',
  className
}) => {
  return (
    <div
      className={cn('relative min-h-max overflow-hidden', className)}
      style={{ background: fallbackBg }}
    >
      <div className="relative z-10">{children}</div>
      <div
        className="absolute left-0 top-0 h-full w-full blur-3xl"
        style={{
          background: `url(${imageURI}) no-repeat center center / cover`
        }}
      />
    </div>
  )
}
