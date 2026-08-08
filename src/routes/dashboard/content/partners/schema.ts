import { z } from 'zod/v4';
import { sortOrderField } from '$lib/server/crud';

export const addSchema = z.object({
	name: z.string('Required').min(1, 'Required').max(255),
	websiteUrl: z.string().max(255).optional(),
	logo: z.file().max(10_000_000).optional(),
	sortOrder: sortOrderField
});

export const editSchema = addSchema.extend({
	id: z.coerce.number()
});
