<script lang="ts">
	import { reveal, stagger } from '$lib/actions/reveal';
	import type { Milestone } from '$lib/types';

	let {
		milestones,
		columns = 'md:grid-cols-3',
		/** Ring the final card, as the home page does to mark "where we are now". */
		highlightLast = false
	}: { milestones: Milestone[]; columns?: string; highlightLast?: boolean } = $props();
</script>

<div class="grid gap-6 {columns}">
	{#each milestones as stage, i (stage.title)}
		<div
			use:reveal={{ delay: stagger(i, 130), y: 32 }}
			class="lift relative rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-lg {highlightLast &&
			i === milestones.length - 1
				? 'ring-2 ring-primary/50'
				: ''}"
		>
			<div class="text-sm font-bold text-primary">{stage.period}</div>
			<h3 class="mt-2 text-xl font-semibold">{stage.title}</h3>
			<p class="mt-3 text-sm text-muted-foreground">{stage.description}</p>
		</div>
	{/each}
</div>
