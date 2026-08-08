<script lang="ts">
	import ContentPage from '$lib/dashboard/content-page.svelte';
	import {
		column,
		deleteColumn,
		editColumn,
		imageColumn,
		indexColumn
	} from '$lib/dashboard/columns';
	import type { CrudField } from '$lib/components/Table/crud-dialog.svelte';

	let { data } = $props();

	const fields: CrudField[] = [
		{ name: 'name', label: 'Partner name', type: 'text', required: true },
		{ name: 'websiteUrl', label: 'Website', type: 'text', placeholder: 'https://…' },
		{ name: 'logo', label: 'Logo', type: 'file' },
		{ name: 'sortOrder', label: 'Display order', type: 'number' }
	];

	const columns = [
		indexColumn,
		column('name', 'Name'),
		column('websiteUrl', 'Website'),
		imageColumn('logo', 'Logo'),
		column('sortOrder', 'Order'),
		editColumn({
			data: data.editForm,
			fields,
			title: 'Edit Partner',
			keys: ['name', 'websiteUrl', 'sortOrder'],
			fileKeys: ['logo']
		}),
		deleteColumn(data.deleteForm, 'name')
	];
</script>

<ContentPage
	title="Partners"
	description="Shown on the About page and in the site footer."
	addTitle="Add Partner"
	addForm={data.addForm}
	{fields}
	{columns}
	rows={data.rows}
/>
