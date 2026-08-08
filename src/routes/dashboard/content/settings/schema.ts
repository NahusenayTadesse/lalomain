import { z } from 'zod/v4';

export const settingsSchema = z.object({
	/** One `Label | address` pair per line. The first is what the footer shows. */
	emails: z.string().optional(),
	/** One number per line. The first is what the footer shows. */
	phones: z.string().optional(),
	address: z.string().max(255).optional(),
	tagline: z.string().max(255).optional(),
	footerBlurb: z.string().optional(),
	/** One `platform | url` pair per line, e.g. `facebook | https://facebook.com/...`. */
	socialLinks: z.string().optional()
});

export type SettingsSchema = typeof settingsSchema;
