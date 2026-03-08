import { cn } from '@/lib/utils'

export default function Headline({
  className,
  children,
  ...props
}: React.ComponentProps<'h2'>) {
  return (
    <h2
      className={cn(
        'font-heading text-3xl leading-tight font-bold text-balance md:text-4xl lg:text-5xl',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  )
}
