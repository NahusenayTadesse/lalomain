import { contentCrud } from '$lib/server/crud';
import { ventures } from '$lib/server/db/schema';
import { addSchema, editSchema } from './schema';
import type { Actions, PageServerLoad } from './$types';

const crud = contentCrud({
	table: ventures,
	label: 'Subsidiary',
	addSchema,
	editSchema,
	fileFields: ['image', 'logo'],
	listFields: ['tags', 'regionsServed']
});

export const load: PageServerLoad = crud.load;
export const actions: Actions = crud.actions;
