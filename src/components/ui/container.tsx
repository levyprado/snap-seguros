import { cn } from '@/lib/utils'

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: React.ElementType
}

export default function Container({
  children,
  className,
  as: Component = 'div',
  ...props
}: ContainerProps) {
  return (
    <Component className={cn('container mx-auto px-5', className)} {...props}>
      {children}
    </Component>
  )
}
