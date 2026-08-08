<script lang="ts">
	import ContentPage from '$lib/dashboard/content-page.svelte';
	import {
		column,
		deleteColumn,
		editColumn,
		indexColumn,
		longColumn
	} from '$lib/dashboard/columns';
	import type { CrudField } from '$lib/components/Table/crud-dialog.svelte';

	let { data } = $props();

	const fields: CrudField[] = [
		{ name: 'name', label: 'Region', type: 'text', required: true },
		{ name: 'cupping', label: 'Cupping notes', type: 'text', placeholder: 'Comma separated - each becomes a badge' },
		{ name: 'aroma', label: 'Aroma', type: 'textarea', rows: 2 },
		{ name: 'flavor', label: 'Flavour', type: 'textarea', rows: 3 },
		{ name: 'image', label: 'Image', type: 'file' },
		{ name: 'sortOrder', label: 'Display order', type: 'number' }
	];

	const columns = [
		indexColumn,
		column('name', 'Region'),
		longColumn('cupping', 'Cupping'),
		longColumn('aroma', 'Aroma'),
		longColumn('flavor', 'Flavour'),
		column('sortOrder', 'Order'),
		editColumn({
			data: data.editForm,
			fields,
			title: 'Edit Region',
			keys: ['name', 'cupping', 'aroma', 'flavor', 'sortOrder'],
			fileKeys: ['image']
		}),
		deleteColumn(data.deleteForm, 'name')
	];
</script>

<ContentPage
	title="Regions & Tasting Profiles"
	description="Ethiopian origin tasting profiles. Not currently rendered anywhere — available for a future Lalo Coffee Export page."
	addTitle="Add Region"
	addForm={data.addForm}
	{fields}
	{columns}
	rows={data.rows}
/>
