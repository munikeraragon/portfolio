import sgMail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'

sgMail.setApiKey(process.env.EMAIL_API_KEY || '')

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { fullName, email, message } = req.body
	const msg = {
		to: process.env.EMAIL_RECIPIENT || '',
		from: process.env.EMAIL_SENDER || '',
		subject: 'Muniker Portfolio Email',
		html: `<div> 
                <strong>Full Name</strong>: ${fullName}
                <strong>Email</strong>: ${email}
                <strong>message</strong>: ${message}
            </div>
        `,
	}
	try {
		await sgMail.send(msg)
		res.json({ message: `Email has been sent` })
	} catch (error) {
		res.status(500).json({ error: 'Error sending email' })
	}
}
