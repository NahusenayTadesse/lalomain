import { getHero, list } from '$lib/server/content';
import { ventures } from '$lib/server/db/schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [hero, allVentures] = await Promise.all([getHero('subsidiaries'), list(ventures)]);

	return { hero, ventures: allVentures };
};
