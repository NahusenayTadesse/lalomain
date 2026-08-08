import { contentCrud } from '$lib/server/crud';
import { exportMarkets } from '$lib/server/db/schema';
import { addSchema, editSchema } from './schema';
import type { Actions, PageServerLoad } from './$types';

const crud = contentCrud({
	table: exportMarkets,
	label: 'Market',
	addSchema,
	editSchema
});

export const load: PageServerLoad = crud.load;
export const actions: Actions = crud.actions;
