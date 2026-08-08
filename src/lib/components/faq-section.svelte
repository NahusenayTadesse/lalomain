<script lang="ts">
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger
	} from '$lib/components/ui/accordion';
	import SectionHeading from '$lib/components/section-heading.svelte';
	import { reveal } from '$lib/actions/reveal';

	let {
		faqs,
		title = 'Frequently Asked Questions',
		subtitle,
		class: className = ''
	}: {
		faqs: { id: number; question: string; answer: string }[];
		title?: string;
		subtitle?: string;
		class?: string;
	} = $props();
</script>

{#if faqs.length}
	<section class="py-20 {className}">
		<div class="container mx-auto px-4 sm:px-6">
			<SectionHeading {title} {subtitle} />
			<div use:reveal={{ delay: 120, y: 28 }} class="mx-auto mt-12 max-w-3xl">
				<Accordion type="single" class="w-full">
					{#each faqs as faq (faq.id)}
						<AccordionItem value="item-{faq.id}">
							<AccordionTrigger class="text-left">{faq.question}</AccordionTrigger>
							<AccordionContent class="text-muted-foreground">{faq.answer}</AccordionContent>
						</AccordionItem>
					{/each}
				</Accordion>
			</div>
		</div>
	</section>
{/if}
