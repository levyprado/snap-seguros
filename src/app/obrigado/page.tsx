import { Button } from '@/components/ui/button'
import Container from '@/components/ui/container'
import Icon from '@/components/ui/icon'
import WhatsappIcon from '@/components/ui/whatsapp-icon'
import { WHATSAPP_URL } from '@/config/site'
import { CheckmarkBadge01Icon } from '@hugeicons/core-free-icons'
import Link from 'next/link'

export default function ObrigadoPage() {
  return (
    <div className='flex min-h-dvh items-center justify-center bg-secondary/30 py-20'>
      <Container className='max-w-2xl text-center'>
        <div className='mx-auto mb-8 flex size-24 items-center justify-center rounded-full bg-green-100 text-green-600 shadow-sm'>
          <Icon icon={CheckmarkBadge01Icon} size={48} />
        </div>

        <h1 className='mb-4 font-heading text-3xl font-bold text-foreground md:text-5xl'>
          Cotação Solicitada com Sucesso!
        </h1>

        <p className='mb-8 text-lg text-muted-foreground md:text-xl'>
          Nossa equipe já recebeu seus dados e está montando a melhor proposta
          para a sua empresa. Você receberá um contato em até{' '}
          <strong className='text-foreground'>15 minutos</strong>.
        </p>

        <div className='mx-auto max-w-md rounded-2xl border bg-background p-6 shadow-md'>
          <p className='mb-4 text-sm font-medium text-foreground'>
            Tem urgência? Fale diretamente com um especialista agora mesmo:
          </p>
          <Button
            href={WHATSAPP_URL}
            target='_blank'
            rel='noopener noreferrer'
            className='w-full border-whatsapp bg-whatsapp px-0 text-lg hover:bg-whatsapp/90'
          >
            <WhatsappIcon className='size-6' />
            Chamar no WhatsApp
          </Button>
        </div>

        <div className='mt-12'>
          <Link
            href='/'
            className='text-sm font-medium text-primary hover:underline'
          >
            ← Voltar para a página inicial
          </Link>
        </div>
      </Container>
    </div>
  )
}
