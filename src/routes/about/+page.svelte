<script lang="ts">
	import PageHero from '$lib/components/page-hero.svelte';
	import SectionHeading from '$lib/components/section-heading.svelte';
	import DynamicIcon from '$lib/components/dynamic-icon.svelte';
	import { reveal, stagger } from '$lib/actions/reveal';
	import { Target, Eye } from '@lucide/svelte';
	import { assetUrl } from '$lib/assets';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>About Us | Lalo Import and Export</title>
</svelte:head>

{#if data.hero}
	<PageHero hero={data.hero} />
{/if}

<!-- Who We Are -->
{#if data.whoWeAre}
	<section class="py-20">
		<div class="container mx-auto px-4 sm:px-6">
			<div class="grid items-center gap-12 lg:grid-cols-2">
				<div>
					<SectionHeading kicker="Who We Are" title={data.whoWeAre.title ?? 'Who We Are'} />
					<p use:reveal={{ delay: 120 }} class="mt-6 text-lg text-muted-foreground whitespace-pre-line">
						{data.whoWeAre.body}
					</p>
				</div>
				<div
					use:reveal={{ x: 28, y: 0, scale: 0.97, duration: 1000 }}
					class="group order-first overflow-hidden rounded-xl border border-border shadow-sm lg:order-last"
				>
					<img
						src={assetUrl(data.whoWeAre.image ?? 'lalo-plantation.webp')}
						alt="Ethiopian coffee plantation hillside at sunrise"
						class="aspect-4/3 w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
					/>
				</div>
			</div>

			{#if data.stats.length}
				<div class="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-6 border-y border-border py-8">
					{#each data.stats as stat, i (stat.id)}
						<div use:reveal={{ delay: stagger(i, 100) }} class="text-center">
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

<!-- Our Story -->
{#if data.ourStory}
	<section class="bg-muted/40 py-20">
		<div class="container mx-auto max-w-3xl px-4 text-center sm:px-6">
			<SectionHeading kicker="Our Story" title={data.ourStory.title ?? 'Our Story'} align="center" />
			<p use:reveal={{ delay: 120 }} class="mt-6 text-lg text-muted-foreground whitespace-pre-line">
				{data.ourStory.body}
			</p>
		</div>
	</section>
{/if}

<!-- Mission & Vision -->
{#if data.mission || data.vision}
	<section class="py-20">
		<div class="container mx-auto px-4 sm:px-6">
			<div class="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
				{#if data.mission}
					<div use:reveal={{ y: 24 }} class="rounded-xl border border-border bg-card p-8">
						<Target class="size-8 text-brand-terracotta" />
						<h3 class="mt-4 font-heading text-xl font-bold">{data.mission.title ?? 'Our Mission'}</h3>
						<p class="mt-3 text-muted-foreground">{data.mission.body}</p>
					</div>
				{/if}
				{#if data.vision}
					<div use:reveal={{ delay: 100, y: 24 }} class="rounded-xl border border-border bg-card p-8">
						<Eye class="size-8 text-brand-terracotta" />
						<h3 class="mt-4 font-heading text-xl font-bold">{data.vision.title ?? 'Our Vision'}</h3>
						<p class="mt-3 text-muted-foreground">{data.vision.body}</p>
					</div>
				{/if}
			</div>
		</div>
	</section>
{/if}

<!-- Core values -->
<section class="relative isolate overflow-hidden bg-brand-navy py-20 text-brand-navy-foreground">
	<div class="container mx-auto px-4 sm:px-6">
		<SectionHeading kicker="What Drives Us" title="Our Core Values" align="center" />
		<div class="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each data.values as item, i (item.id)}
				<div use:reveal={{ delay: stagger(i, 90), y: 24, scale: 0.97 }} class="group text-center">
					<DynamicIcon
						name={item.icon}
						class="mx-auto size-7 text-brand-terracotta transition-transform duration-500 group-hover:-translate-y-1"
					/>
					<h3 class="mt-4 font-semibold">{item.title}</h3>
					<p class="mt-2 text-sm text-brand-navy-foreground/70">{item.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- How We Operate -->
{#if data.howWeOperate}
	<section class="py-20">
		<div class="container mx-auto max-w-3xl px-4 text-center sm:px-6">
			<SectionHeading
				kicker="How We Operate"
				title={data.howWeOperate.title ?? 'How We Operate'}
				align="center"
			/>
			<p use:reveal={{ delay: 120 }} class="mt-6 text-muted-foreground whitespace-pre-line">
				{data.howWeOperate.body}
			</p>
		</div>
	</section>
{/if}
