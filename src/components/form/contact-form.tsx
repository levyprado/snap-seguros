import { SentIcon } from '@hugeicons/core-free-icons'
import Icon from '../ui/icon'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Select, SelectOption } from '../ui/select'

export default function ContactForm() {
  return (
    <form action='#' className='flex flex-col gap-6'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        <div className='space-y-2'>
          <Label htmlFor='name' className=''>
            Nome *
          </Label>
          <Input
            type='text'
            id='name'
            name='name'
            required
            placeholder='Seu nome'
            className=''
          />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='phone' className=''>
            Telefone/WhatsApp *
          </Label>
          <Input
            type='tel'
            id='phone'
            name='phone'
            required
            placeholder='(00) 00000-0000'
            className=''
          />
        </div>
      </div>

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        <div className='space-y-2'>
          <Label htmlFor='email' className=''>
            Email *
          </Label>
          <Input
            type='email'
            id='email'
            name='email'
            placeholder='seu@email.com'
            className=''
          />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='employees' className=''>
            Qtd. de Vidas *
          </Label>
          <Select id='employees' name='employees' className=''>
            <SelectOption value=''>Selecione</SelectOption>
            <SelectOption value='2-5'>2 a 5 vidas</SelectOption>
            <SelectOption value='6-10'>6 a 10 vidas</SelectOption>
            <SelectOption value='11-29'>11 a 29 vidas</SelectOption>
            <SelectOption value='30-99'>30 a 99 vidas</SelectOption>
            <SelectOption value='100+'>100+ vidas</SelectOption>
          </Select>
        </div>
      </div>

      <button
        type='submit'
        className='flex items-center justify-center gap-2 rounded-xl bg-primary py-3 font-bold text-white transition-all hover:-translate-y-0.5 active:scale-[0.97]'
      >
        <Icon icon={SentIcon} />
        Solicitar Cotação Gratuita
      </button>

      <p className='text-center text-[10px] text-muted-foreground md:text-xs'>
        Ao enviar, você concorda que a Snap Seguros entre em contato para
        apresentar sua cotação. Nenhum dado é compartilhado com terceiros.
      </p>
    </form>
  )
}
