import { z } from 'zod/v4';
import { sortOrderField } from '$lib/server/crud';

export const addSchema = z.object({
	page: z.string('Required').min(1, 'Required'),
	slug: z.string('Required').min(1, 'Required').max(100),
	title: z.string().max(255).optional(),
	body: z.string().optional(),
	image: z.file().max(10_000_000).optional(),
	sortOrder: sortOrderField
});

export const editSchema = addSchema.extend({
	id: z.coerce.number()
});
