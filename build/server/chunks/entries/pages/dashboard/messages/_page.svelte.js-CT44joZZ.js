import { Y as head, O as onDestroy, a0 as bind_props, F as derived, a3 as attr_class, a2 as stringify, X as attr, a4 as escape_html, af as store_mutate, ac as store_get, ae as unsubscribe_stores, _ as spread_props, V as ensure_array_like, U as clsx$1 } from '../../../../chunks/index-server.js-BTqLeq8m.js';
import { a as toast } from '../../../../chunks/toast-state.svelte.js-Da3pbY8R.js';
import { I as Icon } from '../../../../chunks/Icon.js-CT_MUOCa.js';
import { D as Data_table, r as renderComponent, a as Data_table_sort } from '../../../../chunks/data-table.js-DWtbDJGg.js';
import { P as Popover, a as Popover_trigger, b as Popover_content, C as Chevrons_up_down, c as Checkbox$1 } from '../../../../chunks/InputComp.js-WvDjA_HK.js';
import { C as Check } from '../../../../chunks/minus.js-BTyGQs-Z.js';
import { C as Circle_check_big } from '../../../../chunks/circle-check-big.js-CSRUmwKi.js';
import { S as Statuses } from '../../../../chunks/statuses.js-cX9okcsm.js';
import { C as Command, a as Command_input, b as Command_list, c as Command_empty, d as Command_group, f as Command_item } from '../../../../chunks/command.js-DctsEKur.js';
import { T as Trash } from '../../../../chunks/trash.js-DxoIETsD.js';
import { X } from '../../../../chunks/x.js-Ck4p1r8z.js';
import { B as Button, b as buttonVariants } from '../../../../chunks/button.js-bMcXU9rE.js';
import { L as LoadingBtn, D as Dialog, a as Dialog_trigger, b as Dialog_content, c as Dialog_header, d as Dialog_title } from '../../../../chunks/LoadingBtn.js-BOcE4VBH.js';
import { T as Tooltip_provider, a as Tooltip, b as Tooltip_trigger, c as Tooltip_content } from '../../../../chunks/tooltip.js-kcHR7BZV.js';
import { L as Label } from '../../../../chunks/label.js-DTCBdSc8.js';
import { S as Scroll_area } from '../../../../chunks/scroll-area.js-CsR-G4bR.js';
import { f as formatEthiopianDate } from '../../../../chunks/global.svelte.js-CK6uR_iK.js';
import { C as Card, b as Card_header, c as Card_title, d as Card_description, a as Card_content } from '../../../../chunks/card.js-BH16vHUa.js';
import { d as superForm } from '../../../../chunks/client2.js-Clbb-yOm.js';
import '../../../../chunks/exports.js-CimAlNvy.js';
import '../../../../chunks/client.js-6EH1pFcc.js';
import { E as Errors } from '../../../../chunks/Errors.js-BXAzcvnM.js';
import { B as Badge } from '../../../../chunks/badge.js-BEMS_QjW.js';
import '../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../chunks/create-id.js-C-QgUMSs.js';
import '../../../../chunks/dist.js-B6Yn2WWx.js';
import '../../../../chunks/state.js-BOdOMYMy.js';
import '../../../../chunks/chevron-down.js-CsAPuZPl.js';
import '../../../../chunks/input.js-em5PybWO.js';
import '../../../../chunks/dropdown-menu.js-BmmLkMsj.js';
import '../../../../chunks/scroll-lock.js-CAZpLRtv.js';
import '../../../../chunks/legacy-client.js-CVA7pvYI.js';
import '../../../../chunks/popper-layer-force-mount.js-C-nVoiI2.js';
import '../../../../chunks/menu.js-D3VF0FIs.js';
import '@tanstack/table-core';
import 'papaparse';
import '../../../../chunks/badge-check.js-Bm3KBDwy.js';
import '../../../../chunks/chevron-right.js-Zdnw8aNH.js';
import '../../../../chunks/circle-alert.js-BBu5AyXT.js';
import '../../../../chunks/loader.js-BRhHoeZt.js';
import '../../../../chunks/SelectComp.js-DiDAVd-M.js';
import '../../../../chunks/chevron-up.js-DfaVFTlA.js';
import '../../../../chunks/safe-polygon.svelte.js-MuUjbcC-.js';
import '../../../../chunks/assets.js-DVYtCFUU.js';
import 'browser-image-compression';
import '../../../../chunks/dialog-content.js-xpb-oFii.js';
import '../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../chunks/forms.js-Dl9gmZZg.js';
import '../../../../chunks/app.js-COdsXQ7K.js';
import '../../../../chunks/stores.js-s-pIdUZM.js';
import '../../../../chunks/utils.js-BQTEHVEl.js';
import '../../../../chunks/routing.js-BriaEEEY.js';
import '../../../../chunks/internal2.js-CNE764l1.js';

//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/activity.svelte
function Activity($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "activity" },
		props,
		{ iconNode: [["path", { "d": "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" }]] }
	]));
}
//#endregion
//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/chart-area.svelte
function Chart_area($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "chart-area" },
		props,
		{ iconNode: [["path", { "d": "M3 3v16a2 2 0 0 0 2 2h16" }], ["path", { "d": "M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z" }]] }
	]));
}
//#endregion
//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/chart-column-big.svelte
function Chart_column_big($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "chart-column-big" },
		props,
		{ iconNode: [
			["path", { "d": "M3 3v16a2 2 0 0 0 2 2h16" }],
			["rect", {
				"x": "15",
				"y": "5",
				"width": "4",
				"height": "12",
				"rx": "1"
			}],
			["rect", {
				"x": "7",
				"y": "8",
				"width": "4",
				"height": "9",
				"rx": "1"
			}]
		] }
	]));
}
//#endregion
//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/chart-pie.svelte
function Chart_pie($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "chart-pie" },
		props,
		{ iconNode: [["path", { "d": "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" }], ["path", { "d": "M21.21 15.89A10 10 0 1 1 8 2.83" }]] }
	]));
}
//#endregion
//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/copy.svelte
function Copy($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "copy" },
		props,
		{ iconNode: [["rect", {
			"width": "14",
			"height": "14",
			"x": "8",
			"y": "8",
			"rx": "2",
			"ry": "2"
		}], ["path", { "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }]] }
	]));
}
//#endregion
//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/rotate-ccw.svelte
function Rotate_ccw($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "rotate-ccw" },
		props,
		{ iconNode: [["path", { "d": "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }], ["path", { "d": "M3 3v5h5" }]] }
	]));
}
//#endregion
//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/sliders-horizontal.svelte
function Sliders_horizontal($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "sliders-horizontal" },
		props,
		{ iconNode: [
			["path", { "d": "M10 5H3" }],
			["path", { "d": "M12 19H3" }],
			["path", { "d": "M14 3v4" }],
			["path", { "d": "M16 17v4" }],
			["path", { "d": "M21 12h-9" }],
			["path", { "d": "M21 19h-5" }],
			["path", { "d": "M21 5h-7" }],
			["path", { "d": "M8 10v4" }],
			["path", { "d": "M8 12H3" }]
		] }
	]));
}
//#endregion
//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/trending-up.svelte
function Trending_up($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "trending-up" },
		props,
		{ iconNode: [["path", { "d": "M16 7h6v6" }], ["path", { "d": "m22 7-8.5 8.5-5-5L2 17" }]] }
	]));
}
//#endregion
//#region src/routes/dashboard/messages/read.svelte
function Read($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data, id } = $$props;
		const { form, delayed} = superForm(data, { resetForm: false });
		store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).id = id);
		$$renderer.push(`<form method="post" id="read" class="-mt-4 flex h-full flex-col items-start justify-start" action="?/read">`);
		Button($$renderer, {
			type: "submit",
			size: "sm",
			variant: "outline",
			class: "mt-4",
			form: "read",
			children: ($$renderer) => {
				if (store_get($$store_subs ??= {}, "$delayed", delayed)) {
					$$renderer.push("<!--[0-->");
					LoadingBtn($$renderer, { name: "Marking as Read" });
				} else {
					$$renderer.push("<!--[-1-->");
					Circle_check_big($$renderer, {});
					$$renderer.push(`<!----> Mark as Read`);
				}
				$$renderer.push(`<!--]-->`);
			},
			$$slots: { default: true }
		});
		$$renderer.push(`<!----> <input${attr("value", store_get($$store_subs ??= {}, "$form", form).id)} name="id" type="hidden"/></form>`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/routes/dashboard/messages/delete.svelte
function Delete($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data, action = "?/delete", id } = $$props;
		const { form, delayed, allErrors } = superForm(data, { resetForm: false });
		store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).id = id);
		let open = false;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Dialog) {
				$$renderer.push("<!--[-->");
				Dialog($$renderer, {
					get open() {
						return open;
					},
					set open($$value) {
						open = $$value;
						$$settled = false;
					},
					children: ($$renderer) => {
						if (Dialog_trigger) {
							$$renderer.push("<!--[-->");
							Dialog_trigger($$renderer, {
								class: buttonVariants({ variant: "destructive" }),
								children: ($$renderer) => {
									Trash($$renderer, {});
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
						$$renderer.push(` `);
						if (Dialog_content) {
							$$renderer.push("<!--[-->");
							Dialog_content($$renderer, {
								class: "w-full",
								children: ($$renderer) => {
									if (Dialog_header) {
										$$renderer.push("<!--[-->");
										Dialog_header($$renderer, {
											children: ($$renderer) => {
												if (Dialog_title) {
													$$renderer.push("<!--[-->");
													Dialog_title($$renderer, {
														children: ($$renderer) => {
															$$renderer.push(`<!---->Delete`);
														},
														$$slots: { default: true }
													});
													$$renderer.push("<!--]-->");
												} else {
													$$renderer.push("<!--[!-->");
													$$renderer.push("<!--]-->");
												}
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
									$$renderer.push(` `);
									Scroll_area($$renderer, {
										class: "h-auto rounded-md border p-2",
										children: ($$renderer) => {
											$$renderer.push(`<h5 class="text-center">Are you sure you want to Delete? This action is irreversable</h5> <div class="flex flex-row items-end justify-center gap-4 pt-4"><form method="post" id="delete" action="?/delete">`);
											Errors($$renderer, { allErrors: store_get($$store_subs ??= {}, "$allErrors", allErrors) });
											$$renderer.push(`<!----> <input${attr("value", store_get($$store_subs ??= {}, "$form", form).id)} name="id" type="hidden"/> `);
											Button($$renderer, {
												type: "submit",
												class: "mt-4",
												form: "delete",
												children: ($$renderer) => {
													if (store_get($$store_subs ??= {}, "$delayed", delayed)) {
														$$renderer.push("<!--[0-->");
														LoadingBtn($$renderer, { name: "Deleting" });
													} else {
														$$renderer.push("<!--[-1-->");
														Trash($$renderer, {});
														$$renderer.push(`<!----> Delete`);
													}
													$$renderer.push(`<!--]-->`);
												},
												$$slots: { default: true }
											});
											$$renderer.push(`<!----></form> `);
											Button($$renderer, {
												onclick: () => open = false,
												class: "mt-4",
												children: ($$renderer) => {
													$$renderer.push(`<!---->Cancel`);
												},
												$$slots: { default: true }
											});
											$$renderer.push(`<!----></div>`);
										},
										$$slots: { default: true }
									});
									$$renderer.push(`<!---->`);
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
					},
					$$slots: { default: true }
				});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}
//#endregion
//#region src/routes/dashboard/messages/bigText.svelte
function BigText($$renderer, $$props) {
	const { text } = $$props;
	/**
	* Truncate text to a maximum length
	*/
	const truncateText = (text, maxLength = 15) => {
		const str = String(text);
		return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
	};
	$$renderer.push(`<div class="w-32">`);
	Popover($$renderer, {
		children: ($$renderer) => {
			Popover_trigger($$renderer, {
				children: ($$renderer) => {
					$$renderer.push(`<!---->${escape_html(truncateText(text))}`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----> `);
			Popover_content($$renderer, {
				class: "max-w-sm p-3  text-sm wrap-break-word",
				children: ($$renderer) => {
					$$renderer.push(`<!---->${escape_html(text)}`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!---->`);
		},
		$$slots: { default: true }
	});
	$$renderer.push(`<!----></div>`);
}
//#endregion
//#region src/lib/Copy.svelte
function Copy_1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data = "" } = $$props;
		if (data) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<button type="button"${attr("title", `Copy ${stringify(data)}`)} class="group flex items-center gap-2 text-left text-sm normal-case transition-colors hover:text-primary"><span class="break-all">${escape_html(data)}</span> `);
			$$renderer.push("<!--[-1-->");
			Copy($$renderer, { class: "size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-60" });
			$$renderer.push(`<!--]--></button>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<span class="text-muted-foreground">—</span>`);
		}
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
//#region src/lib/hooks/pluralize.ts
function pluralize(word) {
	if (!word) return word;
	const irregulars = {
		person: "people",
		man: "men",
		woman: "women",
		child: "children",
		tooth: "teeth",
		foot: "feet",
		mouse: "mice",
		goose: "geese",
		ox: "oxen",
		leaf: "leaves",
		knife: "knives",
		life: "lives",
		wife: "wives",
		wolf: "wolves",
		shelf: "shelves",
		elf: "elves",
		half: "halves",
		calf: "calves",
		loaf: "loaves",
		scarf: "scarves",
		status: "statuses",
		campus: "campuses",
		focus: "focuses",
		category: "categories",
		city: "cities",
		country: "countries"
	};
	const lower = word.toLowerCase();
	if (irregulars[lower]) return word[0] === word[0].toUpperCase() ? irregulars[lower][0].toUpperCase() + irregulars[lower].slice(1) : irregulars[lower];
	if (/(?:s|sh|ch|x|z)$/i.test(word)) return word + "es";
	if (/[^aeiou]y$/i.test(word)) return word.slice(0, -1) + "ies";
	if (/(?:f|fe)$/i.test(word)) return word.replace(/(?:f|fe)$/, "ves");
	return word + "s";
}
//#endregion
//#region src/lib/components/Table/FilterMenu.svelte
function FilterMenu($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data, filterKeys, filteredList = data, class: className = "" } = $$props;
		const CHART_TYPES = [
			{
				value: "bar",
				label: "Bar"
			},
			{
				value: "line",
				label: "Line"
			},
			{
				value: "pie",
				label: "Pie"
			},
			{
				value: "doughnut",
				label: "Doughnut"
			},
			{
				value: "polarArea",
				label: "Polar Area"
			},
			{
				value: "radar",
				label: "Radar"
			}
		];
		let type = "bar";
		let chartTypeOpen = false;
		let selectedFilters = {};
		let filtersOpen = false;
		let chartOpen = false;
		let activeChartKey = derived(() => filterKeys[0] ?? "");
		let chartInstances = {};
		const humanLabel = (key) => pluralize(key).replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^\w/, (c) => c.toUpperCase());
		const getDistinctValues = (key) => Array.from(new Set(data.map((item) => item[key]).filter((v) => v !== void 0 && v !== null))).map(String).sort();
		const getCountForValue = (filterKey, value) => data.filter((item) => filterKeys.every((key) => {
			if (key === filterKey) return String(item[key]) === value;
			const sel = selectedFilters[key];
			return sel.length === 0 || sel.includes(String(item[key]));
		})).length;
		const toggleFilterValue = (key, value) => {
			const cur = selectedFilters[key];
			selectedFilters[key] = cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value];
		};
		const isValueSelected = (key, value) => selectedFilters[key]?.includes(value) ?? false;
		let isResetting = false;
		const resetFilters = () => {
			isResetting = true;
			selectedFilters = {};
			filterKeys.forEach((key) => selectedFilters[key] = []);
			filteredList = data;
			toast.success("Filters reset");
			isResetting = false;
		};
		const activeFilterCount = derived(() => Object.values(selectedFilters).reduce((acc, arr) => acc + arr.length, 0));
		onDestroy(() => {
			Object.values(chartInstances).forEach((c) => c?.destroy());
		});
		const chartTypeIcon = (t) => {
			if (t === "pie" || t === "doughnut") return Chart_pie;
			if (t === "line") return Trending_up;
			if (t === "radar" || t === "polarArea") return Activity;
			return Chart_column_big;
		};
		const ChartIcon = derived(() => chartTypeIcon(type));
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			$$renderer.push(`<div${attr_class(`flex ${stringify(className)} flex-wrap items-center gap-2`)}><div class="items-between flex w-full flex-row flex-wrap justify-between">`);
			if (Tooltip_provider) {
				$$renderer.push("<!--[-->");
				Tooltip_provider($$renderer, {
					children: ($$renderer) => {
						if (Tooltip) {
							$$renderer.push("<!--[-->");
							Tooltip($$renderer, {
								children: ($$renderer) => {
									{
										function child($$renderer, props) {
											Button($$renderer, spread_props([
												{
													onclick: () => filtersOpen = !filtersOpen,
													class: "w-40"
												},
												props,
												{
													children: ($$renderer) => {
														if (filtersOpen) {
															$$renderer.push("<!--[0-->");
															X($$renderer, { class: "size-4" });
														} else {
															$$renderer.push("<!--[-1-->");
															Sliders_horizontal($$renderer, { class: "size-4" });
														}
														$$renderer.push(`<!--]--> Table Filters ${escape_html(activeFilterCount() > 0 ? `(${activeFilterCount()})` : "")}`);
													},
													$$slots: { default: true }
												}
											]));
										}
										if (Tooltip_trigger) {
											$$renderer.push("<!--[-->");
											Tooltip_trigger($$renderer, {
												class: buttonVariants({ variant: "outline" }),
												child,
												$$slots: { child: true }
											});
											$$renderer.push("<!--]-->");
										} else {
											$$renderer.push("<!--[!-->");
											$$renderer.push("<!--]-->");
										}
									}
									$$renderer.push(` `);
									if (Tooltip_content) {
										$$renderer.push("<!--[-->");
										Tooltip_content($$renderer, {
											children: ($$renderer) => {
												$$renderer.push(`<p>Filter Charts</p>`);
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
					},
					$$slots: { default: true }
				});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
			$$renderer.push(` <div>`);
			if (Tooltip_provider) {
				$$renderer.push("<!--[-->");
				Tooltip_provider($$renderer, {
					children: ($$renderer) => {
						if (Tooltip) {
							$$renderer.push("<!--[-->");
							Tooltip($$renderer, {
								children: ($$renderer) => {
									{
										function child($$renderer, props) {
											Button($$renderer, spread_props([
												{
													onclick: () => {
														chartOpen = !chartOpen;
														type = "bar";
													},
													class: "w-40"
												},
												props,
												{
													children: ($$renderer) => {
														if (chartOpen) {
															$$renderer.push("<!--[0-->");
															X($$renderer, { class: "size-4" });
														} else {
															$$renderer.push("<!--[-1-->");
															Chart_area($$renderer, { class: "size-4" });
														}
														$$renderer.push(`<!--]--> Chart ${escape_html(activeFilterCount() > 0 ? `(${activeFilterCount()})` : "")}`);
													},
													$$slots: { default: true }
												}
											]));
										}
										if (Tooltip_trigger) {
											$$renderer.push("<!--[-->");
											Tooltip_trigger($$renderer, {
												class: buttonVariants({ variant: "outline" }),
												child,
												$$slots: { child: true }
											});
											$$renderer.push("<!--]-->");
										} else {
											$$renderer.push("<!--[!-->");
											$$renderer.push("<!--]-->");
										}
									}
									$$renderer.push(` `);
									if (Tooltip_content) {
										$$renderer.push("<!--[-->");
										Tooltip_content($$renderer, {
											children: ($$renderer) => {
												$$renderer.push(`<p>Filter Charts</p>`);
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
								},
								$$slots: { default: true }
							});
							$$renderer.push("<!--]-->");
						} else {
							$$renderer.push("<!--[!-->");
							$$renderer.push("<!--]-->");
						}
					},
					$$slots: { default: true }
				});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
			$$renderer.push(`</div></div></div> `);
			if (filtersOpen) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div class="mt-4">`);
				Card($$renderer, {
					class: "w-full",
					children: ($$renderer) => {
						Card_header($$renderer, {
							children: ($$renderer) => {
								Card_title($$renderer, {
									children: ($$renderer) => {
										$$renderer.push(`<!---->Filter Charts`);
									},
									$$slots: { default: true }
								});
								$$renderer.push(`<!----> `);
								Card_description($$renderer, {
									children: ($$renderer) => {
										$$renderer.push(`<!---->Narrow the data shown in each chart`);
									},
									$$slots: { default: true }
								});
								$$renderer.push(`<!---->`);
							},
							$$slots: { default: true }
						});
						$$renderer.push(`<!----> `);
						Card_content($$renderer, {
							children: ($$renderer) => {
								$$renderer.push(`<div class="space-y-2 rounded-xl border border-border/50 bg-background bg-linear-to-br from-card to-card/50 p-6 shadow-sm"><div class="flex items-center justify-between"><div class="flex items-center gap-2">`);
								Sliders_horizontal($$renderer, { class: "size-5 text-primary" });
								$$renderer.push(`<!----> <h3 class="text-base font-semibold">Filters</h3> `);
								if (activeFilterCount() > 0) {
									$$renderer.push("<!--[0-->");
									Badge($$renderer, {
										variant: "secondary",
										class: "ml-2",
										children: ($$renderer) => {
											$$renderer.push(`<!---->${escape_html(activeFilterCount())} active`);
										},
										$$slots: { default: true }
									});
								} else $$renderer.push("<!--[-1-->");
								$$renderer.push(`<!--]--></div> `);
								Button($$renderer, {
									variant: "outline",
									size: "sm",
									class: "gap-2 hover:bg-destructive/10 hover:text-destructive",
									onclick: resetFilters,
									children: ($$renderer) => {
										Rotate_ccw($$renderer, { class: `size-4 ${isResetting ? "animate-spin" : ""}` });
										$$renderer.push(`<!----> <span class="hidden sm:inline">Reset</span>`);
									},
									$$slots: { default: true }
								});
								$$renderer.push(`<!----></div> <div class="flex flex-row flex-wrap gap-4"><!--[-->`);
								const each_array = ensure_array_like(filterKeys);
								for (let $$index_2 = 0, $$length = each_array.length; $$index_2 < $$length; $$index_2++) {
									let filterKey = each_array[$$index_2];
									$$renderer.push(`<div class="min-w-50 space-y-2">`);
									Label($$renderer, {
										class: "text-sm font-medium capitalize",
										children: ($$renderer) => {
											$$renderer.push(`<!---->${escape_html(humanLabel(filterKey))}`);
										},
										$$slots: { default: true }
									});
									$$renderer.push(`<!----> `);
									if (Popover) {
										$$renderer.push("<!--[-->");
										Popover($$renderer, {
											children: ($$renderer) => {
												{
													function child($$renderer, { props }) {
														Button($$renderer, spread_props([
															{
																variant: "outline",
																role: "combobox",
																class: "w-full justify-between"
															},
															props,
															{
																children: ($$renderer) => {
																	$$renderer.push(`<span class="truncate">`);
																	if (selectedFilters[filterKey]?.length === 0) {
																		$$renderer.push("<!--[0-->");
																		$$renderer.push(`<span class="text-muted-foreground">All ${escape_html(humanLabel(filterKey))}</span>`);
																	} else if (selectedFilters[filterKey]?.length === 1) {
																		$$renderer.push("<!--[1-->");
																		$$renderer.push(`<span class="font-medium">${escape_html(selectedFilters[filterKey][0])}</span>`);
																	} else {
																		$$renderer.push("<!--[-1-->");
																		$$renderer.push(`<span class="font-medium">${escape_html(selectedFilters[filterKey].length)} selected</span>`);
																	}
																	$$renderer.push(`<!--]--></span> `);
																	Chevrons_up_down($$renderer, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" });
																	$$renderer.push(`<!---->`);
																},
																$$slots: { default: true }
															}
														]));
													}
													if (Popover_trigger) {
														$$renderer.push("<!--[-->");
														Popover_trigger($$renderer, {
															class: "w-full",
															child,
															$$slots: { child: true }
														});
														$$renderer.push("<!--]-->");
													} else {
														$$renderer.push("<!--[!-->");
														$$renderer.push("<!--]-->");
													}
												}
												$$renderer.push(` `);
												if (Popover_content) {
													$$renderer.push("<!--[-->");
													Popover_content($$renderer, {
														class: "w-50 p-0",
														children: ($$renderer) => {
															if (Command) {
																$$renderer.push("<!--[-->");
																Command($$renderer, {
																	children: ($$renderer) => {
																		if (Command_input) {
																			$$renderer.push("<!--[-->");
																			Command_input($$renderer, { placeholder: `Search ${pluralize(filterKey)}...` });
																			$$renderer.push("<!--]-->");
																		} else {
																			$$renderer.push("<!--[!-->");
																			$$renderer.push("<!--]-->");
																		}
																		$$renderer.push(` `);
																		if (Command_list) {
																			$$renderer.push("<!--[-->");
																			Command_list($$renderer, {
																				children: ($$renderer) => {
																					if (Command_empty) {
																						$$renderer.push("<!--[-->");
																						Command_empty($$renderer, {
																							children: ($$renderer) => {
																								$$renderer.push(`<!---->No ${escape_html(pluralize(filterKey))} found.`);
																							},
																							$$slots: { default: true }
																						});
																						$$renderer.push("<!--]-->");
																					} else {
																						$$renderer.push("<!--[!-->");
																						$$renderer.push("<!--]-->");
																					}
																					$$renderer.push(` `);
																					if (Command_group) {
																						$$renderer.push("<!--[-->");
																						Command_group($$renderer, {
																							children: ($$renderer) => {
																								$$renderer.push(`<!--[-->`);
																								const each_array_1 = ensure_array_like(getDistinctValues(filterKey));
																								for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
																									let value = each_array_1[$$index];
																									if (Command_item) {
																										$$renderer.push("<!--[-->");
																										Command_item($$renderer, {
																											value,
																											onSelect: () => toggleFilterValue(filterKey, value),
																											class: "flex cursor-pointer items-center gap-2",
																											children: ($$renderer) => {
																												{
																													function children($$renderer, { checked }) {
																														if (checked) {
																															$$renderer.push("<!--[0-->");
																															Check($$renderer, { class: "size-3.5 text-primary" });
																														} else $$renderer.push("<!--[-1-->");
																														$$renderer.push(`<!--]-->`);
																													}
																													if (Checkbox$1) {
																														$$renderer.push("<!--[-->");
																														Checkbox$1($$renderer, {
																															checked: isValueSelected(filterKey, value),
																															class: "flex size-4 items-center justify-center rounded-sm border border-primary/50",
																															children,
																															$$slots: { default: true }
																														});
																														$$renderer.push("<!--]-->");
																													} else {
																														$$renderer.push("<!--[!-->");
																														$$renderer.push("<!--]-->");
																													}
																												}
																												$$renderer.push(` <span class="flex-1 capitalize">${escape_html(value)}</span> <span class="text-xs text-muted-foreground">(${escape_html(getCountForValue(filterKey, value))})</span>`);
																											},
																											$$slots: { default: true }
																										});
																										$$renderer.push("<!--]-->");
																									} else {
																										$$renderer.push("<!--[!-->");
																										$$renderer.push("<!--]-->");
																									}
																								}
																								$$renderer.push(`<!--]-->`);
																							},
																							$$slots: { default: true }
																						});
																						$$renderer.push("<!--]-->");
																					} else {
																						$$renderer.push("<!--[!-->");
																						$$renderer.push("<!--]-->");
																					}
																				},
																				$$slots: { default: true }
																			});
																			$$renderer.push("<!--]-->");
																		} else {
																			$$renderer.push("<!--[!-->");
																			$$renderer.push("<!--]-->");
																		}
																	},
																	$$slots: { default: true }
																});
																$$renderer.push("<!--]-->");
															} else {
																$$renderer.push("<!--[!-->");
																$$renderer.push("<!--]-->");
															}
														},
														$$slots: { default: true }
													});
													$$renderer.push("<!--]-->");
												} else {
													$$renderer.push("<!--[!-->");
													$$renderer.push("<!--]-->");
												}
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
									$$renderer.push(` `);
									if (selectedFilters[filterKey]?.length > 0) {
										$$renderer.push("<!--[0-->");
										$$renderer.push(`<div class="mt-2 flex flex-wrap gap-1"><!--[-->`);
										const each_array_2 = ensure_array_like(selectedFilters[filterKey]);
										for (let $$index_1 = 0, $$length = each_array_2.length; $$index_1 < $$length; $$index_1++) {
											let selectedValue = each_array_2[$$index_1];
											Badge($$renderer, {
												variant: "secondary",
												class: "gap-1 pr-1",
												children: ($$renderer) => {
													$$renderer.push(`<!---->${escape_html(selectedValue)} <button class="ml-1 hover:text-destructive">`);
													X($$renderer, { class: "size-3" });
													$$renderer.push(`<!----></button>`);
												},
												$$slots: { default: true }
											});
										}
										$$renderer.push(`<!--]--></div>`);
									} else $$renderer.push("<!--[-1-->");
									$$renderer.push(`<!--]--></div>`);
								}
								$$renderer.push(`<!--]--></div></div> <div class="mt-4 flex items-center justify-between rounded-lg bg-muted/30 px-4 py-3"><p class="text-sm text-muted-foreground">Showing <span class="font-semibold text-foreground">${escape_html(filteredList.length)}</span> of <span class="font-semibold text-foreground">${escape_html(data.length)}</span> records</p> `);
								if (activeFilterCount() > 0) {
									$$renderer.push("<!--[0-->");
									$$renderer.push(`<p class="text-xs text-muted-foreground">${escape_html(activeFilterCount())} active filter${escape_html(activeFilterCount() > 1 ? "s" : "")}</p>`);
								} else $$renderer.push("<!--[-1-->");
								$$renderer.push(`<!--]--></div>`);
							},
							$$slots: { default: true }
						});
						$$renderer.push(`<!---->`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----></div>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> `);
			if (chartOpen) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div class="mt-6 space-y-4">`);
				if (Popover) {
					$$renderer.push("<!--[-->");
					Popover($$renderer, {
						get open() {
							return chartTypeOpen;
						},
						set open($$value) {
							chartTypeOpen = $$value;
							$$settled = false;
						},
						children: ($$renderer) => {
							{
								function child($$renderer, { props }) {
									Button($$renderer, spread_props([
										{
											variant: "outline",
											class: "w-44 justify-between"
										},
										props,
										{
											children: ($$renderer) => {
												$$renderer.push(`<span class="flex items-center gap-2">`);
												if (ChartIcon()) {
													$$renderer.push("<!--[-->");
													ChartIcon()($$renderer, { class: "size-4 text-primary" });
													$$renderer.push("<!--]-->");
												} else {
													$$renderer.push("<!--[!-->");
													$$renderer.push("<!--]-->");
												}
												$$renderer.push(` <span>${escape_html(CHART_TYPES.find((c) => c.value === type)?.label ?? "Chart Type")}</span></span> `);
												Chevrons_up_down($$renderer, { class: "ml-2 h-4 w-4 shrink-0 opacity-50" });
												$$renderer.push(`<!---->`);
											},
											$$slots: { default: true }
										}
									]));
								}
								if (Popover_trigger) {
									$$renderer.push("<!--[-->");
									Popover_trigger($$renderer, {
										class: buttonVariants({ variant: "outline" }),
										child,
										$$slots: { child: true }
									});
									$$renderer.push("<!--]-->");
								} else {
									$$renderer.push("<!--[!-->");
									$$renderer.push("<!--]-->");
								}
							}
							$$renderer.push(` `);
							if (Popover_content) {
								$$renderer.push("<!--[-->");
								Popover_content($$renderer, {
									class: "w-44 p-0",
									children: ($$renderer) => {
										if (Command) {
											$$renderer.push("<!--[-->");
											Command($$renderer, {
												children: ($$renderer) => {
													if (Command_list) {
														$$renderer.push("<!--[-->");
														Command_list($$renderer, {
															children: ($$renderer) => {
																if (Command_group) {
																	$$renderer.push("<!--[-->");
																	Command_group($$renderer, {
																		children: ($$renderer) => {
																			$$renderer.push(`<!--[-->`);
																			const each_array_3 = ensure_array_like(CHART_TYPES);
																			for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
																				let ct = each_array_3[$$index_3];
																				if (Command_item) {
																					$$renderer.push("<!--[-->");
																					Command_item($$renderer, {
																						value: ct.value,
																						onSelect: () => {
																							type = ct.value;
																							chartTypeOpen = false;
																						},
																						class: "flex cursor-pointer items-center gap-2",
																						children: ($$renderer) => {
																							Check($$renderer, { class: `size-4 ${type === ct.value ? "text-primary opacity-100" : "opacity-0"}` });
																							$$renderer.push(`<!----> ${escape_html(ct.label)}`);
																						},
																						$$slots: { default: true }
																					});
																					$$renderer.push("<!--]-->");
																				} else {
																					$$renderer.push("<!--[!-->");
																					$$renderer.push("<!--]-->");
																				}
																			}
																			$$renderer.push(`<!--]-->`);
																		},
																		$$slots: { default: true }
																	});
																	$$renderer.push("<!--]-->");
																} else {
																	$$renderer.push("<!--[!-->");
																	$$renderer.push("<!--]-->");
																}
															},
															$$slots: { default: true }
														});
														$$renderer.push("<!--]-->");
													} else {
														$$renderer.push("<!--[!-->");
														$$renderer.push("<!--]-->");
													}
												},
												$$slots: { default: true }
											});
											$$renderer.push("<!--]-->");
										} else {
											$$renderer.push("<!--[!-->");
											$$renderer.push("<!--]-->");
										}
									},
									$$slots: { default: true }
								});
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
						},
						$$slots: { default: true }
					});
					$$renderer.push("<!--]-->");
				} else {
					$$renderer.push("<!--[!-->");
					$$renderer.push("<!--]-->");
				}
				$$renderer.push(` <div class="flex gap-2 overflow-x-auto rounded-xl border border-border bg-muted/30 p-1"><!--[-->`);
				const each_array_4 = ensure_array_like(filterKeys);
				for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
					let key = each_array_4[$$index_4];
					$$renderer.push(`<button${attr_class(`flex shrink-0 items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${activeChartKey() === key ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`)}>`);
					if (ChartIcon()) {
						$$renderer.push("<!--[-->");
						ChartIcon()($$renderer, { class: "size-4" });
						$$renderer.push("<!--]-->");
					} else {
						$$renderer.push("<!--[!-->");
						$$renderer.push("<!--]-->");
					}
					$$renderer.push(` ${escape_html(humanLabel(key))} `);
					if (selectedFilters[key]?.length > 0) {
						$$renderer.push("<!--[0-->");
						Badge($$renderer, {
							variant: "secondary",
							class: "ml-1 px-1.5 py-0 text-xs",
							children: ($$renderer) => {
								$$renderer.push(`<!---->${escape_html(selectedFilters[key].length)}`);
							},
							$$slots: { default: true }
						});
					} else $$renderer.push("<!--[-1-->");
					$$renderer.push(`<!--]--></button>`);
				}
				$$renderer.push(`<!--]--></div> <!--[-->`);
				const each_array_5 = ensure_array_like(filterKeys);
				for (let $$index_5 = 0, $$length = each_array_5.length; $$index_5 < $$length; $$index_5++) {
					let key = each_array_5[$$index_5];
					$$renderer.push(`<div${attr_class(clsx$1(activeChartKey() === key ? "block" : "hidden"))}>`);
					Card($$renderer, {
						class: "w-full",
						children: ($$renderer) => {
							Card_header($$renderer, {
								children: ($$renderer) => {
									$$renderer.push(`<div class="flex items-center justify-between"><div>`);
									Card_title($$renderer, {
										class: "flex items-center gap-2",
										children: ($$renderer) => {
											if (ChartIcon()) {
												$$renderer.push("<!--[-->");
												ChartIcon()($$renderer, { class: "size-5 text-primary" });
												$$renderer.push("<!--]-->");
											} else {
												$$renderer.push("<!--[!-->");
												$$renderer.push("<!--]-->");
											}
											$$renderer.push(` ${escape_html(humanLabel(key))}`);
										},
										$$slots: { default: true }
									});
									$$renderer.push(`<!----> `);
									Card_description($$renderer, {
										class: "mt-1",
										children: ($$renderer) => {
											$$renderer.push(`<!---->Distribution of ${escape_html(humanLabel(key).toLowerCase())} across
									${escape_html(filteredList.length)} record${escape_html(filteredList.length !== 1 ? "s" : "")} `);
											if (selectedFilters[key]?.length > 0) {
												$$renderer.push("<!--[0-->");
												$$renderer.push(`· <span class="text-primary">${escape_html(selectedFilters[key].length)} value${escape_html(selectedFilters[key].length > 1 ? "s" : "")} highlighted</span>`);
											} else $$renderer.push("<!--[-1-->");
											$$renderer.push(`<!--]-->`);
										},
										$$slots: { default: true }
									});
									$$renderer.push(`<!----></div> `);
									Badge($$renderer, {
										variant: "outline",
										class: "capitalize",
										children: ($$renderer) => {
											$$renderer.push(`<!---->${escape_html(type)}`);
										},
										$$slots: { default: true }
									});
									$$renderer.push(`<!----></div>`);
								},
								$$slots: { default: true }
							});
							$$renderer.push(`<!----> `);
							Card_content($$renderer, {
								children: ($$renderer) => {
									if (type === "bar" || type === "line") {
										$$renderer.push("<!--[0-->");
										$$renderer.push(`<p class="mb-3 text-xs text-muted-foreground">💡 Click a bar to toggle that value as a filter</p>`);
									} else {
										$$renderer.push("<!--[-1-->");
										$$renderer.push(`<p class="mb-3 text-xs text-muted-foreground">💡 Click a segment to toggle that value as a filter</p>`);
									}
									$$renderer.push(`<!--]--> <div class="relative h-72 w-full"><canvas></canvas></div>`);
								},
								$$slots: { default: true }
							});
							$$renderer.push(`<!---->`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----></div>`);
				}
				$$renderer.push(`<!--]--></div>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]-->`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { filteredList });
	});
}
//#endregion
//#region src/routes/dashboard/messages/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const columns = [
			{
				id: "index",
				header: "#",
				cell: (info) => {
					return info.table.getRowModel().rows.findIndex((row) => row.id === info.row.id) + 1;
				},
				enableSorting: false
			},
			{
				accessorKey: "name",
				header: ({ column }) => renderComponent(Data_table_sort, {
					name: "Name",
					onclick: column.getToggleSortingHandler()
				}),
				sortable: true
			},
			{
				accessorKey: "phone",
				header: ({ column }) => renderComponent(Data_table_sort, {
					name: "Phone",
					onclick: column.getToggleSortingHandler()
				}),
				sortable: true,
				cell: ({ row }) => renderComponent(Copy_1, { data: row.original.phone })
			},
			{
				accessorKey: "email",
				header: ({ column }) => renderComponent(Data_table_sort, {
					name: "Email",
					onclick: column.getToggleSortingHandler()
				}),
				sortable: true,
				cell: ({ row }) => renderComponent(Copy_1, { data: row.original.email })
			},
			{
				accessorKey: "subject",
				header: ({ column }) => renderComponent(Data_table_sort, {
					name: "Subject",
					onclick: column.getToggleSortingHandler()
				}),
				sortable: true
			},
			{
				accessorKey: "message",
				header: "Message",
				sortable: true,
				cell: ({ row }) => renderComponent(BigText, { text: row.original.message })
			},
			{
				accessorKey: "createdAt",
				header: ({ column }) => renderComponent(Data_table_sort, {
					name: "Submitted At",
					onclick: column.getToggleSortingHandler()
				}),
				sortable: true,
				cell: ({ row }) => {
					return formatEthiopianDate(row.original.submittedAt);
				}
			},
			{
				accessorKey: "isRead",
				header: ({ column }) => renderComponent(Data_table_sort, {
					name: "Read Status",
					onclick: column.getToggleSortingHandler()
				}),
				sortable: true,
				cell: ({ row }) => {
					return row.original.isRead ? renderComponent(Statuses, { status: "Read" }) : renderComponent(Read, {
						id: row.original.id,
						action: "?/read",
						data: data.readForm
					});
				}
			},
			{
				accessorKey: "",
				header: "Delete",
				sortable: true,
				cell: ({ row }) => {
					return renderComponent(Delete, {
						id: row.original.id,
						action: "?/delete",
						data: data.deleteForm
					});
				}
			}
		];
		let { data } = $$props;
		let filteredList = derived(() => data?.allPaymentMethods);
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			head("1b9wrny", $$renderer, ($$renderer) => {
				$$renderer.title(($$renderer) => {
					$$renderer.push(`<title>Messages</title>`);
				});
			});
			$$renderer.push(`<!---->`);
			FilterMenu($$renderer, {
				data: data?.allPaymentMethods,
				filterKeys: ["subject", "isRead"],
				get filteredList() {
					return filteredList();
				},
				set filteredList($$value) {
					filteredList($$value);
					$$settled = false;
				}
			});
			$$renderer.push(`<!----> `);
			Data_table($$renderer, {
				columns,
				data: filteredList(),
				search: true,
				fileName: "Messages"
			});
			$$renderer.push(`<!---->`);
			$$renderer.push(`<!---->`);
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-CT44joZZ.js.map
