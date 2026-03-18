import { benefits } from '@/data/benefits'
import Container from '../ui/container'
import Icon from '../ui/icon'
import Section from '../ui/section/section'
import SectionHeader from '../ui/section/section-header'

export default function Benefits() {
  return (
    <Section id='beneficios' className='bg-secondary'>
      <Container>
        <SectionHeader
          tagline='Benefícios Exclusivos'
          headline='Por que mais de 400 empresas escolheram a Snap Seguros?'
          body='Mais do que um plano de saúde, oferecemos uma experiência completa
            de proteção e cuidado para sua equipe.'
        />

        <ul className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3'>
          {benefits.map((benefit) => (
            <li
              key={benefit.title}
              className='group row-span-3 grid grid-rows-subgrid gap-3 rounded-xl border bg-background p-6 transition-all hover:border-accent/60 hover:shadow-lg'
            >
              <div className='flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary'>
                <Icon icon={benefit.icon} />
              </div>
              <h3 className='text-lg font-bold text-foreground lg:text-xl'>
                {benefit.title}
              </h3>
              <p className='leading-relaxed text-muted-foreground'>
                {benefit.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
