import { contentCrud } from '$lib/server/crud';
import { partners } from '$lib/server/db/schema';
import { addSchema, editSchema } from './schema';
import type { Actions, PageServerLoad } from './$types';

const crud = contentCrud({
	table: partners,
	label: 'Partner',
	addSchema,
	editSchema,
	fileFields: ['logo']
});

export const load: PageServerLoad = crud.load;
export const actions: Actions = crud.actions;
