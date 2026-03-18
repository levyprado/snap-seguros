import bannerImg from '@/assets/images/banner.png'
import { WHATSAPP_URL } from '@/config/site'
import { ArrowRight02Icon } from '@hugeicons/core-free-icons'
import Image from 'next/image'
import { Button } from '../ui/button'
import Container from '../ui/container'
import Icon from '../ui/icon'
import Section from '../ui/section/section'
import SectionHeader from '../ui/section/section-header'

export default function CTABanner() {
  return (
    <Section className='relative bg-primary'>
      <div className='pointer-events-none absolute inset-0 opacity-10'>
        <Image src={bannerImg} alt='' fill className='object-cover' />
      </div>

      <Container className='relative'>
        <SectionHeader
          headline='Sua empresa merece o melhor plano de saúde pelo menor preço'
          body='Não deixe para depois. A tabela promocional atual pode mudar a qualquer momento. Garanta agora os melhores valores para sua equipe.'
          headlineClassName='text-primary-foreground'
          bodyClassName='text-primary-foreground/80'
        />

        <div className='mt-8 flex flex-col justify-center gap-4 sm:flex-row'>
          <Button
            href={WHATSAPP_URL}
            variant='accent'
            target='_blank'
            rel='noopener noreferrer'
          >
            Solicitar Cotação Gratuita
            <Icon icon={ArrowRight02Icon} />
          </Button>
        </div>
        <div className='mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/60'>
          <span>Sem compromisso</span>
          <span className='hidden sm:inline'>|</span>
          <span>Resposta em até 1h</span>
          <span className='hidden sm:inline'>|</span>
          <span>100% gratuito</span>
        </div>
      </Container>
    </Section>
  )
}
