import * as nodemailer from "nodemailer";

export class MailService {
  private transporter: any;
  private USER_NAME_MAIL = process.env.USER_NAME_MAIL;
  private USER_PASSWORD_MAIL = process.env.USER_PASSWORD_MAIL;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: this.USER_NAME_MAIL,
        pass: this.USER_PASSWORD_MAIL,
      },
    });
  }

  async sendConfirmationEmail(email: string, orderId: string) {
    const mailOptions = {
      from: "Kramer - <tomicardenas96@gmail.com>",
      to: email,
      subject: "Confirma tu pedido",
      text: `Por favor confirma tu pedido utilizando el siguiente enlace: http://localhost:3170/order/confirm?orderId=${orderId}`,
      html: `<p>Por favor confirma tu pedido haciendo clic en el siguiente enlace:</p><a href="http://localhost:3170/order/confirm?orderId=${orderId}">Confirmar cuenta</a>`,
    };

    try {
      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      return new Error("Error sending confirmation email");
    }
  }
}
