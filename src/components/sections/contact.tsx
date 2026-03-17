import contactImg from '@/assets/images/contact.png'
import {
  CallIcon,
  ClockIcon,
  FlashIcon,
  HeadphonesIcon,
  LocationIcon,
  MailIcon,
  ShieldIcon,
} from '@hugeicons/core-free-icons'
import Image from 'next/image'
import { Button } from '../ui/button'
import Container from '../ui/container'
import Icon from '../ui/icon'
import Body from '../ui/section/body'
import Headline from '../ui/section/headline'
import Section from '../ui/section/section'
import Tagline from '../ui/section/tagline'
import WhatsappIcon from '../ui/whatsapp-icon'

export default function Contact() {
  return (
    <Section id='contato'>
      <Container>
        <div className='space-y-2 text-center lg:space-y-3'>
          <Tagline>Fale Conosco</Tagline>
          <Headline>
            Receba uma Proposta Personalizada em Até 15 Minutos
          </Headline>
          <Body>
            Nossa equipe está pronta para encontrar o plano ideal para sua
            empresa. Atendemos pelo WhatsApp com respostas em até 15 minutos.
          </Body>
        </div>

        <div className='mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-12'>
          <div className='space-y-6'>
            <div className='flex flex-col gap-6 rounded-2xl border bg-secondary p-5 shadow-lg md:gap-10 md:p-8'>
              <div className='flex flex-col items-center justify-center gap-1 text-center'>
                <div className='inline-flex size-20 items-center justify-center rounded-full bg-whatsapp p-5 text-white'>
                  <WhatsappIcon />
                </div>
                <h3 className='text-2xl font-bold'>WhatsApp Business</h3>
                <p className='text-muted-foreground'>
                  Canal principal de atendimento
                </p>
              </div>

              <div className='flex flex-col gap-4'>
                <Button
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='border-whatsapp bg-whatsapp'
                >
                  Iniciar Conversa Agora
                </Button>
                <p className='text-center text-xs text-muted-foreground md:text-sm'>
                  Clique no botão acima para ser atendido instantaneamente
                </p>
              </div>

              <div className='grid grid-cols-3 gap-2 text-center md:gap-4'>
                <div className='flex flex-col rounded-xl bg-background p-2 text-accent md:gap-1 md:p-4'>
                  <Icon icon={FlashIcon} size={20} className='mx-auto mb-1' />
                  <p className='text-[10px] font-medium text-foreground md:text-xs'>
                    Resposta em
                  </p>
                  <span className='text-sm font-bold md:text-lg'>15 min</span>
                </div>
                <div className='flex flex-col rounded-xl bg-background p-2 text-accent md:gap-1 md:p-4'>
                  <Icon
                    icon={HeadphonesIcon}
                    size={20}
                    className='mx-auto mb-1'
                  />
                  <p className='text-[10px] leading-tight font-medium text-foreground md:text-xs'>
                    Atendimento
                  </p>
                  <span className='text-sm leading-tight font-bold md:text-lg'>
                    Humano
                  </span>
                </div>
                <div className='flex flex-col rounded-xl bg-background p-2 text-accent md:gap-1 md:p-4'>
                  <Icon icon={ShieldIcon} size={20} className='mx-auto mb-1' />
                  <p className='text-[10px] leading-tight font-medium text-foreground md:text-xs'>
                    Cotação
                  </p>
                  <span className='text-sm leading-tight font-bold md:text-lg'>
                    Grátis
                  </span>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-3 md:flex-row'>
              <a
                href='#'
                className='flex flex-1 items-center gap-3 rounded-xl border bg-secondary p-3 transition-colors hover:border-accent md:gap-1 md:p-4'
              >
                <div className='flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent md:size-10'>
                  <Icon icon={CallIcon} size={20} />
                </div>
                <div className='min-w-0 flex-1'>
                  <p className='text-sm text-muted-foreground'>Telefone</p>
                  <p className='truncate text-sm font-semibold'>
                    (21) 99227-0686
                  </p>
                </div>
              </a>
              <a
                href='#'
                className='flex flex-1 items-center gap-3 rounded-xl border bg-secondary p-3 transition-colors hover:border-accent md:gap-1 md:p-4'
              >
                <div className='flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent md:size-10'>
                  <Icon icon={MailIcon} size={20} />
                </div>
                <div className='min-w-0 flex-1'>
                  <p className='text-sm text-muted-foreground'>Email</p>
                  <p className='truncate text-sm font-semibold'>
                    adm@snapseguros.com.br
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className='space-y-6'>
            <div className='relative max-h-[490px] overflow-hidden rounded-2xl shadow-lg'>
              <Image
                src={contactImg}
                alt='Consultora Snap Seguros'
                className='size-full object-cover'
              />

              <div className='absolute right-3 bottom-3 left-3 rounded-xl bg-background p-3 shadow-lg md:right-4 md:bottom-4 md:left-4 md:p-4'>
                <div className='flex items-start gap-3 md:gap-4'>
                  <div className='md:siz-12 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-white'>
                    <Icon icon={HeadphonesIcon} />
                  </div>
                  <div className='min-w-0'>
                    <p className='text-sm font-bold text-foreground md:text-base'>
                      Atendimento Personalizado
                    </p>
                    <p className='line-clamp-2 text-xs text-muted-foreground md:text-sm'>
                      Consultores especializados prontos para encontrar o melhor
                      plano para sua empresa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-3 md:flex-row'>
              <div className='flex flex-1 items-center gap-3 rounded-xl border bg-secondary p-3 transition-colors hover:border-accent md:gap-1 md:p-4'>
                <div className='flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent md:size-10'>
                  <Icon icon={LocationIcon} size={20} />
                </div>
                <div className='min-w-0 flex-1'>
                  <p className='text-sm text-muted-foreground'>Endereço</p>
                  <p className='truncate text-sm font-semibold'>
                    Barra da Tijuca, Rio de Janeiro - RJ
                  </p>
                </div>
              </div>
              <div className='flex flex-1 items-center gap-3 rounded-xl border bg-secondary p-3 transition-colors hover:border-accent md:gap-1 md:p-4'>
                <div className='flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent md:size-10'>
                  <Icon icon={ClockIcon} size={20} />
                </div>
                <div className='min-w-0 flex-1'>
                  <p className='text-sm text-muted-foreground'>Horário</p>
                  <p className='truncate text-sm font-semibold'>
                    Seg a Sex: 8h as 18h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
