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
	const valuePages = [
		{ value: 'home', name: 'Home page' },
		{ value: 'about', name: 'About page' }
	];

	const fields: CrudField[] = [
		{ name: 'page', label: 'Page', type: 'select', required: true, items: valuePages },
		{ name: 'icon', label: 'Icon', type: 'select', items: iconItems },
		{ name: 'title', label: 'Title', type: 'text', required: true },
		{ name: 'description', label: 'Description', type: 'textarea', rows: 3 },
		{ name: 'sortOrder', label: 'Display order', type: 'number' }
	];

	const columns = [
		indexColumn,
		column('page', 'Page'),
		column('title', 'Title'),
		column('icon', 'Icon'),
		longColumn('description', 'Description'),
		column('sortOrder', 'Order'),
		editColumn({
			data: data.editForm,
			fields,
			title: 'Edit Value',
			keys: ['page', 'icon', 'title', 'description', 'sortOrder']
		}),
		deleteColumn(data.deleteForm, 'title')
	];
</script>

<ContentPage
	title="Core Values"
	description="The icon cards shown on the Home and About pages (grouped by the 'page' field)."
	addTitle="Add Value"
	addForm={data.addForm}
	{fields}
	{columns}
	rows={data.rows}
/>
