import { z } from 'zod/v4';
import { sortOrderField } from '$lib/server/crud';

export const addSchema = z.object({
	title: z.string('Required').min(1, 'Required').max(255),
	description: z.string().optional(),
	icon: z.string('Required').min(1, 'Required'),
	sortOrder: sortOrderField
});

export const editSchema = addSchema.extend({
	id: z.coerce.number()
});
