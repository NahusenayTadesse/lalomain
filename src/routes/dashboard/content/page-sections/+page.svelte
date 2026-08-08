<script lang="ts">
	import ContentPage from '$lib/dashboard/content-page.svelte';
	import {
		column,
		deleteColumn,
		editColumn,
		imageColumn,
		indexColumn,
		longColumn
	} from '$lib/dashboard/columns';
	import type { CrudField } from '$lib/components/Table/crud-dialog.svelte';

	let { data } = $props();

	const sectionPages = [
		{ value: 'home', name: 'Home page' },
		{ value: 'about', name: 'About page' }
	];

	const fields: CrudField[] = [
		{ name: 'page', label: 'Page', type: 'select', required: true, items: sectionPages },
		{
			name: 'slug',
			label: 'Slug',
			type: 'text',
			required: true,
			placeholder: 'e.g. who-we-are, our-story, mission, vision, how-we-operate'
		},
		{ name: 'title', label: 'Title', type: 'text' },
		{ name: 'body', label: 'Body', type: 'textarea', rows: 6 },
		{ name: 'image', label: 'Image', type: 'file' },
		{ name: 'sortOrder', label: 'Display order', type: 'number' }
	];

	const columns = [
		indexColumn,
		column('page', 'Page'),
		column('slug', 'Slug'),
		column('title', 'Title'),
		longColumn('body', 'Body'),
		imageColumn('image', 'Image'),
		column('sortOrder', 'Order'),
		editColumn({
			data: data.editForm,
			fields,
			title: 'Edit Section',
			keys: ['page', 'slug', 'title', 'body', 'sortOrder'],
			fileKeys: ['image']
		}),
		deleteColumn(data.deleteForm, 'slug')
	];
</script>

<ContentPage
	title="Page Sections"
	description="Freeform prose blocks looked up by page + slug — About's Who We Are, Our Story, Mission, Vision, and How We Operate."
	addTitle="Add Section"
	addForm={data.addForm}
	{fields}
	{columns}
	rows={data.rows}
/>
