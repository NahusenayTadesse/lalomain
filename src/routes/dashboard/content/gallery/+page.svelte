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

	const galleryPages = [
		{ value: 'home', name: 'Home page' },
		{ value: 'about', name: 'About page' },
		{ value: 'subsidiaries', name: 'Subsidiaries page' }
	];

	const fields: CrudField[] = [
		{ name: 'page', label: 'Page', type: 'select', required: true, items: galleryPages },
		{ name: 'src', label: 'Image', type: 'file', required: true },
		{ name: 'caption', label: 'Caption', type: 'text' },
		{ name: 'alt', label: 'Image description', type: 'text', placeholder: 'For screen readers' },
		{ name: 'sortOrder', label: 'Display order', type: 'number' }
	];

	const columns = [
		indexColumn,
		column('page', 'Page'),
		imageColumn('src', 'Image'),
		column('caption', 'Caption'),
		longColumn('alt', 'Description'),
		column('sortOrder', 'Order'),
		editColumn({
			data: data.editForm,
			fields,
			title: 'Edit Image',
			keys: ['page', 'caption', 'alt', 'sortOrder'],
			fileKeys: ['src']
		}),
		deleteColumn(data.deleteForm, 'caption')
	];
</script>

<ContentPage
	title="Gallery Images"
	description="The image carousels. Each image belongs to one page."
	addTitle="Add Image"
	addForm={data.addForm}
	{fields}
	{columns}
	rows={data.rows}
/>
