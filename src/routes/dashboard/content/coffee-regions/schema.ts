import { z } from 'zod/v4';
import { sortOrderField } from '$lib/server/crud';

export const addSchema = z.object({
	name: z.string('Required').min(1, 'Required').max(255),
	cupping: z.string().max(255).optional(),
	aroma: z.string().optional(),
	flavor: z.string().optional(),
	image: z.file().max(10_000_000).optional(),
	sortOrder: sortOrderField
});

export const editSchema = addSchema.extend({
	id: z.coerce.number()
});
