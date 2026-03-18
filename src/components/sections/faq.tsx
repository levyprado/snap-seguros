'use client'

import { faqs } from '@/data/faq'
import { cn } from '@/lib/utils'
import { ArrowDownIcon } from '@hugeicons/core-free-icons'
import { useState } from 'react'
import Container from '../ui/container'
import Icon from '../ui/icon'
import Section from '../ui/section/section'
import SectionHeader from '../ui/section/section-header'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <Section id='faq' className='bg-secondary'>
      <Container>
        <SectionHeader
          tagline='Tire suas dúvidas'
          headline='Perguntas Frequentes'
          body='As perguntas mais comuns que recebemos sobre plano de saúde empresarial.'
        />

        <div className='mx-auto mt-12 max-w-3xl space-y-4 lg:mt-16'>
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index

            return (
              <div
                key={faq.question}
                className='rounded-xl border bg-background'
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className='flex w-full cursor-pointer items-center justify-between p-5 text-left select-none'
                  aria-expanded={isOpen}
                >
                  <span className='pr-4 leading-tight font-medium'>
                    {faq.question}
                  </span>
                  <Icon
                    icon={ArrowDownIcon}
                    className={cn(
                      'shrink-0 transition-transform duration-300 ease-in-out',
                      isOpen ? 'rotate-180' : 'rotate-0',
                    )}
                  />
                </button>

                <div
                  className={cn(
                    'grid transition-all duration-300 ease-in-out',
                    isOpen
                      ? 'visible grid-rows-[1fr] opacity-100'
                      : 'invisible grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className='overflow-hidden'>
                    <div className='p-5 pt-0 leading-relaxed text-muted-foreground'>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
