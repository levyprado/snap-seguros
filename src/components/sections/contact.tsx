import contactImg from '@/assets/images/contact.png'
import { CONTACT, WHATSAPP_URL } from '@/config/site'
import {
  ArrowRight02Icon,
  CallIcon,
  ClockIcon,
  DollarIcon,
  FlashIcon,
  HeadphonesIcon,
  LocationIcon,
  MailIcon,
  SentIcon,
} from '@hugeicons/core-free-icons'
import Image from 'next/image'
import ContactForm from '../form/contact-form'
import { Button } from '../ui/button'
import Container from '../ui/container'
import Icon from '../ui/icon'
import Section from '../ui/section/section'
import SectionHeader from '../ui/section/section-header'
import WhatsappIcon from '../ui/whatsapp-icon'

export default function Contact() {
  return (
    <Section id='contato'>
      <Container>
        <SectionHeader
          tagline='Fale Conosco'
          headline='Receba uma Proposta Personalizada em Até 15 Minutos'
          body='Nossa equipe está pronta para encontrar o plano ideal para sua empresa. Atendemos pelo WhatsApp com respostas em até 15 minutos.'
        />

        <div className='mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-12'>
          <div className='space-y-6'>
            <div className='flex flex-col gap-6 rounded-2xl border bg-secondary p-5 shadow-lg md:p-8'>
              <div className='flex items-center gap-4'>
                <div className='inline-flex size-12 items-center justify-center rounded-full bg-whatsapp p-5 text-white md:size-14'>
                  <WhatsappIcon className='size-6 md:size-7' />
                </div>
                <div className='flex flex-col'>
                  <h3 className='text-lg font-bold md:text-xl'>
                    WhatsApp Business
                  </h3>
                  <p className='text-sm leading-tight text-muted-foreground'>
                    Canal principal de atendimento
                  </p>
                </div>
              </div>

              <Button
                href={WHATSAPP_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='border-whatsapp bg-whatsapp px-0 text-base'
              >
                Iniciar Conversa Agora
                <Icon icon={ArrowRight02Icon} />
              </Button>

              <div className='grid grid-cols-3 gap-2 text-center md:gap-4'>
                <div className='flex flex-col rounded-xl bg-background p-2 text-accent'>
                  <Icon icon={FlashIcon} size={20} className='mx-auto mb-1' />
                  <p className='text-[10px] font-medium text-foreground md:text-xs'>
                    Resposta
                  </p>
                  <span className='text-sm font-bold md:text-base'>15 min</span>
                </div>
                <div className='flex flex-col rounded-xl bg-background p-2 text-accent'>
                  <Icon
                    icon={HeadphonesIcon}
                    size={20}
                    className='mx-auto mb-1'
                  />
                  <p className='text-[10px] font-medium text-foreground md:text-xs'>
                    Atendimento
                  </p>
                  <span className='text-sm font-bold md:text-base'>Humano</span>
                </div>
                <div className='flex flex-col rounded-xl bg-background p-2 text-accent'>
                  <Icon icon={DollarIcon} size={20} className='mx-auto mb-1' />
                  <p className='text-[10px] font-medium text-foreground md:text-xs'>
                    Cotação
                  </p>
                  <span className='text-sm font-bold md:text-base'>Grátis</span>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-6 rounded-2xl border bg-secondary p-5 shadow-lg md:p-8'>
              <div className='flex items-center gap-4'>
                <div className='inline-flex size-12 items-center justify-center rounded-full bg-primary p-5 text-white md:size-14'>
                  <Icon icon={SentIcon} className='size-6 shrink-0 md:size-7' />
                </div>
                <div className='flex flex-col'>
                  <h3 className='text-lg font-bold md:text-xl'>
                    Prefere Formulário?
                  </h3>
                  <p className='text-sm leading-tight text-muted-foreground'>
                    Preencha e envie, entraremos em contato.
                  </p>
                </div>
              </div>

              <ContactForm />
            </div>

            <div className='flex flex-col gap-3 md:flex-row'>
              <a
                href={CONTACT.phoneTel}
                className='flex flex-1 items-center gap-3 rounded-xl border bg-secondary p-3 transition-colors hover:border-accent md:p-4'
              >
                <div className='flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent md:size-10'>
                  <Icon icon={CallIcon} size={20} />
                </div>
                <div className='min-w-0 flex-1'>
                  <p className='text-sm text-muted-foreground'>Telefone</p>
                  <p className='truncate text-sm font-semibold'>
                    {CONTACT.phone}
                  </p>
                </div>
              </a>
              <a
                href={CONTACT.emailMailto}
                className='flex flex-1 items-center gap-3 rounded-xl border bg-secondary p-3 transition-colors hover:border-accent md:p-4'
              >
                <div className='flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent md:size-10'>
                  <Icon icon={MailIcon} size={20} />
                </div>
                <div className='min-w-0 flex-1'>
                  <p className='text-sm text-muted-foreground'>Email</p>
                  <p className='truncate text-sm font-semibold'>
                    {CONTACT.email}
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
              <div className='flex flex-1 items-center gap-3 rounded-xl border bg-secondary p-3 transition-colors hover:border-accent md:p-4'>
                <div className='flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent md:size-10'>
                  <Icon icon={LocationIcon} size={20} />
                </div>
                <div className='min-w-0 flex-1'>
                  <p className='text-sm text-muted-foreground'>Endereço</p>
                  <p className='text-sm font-semibold'>{CONTACT.address}</p>
                </div>
              </div>
              <div className='flex flex-1 items-center gap-3 rounded-xl border bg-secondary p-3 transition-colors hover:border-accent md:p-4'>
                <div className='flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent md:size-10'>
                  <Icon icon={ClockIcon} size={20} />
                </div>
                <div className='min-w-0 flex-1'>
                  <p className='text-sm text-muted-foreground'>Horário</p>
                  <p className='text-sm font-semibold'>{CONTACT.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
