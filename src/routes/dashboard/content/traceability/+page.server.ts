import { contentCrud } from '$lib/server/crud';
import { traceabilitySteps } from '$lib/server/db/schema';
import { addSchema, editSchema } from './schema';
import type { Actions, PageServerLoad } from './$types';

const crud = contentCrud({
	table: traceabilitySteps,
	label: 'Step',
	addSchema,
	editSchema
});

export const load: PageServerLoad = crud.load;
export const actions: Actions = crud.actions;
