<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Hero } from '$lib/types';
	import { assetUrl } from '$lib/assets';

	let {
		hero,
		size = 'md',
		children
	}: {
		hero: Hero;
		/** `lg` is the taller treatment used on the home page. */
		size?: 'md' | 'lg';
		children?: Snippet;
	} = $props();
</script>

<section class="relative overflow-hidden bg-brand-navy">
	<div
		class="container relative z-10 mx-auto grid gap-0 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-stretch"
	>
		<div
			class="relative z-10 flex flex-col justify-center py-14 lg:py-24 {size === 'lg'
				? 'lg:py-32'
				: ''}"
		>
			{#if hero.eyebrow}
				<span
					class="enter-down inline-flex w-fit items-center gap-2 rounded-full border border-brand-terracotta/50 bg-brand-terracotta/15 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-brand-terracotta uppercase"
					style="--enter-delay: 80ms"
				>
					{hero.eyebrow}
				</span>
			{/if}
			<h1
				class="enter-up mt-6 max-w-xl font-heading text-4xl leading-[1.05] font-bold tracking-tight text-balance text-brand-navy-foreground {size ===
				'lg'
					? 'md:text-6xl'
					: 'md:text-5xl'}"
				style="--enter-delay: 180ms"
			>
				{hero.title}
				{#if hero.titleAccent}<span class="text-brand-terracotta">{hero.titleAccent}</span>{/if}
			</h1>
			{#if hero.tagline}
				<p
					class="enter-up mt-5 max-w-md text-lg text-brand-navy-foreground/80"
					style="--enter-delay: 300ms"
				>
					{hero.tagline}
				</p>
			{/if}
			{#if hero.body}
				<p
					class="enter-up mt-4 max-w-md text-brand-navy-foreground/65"
					style="--enter-delay: 400ms"
				>
					{hero.body}
				</p>
			{/if}
			{@render children?.()}
		</div>

		<div class="relative -mx-4 h-56 sm:-mx-6 sm:h-72 lg:mx-0 lg:h-auto">
			<div
				class="enter-fade absolute inset-0 lg:[clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)]"
				style="--enter-duration: 1100ms"
			>
				<img
					src={assetUrl(hero.image)}
					alt={hero.imageAlt ?? ''}
					class="h-full w-full object-cover"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-brand-navy/60 lg:via-transparent lg:to-transparent"
				></div>
			</div>
		</div>
	</div>

	<div
		class="pointer-events-none absolute inset-y-0 left-0 -z-0 w-1/2 bg-[radial-gradient(circle_at_0%_50%,var(--color-brand-terracotta)/12,transparent_60%)]"
	></div>
</section>
