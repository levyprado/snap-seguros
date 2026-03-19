import { SITE_NAME } from '@/config/site'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const title = 'Plano de Saúde Empresarial para MEI e PJ | Snap Seguros'
const description =
  'Plano de saúde empresarial a partir de R$119,90/mês. Bradesco Saúde, Amil, Porto, SulAmérica, Unimed e mais. Cotação 100% gratuita em até 15 minutos. Atendimento personalizado para MEI, ME e PJ.'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'plano de saúde empresarial',
    'plano de saúde para MEI',
    'plano de saúde para PJ',
    'plano de saúde para empresa',
    'plano de saúde corporativo',
    'plano de saúde PME',
    'Bradesco Saúde empresarial',
    'Amil empresarial',
    'SulAmérica empresarial',
    'Unimed empresarial',
    'Porto Saúde empresarial',
    'cotação plano de saúde empresarial',
    'plano de saúde barato para empresa',
    'corretora de plano de saúde',
    'Snap Seguros',
  ],
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title,
    description,
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
