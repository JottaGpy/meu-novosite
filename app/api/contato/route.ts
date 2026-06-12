import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { nome, email, telefone, mensagem } = data;

    // Configurando o Nodemailer puxando as senhas seguras do .env.local
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false // <--- Adicione esta linha para resolver o erro do certificado
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Envia para você mesma
      replyTo: email, // Quando você clicar em "Responder", vai direto pro cliente
      subject: `[Portfólio] Novo Lead: ${nome}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #E8E4DD; border-radius: 10px;">
          <h2 style="color: #1F1F1F; border-bottom: 2px solid #C7B79A; padding-bottom: 10px;">Novo contato via Portfólio</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>WhatsApp:</strong> ${telefone}</p>
          <div style="background-color: #F8F7F4; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="margin-top: 0; color: #666;"><strong>Mensagem:</strong></p>
            <p style="white-space: pre-wrap; color: #1F1F1F;">${mensagem}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "E-mail enviado com sucesso!" }, { status: 200 });

  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json({ message: "Falha ao enviar o e-mail." }, { status: 500 });
  }
}