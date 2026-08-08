import { z } from 'zod/v4';
import { sortOrderField } from '$lib/server/crud';

export const addSchema = z.object({
	page: z.string('Required').min(1, 'Required'),
	label: z.string('Required').min(1, 'Required').max(255),
	value: z.string('Required').min(1, 'Required').max(100),
	sortOrder: sortOrderField
});

export const editSchema = addSchema.extend({
	id: z.coerce.number()
});
