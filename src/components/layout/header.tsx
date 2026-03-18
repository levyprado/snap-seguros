'use client'

import logoImg from '@/assets/images/logo.png'
import { WHATSAPP_URL } from '@/config/site'
import { navItems } from '@/data/navigation'
import { cn } from '@/lib/utils'
import { CancelIcon, MenuIcon } from '@hugeicons/core-free-icons'
import Image from 'next/image'
import { useState } from 'react'
import Container from '../ui/container'
import Icon from '../ui/icon'
import WhatsappIcon from '../ui/whatsapp-icon'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen((open) => !open)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className='sticky top-0 left-0 z-50 w-full border-b bg-background/95 shadow-xs'>
      <Container className='flex items-center justify-between py-3'>
        <a href='#' onClick={closeMenu}>
          <Image
            src={logoImg}
            alt='Snap Seguros'
            className='h-12 w-auto lg:h-14'
          />
        </a>

        <nav className='hidden items-center gap-8 lg:flex'>
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={id}
              className='text-sm font-medium text-muted-foreground transition-colors hover:text-primary'
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          type='button'
          onClick={toggleMenu}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          className='relative shrink-0 lg:hidden'
        >
          <span className='absolute inset-0 top-1/2 left-1/2 size-11 -translate-1/2 pointer-fine:hidden' />
          <Icon icon={MenuIcon} altIcon={CancelIcon} showAlt={isOpen} />
        </button>

        <a
          href={WHATSAPP_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='hidden items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90 lg:inline-flex'
        >
          <WhatsappIcon className='size-5' />
          Fale Conosco
        </a>

        <div
          className={cn(
            'absolute top-full left-0 w-full origin-top rounded-b-xl border-t bg-background px-4 pb-4 shadow-md transition-all duration-300 ease-in-out lg:hidden',
            isOpen
              ? 'scale-y-100 opacity-100'
              : 'pointer-events-none scale-y-0 opacity-60',
          )}
        >
          <nav className='flex flex-col gap-1 pt-2'>
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={id}
                onClick={closeMenu}
                className='rounded-lg p-3 text-sm font-medium transition-colors hover:bg-secondary'
              >
                {label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground'
            >
              <WhatsappIcon className='size-5' />
              Falar pelo WhatsApp
            </a>
          </nav>
        </div>
      </Container>
    </header>
  )
}
