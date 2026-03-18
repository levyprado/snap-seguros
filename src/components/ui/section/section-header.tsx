import { cn } from '@/lib/utils'
import Body from './body'
import Headline from './headline'
import Tagline from './tagline'

type SectionHeaderProps = {
  tagline?: string
  headline: React.ReactNode
  body?: React.ReactNode
  align?: 'center' | 'left'
  className?: string
  headlineClassName?: string
  bodyClassName?: string
}

export default function SectionHeader({
  tagline,
  headline,
  body,
  align = 'center',
  className,
  headlineClassName,
  bodyClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'space-y-2 lg:space-y-3',
        align === 'center' && 'text-center',
        className,
      )}
    >
      {tagline && <Tagline>{tagline}</Tagline>}
      <Headline className={headlineClassName}>{headline}</Headline>
      {body && <Body className={bodyClassName}>{body}</Body>}
    </div>
  )
}
