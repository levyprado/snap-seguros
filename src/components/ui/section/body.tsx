import { cn } from '@/lib/utils'

export default function Body({
  className,
  children,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'mx-auto max-w-prose text-pretty text-muted-foreground lg:text-lg',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  )
}
