import { b as private_env } from '../../../chunks/shared-server.js-D6HhUxAQ.js';
import { r as db, B as contactMessages } from '../../../chunks/db.js-gHXkniRQ.js';
import { g as getSettings, a as getHero } from '../../../chunks/content.js-CyX77nEo.js';
import { s as superValidate, m as message } from '../../../chunks/client2.js-Clbb-yOm.js';
import '../../../chunks/exports.js-CimAlNvy.js';
import '../../../chunks/client.js-6EH1pFcc.js';
import { z as zod } from '../../../chunks/adapters.js-DmdkKCR7.js';
import nodemailer from 'nodemailer';
import { o as object, d as string, e as email } from '../../../chunks/auth.js-xzNrYZ7P.js';

//#region src/routes/contact/schema.ts
var contactSchema = object({
	name: string("Your name is required").min(2, "Name is too short").max(255),
	email: email("A valid email address is required"),
	phone: string().max(20, "Phone number is too long").optional(),
	subject: string("Subject is required").min(2, "Subject is too short").max(255),
	message: string("Message is required").min(10, "Please tell us a little more"),
	address: string().max(255).optional(),
	/** Honeypot: bots fill hidden fields, humans never see this one. */
	website: string().max(0, "Submission rejected").optional()
});
//#endregion
//#region src/lib/server/email.ts
var transporter = nodemailer.createTransport({
	host: private_env.SMTP_HOST,
	port: Number(private_env.SMTP_PORT),
	secure: true,
	auth: {
		user: private_env.SMTP_USER,
		pass: private_env.SMTP_PASSWORD
	}
});
/** Sends an HTML email from the Fahem support mailbox. */
var sendEmail = async (to, subject, html) => {
	await transporter.sendMail({
		from: `"${BRAND_NAME}" <${private_env.SMTP_USER}>`,
		to,
		subject,
		html
	});
};
var BRAND_NAME = "Fahem General Trading";
var BRAND_URL = "https://fahemgeneraltrading.com";
var BRAND_LOGO = "https://fahemgeneraltrading.com/logo.png";
var BRAND_PRIMARY = "#ba7345";
var BRAND_PRIMARY_DARK = "#6b3f22";
var BRAND_HEADER_BG = `${BRAND_PRIMARY_DARK}; background-image: linear-gradient(135deg, ${BRAND_PRIMARY} 0%, ${BRAND_PRIMARY_DARK} 100%)`;
/** Notifies the Fahem inbox that a visitor submitted the contact form. */
var adminContactTemplate = (data) => ({
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
                        ${data.contactMessage || "<i>No message provided</i>"}
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
var customerContactTemplate = (name, subject) => ({
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
//#endregion
//#region src/routes/contact/+page.server.ts
/** Address, emails and phones come from the shared settings row in the layout. */
var load = async () => {
	const [hero, form] = await Promise.all([getHero("contact"), superValidate(zod(contactSchema))]);
	return {
		hero,
		form
	};
};
var actions = { contact: async ({ request }) => {
	const form = await superValidate(request, zod(contactSchema));
	if (!form.valid) return message(form, {
		type: "error",
		text: "Please check the form for errors"
	}, { status: 400 });
	const { name, email, phone, subject, message: body, address, website } = form.data;
	if (website) return message(form, {
		type: "success",
		text: "Thanks — we will be in touch shortly."
	});
	try {
		await db.insert(contactMessages).values({
			name,
			email,
			phone,
			subject,
			message: body,
			address
		});
	} catch {
		return message(form, {
			type: "error",
			text: "We could not save your message. Please try again."
		}, { status: 500 });
	}
	try {
		const admin = (await getSettings())?.emails?.[0]?.value;
		const notify = adminContactTemplate({
			name,
			email,
			phoneNumber: phone ?? "—",
			subject,
			contactMessage: body
		});
		const receipt = customerContactTemplate(name, subject);
		await Promise.all([admin ? sendEmail(admin, notify.subject, notify.html) : void 0, sendEmail(email, receipt.subject, receipt.html)]);
	} catch (err) {
		console.error("Contact form notification failed:", err);
	}
	return message(form, {
		type: "success",
		text: "Thank you — your message has been sent. We will get back to you shortly."
	});
} };

var _page_server_ts = /*#__PURE__*/Object.freeze({
	__proto__: null,
	actions: actions,
	load: load
});

export { _page_server_ts as _ };
//# sourceMappingURL=_page.server.ts.js-BmilTcIJ.js.map
