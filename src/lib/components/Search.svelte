<script lang="ts">
	import * as Command from '$lib/components/ui/command/index.js';
	import { Disc, Search } from '@lucide/svelte';
	import * as Dialog from '$lib/components/ui/dialog/index.js';

	let isOpen = $state(false);
	let list = [
		{ label: 'Dashboard', path: '/dashboard' },
		{ label: 'Messages', path: '/dashboard/messages' },
		{ label: 'Testimonials', path: '/dashboard/testimonials' },

		// Website content
		{ label: 'Page Banners', path: '/dashboard/content/heroes' },
		{ label: 'Page Sections', path: '/dashboard/content/page-sections' },
		{ label: 'Company Stats', path: '/dashboard/content/company-stats' },
		{ label: 'Gallery Images', path: '/dashboard/content/gallery' },
		{ label: 'Company Milestones', path: '/dashboard/content/milestones' },
		{ label: 'Core Values', path: '/dashboard/content/value-props' },
		{ label: 'Regions & Profiles', path: '/dashboard/content/coffee-regions' },
		{ label: 'Traceability Steps', path: '/dashboard/content/traceability' },
		{ label: 'Partners', path: '/dashboard/content/partners' },
		{ label: 'Subsidiaries', path: '/dashboard/content/subsidiaries' },
		{ label: 'Export Markets', path: '/dashboard/content/export-markets' },
		{ label: 'FAQs', path: '/dashboard/content/faqs' },
		{ label: 'Site Settings', path: '/dashboard/content/settings' },

		// Administration
		{ label: 'Roles', path: '/dashboard/admin-panel/roles' },
		{ label: 'Add Roles', path: '/dashboard/admin-panel/roles/add-roles' },
		{ label: 'Users', path: '/dashboard/admin-panel/users' },
		{ label: 'Add Users', path: '/dashboard/admin-panel/users/add-users' }
	];
</script>

<Dialog.Root bind:open={isOpen}>
	<Dialog.Trigger class="w-auto px-4" title="Search for Pages"><Search /></Dialog.Trigger>
	<Dialog.Content class="max-w-lg! gap-4 overflow-hidden">
		<Dialog.Header>
			<Dialog.Title>Search the whole site</Dialog.Title>
		</Dialog.Header>
		<!-- Command.List brings its own max-height and scrolling, so no ScrollArea. -->
		<Command.Root class="w-full min-w-0 rounded-lg border">
			<Command.Input placeholder="Type a page name..." />
			<Command.List>
				<Command.Empty>No results found.</Command.Empty>
				<Command.Group heading="Pages">
					{#each list as item (item.path)}
						<Command.LinkItem
							href={item.path}
							value={item.label}
							onSelect={() => (isOpen = false)}
						>
							<Disc />
							{item.label}
						</Command.LinkItem>
					{/each}
				</Command.Group>
			</Command.List>
		</Command.Root>
	</Dialog.Content>
</Dialog.Root>
