import { Y as head, ag as await_block, a4 as escape_html } from '../../../../../chunks/index-server.js-BTqLeq8m.js';
import { F as Frown, D as Data_table, r as renderComponent, a as Data_table_sort } from '../../../../../chunks/data-table.js-DWtbDJGg.js';
import { S as Statuses } from '../../../../../chunks/statuses.js-cX9okcsm.js';
import { P as Plus } from '../../../../../chunks/plus.js-D_QDBo_j.js';
import { B as Button } from '../../../../../chunks/button.js-bMcXU9rE.js';
import { D as Data_table_links } from '../../../../../chunks/data-table-links.js-o95SlvfW.js';
import { L as Loading } from '../../../../../chunks/Loading.js-CFUw7C9w.js';
import '../../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../../chunks/create-id.js-C-QgUMSs.js';
import '../../../../../chunks/dist.js-B6Yn2WWx.js';
import '../../../../../chunks/state.js-BOdOMYMy.js';
import '../../../../../chunks/client.js-6EH1pFcc.js';
import '../../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../../chunks/exports.js-CimAlNvy.js';
import '../../../../../chunks/routing.js-BriaEEEY.js';
import '../../../../../chunks/internal2.js-CNE764l1.js';
import '../../../../../chunks/legacy-client.js-CVA7pvYI.js';
import '../../../../../chunks/utils.js-BQTEHVEl.js';
import '../../../../../chunks/Icon.js-CT_MUOCa.js';
import '../../../../../chunks/chevron-down.js-CsAPuZPl.js';
import '../../../../../chunks/input.js-em5PybWO.js';
import '../../../../../chunks/dropdown-menu.js-BmmLkMsj.js';
import '../../../../../chunks/minus.js-BTyGQs-Z.js';
import '../../../../../chunks/scroll-lock.js-CAZpLRtv.js';
import '../../../../../chunks/popper-layer-force-mount.js-C-nVoiI2.js';
import '../../../../../chunks/menu.js-D3VF0FIs.js';
import '../../../../../chunks/scroll-area.js-CsR-G4bR.js';
import '../../../../../chunks/global.svelte.js-CK6uR_iK.js';
import '@tanstack/table-core';
import 'papaparse';
import '../../../../../chunks/badge-check.js-Bm3KBDwy.js';
import '../../../../../chunks/loader.js-BRhHoeZt.js';
import '../../../../../chunks/badge.js-BEMS_QjW.js';
import '../../../../../chunks/tooltip.js-kcHR7BZV.js';
import '../../../../../chunks/safe-polygon.svelte.js-MuUjbcC-.js';
import '../../../../../chunks/skeleton.js-Bt-G2LNL.js';

//#region src/routes/dashboard/admin-panel/roles/columns.ts
var columns = [
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
		sortable: true,
		cell: ({ row }) => {
			return renderComponent(Data_table_links, {
				id: row.original.id,
				name: row.original.name,
				link: "/dashboard/admin-panel/roles"
			});
		}
	},
	{
		accessorKey: "status",
		header: ({ column }) => renderComponent(Data_table_sort, {
			name: "Status",
			onclick: column.getToggleSortingHandler()
		}),
		sortable: true,
		cell: ({ row }) => {
			return renderComponent(Statuses, { status: row.original.status ? "Active" : "Inactive" });
		}
	},
	{
		accessorKey: "userCount",
		header: ({ column }) => renderComponent(Data_table_sort, {
			name: "User Count",
			onclick: column.getToggleSortingHandler()
		}),
		cell: (info) => {
			return info.getValue() ? info.getValue() + " Users" : "No Users for this Role";
		}
	}
];
//#endregion
//#region src/routes/dashboard/admin-panel/roles/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		head("18wmnim", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Roles List</title>`);
			});
		});
		await_block($$renderer, data, () => {
			Loading($$renderer, { name: "Customers" });
		}, (customerList) => {
			if (data.roleList.length === 0) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<div class="flex h-96 w-full flex-col items-center justify-center lg:w-5xl"><p class="justify-self-cente mt-4 flex flex-row gap-4 text-center text-4xl">`);
				Frown($$renderer, { class: "h-12 w-16  animate-bounce" });
				$$renderer.push(`<!----> Users List is Empty</p> `);
				Button($$renderer, {
					href: "/dashboard/users/add-users",
					children: ($$renderer) => {
						Plus($$renderer, {});
						$$renderer.push(`<!---->Add New Users`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----></div>`);
			} else {
				$$renderer.push("<!--[-1-->");
				$$renderer.push(`<h2 class="my-4 text-2xl">No of Roles ${escape_html(data.roleList?.length)}</h2> <div class="mt-8 mb-4 w-87.5 p-0 pt-4 lg:w-full lg:p-0">`);
				Data_table($$renderer, {
					data: data.roleList,
					columns,
					fileName: "Roles List"
				});
				$$renderer.push(`<!----></div>`);
			}
			$$renderer.push(`<!--]-->`);
		});
		$$renderer.push(`<!--]-->`);
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-Bok-95-g.js.map
