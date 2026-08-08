import { af as store_mutate, ac as store_get, Y as head, a2 as stringify, ae as unsubscribe_stores, a0 as bind_props, F as derived } from '../../../../../../chunks/index-server.js-BTqLeq8m.js';
import { a as toast } from '../../../../../../chunks/toast-state.svelte.js-Da3pbY8R.js';
import { S as SingleView, P as Pencil, A as Arrow_left, D as Delete, a as SingleTable } from '../../../../../../chunks/SingleView.js-DftQOeQt.js';
import { D as Data_table, r as renderComponent, a as Data_table_sort } from '../../../../../../chunks/data-table.js-DWtbDJGg.js';
import { I as InputComp } from '../../../../../../chunks/InputComp.js-WvDjA_HK.js';
import { S as Save } from '../../../../../../chunks/save.js-BfqCztfl.js';
import { T as Trash } from '../../../../../../chunks/trash.js-DxoIETsD.js';
import { B as Button } from '../../../../../../chunks/button.js-bMcXU9rE.js';
import { L as LoadingBtn } from '../../../../../../chunks/LoadingBtn.js-BOcE4VBH.js';
import { d as superForm } from '../../../../../../chunks/client2.js-Clbb-yOm.js';
import { E as Errors } from '../../../../../../chunks/Errors.js-BXAzcvnM.js';
import { a as zodClient } from '../../../../../../chunks/adapters.js-DmdkKCR7.js';
import { D as Data_table_links } from '../../../../../../chunks/data-table-links.js-o95SlvfW.js';
import { e as editRoleSchema } from '../../../../../../chunks/schema.js-jq58gENH.js';
import '../../../../../../chunks/scroll-area.js-CsR-G4bR.js';
import '../../../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../../../chunks/exports.js-CimAlNvy.js';
import '../../../../../../chunks/client.js-6EH1pFcc.js';
import '../../../../../../chunks/shared.js-4SMYzfPQ.js';
import '../../../../../../chunks/routing.js-BriaEEEY.js';
import '../../../../../../chunks/internal2.js-CNE764l1.js';
import '../../../../../../chunks/legacy-client.js-CVA7pvYI.js';
import '../../../../../../chunks/utils.js-BQTEHVEl.js';
import '../../../../../../chunks/Icon.js-CT_MUOCa.js';
import '../../../../../../chunks/card.js-BH16vHUa.js';
import '../../../../../../chunks/index-server2.js-BPx0mTfA.js';
import '../../../../../../chunks/create-id.js-C-QgUMSs.js';
import '../../../../../../chunks/dist.js-B6Yn2WWx.js';
import '../../../../../../chunks/state.js-BOdOMYMy.js';
import '../../../../../../chunks/chevron-down.js-CsAPuZPl.js';
import '../../../../../../chunks/input.js-em5PybWO.js';
import '../../../../../../chunks/dropdown-menu.js-BmmLkMsj.js';
import '../../../../../../chunks/minus.js-BTyGQs-Z.js';
import '../../../../../../chunks/scroll-lock.js-CAZpLRtv.js';
import '../../../../../../chunks/popper-layer-force-mount.js-C-nVoiI2.js';
import '../../../../../../chunks/menu.js-D3VF0FIs.js';
import '../../../../../../chunks/global.svelte.js-CK6uR_iK.js';
import '@tanstack/table-core';
import 'papaparse';
import '../../../../../../chunks/badge-check.js-Bm3KBDwy.js';
import '../../../../../../chunks/chevron-right.js-Zdnw8aNH.js';
import '../../../../../../chunks/circle-alert.js-BBu5AyXT.js';
import '../../../../../../chunks/loader.js-BRhHoeZt.js';
import '../../../../../../chunks/command.js-DctsEKur.js';
import '../../../../../../chunks/x.js-Ck4p1r8z.js';
import '../../../../../../chunks/SelectComp.js-DiDAVd-M.js';
import '../../../../../../chunks/chevron-up.js-DfaVFTlA.js';
import '../../../../../../chunks/safe-polygon.svelte.js-MuUjbcC-.js';
import '../../../../../../chunks/label.js-DTCBdSc8.js';
import '../../../../../../chunks/assets.js-DVYtCFUU.js';
import 'browser-image-compression';
import '../../../../../../chunks/dialog-content.js-xpb-oFii.js';
import '../../../../../../chunks/forms.js-Dl9gmZZg.js';
import '../../../../../../chunks/app.js-COdsXQ7K.js';
import '../../../../../../chunks/stores.js-s-pIdUZM.js';
import '../../../../../../chunks/auth.js-xzNrYZ7P.js';
import '../../../../../../chunks/shared-server.js-D6HhUxAQ.js';
import '../../../../../../chunks/db.js-gHXkniRQ.js';
import 'node:buffer';
import 'url';
import 'net';
import 'tls';
import 'timers';
import 'events';
import 'stream';
import 'buffer';
import 'string_decoder';
import 'process';
import 'crypto';
import 'zlib';
import 'util';
import 'node:events';
import '../../../../../../chunks/dist3.js-DHSx5JNT.js';
import '../../../../../../chunks/error.js-DzWUU7VP.js';
import '../../../../../../chunks/factory.js-gM_GGoVD.js';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:fs/promises';
import 'node:os';
import '../../../../../../chunks/tooltip.js-kcHR7BZV.js';

//#region src/routes/dashboard/admin-panel/roles/[id]/columns.ts
var userColumns = [
	{
		accessorKey: "index",
		header: "#",
		cell: (info) => info.row.index + 1,
		sortable: false
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
				link: "/dashboard/users"
			});
		}
	},
	{
		accessorKey: "email",
		header: ({ column }) => renderComponent(Data_table_sort, {
			name: "Email",
			onclick: column.getToggleSortingHandler()
		}),
		sortable: true
	},
	{
		accessorKey: "isActive",
		header: ({ column }) => renderComponent(Data_table_sort, {
			name: "Active",
			onclick: column.getToggleSortingHandler()
		}),
		sortable: true
	}
];
//#endregion
//#region src/routes/dashboard/admin-panel/roles/[id]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;
		let { data } = $$props;
		let singleTable = derived(() => [
			{
				name: "Name",
				value: data.singleUser?.name
			},
			{
				name: "Description",
				value: data.singleUser?.description
			},
			{
				name: "User Count",
				value: data?.singleUser?.userCount || 0
			},
			{
				name: "Permission Count",
				value: data?.permissionList?.length || 0
			}
		]);
		const { form, errors, delayed, capture, restore, allErrors} = superForm(data.form, {
			validators: zodClient(editRoleSchema),
			dataType: "json",
			resetForm: false
		});
		const snapshot = {
			capture,
			restore
		};
		let edit = false;
		store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).name = data.singleUser?.name);
		store_mutate($$store_subs ??= {}, "$form", form, store_get($$store_subs ??= {}, "$form", form).description = data.singleUser?.description || "");
		head("ol2z7a", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Role Details</title>`);
			});
		});
		SingleView($$renderer, {
			title: "Role Details",
			children: ($$renderer) => {
				$$renderer.push(`<div class="mt-4 flex w-full flex-row items-start justify-start gap-2 pl-4">`);
				Button($$renderer, {
					onclick: () => edit = !edit,
					children: ($$renderer) => {
						if (!edit) {
							$$renderer.push("<!--[0-->");
							Pencil($$renderer, { class: "h-4 w-4" });
							$$renderer.push(`<!----> Edit`);
						} else {
							$$renderer.push("<!--[-1-->");
							Arrow_left($$renderer, { class: "h-4 w-4" });
							$$renderer.push(`<!----> Back`);
						}
						$$renderer.push(`<!--]-->`);
					},
					$$slots: { default: true }
				});
				$$renderer.push(`<!----> `);
				if (data.singleUser?.userCount > 0) {
					$$renderer.push("<!--[0-->");
					Button($$renderer, {
						variant: "destructive",
						onclick: () => toast.error("Cannot delete role with users"),
						title: "Cannot delete role with users",
						children: ($$renderer) => {
							Trash($$renderer, {});
							$$renderer.push(`<!----> Delete`);
						},
						$$slots: { default: true }
					});
				} else {
					$$renderer.push("<!--[-1-->");
					Delete($$renderer, { redirect: "/dashboard/admin-panel/roles" });
				}
				$$renderer.push(`<!--]--></div> `);
				if (edit === false) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<div class="w-full p-4">`);
					SingleTable($$renderer, { singleTable: singleTable() });
					$$renderer.push(`<!----></div>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]--> `);
				if (edit) {
					$$renderer.push("<!--[0-->");
					$$renderer.push(`<div class="w-full p-4"><form action="?/edit" id="main" class="flex flex-col gap-4" method="POST">`);
					Errors($$renderer, { allErrors: store_get($$store_subs ??= {}, "$allErrors", allErrors) });
					$$renderer.push(`<!----> `);
					InputComp($$renderer, {
						label: "Name",
						name: "name",
						type: "text",
						form,
						errors,
						placeholder: "Enter Role Name"
					});
					$$renderer.push(`<!----> `);
					InputComp($$renderer, {
						label: "Description",
						name: "description",
						type: "textarea",
						form,
						errors,
						placeholder: "Enter Role Description"
					});
					$$renderer.push(`<!----> `);
					InputComp($$renderer, {
						label: "Permissions",
						name: "permissions",
						type: "checkbox",
						form,
						errors,
						placeholder: "Enter Role Name",
						items: data?.allPermissions
					});
					$$renderer.push(`<!----> `);
					Button($$renderer, {
						type: "submit",
						class: "mt-4",
						form: "main",
						children: ($$renderer) => {
							if (store_get($$store_subs ??= {}, "$delayed", delayed)) {
								$$renderer.push("<!--[0-->");
								LoadingBtn($$renderer, { name: "Saving Change" });
							} else {
								$$renderer.push("<!--[-1-->");
								Save($$renderer, { class: "h-4 w-4" });
								$$renderer.push(`<!----> Save Changes`);
							}
							$$renderer.push(`<!--]-->`);
						},
						$$slots: { default: true }
					});
					$$renderer.push(`<!----></form></div>`);
				} else $$renderer.push("<!--[-1-->");
				$$renderer.push(`<!--]-->`);
			}});
		$$renderer.push(`<!----> <br/> `);
		if (data?.userList?.length) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<h3>Users on this Role</h3> `);
			Data_table($$renderer, {
				data: data?.userList,
				columns: userColumns,
				fileName: `${stringify(data?.singleUser.name)} Users List`
			});
			$$renderer.push(`<!---->`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
		if ($$store_subs) unsubscribe_stores($$store_subs);
		bind_props($$props, { snapshot });
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-IG6idjMi.js.map
