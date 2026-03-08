import { cn } from '@/lib/utils'

export default function Tagline({
  className,
  children,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'text-sm font-semibold tracking-wider text-accent uppercase lg:text-base',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  )
}
