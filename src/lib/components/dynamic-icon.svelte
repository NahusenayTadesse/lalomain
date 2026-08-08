<script lang="ts" module>
	import {
		Award,
		Building2,
		ChefHat,
		Coffee,
		Globe,
		HandCoins,
		Handshake,
		House,
		Leaf,
		Lightbulb,
		MapPin,
		Package,
		ShieldCheck,
		Shirt,
		Sprout,
		Stethoscope,
		Store,
		Truck,
		Users,
		Wrench
	} from '@lucide/svelte';

	/**
	 * Icons are stored in the database as plain names so the dashboard can pick
	 * one from a dropdown without shipping component references through the load.
	 */
	const icons = {
		Award,
		Building2,
		ChefHat,
		Coffee,
		Globe,
		HandCoins,
		Handshake,
		House,
		Leaf,
		Lightbulb,
		MapPin,
		Package,
		ShieldCheck,
		Shirt,
		Sprout,
		Stethoscope,
		Store,
		Truck,
		Users,
		Wrench
	};

	export type IconName = keyof typeof icons;
	export const iconNames = Object.keys(icons) as IconName[];
</script>

<script lang="ts">
	let {
		name,
		fallback = 'Leaf',
		...rest
	}: { name?: string | null; fallback?: IconName; class?: string } = $props();

	const Icon = $derived(icons[(name ?? '') as IconName] ?? icons[fallback]);
</script>

<Icon {...rest} />
