<script lang="ts">
	import ContentPage from '$lib/dashboard/content-page.svelte';
	import {
		column,
		deleteColumn,
		editColumn,
		imageColumn,
		indexColumn,
		listColumn,
		longColumn
	} from '$lib/dashboard/columns';
	import type { CrudField } from '$lib/components/Table/crud-dialog.svelte';
	import { iconNames } from '$lib/components/dynamic-icon.svelte';

	let { data } = $props();

	const iconItems = iconNames.map((name) => ({ value: name, name }));

	const fields: CrudField[] = [
		{ name: 'title', label: 'Subsidiary name', type: 'text', required: true },
		{ name: 'tagline', label: 'Tagline', type: 'text', placeholder: 'One-line pitch shown on the card' },
		{ name: 'description', label: 'Description', type: 'textarea', rows: 5 },
		{ name: 'image', label: 'Photo', type: 'file' },
		{ name: 'imageAlt', label: 'Image description', type: 'text', placeholder: 'For screen readers' },
		{ name: 'icon', label: 'Icon', type: 'select', items: iconItems },
		{ name: 'logo', label: 'Logo', type: 'file' },
		{ name: 'websiteUrl', label: 'Website', type: 'text', placeholder: 'https://…' },
		{ name: 'tags', label: 'Tags', type: 'textarea', placeholder: 'One tag per line, e.g. Export', rows: 3 },
		{
			name: 'regionsServed',
			label: 'Regions served',
			type: 'textarea',
			placeholder: 'One region per line',
			rows: 4
		},
		{ name: 'sortOrder', label: 'Display order', type: 'number' }
	];

	const columns = [
		indexColumn,
		column('title', 'Name'),
		column('tagline', 'Tagline'),
		imageColumn('image', 'Photo'),
		imageColumn('logo', 'Logo'),
		column('websiteUrl', 'Website'),
		longColumn('description', 'Description'),
		listColumn('tags', 'Tags'),
		listColumn('regionsServed', 'Regions'),
		column('sortOrder', 'Order'),
		editColumn({
			data: data.editForm,
			fields,
			title: 'Edit Subsidiary',
			keys: [
				'title',
				'tagline',
				'description',
				'imageAlt',
				'icon',
				'websiteUrl',
				'tags',
				'regionsServed',
				'sortOrder'
			],
			fileKeys: ['image', 'logo'],
			listKeys: ['tags', 'regionsServed']
		}),
		deleteColumn(data.deleteForm, 'title')
	];
</script>

<ContentPage
	title="Subsidiaries"
	description="The business units listed on the Subsidiaries page."
	addTitle="Add Subsidiary"
	addForm={data.addForm}
	{fields}
	{columns}
	rows={data.rows}
/>
