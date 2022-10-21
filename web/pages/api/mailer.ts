import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailBody } from '../../typing';
import nodeMailer from 'nodemailer';
import Handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';

const transporterConfig:any = {
    host: process.env.NEXT_PUBLIC_SMTP_URL || "",
    secure:false,
    port: process.env.NEXT_PUBLIC_SMTP_PORT || "",
    authMethod:"PLAIN",
    auth:{
        user:process.env.NEXT_PUBLIC_SMTP_USER || "",
        pass:process.env.NEXT_PUBLIC_SMTP_SECRET_KEY || "",
    }
}

const transporter = nodeMailer.createTransport(transporterConfig);

export default async function handler(
req: NextApiRequest,
res: NextApiResponse
    ){
        // Request body data
        const body: EmailBody = req.body;

        const tksHTMLDir = path.resolve('emails','tks.html');
        const tksHTML = fs.readFileSync(tksHTMLDir, {encoding: 'utf-8'});
        const tksTemplate = Handlebars.compile(`${tksHTML}`);
        const tksWithName = tksTemplate({name:body.name});
        
        // client send mail notification
        transporter.sendMail({
            from:`Caio Fresneda <contato@caiofresneda.tech>`,
            to: body.email,
            subject: `Opá vi que você quer entrar em contato comigo`,
            text:`Já irei entrar em contato. Okay?`,
            html:tksWithName
        })

        // // owener send mail notification
        transporter.sendMail({
            from: `${body.name} <job@caiofresneda.tech>`, // sender address
            to: process.env.NEXT_PUBLIC_EMAIL_USER,
            subject: `Contato de ${body.name} - Pelo site ✔`, // Subject line
            text: `${body.subject}`, // plain text body
            html: `
            <b>ASSUNTO: ${body.subject}<b> <br/>
            ${body.msg}
            `,
          });

        return res.send(200)
    }