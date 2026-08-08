<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import PageHero from '$lib/components/page-hero.svelte';
	import SectionHeading from '$lib/components/section-heading.svelte';
	import DynamicIcon from '$lib/components/dynamic-icon.svelte';
	import { reveal, stagger } from '$lib/actions/reveal';
	import { ArrowRight, Store, Truck } from '@lucide/svelte';
	import { assetUrl } from '$lib/assets';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Lalo Import and Export | Coffee &amp; Global Trade Solutions</title>
</svelte:head>

{#if data.hero}
	<PageHero hero={data.hero} size="lg">
		<div class="enter-up mt-10 flex flex-wrap gap-4" style="--enter-delay: 500ms">
			<Button href="/subsidiaries" size="lg" class="gap-2">
				Our Subsidiaries <ArrowRight class="size-4" />
			</Button>
			<Button
				href="/about"
				size="lg"
				variant="outline"
				class="border-brand-navy-foreground/30 bg-transparent text-brand-navy-foreground hover:bg-brand-navy-foreground/10 hover:text-brand-navy-foreground"
			>
				Our Story
			</Button>
		</div>
	</PageHero>
{/if}

<!-- Identity / Difference / Reach -->
<section class="py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="grid gap-6 md:grid-cols-3">
			{#each data.identity as item, i (item.id)}
				<div use:reveal={{ delay: stagger(i, 110), y: 28, scale: 0.97 }}>
					<div class="lift flex h-full flex-col rounded-xl bg-brand-navy p-8 text-brand-navy-foreground">
						<div
							class="flex size-12 items-center justify-center rounded-lg border border-white/15 bg-white/10"
						>
							<DynamicIcon name={item.icon} class="size-6" />
						</div>
						<h3 class="mt-5 font-heading text-xl font-bold">{item.title}</h3>
						<p class="mt-3 flex-1 text-sm text-brand-navy-foreground/70">{item.description}</p>
						<Button href="/about" size="sm" class="mt-6 w-fit bg-brand-terracotta text-white hover:bg-brand-terracotta/90">
							Learn More
						</Button>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- About Lalo -->
{#if data.about}
	<section class="bg-muted/40 py-20">
		<div class="container mx-auto px-4 sm:px-6">
			<div class="grid items-center gap-12 lg:grid-cols-2">
				<div
					use:reveal={{ x: -28, y: 0, scale: 0.97, duration: 1000 }}
					class="group overflow-hidden rounded-xl border border-border shadow-sm"
				>
					<img
						src={assetUrl(data.about.image ?? 'lalo-office-signage.webp')}
						alt="Lalo office signage reading Build on Trust"
						class="aspect-4/3 w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
					/>
				</div>
				<div>
					<SectionHeading kicker="Who We Are" title={data.about.title ?? 'About Lalo Import and Export'} />
					<p use:reveal={{ delay: 120 }} class="mt-6 text-lg text-muted-foreground whitespace-pre-line">
						{data.about.body}
					</p>
				</div>
			</div>

			{#if data.stats.length}
				<div
					use:reveal={{ delay: 160, y: 24 }}
					style="grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr))"
					class="mt-16 grid gap-px overflow-hidden rounded-xl border border-border bg-border"
				>
					{#each data.stats as stat (stat.id)}
						<div class="bg-card px-4 py-8 text-center">
							<p class="font-heading text-3xl font-bold text-primary">{stat.value}</p>
							<p class="mt-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
								{stat.label}
							</p>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</section>
{/if}

<!-- Our Companies preview -->
<section class="py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="flex flex-wrap items-end justify-between gap-6">
			<SectionHeading
				kicker="Our Companies"
				title="Six businesses, one trusted name"
				subtitle="Each subsidiary operates with its own specialised tone but remains under the Lalo parent brand."
			/>
			<Button href="/subsidiaries" variant="link" class="group h-fit gap-1 px-0 text-primary">
				View all subsidiaries
				<ArrowRight class="size-4 transition-transform duration-500 group-hover:translate-x-1" />
			</Button>
		</div>

		<div class="mt-12 grid gap-6 md:grid-cols-3">
			{#each data.ventures as venture, i (venture.id)}
				<a
					href="/subsidiaries"
					use:reveal={{ delay: stagger(i, 100), y: 24, scale: 0.98 }}
					class="lift group block overflow-hidden rounded-xl border border-border bg-card"
				>
					<div class="relative h-40 overflow-hidden">
						{#if venture.image}
							<img
								src={assetUrl(venture.image)}
								alt={venture.imageAlt ?? venture.title}
								class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
							/>
						{:else}
							<div class="h-full w-full bg-brand-navy"></div>
						{/if}
						<div class="absolute inset-0 bg-gradient-to-t from-brand-navy/75 to-transparent"></div>
						<h3 class="absolute bottom-3 left-4 font-heading text-lg font-bold text-white">
							{venture.title}
						</h3>
					</div>
					<p class="p-5 text-sm text-muted-foreground">{venture.tagline ?? venture.description}</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Partners -->
{#if data.partners.length}
	<section class="bg-muted/40 py-20">
		<div class="container mx-auto px-4 text-center sm:px-6">
			<SectionHeading
				kicker="Partners & Logistics"
				title="Our Global Network"
				subtitle="We collaborate with industry leaders to ensure the highest standards of trade."
				align="center"
			/>
			<div class="mx-auto mt-12 grid max-w-3xl grid-cols-2 items-center gap-8 sm:grid-cols-4">
				{#each data.partners as partner, i (partner.id)}
					<div use:reveal={{ delay: stagger(i, 90), scale: 0.9 }} class="flex justify-center">
						{#if partner.logo}
							<img
								src={assetUrl(partner.logo)}
								alt={partner.name}
								class="h-12 w-auto object-contain opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
							/>
						{:else}
							<span class="text-sm font-medium text-muted-foreground">{partner.name}</span>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</section>
{/if}

<!-- Operations -->
<section class="py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<SectionHeading kicker="Operations" title="How we deliver" align="center" />
		<div class="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
			<div use:reveal={{ y: 24 }} class="lift rounded-xl border border-border p-8 text-center">
				<Store class="mx-auto size-8 text-brand-terracotta" />
				<h3 class="mt-4 font-heading text-lg font-semibold">Distribution</h3>
				<p class="mt-2 text-sm text-muted-foreground">Each brand operates through its own dedicated shop.</p>
			</div>
			<div use:reveal={{ delay: 100, y: 24 }} class="lift rounded-xl border border-border p-8 text-center">
				<Truck class="mx-auto size-8 text-brand-terracotta" />
				<h3 class="mt-4 font-heading text-lg font-semibold">Logistics</h3>
				<p class="mt-2 text-sm text-muted-foreground">
					We provide full delivery and logistics information to ensure a seamless customer experience.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="relative isolate overflow-hidden py-28">
	<img src="/lalo-plantation.webp" alt="" class="absolute inset-0 -z-20 h-full w-full object-cover" />
	<div class="absolute inset-0 -z-10 bg-gradient-to-b from-brand-navy/90 via-brand-navy/85 to-brand-navy/95"></div>
	<div class="container mx-auto px-4 text-center sm:px-6">
		<h2 use:reveal class="font-heading text-3xl font-bold text-white md:text-4xl">
			Let's Work Together
		</h2>
		<p use:reveal={{ delay: 120 }} class="mx-auto mt-4 max-w-xl text-white/80">
			Interested in sourcing premium Ethiopian coffee, or partnering with one of our subsidiaries?
			We'd love to hear from you.
		</p>
		<div use:reveal={{ delay: 240 }}>
			<Button href="/contact" size="lg" class="mt-8 bg-brand-terracotta text-white hover:bg-brand-terracotta/90">
				Get in Touch
			</Button>
		</div>
	</div>
</section>
