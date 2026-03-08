import { benefits } from '@/data/benefits'
import Container from '../ui/container'
import Icon from '../ui/icon'
import Body from '../ui/section/body'
import Headline from '../ui/section/headline'
import Section from '../ui/section/section'
import Tagline from '../ui/section/tagline'

export default function Benefits() {
  return (
    <Section id='beneficios' className='bg-secondary'>
      <Container>
        <div className='space-y-2 text-center'>
          <Tagline>Benefícios Exclusivos</Tagline>
          <Headline>
            Por que mais de 400 empresas escolheram a Snap Seguros?
          </Headline>
          <Body>
            Mais do que um plano de saúde, oferecemos uma experiência completa
            de proteção e cuidado para sua equipe.
          </Body>
        </div>

        <ul className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
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
