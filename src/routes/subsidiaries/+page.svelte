<script lang="ts">
	import PageHero from '$lib/components/page-hero.svelte';
	import SectionHeading from '$lib/components/section-heading.svelte';
	import DynamicIcon from '$lib/components/dynamic-icon.svelte';
	import { reveal, stagger } from '$lib/actions/reveal';
	import { ArrowUpRight } from '@lucide/svelte';
	import { assetUrl } from '$lib/assets';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Subsidiaries | Lalo Import and Export</title>
</svelte:head>

{#if data.hero}
	<PageHero hero={data.hero} />
{/if}

<section class="py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<SectionHeading
			kicker="Our Companies"
			title="One brand, six specialised businesses"
			subtitle="Every subsidiary operates with its own identity and expertise, while sharing the standards and trust of the Lalo name."
		/>

		<div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each data.ventures as venture, i (venture.id)}
				<div
					use:reveal={{ delay: stagger(i, 90), y: 28, scale: 0.98 }}
					class="lift group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card"
				>
					<div class="relative h-44 overflow-hidden">
						{#if venture.image}
							<img
								src={assetUrl(venture.image)}
								alt={venture.imageAlt ?? venture.title}
								class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent"></div>
						{:else}
							<div class="h-full w-full bg-brand-navy"></div>
						{/if}

						<div
							class="absolute top-4 left-4 flex size-11 items-center justify-center rounded-lg bg-background/90 text-primary backdrop-blur"
						>
							{#if venture.logo}
								<img
									src={assetUrl(venture.logo)}
									alt="{venture.title} logo"
									class="size-6 object-contain"
								/>
							{:else}
								<DynamicIcon name={venture.icon} fallback="Building2" class="size-5" />
							{/if}
						</div>

						<h3
							class="absolute right-4 bottom-3 left-4 font-heading text-xl leading-tight font-bold text-white"
						>
							{venture.title}
						</h3>
					</div>

					<div class="flex flex-1 flex-col p-6">
						{#if venture.tagline}
							<p class="text-sm font-medium text-brand-terracotta">{venture.tagline}</p>
						{/if}
						<p class="mt-2 flex-1 text-sm text-muted-foreground">{venture.description}</p>

						{#if venture.tags?.length}
							<div class="mt-4 flex flex-wrap gap-2">
								{#each venture.tags as tag (tag)}
									<span
										class="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground/80"
									>
										{tag}
									</span>
								{/each}
							</div>
						{/if}

						<a
							href={venture.websiteUrl ?? '/contact'}
							target={venture.websiteUrl ? '_blank' : undefined}
							rel={venture.websiteUrl ? 'noopener noreferrer' : undefined}
							class="group/link mt-5 inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary"
						>
							{venture.websiteUrl ? 'Visit website' : 'Get in touch'}
							<ArrowUpRight
								class="size-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
							/>
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
