<script lang="ts">
	import {
		UserRoundCog,
		LayoutDashboard,
		Mail,
		Star,
		Building2,
		Coffee,
		LayoutTemplate
	} from '@lucide/svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import type { ComponentProps } from 'svelte';
	import { bgGradient } from '$lib/global.svelte';
	import { useSidebar } from '$lib/components/ui/sidebar/index.js';
	import NavMain from './NavMain.svelte';

	let {
		messageNumber,
		...restProps
	}: ComponentProps<typeof Sidebar.Root> & { messageNumber?: number } = $props();

	const navigation = [
		{
			section: null,
			items: [
				{ title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
				{
					title: 'Messages',
					url: '/dashboard/messages',
					icon: Mail,
					counter: messageNumber
				}
			]
		},
		{
			section: 'Website Content',
			items: [
				{
					title: 'Pages',
					url: '/dashboard/content/heroes',
					icon: LayoutTemplate,
					items: [
						{ title: 'Page Banners', url: '/dashboard/content/heroes' },
						{ title: 'Page Sections', url: '/dashboard/content/page-sections' },
						{ title: 'Company Stats', url: '/dashboard/content/company-stats' },
						{ title: 'Gallery Images', url: '/dashboard/content/gallery' },
						{ title: 'Company Milestones', url: '/dashboard/content/milestones' },
						{ title: 'Core Values', url: '/dashboard/content/value-props' }
					]
				},
				{
					title: 'Coffee',
					url: '/dashboard/content/coffee-regions',
					icon: Coffee,
					items: [
						{ title: 'Regions & Profiles', url: '/dashboard/content/coffee-regions' },
						{ title: 'Traceability Steps', url: '/dashboard/content/traceability' }
					]
				},
				{
					title: 'Company',
					url: '/dashboard/content/partners',
					icon: Building2,
					items: [
						{ title: 'Partners', url: '/dashboard/content/partners' },
						{ title: 'Subsidiaries', url: '/dashboard/content/subsidiaries' },
						{ title: 'Export Markets', url: '/dashboard/content/export-markets' },
						{ title: 'FAQs', url: '/dashboard/content/faqs' },
						{ title: 'Site Settings', url: '/dashboard/content/settings' }
					]
				},
				{ title: 'Testimonials', url: '/dashboard/testimonials', icon: Star }
			]
		},
		{
			section: 'Administration',
			items: [
				{
					title: 'Admin Panel',
					url: '/dashboard/admin-panel',
					icon: UserRoundCog,
					items: [
						{ title: 'Users', url: '/dashboard/admin-panel/users' },
						{ title: 'Roles', url: '/dashboard/admin-panel/roles' }
					]
				}
			]
		}
	];

	const sidebar = useSidebar();
	function closeSidebar() {
		if (sidebar.isMobile) sidebar.setOpenMobile(false);
	}
</script>

<Sidebar.Root collapsible="offcanvas" {...restProps}>
	<Sidebar.Content
		class="z-[9999] flex h-full [scrollbar-width:thin] [scrollbar-color:hsl(var(--border))_transparent] flex-col
      overflow-y-scroll
      pt-0
      [&::-webkit-scrollbar]:w-1.5
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-border
      [&::-webkit-scrollbar-track]:bg-transparent
      {bgGradient}"
	>
		<!-- Logo header -->
		<div class="sticky top-0 z-10 border-b border-border/60 bg-sidebar px-4 py-4">
			<a
				href="/"
				title="Go to Website Home Page"
				class="flex flex-row flex-wrap gap-2"
				target="_blank"
			>
				<img src="/logo.webp" alt="Logo" class="h-4 rounded-[1px]" />

				<div>
					<div class="text-[13px] font-medium tracking-tight text-foreground">Admin Panel</div>
					<div class="text-[10px] tracking-widest text-muted-foreground uppercase">Dashboard</div>
				</div>
			</a>
		</div>

		<!-- Nav sections -->
		<div class="flex-1 py-2">
			<NavMain {closeSidebar} sections={navigation} />
		</div>
	</Sidebar.Content>

	<Sidebar.Footer class="border-t border-border/60 bg-sidebar px-4 py-3">
		<p class="text-[10px] text-muted-foreground">
			Powered by{' '}
			<a
				href="https://nahusenaytadesse.vercel.app"
				target="_blank"
				class="font-medium text-foreground no-underline hover:underline"
			>
				NT
			</a>
		</p>
	</Sidebar.Footer>
</Sidebar.Root>
