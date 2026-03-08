import { cn } from '@/lib/utils'

export default function Section({
  className,
  children,
  ...props
}: React.ComponentProps<'section'>) {
  return (
    <section className={cn('py-16 lg:py-24', className)} {...props}>
      {children}
    </section>
  )
}
