'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface FormEmailData {
  name: string
  phone: string
  email: string
  employees: string
}

export async function sendLeadEmail(data: FormEmailData) {
  try {
    const { name, phone, email, employees } = data

    const emailHtml = `
      <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0f172a; padding: 24px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0;">Novo Lead de Plano de Saúde! 🚀</h2>
        </div>
        
        <div style="padding: 24px; background-color: #ffffff;">
          <p style="font-size: 16px; color: #334155;">Olá equipe,</p>
          <p style="font-size: 16px; color: #334155;">Um novo contato acabou de preencher o formulário na Landing Page (Google Ads).</p>
          
          <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; margin: 24px 0;">
            <h3 style="margin-top: 0; color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">Dados do Contato:</h3>
            <ul style="list-style: none; padding: 0; margin: 0; color: #334155; font-size: 15px; line-height: 1.6;">
              <li><strong>Nome:</strong> ${name}</li>
              <li><strong>WhatsApp/Tel:</strong> <a href="https://wa.me/55${phone.replace(/\D/g, '')}" style="color: #2563eb;">${phone}</a></li>
              <li><strong>Email Corporativo:</strong> ${email}</li>
              <li><strong>Quantidade de Vidas:</strong> <span style="background-color: #dbeafe; color: #1e40af; padding: 2px 8px; border-radius: 12px; font-weight: bold;">${employees}</span></li>
            </ul>
          </div>
          
          <p style="font-size: 14px; color: #64748b; text-align: center; margin-top: 32px;">
            Enviado via sistema automático Snap Seguros. Responda o lead o mais rápido possível!
          </p>
        </div>
      </div>
    `

    const result = await resend.emails.send({
      from: 'Site Snap Seguros <leads@snapseguros.com.br>',
      to: ['comercial@snapseguros.com.br'],
      subject: `🚨 NOVO LEAD: ${name} - ${employees} vidas`,
      html: emailHtml,
    })

    if (result.error) {
      console.error('Erro no Resend:', result.error)
      return { success: false, error: result.error.message }
    }

    return { success: true }
  } catch (error) {
    console.error('Erro na Server Action:', error)
    return { success: false, error: 'Falha interna ao enviar email' }
  }
}
