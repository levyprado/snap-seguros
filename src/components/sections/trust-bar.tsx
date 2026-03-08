import { cn } from '@/lib/utils'
import {
  ClockIcon,
  SecurityCheckIcon,
  StarIcon,
  UserGroupIcon,
} from '@hugeicons/core-free-icons'
import Container from '../ui/container'
import Icon from '../ui/icon'

const stats = [
  { icon: UserGroupIcon, value: '5.200+', label: 'Vidas Protegidas' },
  { icon: StarIcon, value: '4.9/5', label: 'Avaliação Google' },
  { icon: SecurityCheckIcon, value: '8+', label: 'Operadoras Parceiras' },
  { icon: ClockIcon, value: '1h', label: 'Tempo de Resposta' },
]

export default function TrustBar() {
  return (
    <section className='bg-primary py-7'>
      <Container>
        <div className='grid grid-cols-2 gap-6 md:grid-cols-4'>
          {stats.map(({ icon, label, value }) => (
            <div
              key={label}
              className='flex flex-1 items-center gap-3 md:justify-center'
            >
              <Icon
                icon={icon}
                className={cn(
                  'size-8 shrink-0 text-accent lg:size-9',
                  icon === StarIcon && 'fill-accent',
                )}
              />
              <div>
                <p className='text-xl font-bold text-primary-foreground lg:text-2xl'>
                  {value}
                </p>
                <p className='text-xs text-primary-foreground/70 lg:text-sm'>
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
