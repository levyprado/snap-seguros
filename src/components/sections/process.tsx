import { process } from '@/data/process'
import { ArrowRight02Icon } from '@hugeicons/core-free-icons'
import { Button } from '../ui/button'
import Container from '../ui/container'
import Icon from '../ui/icon'
import Body from '../ui/section/body'
import Headline from '../ui/section/headline'
import Section from '../ui/section/section'
import Tagline from '../ui/section/tagline'

export default function Process() {
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
          {process.map((process, i) => (
            <li
              key={process.title}
              className='relative flex w-full flex-col items-center gap-4 py-6 lg:flex-1 lg:px-6'
            >
              <div className='relative flex size-24 items-center justify-center rounded-xl bg-secondary'>
                <div className='absolute -top-3 -right-3 flex size-8 items-center justify-center rounded-full bg-primary'>
                  <span className='text-sm font-semibold text-primary-foreground'>
                    0{i + 1}
                  </span>
                </div>
                <Icon icon={process.icon} size={48} className='text-pri' />
              </div>
              <div className='space-y-2 bg-background'>
                <h3 className='text-xl font-semibold text-balance'>
                  {process.title}
                </h3>
                <p className='leading-relaxed text-pretty text-muted-foreground'>
                  {process.description}
                </p>
              </div>
              <div className='absolute top-18 left-0 -z-10 hidden h-1 w-full bg-muted lg:block' />
              <div className='absolute -z-10 h-full w-1 bg-muted lg:hidden' />
            </li>
          ))}
        </ol>

        <div className='mt-12 text-center'>
          <Button
            href='#'
            target='_blank'
            rel='noopener noreferrer'
            className='px-6 shadow-md shadow-primary/40 hover:shadow-lg sm:px-8'
          >
            Iniciar Agora pelo WhatsApp
            <Icon icon={ArrowRight02Icon} />
          </Button>
        </div>
      </Container>
    </Section>
  )
}
