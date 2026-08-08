import { r as db, t as siteSettings, o as and, k as isNull, m as eq, a as asc, u as pageHeroes, v as galleryImages, w as companyMilestones, x as faqs } from './db.js-gHXkniRQ.js';

//#region src/lib/server/content.ts
/** Live rows (active, not soft-deleted) in the order an admin arranged them. */
var list = (table) => db.select().from(table).where(and(eq(table.isActive, true), isNull(table.deletedAt))).orderBy(asc(table.sortOrder), asc(table.id));
/** Live rows for a single page, in the order an admin arranged them. */
var listForPage = (table, page) => db.select().from(table).where(and(eq(table.page, page), eq(table.isActive, true), isNull(table.deletedAt))).orderBy(asc(table.sortOrder), asc(table.id));
var listGallery = (page) => listForPage(galleryImages, page);
var listMilestones = (page) => listForPage(companyMilestones, page);
var listFaqs = (page) => listForPage(faqs, page);
/** The banner for a page. Returns `undefined` if the row has not been seeded. */
var getHero = async (page) => (await db.select().from(pageHeroes).where(eq(pageHeroes.page, page)).limit(1)).at(0);
/** The single settings row. Returns `undefined` if the table has not been seeded. */
var getSettings = async () => (await db.select().from(siteSettings).limit(1)).at(0);

export { getHero as a, listMilestones as b, listGallery as c, listFaqs as d, getSettings as g, list as l };
//# sourceMappingURL=content.js-CyX77nEo.js.map
