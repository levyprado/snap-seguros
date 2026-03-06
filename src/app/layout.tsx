import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Snap Seguros | Plano de Saúde Empresarial - MEI e PJ',
  description:
    'Plano de saúde empresarial para MEI e PJ à partir de R$119,90/mes. Bradesco Saúde, Amil, Porto, SulAmerica, Unimed e mais. Cotação grátis e sem compromisso. Atendimento personalizado.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  )
}
