-- Seeds the marketing-content tables for Lalo Import and Export.
-- Run AFTER `pnpm db:push` has created the tables.
--
--   mysql -u <user> -p <database> < seed.sql
--
-- Re-runnable: each section clears its table first, so re-seeding replaces
-- the content rather than duplicating it.
--
-- Founding-date note: the source site (main.lalobakerysolutions.com) gives two
-- conflicting founding dates — "September 1992" on its home page and "Est. Sep
-- 2025" / "Founded in September 2025" on its About page. This seed resolves
-- the conflict in favour of 1992 (the more specific claim) throughout; adjust
-- if the client confirms otherwise.
--
-- Tables intentionally left empty here (schema supports them, nothing on the
-- rebuilt site renders them yet): gallery_images, faqs, coffee_regions,
-- traceability_steps, company_milestones, export_markets.

SET FOREIGN_KEY_CHECKS = 0;

DELETE FROM `page_heroes`;
DELETE FROM `export_markets`;
DELETE FROM `company_milestones`;
DELETE FROM `gallery_images`;
DELETE FROM `partners`;
DELETE FROM `coffee_regions`;
DELETE FROM `traceability_steps`;
DELETE FROM `faqs`;
DELETE FROM `value_props`;
DELETE FROM `ventures`;
DELETE FROM `site_settings`;
DELETE FROM `page_sections`;
DELETE FROM `company_stats`;

SET FOREIGN_KEY_CHECKS = 1;

-- ---------------------------------------------------------------- page heroes

INSERT INTO `page_heroes` (`page`, `eyebrow`, `title`, `title_accent`, `tagline`, `body`, `image`, `image_alt`) VALUES
('home',
 'Lalo Import & Export',
 'Connecting the World with',
 'the Finest Local Coffee & Premium Global Goods.',
 NULL,
 'Rooted in coffee trading, Lalo has grown into a diversified trading company connecting producers and suppliers with regional and international markets through consistent, long-term partnerships.',
 'lalo-plantation.webp',
 'Coffee cherries growing on a terraced hillside plantation at sunrise'),
('about',
 'Est. 1992',
 'About Lalo Import',
 '& Export',
 'A diversified trading group connecting premium Ethiopian products with global markets through trust, quality, and strong partnerships.',
 NULL,
 'lalo-office-signage.webp',
 'Lalo Business Group office signage reading Build on Trust'),
('subsidiaries',
 'Our Companies',
 'Six Businesses,',
 'One Trusted Name',
 'A diversified group of specialised businesses operating under one trusted brand.',
 NULL,
 'image8.webp',
 'Wide view of Ethiopian farmland with mountains in the distance'),
('contact',
 'Get In Touch',
 'Let''s Discuss',
 'Your Needs',
 'Tell us what you are looking for and our team will get back to you shortly.',
 NULL,
 'coffee.webp',
 'Coffee beans spinning in a roasting drum');

-- --------------------------------------------------------------------- ventures
-- (Ventures IS the subsidiaries table — see the comment in schema.ts.)

INSERT INTO `ventures` (`title`, `tagline`, `description`, `image`, `image_alt`, `icon`, `tags`, `sort_order`) VALUES
('Lalo Coffee Export',
 'Sourcing 100% premium, single-origin coffee directly from local farmers to your cup.',
 'Global commodity supply chain coordination and international logistics management, connecting Ethiopian coffee farmers with roasters and importers worldwide.',
 'farm.webp', 'Aerial view of Ethiopian coffee farmland', 'Coffee',
 '["Export","Coffee","Local Farmers"]', 0),
('Lalo Bakery Solutions',
 'High-quality bakery solutions and top-grade sourced ingredients.',
 'Advanced commercial equipment, ingredients, and operational workflows for high-volume bakeries.',
 NULL, NULL, 'ChefHat',
 '["Bakery","Solutions","Food Industry"]', 1),
('Lalo Power & Hand Tools',
 'A wide range of professional hand and power tools from trusted brands.',
 'Diversified international trade operations across key industrial and material sectors, supplying professional-grade tools to contractors and retailers.',
 NULL, NULL, 'Wrench',
 '["Hand Tools","Power Tools","Construction"]', 2),
('Lalo Cafe & Bakery',
 'Fresh coffee and artisan baked goods, served with quality and consistency.',
 'A bakery and cafe experience focused on handcrafted pastries, expertly brewed coffee, and high-quality ingredients sourced with care.',
 'image2.webp', 'A cup of coffee resting on a bed of green and roasted beans', 'Store',
 '["Cafe","Bakery","Signature Blend"]', 3),
('Lalo Laundry',
 'Reliable laundry & delivery, so you are always at your best.',
 'Commercial-scale linen and textile services for major hospitality and industrial clients.',
 NULL, NULL, 'Shirt',
 '["Laundry","Delivery","Care"]', 4),
('Lalo Apartments',
 'Modern, managed residential living designed for comfort and security.',
 'Comprehensive residential property management services encompassing leasing, maintenance, and daily administrative operations.',
 NULL, NULL, 'Building2',
 '["Apartments","Living","Comfort"]', 5);

-- -------------------------------------------------------------------- partners

INSERT INTO `partners` (`name`, `logo`, `website_url`, `sort_order`) VALUES
('Ecom Trading', 'spo-ecom.webp', 'https://www.ecomtrading.com/', 0),
('Louis Dreyfus Company', 'spo-ldc.webp', 'https://www.ldc.com/product/coffee/', 1),
('Touton', 'spo-touton.webp', 'https://touton.com/', 2),
('Falcon Coffees', 'spo-falcon.webp', 'https://www.falconcoffees.com/', 3);

-- ------------------------------------------------------------------ value props
-- page='home': the "Our Identity / The Lalo Difference / Global Reach" cards.
-- page='about': the full 8-item "Our Core Values" grid.
-- `icon` must match a name exported by src/lib/components/dynamic-icon.svelte.

INSERT INTO `value_props` (`page`, `icon`, `title`, `description`, `sort_order`) VALUES
('home', 'Users', 'Our Identity',
 'Lalo Import and Export (Lalo General Trading) operates as a unified identity across diverse sectors, serving both B2B and B2C markets.', 0),
('home', 'Handshake', 'The Lalo Difference',
 'We strive to meet the need for quality, reliability, and convenience, helping businesses and individuals access top products that improve their daily operations and lives.', 1),
('home', 'Globe', 'Global Reach',
 'While rooted in Ethiopia, we serve both local and international markets with a robust distribution network.', 2),

('about', 'ShieldCheck', 'Integrity',
 'We conduct all business with honesty, transparency, and ethical practices across our supply chain.', 0),
('about', 'Award', 'Quality',
 'We are committed to delivering high-quality coffee and importing reliable, trusted products.', 1),
('about', 'Leaf', 'Sustainability',
 'Supporting environmentally responsible farming, fair trade principles, and long-term ecological balance.', 2),
('about', 'Users', 'Community Empowerment',
 'Uplifting local farmers, creating opportunities, and contributing to regional economic development.', 3),
('about', 'Handshake', 'Partnership',
 'Building strong, respectful relationships with producers, suppliers, and international buyers.', 4),
('about', 'Lightbulb', 'Innovation',
 'Continuously improving our processes, logistics, and services to remain efficient and competitive.', 5),
('about', 'HandCoins', 'Accountability',
 'Taking responsibility for our actions and consistently delivering on our commitments.', 6),
('about', 'Store', 'Customer Focus',
 'Prioritizing the needs of our clients and striving to exceed expectations in every service.', 7);

-- ------------------------------------------------------------------ page sections

INSERT INTO `page_sections` (`page`, `slug`, `title`, `body`, `sort_order`) VALUES
('home', 'about-lalo', 'About Lalo Import and Export',
 'Established in September 1992, Lalo Import and Export was inspired by the potential to share our local coffee with the world while bringing valuable, high-quality products into our local market through efficient international trade.\n\nLalo operates as a diversified group to serve real market needs across trade, retail, and services. While our businesses span different sectors, they are united by one principle: delivering quality, reliability, and responsible operations that create lasting impact for our partners and communities.',
 0),

('about', 'who-we-are', 'Who We Are',
 'Lalo Import and Export (Lalo General Trading) is a multi-sector business group operating across import, export, retail, and service industries. Rooted in Ethiopia, we serve both local and international markets.\n\nWe operate as a unified parent company overseeing specialized subsidiaries, each built to meet specific market needs while maintaining shared standards and values.',
 0),
('about', 'our-story', 'Our Story',
 'Founded in 1992, Lalo Import and Export was inspired by the opportunity to share Ethiopia''s exceptional coffee with the world while responsibly importing high-quality products that support everyday life and business growth.',
 1),
('about', 'mission', 'Our Mission',
 'To deliver premium locally sourced coffee to global markets while importing reliable, high-quality goods that support innovation, growth, and community development.',
 2),
('about', 'vision', 'Our Vision',
 'To become a leading global exporter of Ethiopian coffee and a trusted import partner recognized for excellence, sustainability, and operational integrity.',
 3),
('about', 'how-we-operate', 'How We Operate',
 'Lalo operates through a structured group model, with each subsidiary focused on a specific sector while supported by centralized standards, governance, and logistics. This approach allows us to remain agile, maintain quality control, and deliver consistent experiences across all our businesses.',
 4);

-- ------------------------------------------------------------------ company stats

INSERT INTO `company_stats` (`page`, `label`, `value`, `sort_order`) VALUES
('home', 'Founded', '1992', 0),
('home', 'Subsidiaries', '6', 1),
('home', 'Markets', 'Local & Global', 2),

('about', 'Founded', '1992', 0),
('about', 'Subsidiaries', '6', 1),
('about', 'Headquarters', 'Addis Ababa', 2);

-- ----------------------------------------------------------------- site settings
-- Social URLs are placeholders — the source site links its icons to Facebook,
-- X and LinkedIn but does not expose the handles in its markup. Replace with
-- the real profile URLs when available.

INSERT INTO `site_settings` (`emails`, `phones`, `address`, `tagline`, `footer_blurb`, `social_links`) VALUES
('[{"label":"General Inquiries","value":"hello@mohammedlaloie.com"}]',
 '["+251 912 154 982"]',
 'Addis Ababa, Ethiopia',
 'Connecting the World with the Finest Local Coffee & Premium Global Goods.',
 'Rooted in coffee trading, Lalo has grown into a diversified trading company connecting producers and suppliers with regional and international markets through consistent, long-term partnerships.',
 '[{"platform":"facebook","url":"https://facebook.com/lalotrading"},{"platform":"x","url":"https://x.com/lalotrading"},{"platform":"linkedin","url":"https://linkedin.com/company/lalotrading"}]');
