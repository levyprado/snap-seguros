import { steps } from '@/data/steps'
import Container from '../ui/container'
import Icon from '../ui/icon'
import Body from '../ui/section/body'
import Headline from '../ui/section/headline'
import Section from '../ui/section/section'
import Tagline from '../ui/section/tagline'

export default function Steps() {
  return (
    <Section>
      <Container>
        <div className='space-y-2 text-center lg:space-y-3'>
          <Tagline>Simples e Rápido</Tagline>
          <Headline>Como Funciona</Headline>
          <Body>
            Em 4 passos simples, sua empresa terá o melhor plano de saúde. Sem
            burocracia, tudo 100% online.
          </Body>
        </div>

        <ol className='mt-12 flex flex-col text-center lg:mt-16 lg:flex-row'>
          {steps.map((step, i) => (
            <li
              key={step.title}
              className='relative flex w-full flex-col items-center gap-4 py-6 lg:flex-1 lg:px-6'
            >
              <div className='relative flex size-24 items-center justify-center rounded-xl bg-secondary'>
                <div className='absolute -top-3 -right-3 flex size-8 items-center justify-center rounded-full bg-primary'>
                  <span className='text-sm font-semibold text-primary-foreground'>
                    0{i + 1}
                  </span>
                </div>
                <Icon icon={step.icon} size={48} className='text-pri' />
              </div>
              <div className='space-y-2 bg-background'>
                <h3 className='text-xl font-semibold text-balance'>
                  {step.title}
                </h3>
                <p className='leading-relaxed text-pretty text-muted-foreground'>
                  {step.description}
                </p>
              </div>
              <div className='absolute top-18 left-0 -z-10 hidden h-1 w-full bg-muted lg:block' />
              <div className='absolute -z-10 h-full w-1 bg-muted lg:hidden' />
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
