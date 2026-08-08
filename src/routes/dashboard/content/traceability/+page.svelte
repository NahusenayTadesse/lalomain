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
	import { iconNames } from '$lib/components/dynamic-icon.svelte';

	let { data } = $props();

	const iconItems = iconNames.map((name) => ({ value: name, name }));

	const fields: CrudField[] = [
		{ name: 'title', label: 'Step', type: 'text', required: true, placeholder: 'e.g. Coffee Collection' },
		{ name: 'description', label: 'Detail', type: 'textarea', placeholder: 'e.g. 114 collection centers, weight and code records', rows: 3 },
		{ name: 'icon', label: 'Icon', type: 'select', items: iconItems },
		{ name: 'sortOrder', label: 'Display order', type: 'number' }
	];

	const columns = [
		indexColumn,
		column('title', 'Step'),
		longColumn('description', 'Detail'),
		column('sortOrder', 'Order'),
		editColumn({
			data: data.editForm,
			fields,
			title: 'Edit Step',
			keys: ['title', 'description', 'icon', 'sortOrder']
		}),
		deleteColumn(data.deleteForm, 'title')
	];
</script>

<ContentPage
	title="Traceability Steps"
	description="Coffee chain-of-custody steps. Not currently rendered anywhere — available for a future Lalo Coffee Export page."
	addTitle="Add Step"
	addForm={data.addForm}
	{fields}
	{columns}
	rows={data.rows}
/>
