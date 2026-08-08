import { i as indexColumn, c as column, a as imageColumn, l as longColumn, b as listColumn, e as editColumn, d as deleteColumn, C as Content_page } from '../../../../../chunks/columns.js-BvIv9Egn.js';
import '../../../../../chunks/index-server.js-BTqLeq8m.js';
import '../../../../../chunks/rolldown-runtime.js-B3lhT2nr.js';
import '../../../../../chunks/uneval.js-CatQk29t.js';
import '../../../../../chunks/data-table.js-DWtbDJGg.js';
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
import '../../../../../chunks/button.js-bMcXU9rE.js';
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
import '../../../../../chunks/InputComp.js-WvDjA_HK.js';
import '../../../../../chunks/badge-check.js-Bm3KBDwy.js';
import '../../../../../chunks/chevron-right.js-Zdnw8aNH.js';
import '../../../../../chunks/circle-alert.js-BBu5AyXT.js';
import '../../../../../chunks/loader.js-BRhHoeZt.js';
import '../../../../../chunks/command.js-DctsEKur.js';
import '../../../../../chunks/LoadingBtn.js-BOcE4VBH.js';
import '../../../../../chunks/x.js-Ck4p1r8z.js';
import '../../../../../chunks/dialog-content.js-xpb-oFii.js';
import '../../../../../chunks/SelectComp.js-DiDAVd-M.js';
import '../../../../../chunks/chevron-up.js-DfaVFTlA.js';
import '../../../../../chunks/safe-polygon.svelte.js-MuUjbcC-.js';
import '../../../../../chunks/label.js-DTCBdSc8.js';
import '../../../../../chunks/assets.js-DVYtCFUU.js';
import '../../../../../chunks/client2.js-Clbb-yOm.js';
import '../../../../../chunks/forms.js-Dl9gmZZg.js';
import '../../../../../chunks/app.js-COdsXQ7K.js';
import '../../../../../chunks/stores.js-s-pIdUZM.js';
import 'browser-image-compression';
import '../../../../../chunks/plus.js-D_QDBo_j.js';
import '../../../../../chunks/save.js-BfqCztfl.js';
import '../../../../../chunks/image-viewer.js-C2PJ6Pdl.js';
import '../../../../../chunks/trash.js-DxoIETsD.js';
import '../../../../../chunks/Errors.js-BXAzcvnM.js';

//#region src/routes/dashboard/content/farms/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const fields = [
			{
				name: "name",
				label: "Farm name",
				type: "text",
				required: true
			},
			{
				name: "location",
				label: "Location",
				type: "text",
				placeholder: "e.g. Limmu, Oromia"
			},
			{
				name: "image",
				label: "Photo",
				type: "file"
			},
			{
				name: "description",
				label: "Description",
				type: "textarea",
				rows: 3
			},
			{
				name: "altitude",
				label: "Altitude",
				type: "text",
				placeholder: "e.g. 1,900-2,100m"
			},
			{
				name: "grade",
				label: "Grade",
				type: "text",
				placeholder: "e.g. Specialty Grade 1"
			},
			{
				name: "stats",
				label: "Key facts",
				type: "textarea",
				placeholder: "One fact per line, e.g. 200 hectares",
				rows: 4
			},
			{
				name: "sortOrder",
				label: "Display order",
				type: "number"
			}
		];
		const columns = [
			indexColumn,
			column("name", "Name"),
			column("location", "Location"),
			imageColumn("image", "Photo"),
			longColumn("description", "Description"),
			listColumn("stats", "Key facts"),
			column("sortOrder", "Order"),
			editColumn({
				data: data.editForm,
				fields,
				title: "Edit Farm",
				keys: [
					"name",
					"location",
					"description",
					"altitude",
					"grade",
					"stats",
					"sortOrder"
				],
				fileKeys: ["image"],
				listKeys: ["stats"]
			}),
			deleteColumn(data.deleteForm, "name")
		];
		Content_page($$renderer, {
			title: "Farms",
			description: "Shown on the home page and the Our Coffee page.",
			addTitle: "Add Farm",
			addForm: data.addForm,
			fields,
			columns,
			rows: data.rows
		});
	});
}

export { _page as default };
//# sourceMappingURL=_page.svelte.js-Cb_lqwgl.js.map
