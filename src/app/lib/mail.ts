import React from 'react';

import nodemailer from  "nodemailer";

async function Mail({
    to,
    name,
    subject,
    body,
}:{
    to:string; name:string ;subject: string, body: string

}) {

    const {SMTP_EMAIL,SMTP_PASSWORD} = process.env;

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:SMTP_EMAIL,
            pass:SMTP_PASSWORD
        }
    })

    try {
        const tResult = await transport.verify();
        console.log(tResult)
    } catch (error) {
        console.log(error)
    }

    try {
        const sendResult = await transport.sendMail({
            from:SMTP_EMAIL,to,subject,html:body
        });
        console.log(sendResult);
    } catch (error) {
        console.log(error);
    }
}

export default Mail;