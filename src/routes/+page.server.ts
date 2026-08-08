import { getHero, list, listSections, listStats, listValueProps } from '$lib/server/content';
import { partners, ventures } from '$lib/server/db/schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [hero, identity, stats, about, allVentures, allPartners] = await Promise.all([
		getHero('home'),
		listValueProps('home'),
		listStats('home'),
		listSections('home'),
		list(ventures),
		list(partners)
	]);

	return {
		hero,
		identity,
		stats,
		about: about.find((s) => s.slug === 'about-lalo'),
		ventures: allVentures.slice(0, 3),
		partners: allPartners
	};
};
