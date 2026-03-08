import heroImg from '@/assets/images/hero.png'
import { ArrowRight02Icon } from '@hugeicons/core-free-icons'
import Image from 'next/image'
import { Button } from '../ui/button'
import Container from '../ui/container'
import Icon from '../ui/icon'
import WhatsappIcon from '../ui/whatsapp-icon'

export default function Hero() {
  return (
    <section className='relative flex min-h-[80svh] flex-col'>
      <div className='absolute inset-0'>
        <Image
          src={heroImg}
          alt='Empresário e empresária no saguão de um escritório. O homem mostra discretamente a tela de um tablet para a mulher, que sorri cordialmente e demonstra tranquilidade.'
          fill
          priority
          className='object-cover'
        />
        <div className='absolute inset-0 bg-linear-to-r from-primary/95 via-primary/85 to-primary/40' />
        <div className='absolute inset-0 bg-linear-to-t from-primary via-transparent via-10% to-transparent' />
      </div>
      <Container className='relative flex flex-1 items-center py-12 text-primary-foreground'>
        <div className='flex flex-col gap-4 md:gap-6 xl:gap-8'>
          <h1 className='font-heading text-4xl leading-[1.125] font-extrabold text-balance md:text-5xl lg:text-6xl xl:text-7xl'>
            Plano de Saúde <br />
            <span className='text-accent'>Empresarial</span>
            <br />
            <span className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
              a partir de
            </span>
          </h1>

          <div className='flex items-baseline gap-2'>
            <span className='text-lg text-primary-foreground/60'>R$</span>
            <div>
              <span className='text-6xl font-black md:text-7xl'>119</span>
              <span className='text-2xl'>,90</span>
            </div>
            <span className='text-lg text-primary-foreground/80'>
              /mês por vida
            </span>
          </div>

          <p className='max-w-xl text-lg leading-relaxed text-primary-foreground/70 lg:text-xl'>
            Compare as melhores operadoras do mercado em um só lugar.
            Atendimento{' '}
            <strong className='text-primary-foreground'>
              100% personalizado
            </strong>{' '}
            para sua empresa — seja MEI, ME ou grande porte. Cotação gratuita em
            minutos.
          </p>

          <div className='flex flex-col gap-4 md:flex-row'>
            <Button href='#' variant='accent' className=''>
              Receber Cotação Gratuita
              <Icon icon={ArrowRight02Icon} />
            </Button>
            <Button
              href='#'
              target='_blank'
              rel='noopener noreferrer'
              variant='secondary'
            >
              <WhatsappIcon className='size-5' />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
