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

	const faqPages = [
		{ value: 'home', name: 'Home page' },
		{ value: 'about', name: 'About page' },
		{ value: 'subsidiaries', name: 'Subsidiaries page' }
	];

	const fields: CrudField[] = [
		{ name: 'page', label: 'Page', type: 'select', required: true, items: faqPages },
		{ name: 'question', label: 'Question', type: 'text', required: true },
		{ name: 'answer', label: 'Answer', type: 'textarea', required: true, rows: 5 },
		{ name: 'sortOrder', label: 'Display order', type: 'number' }
	];

	const columns = [
		indexColumn,
		column('page', 'Page'),
		longColumn('question', 'Question'),
		longColumn('answer', 'Answer'),
		column('sortOrder', 'Order'),
		editColumn({
			data: data.editForm,
			fields,
			title: 'Edit FAQ',
			keys: ['page', 'question', 'answer', 'sortOrder']
		}),
		deleteColumn(data.deleteForm, 'question')
	];
</script>

<ContentPage
	title="FAQs"
	description="The accordion sections on the marketing pages. Each question belongs to one page. Not currently rendered anywhere — available for future use."
	addTitle="Add FAQ"
	addForm={data.addForm}
	{fields}
	{columns}
	rows={data.rows}
/>
