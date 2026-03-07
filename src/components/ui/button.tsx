import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex shrink-0 items-center justify-center border-2 font-bold transition-all text-lg outline-none select-none focus-visible:border-accent focus-visible:ring-3 focus-visible:ring-accent/50 active:scale-97 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-red-600/50 aria-invalid:ring-3 aria-invalid:ring-red-600/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 hover:-translate-y-0.5',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground border-primary',
        accent:
          'bg-accent text-primary-foreground border-accent shadow-lg shadow-accent/40 hover:shadow-xl',
        secondary:
          'border-primary-foreground/30 hover:bg-primary-foreground/10 backdrop-blur-sm',
      },
      size: {
        default: 'py-3 gap-2 px-8 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

function Button({
  href,
  className,
  variant = 'primary',
  size = 'default',
  ...props
}: React.ComponentProps<'a'> &
  VariantProps<typeof buttonVariants> & { href: string }) {
  return (
    <a
      href={href}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
