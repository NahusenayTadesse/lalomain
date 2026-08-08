<script lang="ts">
	import ContentPage from '$lib/dashboard/content-page.svelte';
	import { column, deleteColumn, editColumn, indexColumn } from '$lib/dashboard/columns';
	import type { CrudField } from '$lib/components/Table/crud-dialog.svelte';

	let { data } = $props();

	const statPages = [
		{ value: 'home', name: 'Home page' },
		{ value: 'about', name: 'About page' }
	];

	const fields: CrudField[] = [
		{ name: 'page', label: 'Page', type: 'select', required: true, items: statPages },
		{ name: 'label', label: 'Label', type: 'text', required: true, placeholder: 'e.g. Subsidiaries' },
		{ name: 'value', label: 'Value', type: 'text', required: true, placeholder: 'e.g. 6' },
		{ name: 'sortOrder', label: 'Display order', type: 'number' }
	];

	const columns = [
		indexColumn,
		column('page', 'Page'),
		column('label', 'Label'),
		column('value', 'Value'),
		column('sortOrder', 'Order'),
		editColumn({
			data: data.editForm,
			fields,
			title: 'Edit Stat',
			keys: ['page', 'label', 'value', 'sortOrder']
		}),
		deleteColumn(data.deleteForm, 'label')
	];
</script>

<ContentPage
	title="Company Stats"
	description="Small stat badges, e.g. the fact strip on the Home and About pages."
	addTitle="Add Stat"
	addForm={data.addForm}
	{fields}
	{columns}
	rows={data.rows}
/>
