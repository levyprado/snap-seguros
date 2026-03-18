import heroImg from '@/assets/images/hero.png'
import { WHATSAPP_URL } from '@/config/site'
import {
  ArrowRight02Icon,
  SecurityCheckIcon,
  StarIcon,
  Tick02Icon,
  UserGroupIcon,
} from '@hugeicons/core-free-icons'
import Image from 'next/image'
import { Button } from '../ui/button'
import Container from '../ui/container'
import Icon from '../ui/icon'
import WhatsappIcon from '../ui/whatsapp-icon'

function UrgencyBadge() {
  return (
    <div className='inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent backdrop-blur-sm'>
      <span className='relative flex size-2'>
        <span className='absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75' />
        <span className='relative inline-flex size-2 rounded-full bg-accent' />
      </span>
      Tabela promocional — valores válidos por tempo limitado
    </div>
  )
}

function SocialProof() {
  return (
    <div className='flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-primary-foreground/80'>
      <div className='flex items-center gap-1.5'>
        <div className='flex gap-0.5'>
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              icon={StarIcon}
              size={14}
              className='fill-yellow-400 text-yellow-400'
            />
          ))}
        </div>
        <span className='font-semibold text-primary-foreground'>4.9</span>
        <span className='text-primary-foreground/60'>(350+ avaliações)</span>
      </div>
      <span className='hidden text-primary-foreground/30 sm:inline'>|</span>
      <div className='flex items-center gap-1.5'>
        <Icon icon={UserGroupIcon} size={15} className='text-accent' />
        <span>
          <strong className='text-primary-foreground'>5.200+</strong> vidas
          protegidas
        </span>
      </div>
      <span className='hidden text-primary-foreground/30 sm:inline'>|</span>
      <div className='flex items-center gap-1.5'>
        <Icon icon={SecurityCheckIcon} size={15} className='text-accent' />
        <span>Corretor autorizado SUSEP</span>
      </div>
    </div>
  )
}

function CTABlock() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-3 sm:flex-row'>
        <Button
          href='#contato'
          variant='accent'
          className='relative sm:flex-1 lg:flex-none'
        >
          <span className='absolute -inset-1 animate-pulse rounded-xl bg-accent/20' />
          <span className='relative flex items-center gap-2'>
            Receber Cotação Gratuita
            <Icon icon={ArrowRight02Icon} />
          </span>
        </Button>
        <Button
          href={WHATSAPP_URL}
          target='_blank'
          rel='noopener noreferrer'
          variant='secondary'
        >
          <WhatsappIcon className='size-5 text-white' />
          Falar no WhatsApp
        </Button>
      </div>

      <div className='flex flex-wrap gap-x-4 gap-y-1 text-sm text-primary-foreground/60'>
        {[
          'Sem compromisso',
          'Resposta em até 15 min',
          '100% gratuito',
          'Atendimento humano',
        ].map((item) => (
          <span key={item} className='flex items-center gap-1.5'>
            <Icon
              icon={Tick02Icon}
              size={14}
              className='shrink-0 text-accent'
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className='relative flex min-h-[80svh] flex-col pb-24 lg:pb-0'>
      <div className='absolute inset-0'>
        <Image
          src={heroImg}
          alt='Empresário e empresária no saguão de um escritório. O homem mostra discretamente a tela de um tablet para a mulher, que sorri cordialmente e demonstra tranquilidade.'
          fill
          priority
          className='object-cover'
        />
        <div className='absolute inset-0 bg-linear-to-r from-primary/97 via-primary/90 to-primary/50 lg:to-primary/20' />
        <div className='absolute inset-0 bg-linear-to-t from-primary/90 via-transparent via-30% to-transparent' />
      </div>

      <Container className='relative flex flex-1 items-center py-12 text-primary-foreground lg:py-16'>
        <div className='flex w-full max-w-3xl flex-col gap-6 md:gap-8'>
          <UrgencyBadge />

          <div className='flex flex-col gap-4'>
            <h1 className='font-heading text-4xl leading-[1.1] font-extrabold text-balance md:text-5xl lg:text-6xl xl:text-7xl'>
              Plano de Saúde <span className='text-accent'>Empresarial</span>
              <br />
              <span className='text-primary-foreground'>para MEI e PJ</span>
            </h1>
            <SocialProof />
          </div>

          <p className='max-w-3xl text-lg leading-relaxed text-primary-foreground/75'>
            Compare{' '}
            <strong className='text-primary-foreground'>
              Bradesco, Amil, SulAmérica, Unimed e mais
            </strong>{' '}
            em um só lugar. Atendimento 100% personalizado.{' '}
            <span className='font-semibold text-accent'>
              Cotação gratuita em minutos.
            </span>
          </p>

          <CTABlock />
        </div>
      </Container>
    </section>
  )
}
