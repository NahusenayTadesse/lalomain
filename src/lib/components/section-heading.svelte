<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	let {
		kicker,
		title,
		subtitle,
		align = 'start',
		class: className = ''
	}: {
		/** Short uppercase label above the title, e.g. "Who We Are". */
		kicker?: string | null;
		title: string;
		subtitle?: string | null;
		align?: 'center' | 'start';
		class?: string;
	} = $props();
</script>

<div class="{align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} {className}">
	{#if kicker}
		<p
			use:reveal
			class="mb-3 flex items-center gap-2.5 text-xs font-semibold tracking-[0.25em] text-brand-terracotta uppercase {align ===
			'center'
				? 'justify-center'
				: ''}"
		>
			<span class="h-px w-8 bg-brand-terracotta"></span>
			{kicker}
		</p>
	{/if}
	<h2 use:reveal={{ delay: 80 }} class="font-heading text-3xl font-bold text-balance md:text-4xl">
		{title}
	</h2>
	{#if subtitle}
		<p use:reveal={{ delay: 160 }} class="mt-4 text-muted-foreground">{subtitle}</p>
	{/if}
</div>
