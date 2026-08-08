import { z } from 'zod/v4';
import { sortOrderField } from '$lib/server/crud';

export const addSchema = z.object({
	title: z.string('Required').min(1, 'Required').max(255),
	tagline: z.string().max(255).optional(),
	description: z.string().optional(),
	image: z.file().max(10_000_000).optional(),
	imageAlt: z.string().max(255).optional(),
	icon: z.string('Required').min(1, 'Required'),
	logo: z.file().max(10_000_000).optional(),
	websiteUrl: z.string().max(255).optional(),
	tags: z.string().optional(),
	regionsServed: z.string().optional(),
	sortOrder: sortOrderField
});

export const editSchema = addSchema.extend({
	id: z.coerce.number()
});
