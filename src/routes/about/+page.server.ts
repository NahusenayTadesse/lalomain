import { getHero, listSections, listStats, listValueProps } from '$lib/server/content';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [hero, sections, values, stats] = await Promise.all([
		getHero('about'),
		listSections('about'),
		listValueProps('about'),
		listStats('about')
	]);

	const section = (slug: string) => sections.find((s) => s.slug === slug);

	return {
		hero,
		whoWeAre: section('who-we-are'),
		ourStory: section('our-story'),
		mission: section('mission'),
		vision: section('vision'),
		howWeOperate: section('how-we-operate'),
		values,
		stats
	};
};
