import { mysqlTable, varchar, boolean, int, text, timestamp, json } from 'drizzle-orm/mysql-core';
import { secureFields } from './auth.schema';

export const contactMessages = mysqlTable('contact_messages', {
	id: int('id').primaryKey().autoincrement(),
	name: varchar('name', { length: 255 }).notNull(),
	email: varchar('email', { length: 100 }).notNull(),
	phone: varchar('phone', { length: 20 }),
	subject: varchar('subject', { length: 255 }).notNull(),
	message: text('message').notNull(),
	address: varchar('address', { length: 255 }),
	seen: boolean('seen').default(false),
	createdAt: timestamp('created_at').defaultNow().notNull()
});

export const testimonials = mysqlTable('testimonials', {
	id: int('id').primaryKey().autoincrement(),
	name: varchar('name', { length: 255 }).notNull(),
	position: varchar('position', { length: 255 }),
	message: text('message').notNull(),
	avatar: varchar('avatar', { length: 255 }),
	...secureFields
});

export const gallery = mysqlTable('gallery', {
	id: int('id').primaryKey().autoincrement(),
	imageUrl: varchar('image_url', { length: 255 })
});

// --- Marketing site content (dynamic replacements for hardcoded page data) ---

/** One banner per marketing page, keyed by route slug ('home', 'about', ...). */
export const pageHeroes = mysqlTable('page_heroes', {
	id: int('id').primaryKey().autoincrement(),
	page: varchar('page', { length: 50 }).notNull().unique(),
	eyebrow: varchar('eyebrow', { length: 255 }),
	title: varchar('title', { length: 255 }).notNull(),
	/** Rendered after the title in the accent colour, so no raw HTML is stored. */
	titleAccent: varchar('title_accent', { length: 255 }),
	tagline: varchar('tagline', { length: 255 }),
	body: text('body'),
	image: varchar('image', { length: 255 }).notNull(),
	imageAlt: varchar('image_alt', { length: 255 }),
	...secureFields
});

/** Destination markets listed in the home page "A Global Reach" section. */
export const exportMarkets = mysqlTable('export_markets', {
	id: int('id').primaryKey().autoincrement(),
	name: varchar('name', { length: 255 }).notNull(),
	sortOrder: int('sort_order').default(0).notNull(),
	...secureFields
});

/**
 * Ventures IS the subsidiaries table — Lalo Coffee Export, Lalo Bakery Solutions,
 * Lalo Cafe & Bakery, Lalo Laundry, Lalo Apartments, etc. are all rows here.
 * There is no separate "subsidiaries" table; "venture" is just the generic name
 * for a Lalo-branded business unit.
 */
export const ventures = mysqlTable('ventures', {
	id: int('id').primaryKey().autoincrement(),
	title: varchar('title', { length: 255 }).notNull(),
	/** Short one-line pitch shown on the subsidiary card (e.g. "Sourcing 100% premium, single-origin coffee..."). */
	tagline: varchar('tagline', { length: 255 }),
	description: text('description'),
	image: varchar('image', { length: 255 }),
	imageAlt: varchar('image_alt', { length: 255 }),
	icon: varchar('icon', { length: 100 }),
	logo: varchar('logo', { length: 255 }),
	websiteUrl: varchar('website_url', { length: 255 }),
	/** Short keyword pills shown on the subsidiary card, e.g. ["Export", "Coffee", "Local Farmers"]. */
	tags: json('tags').$type<string[]>(),
	regionsServed: json('regions_served').$type<string[]>(),
	sortOrder: int('sort_order').default(0).notNull(),
	...secureFields
});

export const companyMilestones = mysqlTable('company_milestones', {
	id: int('id').primaryKey().autoincrement(),
	period: varchar('period', { length: 50 }).notNull(),
	title: varchar('title', { length: 255 }).notNull(),
	description: text('description'),
	page: varchar('page', { length: 50 }).notNull().default('home'),
	sortOrder: int('sort_order').default(0).notNull(),
	...secureFields
});

export const galleryImages = mysqlTable('gallery_images', {
	id: int('id').primaryKey().autoincrement(),
	page: varchar('page', { length: 50 }).notNull(),
	src: varchar('src', { length: 255 }).notNull(),
	alt: varchar('alt', { length: 255 }),
	caption: varchar('caption', { length: 255 }),
	sortOrder: int('sort_order').default(0).notNull(),
	...secureFields
});

export const partners = mysqlTable('partners', {
	id: int('id').primaryKey().autoincrement(),
	name: varchar('name', { length: 255 }).notNull(),
	logo: varchar('logo', { length: 255 }),
	websiteUrl: varchar('website_url', { length: 255 }),
	sortOrder: int('sort_order').default(0).notNull(),
	...secureFields
});

export const coffeeRegions = mysqlTable('coffee_regions', {
	id: int('id').primaryKey().autoincrement(),
	name: varchar('name', { length: 255 }).notNull(),
	image: varchar('image', { length: 255 }),
	cupping: text('cupping'),
	aroma: text('aroma'),
	flavor: text('flavor'),
	sortOrder: int('sort_order').default(0).notNull(),
	...secureFields
});

export const traceabilitySteps = mysqlTable('traceability_steps', {
	id: int('id').primaryKey().autoincrement(),
	title: varchar('title', { length: 255 }).notNull(),
	description: text('description'),
	icon: varchar('icon', { length: 100 }),
	sortOrder: int('sort_order').default(0).notNull(),
	...secureFields
});

export const faqs = mysqlTable('faqs', {
	id: int('id').primaryKey().autoincrement(),
	/** Which page's FAQ section this answer belongs to. */
	page: varchar('page', { length: 50 }).notNull().default('home'),
	question: varchar('question', { length: 255 }).notNull(),
	answer: text('answer').notNull(),
	sortOrder: int('sort_order').default(0).notNull(),
	...secureFields
});

/** Also doubles as "Our Core Values" — page-scoped so Home (short list) and About (full list) can differ. */
export const valueProps = mysqlTable('value_props', {
	id: int('id').primaryKey().autoincrement(),
	page: varchar('page', { length: 50 }).notNull().default('home'),
	icon: varchar('icon', { length: 100 }),
	title: varchar('title', { length: 255 }).notNull(),
	description: text('description'),
	sortOrder: int('sort_order').default(0).notNull(),
	...secureFields
});

/** Single-row table holding company-wide contact details and footer copy. */
export const siteSettings = mysqlTable('site_settings', {
	id: int('id').primaryKey().autoincrement(),
	emails: json('emails').$type<{ label: string; value: string }[]>(),
	phones: json('phones').$type<string[]>(),
	address: varchar('address', { length: 255 }),
	tagline: varchar('tagline', { length: 255 }),
	footerBlurb: text('footer_blurb'),
	/** Footer/header social icon links, e.g. [{ platform: "facebook", url: "..." }]. */
	socialLinks: json('social_links').$type<{ platform: string; url: string }[]>(),
	...secureFields
});

/**
 * Freeform named prose blocks for pages that need more than a hero + a list —
 * e.g. About's "Who We Are", "Our Story", "Our Mission", "Our Vision", and
 * "How We Operate" sections. `slug` is unique per page so a section can be
 * looked up directly (page: 'about', slug: 'mission').
 */
export const pageSections = mysqlTable('page_sections', {
	id: int('id').primaryKey().autoincrement(),
	page: varchar('page', { length: 50 }).notNull(),
	slug: varchar('slug', { length: 100 }).notNull(),
	title: varchar('title', { length: 255 }),
	body: text('body'),
	image: varchar('image', { length: 255 }),
	sortOrder: int('sort_order').default(0).notNull(),
	...secureFields
});

/** A single company fact/stat badge, e.g. "Est. Sep 2025" on the About hero, or a "6 Subsidiaries" counter. */
export const companyStats = mysqlTable('company_stats', {
	id: int('id').primaryKey().autoincrement(),
	page: varchar('page', { length: 50 }).notNull().default('home'),
	label: varchar('label', { length: 255 }).notNull(),
	value: varchar('value', { length: 100 }).notNull(),
	sortOrder: int('sort_order').default(0).notNull(),
	...secureFields
});

export * from './auth.schema';
