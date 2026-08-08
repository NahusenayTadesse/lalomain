import nodemailer from 'nodemailer';

import { env } from '$env/dynamic/private';

// Read dynamically, like the database client does: the SMTP settings are
// deployment config, and a missing one should surface when a send is attempted
// rather than failing the whole build.
const transporter = nodemailer.createTransport({
	host: env.SMTP_HOST,
	port: Number(env.SMTP_PORT),
	secure: true,
	auth: {
		user: env.SMTP_USER,
		pass: env.SMTP_PASSWORD
	}
});

/** Sends an HTML email from the Lalo support mailbox. */
export const sendEmail = async (to: string, subject: string, html: string) => {
	await transporter.sendMail({
		from: `"${BRAND_NAME}" <${env.SMTP_USER}>`,
		to,
		subject,
		html
	});
};

// --- Brand constants ---
const BRAND_NAME = 'Lalo Import and Export';
const BRAND_URL = 'https://main.lalobakerysolutions.com';
const BRAND_LOGO = 'https://main.lalobakerysolutions.com/logo.png';
const BRAND_PRIMARY = '#c98e7a';
const BRAND_PRIMARY_DARK = '#142938';
// Outlook and several webmail clients drop CSS gradients, so the solid colour is
// declared first and the gradient only layers on top where it is supported.
const BRAND_HEADER_BG = `${BRAND_PRIMARY_DARK}; background-image: linear-gradient(135deg, ${BRAND_PRIMARY} 0%, ${BRAND_PRIMARY_DARK} 100%)`;

/** Notifies the Lalo inbox that a visitor submitted the contact form. */
export const adminContactTemplate = (data: {
	name: string;
	email: string;
	phoneNumber: string;
	subject: string;
	contactMessage?: string;
}) => ({
	subject: `📩 New Contact Message: ${data.subject}`,
	html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee;">

            <!-- Header -->
            <div style="background: ${BRAND_HEADER_BG}; padding: 20px; text-align: center;">
                <h2 style="color: white; margin: 0;">New Contact Message</h2>
            </div>

            <!-- Body -->
            <div style="padding: 20px;">
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phoneNumber}</p>
                <p><strong>Subject:</strong> ${data.subject}</p>

                <div style="margin-top: 15px;">
                    <strong>Message:</strong>
                    <div style="background: #f9f9f9; padding: 15px; margin-top: 5px; border-radius: 5px;">
                        ${data.contactMessage || '<i>No message provided</i>'}
                    </div>
                </div>

                <div style="margin-top: 20px;">
                    <a href="mailto:${data.email}"
                       style="background: ${BRAND_PRIMARY_DARK}; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
                        Reply to Customer
                    </a>
                </div>
            </div>

            <!-- Footer -->
            <div style="background: #f9f9f9; padding: 10px; text-align: center; font-size: 12px; color: #777;">
                ${BRAND_NAME} - Contact Form Notification
            </div>
        </div>
    `
});

/** Confirms to the visitor that their contact form message arrived. */
export const customerContactTemplate = (name: string, subject: string) => ({
	subject: `We received your message - ${BRAND_NAME}`,
	html: `
        <div style="max-width: 600px; margin: auto; font-family: sans-serif; border: 1px solid #eee;">

            <!-- Header -->
            <div style="background: ${BRAND_HEADER_BG}; padding: 20px; text-align: center;">
                <img src="${BRAND_LOGO}"
                     alt="${BRAND_NAME} Logo"
                     width="80"
                     style="display: block; margin: 0 auto 10px;">
                <h1 style="color: white; margin: 0; font-size: 20px;">
                    Message Received ✅
                </h1>
            </div>

            <!-- Body -->
            <div style="padding: 20px; color: #333;">
                <p>Hi <strong>${name}</strong>,</p>

                <p>
                    Thank you for reaching out to <strong>${BRAND_NAME}</strong>.
                    We've received your message regarding:
                </p>

                <p style="font-weight: bold; margin: 10px 0;">
                    "${subject}"
                </p>

                <p>
                    Our team will review your message and get back to you as soon as possible.
                </p>

                <p style="margin-top: 20px;">
                    Best regards,<br/>
                    <strong>${BRAND_NAME} Team</strong>
                </p>
            </div>

            <!-- Footer -->
            <div style="background: #f9f9f9; padding: 15px; text-align: center; color: #777; font-size: 12px;">
                ${BRAND_NAME} | <a href="${BRAND_URL}" style="color: ${BRAND_PRIMARY}; text-decoration: none;">${BRAND_URL}</a>
            </div>
        </div>
    `
});
