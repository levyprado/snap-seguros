import { testimonials } from '@/data/testimonials'
import { StarIcon } from '@hugeicons/core-free-icons'
import Container from '../ui/container'
import Icon from '../ui/icon'
import Section from '../ui/section/section'
import SectionHeader from '../ui/section/section-header'

export default function Testimonials() {
  return (
    <Section id='depoimentos' className='bg-secondary'>
      <Container>
        <SectionHeader
          tagline='Depoimentos'
          headline='Empresários que já economizam'
          body='Avaliação média de 4.9/5 em +350 avaliações. Mais de 5.200 vidas protegidas e empresas satisfeitas em todo o Brasil.'
        />

        <div className='mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3'>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className='row-span-3 grid grid-rows-subgrid gap-6 rounded-2xl bg-background p-6 shadow-sm'
            >
              <div className='flex gap-0.5'>
                {[...Array(testimonial.rating).keys()].map((i) => (
                  <Icon
                    key={i}
                    size={20}
                    icon={StarIcon}
                    className='fill-yellow-500 text-yellow-500'
                  />
                ))}
              </div>
              <p className='text-muted-foreground italic'>
                &quot;{testimonial.text}&quot;
              </p>
              <div className='flex items-center gap-3'>
                <div className='flex size-12 items-center justify-center rounded-full bg-secondary'>
                  <span className='text-xl font-bold text-primary'>
                    {testimonial.name.split(' ')[0][0]}
                    {testimonial.name.split(' ')[1][0]}
                  </span>
                </div>
                <div className='flex flex-col'>
                  <div className='truncate text-lg font-semibold'>
                    {testimonial.name}
                  </div>
                  <div className='truncate text-sm text-muted-foreground'>
                    {testimonial.type}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
