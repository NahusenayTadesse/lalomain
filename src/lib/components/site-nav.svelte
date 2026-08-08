<script lang="ts">
	import { page } from '$app/state';
	import { Menu, X, Mail, Phone } from '@lucide/svelte';
	import ThemeToggle from '$lib/components/theme-toggle.svelte';
	import { navLinks as links } from '$lib/nav-links';

	let {
		email,
		phone
	}: {
		email?: string;
		phone?: string;
	} = $props();

	let open = $state(false);
</script>

{#if email || phone}
	<div class="hidden bg-brand-navy text-brand-navy-foreground/80 sm:block">
		<div
			class="container mx-auto flex h-9 items-center justify-end gap-6 px-4 text-xs sm:px-6"
		>
			{#if email}
				<a
					href="mailto:{email}"
					class="flex items-center gap-1.5 transition-colors hover:text-brand-terracotta"
				>
					<Mail class="size-3.5" /> {email}
				</a>
			{/if}
			{#if phone}
				<a
					href="tel:{phone.replace(/\s/g, '')}"
					class="flex items-center gap-1.5 transition-colors hover:text-brand-terracotta"
				>
					<Phone class="size-3.5" /> {phone}
				</a>
			{/if}
		</div>
	</div>
{/if}

<header
	class="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<nav class="container mx-auto flex h-18 items-center justify-between px-4 sm:px-6">
		<a href="/" class="flex items-center">
			<img src="/logo.webp" alt="Lalo Import and Export" class="h-9 w-auto  block dark:hidden sm:h-11" />
			<img src="/logo-white.webp" alt="Lalo Import and Export" class="h-9 dark:block hidden w-auto sm:h-11" />
		</a>

		<div class="hidden items-center gap-8 md:flex">
			{#each links as link (link.href)}
				<a
					href={link.href}
					class="text-sm font-medium tracking-wide transition-colors hover:text-brand-terracotta {page.url
						.pathname === link.href
						? 'text-brand-terracotta'
						: 'text-foreground/80'}"
				>
					{link.label}
				</a>
			{/each}
			<ThemeToggle />
		</div>

		<div class="flex items-center gap-1 md:hidden">
			<ThemeToggle />
			<button
				class="p-2 text-foreground"
				aria-label="Toggle menu"
				onclick={() => (open = !open)}
			>
				{#if open}
					<X class="size-6" />
				{:else}
					<Menu class="size-6" />
				{/if}
			</button>
		</div>
	</nav>

	{#if open}
		<div class="border-t border-border bg-background md:hidden">
			<div class="container mx-auto flex flex-col gap-1 px-4 py-3 sm:px-6">
				{#each links as link (link.href)}
					<a
						href={link.href}
						class="rounded-md px-2 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-brand-terracotta {page
							.url.pathname === link.href
							? 'text-brand-terracotta'
							: 'text-foreground/80'}"
						onclick={() => (open = false)}
					>
						{link.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</header>
