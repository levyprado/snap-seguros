import { SentIcon, Users } from '@hugeicons/core-free-icons'
import Icon from '../ui/icon'

export default function ContactForm() {
  return (
    <form action='#' className='flex flex-col gap-4'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        <div>
          <label htmlFor='name' className=''>
            Nome *
          </label>
          <input
            type='text'
            id='name'
            name='name'
            required
            placeholder='Seu nome'
            className=''
          />
        </div>
        <div>
          <label htmlFor='phone' className=''>
            Telefone/WhatsApp *
          </label>
          <input
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
        <div>
          <label htmlFor='company' className=''>
            Nome da Empresa
          </label>
          <div className='relative'>
            <Icon icon={Users} className='' />
            <input
              type='text'
              id='company'
              name='company'
              placeholder='Sua empresa'
              className=''
            />
          </div>
        </div>
        <div>
          <label htmlFor='employees' className=''>
            Qtd. de Vidas
          </label>
          <div className='relative'>
            <Icon icon={Users} className='' />
            <select id='employees' name='employees' className=''>
              <option value=''>Selecione</option>
              <option value='2-5'>2 a 5 vidas</option>
              <option value='6-10'>6 a 10 vidas</option>
              <option value='11-29'>11 a 29 vidas</option>
              <option value='30-99'>30 a 99 vidas</option>
              <option value='100+'>100+ vidas</option>
            </select>
          </div>
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
        Ao enviar, você concorda com nossa politica de privacidade.
      </p>
    </form>
  )
}
