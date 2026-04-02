import { useScrollReveal } from '@/hooks/useScrollReveal'

type Animation = 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'scale'

interface ScrollRevealProps {
  children: React.ReactNode
  animation?: Animation
  delay?: number
  duration?: number
  className?: string
}

const ANIMATION_STYLES: Record<Animation, { hidden: React.CSSProperties; visible: React.CSSProperties }> = {
  'fade-up': {
    hidden: { opacity: 0, transform: 'translateY(30px)' },
    visible: { opacity: 1, transform: 'translateY(0)' },
  },
  'fade-in': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  'fade-left': {
    hidden: { opacity: 0, transform: 'translateX(-30px)' },
    visible: { opacity: 1, transform: 'translateX(0)' },
  },
  'fade-right': {
    hidden: { opacity: 0, transform: 'translateX(30px)' },
    visible: { opacity: 1, transform: 'translateX(0)' },
  },
  'scale': {
    hidden: { opacity: 0, transform: 'scale(0.95)' },
    visible: { opacity: 1, transform: 'scale(1)' },
  },
}

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  className = '',
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal()
  const styles = ANIMATION_STYLES[animation]

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(isVisible ? styles.visible : styles.hidden),
        transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}
