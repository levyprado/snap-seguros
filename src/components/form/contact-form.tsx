'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Loading03Icon, SentIcon } from '@hugeicons/core-free-icons'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import Icon from '../ui/icon'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Select, SelectOption } from '../ui/select'
import { sendLeadEmail } from './send-email'

const contactFormSchema = z.object({
  name: z.string().min(3, 'Por favor, insira seu nome completo.'),
  phone: z
    .string()
    .transform((val) => val.replace(/\D/g, ''))
    .refine(
      (val) => val.length === 11,
      'Insira um número válido incluindo DDD',
    ),
  email: z.email('Insira um e-mail válido.'),
  employees: z.string().min(1, 'Selecione a quantidade de vidas.'),
})
type ContactFormData = z.infer<typeof contactFormSchema>

export default function ContactForm() {
  const router = useRouter()
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      const result = await sendLeadEmail(data)
      if (!result.success) {
        setSubmitError(result.error || 'Erro ao enviar. Tente novamente.')
        return
      }

      router.push('/obrigado')
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      setSubmitError(
        'Ocorreu um erro de conexão. Por favor, chame no WhatsApp.',
      )
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-6 text-foreground'
    >
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        <div className='space-y-2'>
          <Label htmlFor='name' className=''>
            Nome *
          </Label>
          <Input
            type='text'
            id='name'
            placeholder='Seu nome'
            {...register('name')}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <span className='text-xs leading-tight text-red-500'>
              {errors.name.message}
            </span>
          )}
        </div>
        <div className='space-y-2'>
          <Label htmlFor='phone' className=''>
            Telefone/WhatsApp *
          </Label>
          <Input
            type='tel'
            id='phone'
            placeholder='(00) 00000-0000'
            {...register('phone')}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <span className='text-xs leading-tight text-red-500'>
              {errors.phone.message}
            </span>
          )}
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
            placeholder='seu@email.com'
            {...register('email')}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <span className='text-xs leading-tight text-red-500'>
              {errors.email.message}
            </span>
          )}
        </div>
        <div className='space-y-2'>
          <Label htmlFor='employees' className=''>
            Qtd. de Vidas *
          </Label>
          <Select
            id='employees'
            {...register('employees')}
            aria-invalid={!!errors.employees}
          >
            <SelectOption value=''>Selecione</SelectOption>
            <SelectOption value='2-5'>2 a 5 vidas</SelectOption>
            <SelectOption value='6-10'>6 a 10 vidas</SelectOption>
            <SelectOption value='11-29'>11 a 29 vidas</SelectOption>
            <SelectOption value='30-99'>30 a 99 vidas</SelectOption>
            <SelectOption value='100+'>100+ vidas</SelectOption>
          </Select>
          {errors.employees && (
            <span className='text-xs leading-tight text-red-500'>
              {errors.employees.message}
            </span>
          )}
        </div>
      </div>

      {submitError && (
        <div className='rounded-lg bg-red-50 p-3 text-sm text-red-600'>
          {submitError}
        </div>
      )}

      <button
        type='submit'
        disabled={isSubmitting}
        className='flex items-center justify-center gap-2 rounded-xl bg-primary py-3 font-bold text-white transition-all hover:-translate-y-0.5 active:scale-[0.97]'
      >
        {isSubmitting ? (
          <Icon icon={Loading03Icon} className='animate-spin' />
        ) : (
          <>
            <Icon icon={SentIcon} />
            Solicitar Cotação Gratuita
          </>
        )}
      </button>

      <p className='text-center text-[10px] text-muted-foreground md:text-xs'>
        Ao enviar, você concorda que a Snap Seguros entre em contato para
        apresentar sua cotação. Nenhum dado é compartilhado com terceiros.
      </p>
    </form>
  )
}
