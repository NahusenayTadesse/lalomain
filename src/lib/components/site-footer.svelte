<script lang="ts">
	import { navLinks } from '$lib/nav-links';
	import { MapPin } from '@lucide/svelte';

	let {
		settings,
		partners = []
	}: {
		settings?: {
			emails?: { label: string; value: string }[] | null;
			phones?: string[] | null;
			address?: string | null;
			footerBlurb?: string | null;
			socialLinks?: { platform: string; url: string }[] | null;
		} | null;
		partners?: { id: number; name: string; websiteUrl?: string | null; logo?: string | null }[];
	} = $props();

	/** The footer only advertises the first contact of each kind. */
	const email = $derived(settings?.emails?.[0]?.value);
	const phone = $derived(settings?.phones?.[0]);

	/**
	 * Brand marks aren't in lucide (trademark reasons), so these are drawn
	 * inline instead of imported.
	 */
	const socialPaths = {
		facebook:
			'M22 12a10 10 0 1 0-11.5 9.9v-7H7.9V12h2.6V9.8c0-2.6 1.5-4 3.9-4 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12',
		x: 'M18.9 2h3.3l-7.2 8.2L23.5 22h-6.6l-5.2-6.8L5.7 22H2.4l7.7-8.8L1.5 2h6.8l4.7 6.2zm-1.2 18h1.8L7.4 4H5.5z',
		linkedin:
			'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M3 9h4v12H3zM10 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.5 4.7 5.9V21h-4v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.8h-4z'
	} as const;
</script>

<footer class="relative overflow-hidden border-t border-white/10 bg-brand-navy text-brand-navy-foreground">
	<img
		src="/lalo-footer-bg.webp"
		alt=""
		class="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.07]"
	/>
	<div class="relative container mx-auto px-4 py-16 sm:px-6">
		<div class="grid gap-12 lg:grid-cols-12">
			<div class="lg:col-span-4">
				<a href="/" class="flex items-center">
					<img src="/logo-white.webp" alt="Lalo Import and Export" class="h-14 w-auto" />
				</a>
				<p class="mt-4 max-w-sm text-sm text-brand-navy-foreground/70">{settings?.footerBlurb}</p>

				{#if settings?.socialLinks?.length}
					<div class="mt-6 flex items-center gap-3">
						{#each settings.socialLinks as social (social.platform)}
							{@const path = socialPaths[social.platform as keyof typeof socialPaths]}
							{#if path}
								<a
									href={social.url}
									target="_blank"
									rel="noreferrer noopener"
									aria-label={social.platform}
									class="flex size-9 items-center justify-center rounded-full border border-white/15 text-brand-navy-foreground/80 transition-colors hover:border-brand-terracotta hover:text-brand-terracotta"
								>
									<svg viewBox="0 0 24 24" fill="currentColor" class="size-4" aria-hidden="true">
										<path d={path} />
									</svg>
								</a>
							{/if}
						{/each}
					</div>
				{/if}
			</div>

			<div class="lg:col-span-2">
				<h3 class="text-sm font-semibold tracking-wide text-brand-terracotta uppercase">Navigate</h3>
				<ul class="mt-4 space-y-2.5">
					{#each navLinks as link (link.href)}
						<li>
							<a
								href={link.href}
								class="text-sm text-brand-navy-foreground/70 transition-colors hover:text-brand-terracotta"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div class="lg:col-span-3">
				<h3 class="text-sm font-semibold tracking-wide text-brand-terracotta uppercase">Contact</h3>
				<ul class="mt-4 space-y-2.5 text-sm text-brand-navy-foreground/70">
					{#if email}
						<li>
							<a href="mailto:{email}" class="transition-colors hover:text-brand-terracotta">{email}</a>
						</li>
					{/if}
					{#if phone}
						<li>
							<a href="tel:{phone.replace(/\s/g, '')}" class="transition-colors hover:text-brand-terracotta">
								{phone}
							</a>
						</li>
					{/if}
					{#if settings?.address}
						<li class="flex items-start gap-2">
							<MapPin class="mt-0.5 size-4 shrink-0 text-brand-terracotta" />
							<span>{settings.address}</span>
						</li>
					{/if}
				</ul>
			</div>

			<div class="lg:col-span-3">
				<h3 class="text-sm font-semibold tracking-wide text-brand-terracotta uppercase">Location</h3>
				<div class="mt-4 overflow-hidden rounded-lg border border-white/10">
					<iframe
						title="Lalo Import and Export location"
						src="https://www.google.com/maps?q=Addis+Ababa,+Ethiopia&output=embed"
						class="h-40 w-full grayscale-[40%]"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</div>

		{#if partners.length}
			<div class="mt-12 border-t border-white/10 pt-8">
				<p
					class="mb-6 text-center text-xs font-semibold tracking-[0.2em] text-brand-navy-foreground/50 uppercase"
				>
					Trusted Trading Partners
				</p>
				<div class="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
					{#each partners as partner (partner.id)}
						<a
							href={partner.websiteUrl}
							target="_blank"
							rel="noreferrer noopener"
							class="text-sm font-medium text-brand-navy-foreground/60 transition-colors hover:text-brand-terracotta"
						>
							{partner.name}
						</a>
					{/each}
				</div>
			</div>
		{/if}

		<div
			class="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-brand-navy-foreground/50 sm:flex-row"
		>
			<p>Copyright &copy; {new Date().getFullYear()} Lalo PLC. All rights reserved.</p>
			<a
				href="http://nahusenaytadesse.vercel.app"
				target="_blank"
				rel="noreferrer noopener"
				class="hover:text-brand-terracotta"
			>
				Developed by NT
			</a>
		</div>
	</div>
</footer>
