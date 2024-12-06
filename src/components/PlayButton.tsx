import { IoPlayCircle } from 'react-icons/io5'
import { cn } from '../utils'

interface PlayButtonProps {
  size?: number
  className?: string
}

export const PlayButton = ({ size = 52, className }: PlayButtonProps) => {
  return (
    <button
      className={cn(
        'transition-all duration-300 hover:scale-105 hover:text-neutral-200',
        className
      )}
    >
      <IoPlayCircle size={size} />
    </button>
  )
}
