import { and, asc, eq, isNull } from 'drizzle-orm';
import type { AnyMySqlTable, MySqlColumn } from 'drizzle-orm/mysql-core';
import { db } from '$lib/server/db';
import * as schema from '$lib/server/db/schema';

/**
 * Shape shared by every marketing-content table: `secureFields` for auditing
 * plus a `sortOrder` the dashboard uses to arrange rows on the public page.
 */
type ContentTable = AnyMySqlTable & {
	$inferSelect: Record<string, unknown>;
	id: MySqlColumn;
	isActive: MySqlColumn;
	deletedAt: MySqlColumn;
	sortOrder: MySqlColumn;
};

/** Live rows (active, not soft-deleted) in the order an admin arranged them. */
export const list = <T extends ContentTable>(table: T) =>
	db
		.select()
		.from(table)
		.where(and(eq(table.isActive, true), isNull(table.deletedAt)))
		.orderBy(asc(table.sortOrder), asc(table.id)) as unknown as Promise<T['$inferSelect'][]>;

/** A content table whose rows each belong to one public page. */
type PagedTable = ContentTable & { page: MySqlColumn };

/** Live rows for a single page, in the order an admin arranged them. */
const listForPage = <T extends PagedTable>(table: T, page: string) =>
	db
		.select()
		.from(table)
		.where(and(eq(table.page, page), eq(table.isActive, true), isNull(table.deletedAt)))
		.orderBy(asc(table.sortOrder), asc(table.id)) as unknown as Promise<T['$inferSelect'][]>;

export const listGallery = (page: string) => listForPage(schema.galleryImages, page);

export const listMilestones = (page: string) => listForPage(schema.companyMilestones, page);

export const listFaqs = (page: string) => listForPage(schema.faqs, page);

export const listValueProps = (page: string) => listForPage(schema.valueProps, page);

export const listStats = (page: string) => listForPage(schema.companyStats, page);

/** Named prose blocks for a page, e.g. About's "Who We Are" / "Our Story" sections. */
export const listSections = (page: string) => listForPage(schema.pageSections, page);

/** The banner for a page. Returns `undefined` if the row has not been seeded. */
export const getHero = async (page: string) =>
	(await db.select().from(schema.pageHeroes).where(eq(schema.pageHeroes.page, page)).limit(1)).at(0);

/** The single settings row. Returns `undefined` if the table has not been seeded. */
export const getSettings = async () =>
	(await db.select().from(schema.siteSettings).limit(1)).at(0);
