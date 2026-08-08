import { z } from 'zod/v4';
import { sortOrderField } from '$lib/server/crud';

export const addSchema = z.object({
	page: z.string('Required').min(1, 'Required'),
	src: z.file('An image is required').max(10_000_000),
	caption: z.string().max(255).optional(),
	alt: z.string().max(255).optional(),
	sortOrder: sortOrderField
});

export const editSchema = addSchema.extend({
	id: z.coerce.number(),
	src: z.file().max(10_000_000).optional()
});
