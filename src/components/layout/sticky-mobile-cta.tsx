import { WHATSAPP_URL } from '@/config/site'
import WhatsappIcon from '../ui/whatsapp-icon'

export default function StickyMobileCTA() {
  return (
    <div className='fixed right-0 bottom-0 left-0 z-40 border-t border-white/10 bg-primary/95 px-4 py-3 backdrop-blur-md lg:hidden'>
      <a
        href={WHATSAPP_URL}
        target='_blank'
        rel='noopener noreferrer'
        className='flex w-full items-center justify-center gap-2.5 rounded-xl bg-whatsapp py-3.5 text-base font-bold text-white transition-transform active:scale-95'
      >
        <WhatsappIcon className='size-5' />
        Cotar pelo WhatsApp Agora
      </a>
      <p className='mt-2 text-center text-xs text-primary-foreground/50'>
        Grátis · Sem compromisso · Resposta em 15 min
      </p>
    </div>
  )
}
