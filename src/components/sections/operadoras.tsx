import { operadoras } from '@/data/operadoras'
import Image from 'next/image'
import Container from '../ui/container'
import Body from '../ui/section/body'
import Headline from '../ui/section/headline'
import Section from '../ui/section/section'
import Tagline from '../ui/section/tagline'

const logosCarousel = [...operadoras, ...operadoras]

export default function Operadoras() {
  return (
    <Section id='operadoras'>
      <Container className='text-center'>
        <div className='space-y-2 lg:space-y-3'>
          <Tagline>Representante Oficial</Tagline>
          <Headline>As Melhores Operadoras do Brasil</Headline>
          <Body>
            Trabalhamos com as operadoras mais conceituadas para encontrar a
            melhor opção para sua empresa.
          </Body>
        </div>

        <div className='relative mt-12 inline-flex w-full overflow-hidden lg:mt-16'>
          <div className='absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-background to-transparent' />
          <div className='absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-background to-transparent' />

          <ul className='flex animate-infinite-scroll items-center justify-center md:justify-start'>
            {logosCarousel.map((operadora, i) => (
              <li
                key={i}
                className='mx-4 flex h-20 w-52 shrink-0 items-center justify-center lg:mx-8 lg:w-3xs'
              >
                <Image
                  src={operadora.logoUrl}
                  alt={operadora.name}
                  className='max-h-full w-auto object-contain'
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  )
}
