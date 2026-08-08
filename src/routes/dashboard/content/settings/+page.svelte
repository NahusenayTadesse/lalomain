<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { toast } from 'svelte-sonner';
	import { Button } from '$lib/components/ui/button/index.js';
	import FormCard from '$lib/formComponents/FormCard.svelte';
	import InputComp from '$lib/formComponents/InputComp.svelte';
	import Errors from '$lib/formComponents/Errors.svelte';
	import LoadingBtn from '$lib/formComponents/LoadingBtn.svelte';
	import { Save } from '@lucide/svelte';

	let { data } = $props();

	const { form, errors, allErrors, enhance, delayed, message } = superForm(data.form, {
		resetForm: false
	});

	$effect(() => {
		if (!$message) return;
		if ($message.type === 'error') toast.error($message.text);
		else toast.success($message.text);
	});
</script>

<svelte:head>
	<title>Site Settings | Dashboard</title>
</svelte:head>

<div class="flex flex-col gap-4 p-2">
	<div>
		<h1 class="font-heading text-2xl font-bold">Site Settings</h1>
		<p class="mt-1 max-w-2xl text-sm text-muted-foreground">
			Company contact details. These appear on the Contact page and in the footer of every page.
			The first email and the first phone number are the ones shown in the footer.
		</p>
	</div>

	<FormCard title="Contact details" description="Changes go live as soon as you save.">
		<form method="post" action="?/save" id="settings" use:enhance class="flex flex-col gap-2">
			<Errors allErrors={$allErrors} />

			<InputComp
				{form}
				{errors}
				label="Email addresses"
				name="emails"
				type="textarea"
				rows={4}
				placeholder="One per line, as: General Inquiries | hello@mohammedlaloie.com"
			/>
			<InputComp
				{form}
				{errors}
				label="Phone numbers"
				name="phones"
				type="textarea"
				rows={3}
				placeholder="One per line, e.g. +251 969 211 115"
			/>
			<InputComp {form} {errors} label="Office address" name="address" type="text" />
			<InputComp {form} {errors} label="Tagline" name="tagline" type="text" />
			<InputComp
				{form}
				{errors}
				label="Footer paragraph"
				name="footerBlurb"
				type="textarea"
				rows={4}
			/>
			<InputComp
				{form}
				{errors}
				label="Social links"
				name="socialLinks"
				type="textarea"
				rows={3}
				placeholder="One per line, as: facebook | https://facebook.com/lalo"
			/>

			<Button type="submit" form="settings" class="mt-4">
				{#if $delayed}
					<LoadingBtn name="Saving" />
				{:else}
					<Save class="size-4" /> Save Settings
				{/if}
			</Button>
		</form>
	</FormCard>
</div>
