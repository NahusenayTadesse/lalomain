export interface GalleryImage {
	src: string;
	alt?: string | null;
	caption?: string | null;
	/** Optional high-resolution source for the lightbox. Falls back to `src`. */
	full?: string | null;
}

/**
 * Prop shapes for the CMS-backed marketing components. These mirror the
 * relevant columns of the content tables in `$lib/server/db/schema` but are
 * declared structurally so client components never reach into server-only code.
 */

export interface Hero {
	eyebrow?: string | null;
	title: string;
	titleAccent?: string | null;
	tagline?: string | null;
	body?: string | null;
	image: string;
	imageAlt?: string | null;
}

export interface Venture {
	title: string;
	tagline?: string | null;
	description?: string | null;
	image?: string | null;
	imageAlt?: string | null;
	icon?: string | null;
	logo?: string | null;
	websiteUrl?: string | null;
	tags?: string[] | null;
}

export interface Milestone {
	period: string;
	title: string;
	description?: string | null;
}

export interface IconCard {
	icon?: string | null;
	title: string;
	description?: string | null;
}
