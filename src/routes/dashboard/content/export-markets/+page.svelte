<script lang="ts">
	import ContentPage from '$lib/dashboard/content-page.svelte';
	import {
		column,
		deleteColumn,
		editColumn,
		indexColumn
	} from '$lib/dashboard/columns';
	import type { CrudField } from '$lib/components/Table/crud-dialog.svelte';

	let { data } = $props();

	const fields: CrudField[] = [
		{ name: 'name', label: 'Market', type: 'text', required: true, placeholder: 'e.g. North America' },
		{ name: 'sortOrder', label: 'Display order', type: 'number' }
	];

	const columns = [
		indexColumn,
		column('name', 'Market'),
		column('sortOrder', 'Order'),
		editColumn({
			data: data.editForm,
			fields,
			title: 'Edit Market',
			keys: ['name', 'sortOrder']
		}),
		deleteColumn(data.deleteForm, 'name')
	];
</script>

<ContentPage
	title="Export Markets"
	description="The destinations listed in the 'A Global Reach' band on the home page."
	addTitle="Add Market"
	addForm={data.addForm}
	{fields}
	{columns}
	rows={data.rows}
/>
