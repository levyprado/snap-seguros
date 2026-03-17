import logoImg from '@/assets/images/logo.png'
import { contact } from '@/data/contact'
import { navItems } from '@/data/navigation'
import Image from 'next/image'
import React from 'react'
import Container from '../ui/container'
import Icon from '../ui/icon'

export default function Footer() {
  return (
    <footer className='bg-foreground py-12 text-muted'>
      <Container>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <div>
            <Image
              src={logoImg}
              alt='Snap Seguros'
              className='h-12 w-auto brightness-0 invert lg:h-14'
            />
            <p className='mt-4 text-sm leading-relaxed'>
              Representantes oficiais das maiores operadoras de saúde do Brasil.
              Atendimento personalizado para MEI, PME e grandes empresas.
            </p>
          </div>

          <div className='flex flex-col gap-4'>
            <h4 className='font-semibold tracking-widest uppercase'>
              Links Rápidos
            </h4>
            <nav className='flex flex-col gap-2'>
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.id}
                  className='w-fit transition-colors hover:text-accent'
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className='flex flex-col gap-4'>
            <h4 className='font-semibold tracking-widest uppercase'>Contato</h4>
            <div className='flex flex-col gap-3'>
              {contact.map((contact) => (
                <React.Fragment key={contact.label}>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className='flex items-center gap-2 transition-colors hover:text-accent'
                    >
                      <Icon icon={contact.icon} className='shrink-0' />
                      {contact.label}
                    </a>
                  ) : (
                    <div className='flex items-center gap-2 leading-tight'>
                      <Icon icon={contact.icon} className='shrink-0' />
                      {contact.label}
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <p className='mt-12 border-t border-muted/20 pt-8 text-sm text-muted/60'>
          Snap Seguros. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  )
}
