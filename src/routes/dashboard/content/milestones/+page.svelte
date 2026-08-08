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

	const milestonePages = [
		{ value: 'home', name: 'Home page' },
		{ value: 'about', name: 'About page' }
	];

	const fields: CrudField[] = [
		{ name: 'page', label: 'Page', type: 'select', required: true, items: milestonePages },
		{ name: 'period', label: 'Period', type: 'text', required: true, placeholder: 'e.g. Late 1990s or 2006' },
		{ name: 'title', label: 'Title', type: 'text', required: true },
		{ name: 'description', label: 'Description', type: 'textarea', rows: 3 },
		{ name: 'sortOrder', label: 'Display order', type: 'number' }
	];

	const columns = [
		indexColumn,
		column('page', 'Page'),
		column('period', 'Period'),
		column('title', 'Title'),
		longColumn('description', 'Description'),
		column('sortOrder', 'Order'),
		editColumn({
			data: data.editForm,
			fields,
			title: 'Edit Milestone',
			keys: ['page', 'period', 'title', 'description', 'sortOrder']
		}),
		deleteColumn(data.deleteForm, 'title')
	];
</script>

<ContentPage
	title="Company Milestones"
	description="The history timeline. Each milestone belongs to either the home page or the About page."
	addTitle="Add Milestone"
	addForm={data.addForm}
	{fields}
	{columns}
	rows={data.rows}
/>
