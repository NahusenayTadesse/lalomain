<script lang="ts">
	import { Card, CardContent } from '$lib/components/ui/card';
	import PageHero from '$lib/components/page-hero.svelte';
	import SectionHeading from '$lib/components/section-heading.svelte';
	import ContactForm from '$lib/forms/ContactForm.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { Mail, Phone, MapPin } from '@lucide/svelte';
	import type { Snippet } from 'svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const settings = $derived(data.settings);
</script>

{#snippet card(delay: number, Icon: typeof MapPin, title: string, body: Snippet)}
	<div use:reveal={{ delay, y: 32, scale: 0.97 }}>
		<Card class="lift group h-full border-t-2 border-t-brand-terracotta hover:shadow-lg">
			<CardContent class="pt-6">
				<div class="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
					<Icon class="size-5 transition-transform duration-500 group-hover:-translate-y-0.5" />
				</div>
				<h3 class="mt-4 font-semibold">{title}</h3>
				{@render body()}
			</CardContent>
		</Card>
	</div>
{/snippet}

{#snippet address()}
	<p class="mt-2 text-sm text-muted-foreground">{settings?.address}</p>
{/snippet}

{#snippet emails()}
	<ul class="mt-2 space-y-2">
		{#each settings?.emails ?? [] as email (email.value)}
			<li>
				<p class="text-xs text-muted-foreground">{email.label}</p>
				<a
					href="mailto:{email.value}"
					class="text-sm break-all text-foreground transition-colors hover:text-primary"
				>
					{email.value}
				</a>
			</li>
		{/each}
	</ul>
{/snippet}

{#snippet phones()}
	<ul class="mt-2 space-y-1">
		{#each settings?.phones ?? [] as phone (phone)}
			<li>
				<a
					href="tel:{phone.replace(/\s/g, '')}"
					class="text-sm text-foreground transition-colors hover:text-primary"
				>
					{phone}
				</a>
			</li>
		{/each}
	</ul>
{/snippet}

<svelte:head>
	<title>Contact Us | Lalo Import and Export</title>
</svelte:head>

{#if data.hero}
	<PageHero hero={data.hero} />
{/if}

<section class="py-16">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
			{@render card(0, MapPin, 'Address', address)}
			{@render card(110, Mail, 'Email', emails)}
			{@render card(220, Phone, 'Phone', phones)}
		</div>
	</div>
</section>

<!-- Enquiry form -->
<section class="bg-muted/30 py-20">
	<div class="container mx-auto px-4 sm:px-6">
		<SectionHeading
			kicker="Get In Touch"
			title="Send Us a Message"
			subtitle="Tell us what you need and our team will get back to you."
			align="center"
		/>
		<div use:reveal={{ delay: 160, y: 32 }} class="mx-auto mt-12 max-w-2xl rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
			<ContactForm data={data.form} />
		</div>
	</div>
</section>
