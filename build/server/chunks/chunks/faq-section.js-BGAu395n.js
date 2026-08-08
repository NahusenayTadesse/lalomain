import { a3 as attr_class, a0 as bind_props, T as attributes, U as clsx$1, _ as spread_props, E as setContext, aa as props_id, F as derived, a4 as escape_html, a2 as stringify, V as ensure_array_like, S as hasContext, M as getContext, X as attr } from './index-server.js-BTqLeq8m.js';
import { o as on } from './legacy-client.js-CVA7pvYI.js';
import { r as createId, b as boxWith, p as mergeProps, k as attachRef, m as boolToEmptyStrOrUndef, g as createBitsAttrs, l as getDataOpenClosed, o as getDataTransitionAttrs, n as boolToStr } from './create-id.js-C-QgUMSs.js';
import { I as Icon } from './Icon.js-CT_MUOCa.js';
import { C as Chevron_down } from './chevron-down.js-CsAPuZPl.js';
import { C as Chevron_left, a as Chevron_right } from './chevron-right.js-Zdnw8aNH.js';
import { C as Chevron_up } from './chevron-up.js-DfaVFTlA.js';
import { X } from './x.js-Ck4p1r8z.js';
import { c as cn, B as Button } from './button.js-bMcXU9rE.js';
import { n as noop, w as watch, C as Context, R as RovingFocusGroup, a as Portal, P as PresenceManager, b as afterTick } from './scroll-lock.js-CAZpLRtv.js';
import { D as Dialog, d as Dialog_overlay, a as Dialog_content, e as Dialog_title, b as Dialog_close } from './dialog-content.js-xpb-oFii.js';
import { D as Dialog_description } from './dialog-description.js-CrMMB7cS.js';
import { a as assetUrl } from './assets.js-DVYtCFUU.js';
import { S as Section_heading } from './section-heading.js-fpGDQmSC.js';

//#region node_modules/.pnpm/@lucide+svelte@1.28.0_svelte@5.56.8_@typescript-eslint+types@8.65.0_/node_modules/@lucide/svelte/dist/icons/expand.svelte
function Expand($$renderer, $$props) {
	let { $$slots, $$events, ...props } = $$props;
	Icon($$renderer, spread_props([
		{ name: "expand" },
		props,
		{ iconNode: [
			["path", { "d": "m15 15 6 6" }],
			["path", { "d": "m15 9 6-6" }],
			["path", { "d": "M21 16v5h-5" }],
			["path", { "d": "M21 8V3h-5" }],
			["path", { "d": "M3 16v5h5" }],
			["path", { "d": "m3 21 6-6" }],
			["path", { "d": "M3 8V3h5" }],
			["path", { "d": "M9 9 3 3" }]
		] }
	]));
}
//#endregion
//#region node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.2_@sveltejs+kit@2.70.1_@sveltejs+vite-plugi_03e2a69c0ed56edf0a30cf2c35f91a79/node_modules/bits-ui/dist/bits/accordion/accordion.svelte.js
var accordionAttrs = createBitsAttrs({
	component: "accordion",
	parts: [
		"root",
		"trigger",
		"content",
		"item",
		"header"
	]
});
var AccordionRootContext = new Context("Accordion.Root");
var AccordionItemContext = new Context("Accordion.Item");
var AccordionBaseState = class {
	opts;
	rovingFocusGroup;
	attachment;
	constructor(opts) {
		this.opts = opts;
		this.rovingFocusGroup = new RovingFocusGroup({
			rootNode: this.opts.ref,
			candidateAttr: accordionAttrs.trigger,
			loop: this.opts.loop,
			orientation: this.opts.orientation
		});
		this.attachment = attachRef(this.opts.ref);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		"data-orientation": this.opts.orientation.current,
		"data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
		[accordionAttrs.root]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var AccordionSingleState = class extends AccordionBaseState {
	opts;
	isMulti = false;
	constructor(opts) {
		super(opts);
		this.opts = opts;
		this.includesItem = this.includesItem.bind(this);
		this.toggleItem = this.toggleItem.bind(this);
	}
	includesItem(item) {
		return this.opts.value.current === item;
	}
	toggleItem(item) {
		this.opts.value.current = this.includesItem(item) ? "" : item;
	}
};
var AccordionMultiState = class extends AccordionBaseState {
	#value;
	isMulti = true;
	constructor(props) {
		super(props);
		this.#value = props.value;
		this.includesItem = this.includesItem.bind(this);
		this.toggleItem = this.toggleItem.bind(this);
	}
	includesItem(item) {
		return this.#value.current.includes(item);
	}
	toggleItem(item) {
		this.#value.current = this.includesItem(item) ? this.#value.current.filter((v) => v !== item) : [...this.#value.current, item];
	}
};
var AccordionRootState = class {
	static create(props) {
		const { type, ...rest } = props;
		const rootState = type === "single" ? new AccordionSingleState(rest) : new AccordionMultiState(rest);
		return AccordionRootContext.set(rootState);
	}
};
var AccordionItemState = class AccordionItemState {
	static create(props) {
		return AccordionItemContext.set(new AccordionItemState({
			...props,
			rootState: AccordionRootContext.get()
		}));
	}
	opts;
	root;
	#isActive = derived(() => this.root.includesItem(this.opts.value.current));
	get isActive() {
		return this.#isActive();
	}
	set isActive($$value) {
		return this.#isActive($$value);
	}
	#isDisabled = derived(() => this.opts.disabled.current || this.root.opts.disabled.current);
	get isDisabled() {
		return this.#isDisabled();
	}
	set isDisabled($$value) {
		return this.#isDisabled($$value);
	}
	attachment;
	contentNode = null;
	contentPresence;
	constructor(opts) {
		this.opts = opts;
		this.root = opts.rootState;
		this.updateValue = this.updateValue.bind(this);
		this.attachment = attachRef(this.opts.ref);
		this.contentPresence = new PresenceManager({
			ref: boxWith(() => this.contentNode),
			open: boxWith(() => this.isActive)
		});
	}
	updateValue() {
		this.root.toggleItem(this.opts.value.current);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		"data-state": getDataOpenClosed(this.isActive),
		"data-disabled": boolToEmptyStrOrUndef(this.isDisabled),
		"data-orientation": this.root.opts.orientation.current,
		[accordionAttrs.item]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var AccordionTriggerState = class AccordionTriggerState {
	opts;
	itemState;
	#root;
	#isDisabled = derived(() => this.opts.disabled.current || this.itemState.opts.disabled.current || this.#root.opts.disabled.current);
	attachment;
	constructor(opts, itemState) {
		this.opts = opts;
		this.itemState = itemState;
		this.#root = itemState.root;
		this.onclick = this.onclick.bind(this);
		this.onkeydown = this.onkeydown.bind(this);
		this.attachment = attachRef(this.opts.ref);
	}
	static create(props) {
		return new AccordionTriggerState(props, AccordionItemContext.get());
	}
	onclick(e) {
		if (this.#isDisabled() || e.button !== 0) {
			e.preventDefault();
			return;
		}
		this.itemState.updateValue();
	}
	onkeydown(e) {
		if (this.#isDisabled()) return;
		if (e.key === " " || e.key === "Enter") {
			e.preventDefault();
			this.itemState.updateValue();
			return;
		}
		this.#root.rovingFocusGroup.handleKeydown(this.opts.ref.current, e);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		disabled: this.#isDisabled(),
		"aria-expanded": boolToStr(this.itemState.isActive),
		"aria-disabled": boolToStr(this.#isDisabled()),
		"data-disabled": boolToEmptyStrOrUndef(this.#isDisabled()),
		"data-state": getDataOpenClosed(this.itemState.isActive),
		"data-orientation": this.#root.opts.orientation.current,
		[accordionAttrs.trigger]: "",
		tabindex: this.opts.tabindex.current,
		onclick: this.onclick,
		onkeydown: this.onkeydown,
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var AccordionContentState = class AccordionContentState {
	opts;
	item;
	attachment;
	#originalStyles = void 0;
	#isMountAnimationPrevented = false;
	#dimensions = {
		width: 0,
		height: 0
	};
	#open = derived(() => {
		if (this.opts.hiddenUntilFound.current) return this.item.isActive;
		return this.opts.forceMount.current || this.item.isActive;
	});
	get open() {
		return this.#open();
	}
	set open($$value) {
		return this.#open($$value);
	}
	constructor(opts, item) {
		this.opts = opts;
		this.item = item;
		this.#isMountAnimationPrevented = this.item.isActive;
		this.attachment = attachRef(this.opts.ref, (v) => this.item.contentNode = v);
		watch.pre([() => this.opts.ref.current, () => this.opts.hiddenUntilFound.current], ([node, hiddenUntilFound]) => {
			if (!node || !hiddenUntilFound) return;
			const handleBeforeMatch = () => {
				if (this.item.isActive) return;
				requestAnimationFrame(() => {
					this.item.updateValue();
				});
			};
			return on(node, "beforematch", handleBeforeMatch);
		});
		watch([() => this.open, () => this.opts.ref.current], this.#updateDimensions);
	}
	static create(props) {
		return new AccordionContentState(props, AccordionItemContext.get());
	}
	#updateDimensions = ([_, node]) => {
		if (!node) return;
		afterTick(() => {
			const element = this.opts.ref.current;
			if (!element) return;
			this.#originalStyles ??= {
				transitionDuration: element.style.transitionDuration,
				animationName: element.style.animationName
			};
			element.style.transitionDuration = "0s";
			element.style.animationName = "none";
			const rect = element.getBoundingClientRect();
			this.#dimensions = {
				width: rect.width,
				height: rect.height
			};
			if (!this.#isMountAnimationPrevented && this.#originalStyles) {
				element.style.transitionDuration = this.#originalStyles.transitionDuration;
				element.style.animationName = this.#originalStyles.animationName;
			}
		});
	};
	get shouldRender() {
		return this.item.contentPresence.shouldRender;
	}
	#snippetProps = derived(() => ({ open: this.item.isActive }));
	get snippetProps() {
		return this.#snippetProps();
	}
	set snippetProps($$value) {
		return this.#snippetProps($$value);
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		"data-state": getDataOpenClosed(this.item.isActive),
		...getDataTransitionAttrs(this.item.contentPresence.transitionStatus),
		"data-disabled": boolToEmptyStrOrUndef(this.item.isDisabled),
		"data-orientation": this.item.root.opts.orientation.current,
		[accordionAttrs.content]: "",
		style: {
			"--bits-accordion-content-height": `${this.#dimensions.height}px`,
			"--bits-accordion-content-width": `${this.#dimensions.width}px`
		},
		hidden: this.opts.hiddenUntilFound.current && !this.item.isActive ? "until-found" : void 0,
		...this.opts.hiddenUntilFound.current && !this.shouldRender ? {} : { hidden: this.opts.hiddenUntilFound.current ? !this.shouldRender : this.opts.forceMount.current ? void 0 : !this.shouldRender },
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
var AccordionHeaderState = class AccordionHeaderState {
	opts;
	item;
	attachment;
	constructor(opts, item) {
		this.opts = opts;
		this.item = item;
		this.attachment = attachRef(this.opts.ref);
	}
	static create(props) {
		return new AccordionHeaderState(props, AccordionItemContext.get());
	}
	#props = derived(() => ({
		id: this.opts.id.current,
		role: "heading",
		"aria-level": this.opts.level.current,
		"data-heading-level": this.opts.level.current,
		"data-state": getDataOpenClosed(this.item.isActive),
		"data-orientation": this.item.root.opts.orientation.current,
		[accordionAttrs.header]: "",
		...this.attachment
	}));
	get props() {
		return this.#props();
	}
	set props($$value) {
		return this.#props($$value);
	}
};
//#endregion
//#region node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.2_@sveltejs+kit@2.70.1_@sveltejs+vite-plugi_03e2a69c0ed56edf0a30cf2c35f91a79/node_modules/bits-ui/dist/bits/accordion/components/accordion.svelte
function Accordion$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { disabled = false, children, child, type, value = void 0, ref = null, id = createId(uid), onValueChange = noop, loop = true, orientation = "vertical", $$slots, $$events, ...restProps } = $$props;
		function handleDefaultValue() {
			if (value !== void 0) return;
			value = type === "single" ? "" : [];
		}
		handleDefaultValue();
		watch.pre(() => value, () => {
			handleDefaultValue();
		});
		const rootState = AccordionRootState.create({
			type,
			value: boxWith(() => value, (v) => {
				value = v;
				onValueChange(v);
			}),
			id: boxWith(() => id),
			disabled: boxWith(() => disabled),
			loop: boxWith(() => loop),
			orientation: boxWith(() => orientation),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived(() => mergeProps(restProps, rootState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, {
			value,
			ref
		});
	});
}
//#endregion
//#region node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.2_@sveltejs+kit@2.70.1_@sveltejs+vite-plugi_03e2a69c0ed56edf0a30cf2c35f91a79/node_modules/bits-ui/dist/bits/accordion/components/accordion-item.svelte
function Accordion_item$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const defaultId = createId(props_id($$renderer));
		let { id = defaultId, disabled = false, value = defaultId, children, child, ref = null, $$slots, $$events, ...restProps } = $$props;
		const itemState = AccordionItemState.create({
			value: boxWith(() => value),
			disabled: boxWith(() => disabled),
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived(() => mergeProps(restProps, itemState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.2_@sveltejs+kit@2.70.1_@sveltejs+vite-plugi_03e2a69c0ed56edf0a30cf2c35f91a79/node_modules/bits-ui/dist/bits/accordion/components/accordion-header.svelte
function Accordion_header($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { id = createId(uid), level = 2, children, child, ref = null, $$slots, $$events, ...restProps } = $$props;
		const headerState = AccordionHeaderState.create({
			id: boxWith(() => id),
			level: boxWith(() => level),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived(() => mergeProps(restProps, headerState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.2_@sveltejs+kit@2.70.1_@sveltejs+vite-plugi_03e2a69c0ed56edf0a30cf2c35f91a79/node_modules/bits-ui/dist/bits/accordion/components/accordion-trigger.svelte
function Accordion_trigger$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { disabled = false, ref = null, id = createId(uid), tabindex = 0, children, child, $$slots, $$events, ...restProps } = $$props;
		const triggerState = AccordionTriggerState.create({
			disabled: boxWith(() => disabled),
			id: boxWith(() => id),
			tabindex: boxWith(() => tabindex ?? 0),
			ref: boxWith(() => ref, (v) => ref = v)
		});
		const mergedProps = derived(() => mergeProps(restProps, triggerState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, { props: mergedProps() });
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<button${attributes({
				type: "button",
				...mergedProps()
			})}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></button>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region node_modules/.pnpm/bits-ui@2.18.1_@internationalized+date@3.12.2_@sveltejs+kit@2.70.1_@sveltejs+vite-plugi_03e2a69c0ed56edf0a30cf2c35f91a79/node_modules/bits-ui/dist/bits/accordion/components/accordion-content.svelte
function Accordion_content$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const uid = props_id($$renderer);
		let { child, ref = null, id = createId(uid), forceMount = false, children, hiddenUntilFound = false, $$slots, $$events, ...restProps } = $$props;
		const contentState = AccordionContentState.create({
			forceMount: boxWith(() => forceMount),
			id: boxWith(() => id),
			ref: boxWith(() => ref, (v) => ref = v),
			hiddenUntilFound: boxWith(() => hiddenUntilFound)
		});
		const mergedProps = derived(() => mergeProps(restProps, contentState.props));
		if (child) {
			$$renderer.push("<!--[0-->");
			child($$renderer, {
				props: mergedProps(),
				...contentState.snippetProps
			});
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<div${attributes({ ...mergedProps() })}>`);
			children?.($$renderer);
			$$renderer.push(`<!----></div>`);
		}
		$$renderer.push(`<!--]-->`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/carousel/context.ts
var EMBLA_CAROUSEL_CONTEXT = Symbol("EMBLA_CAROUSEL_CONTEXT");
function setEmblaContext(config) {
	setContext(EMBLA_CAROUSEL_CONTEXT, config);
	return config;
}
function getEmblaContext(name = "This component") {
	if (!hasContext(EMBLA_CAROUSEL_CONTEXT)) throw new Error(`${name} must be used within a <Carousel.Root> component`);
	return getContext(EMBLA_CAROUSEL_CONTEXT);
}
//#endregion
//#region src/lib/components/ui/carousel/carousel-content.svelte
function Carousel_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		const emblaCtx = getEmblaContext("<Carousel.Content/>");
		$$renderer.push(`<div data-slot="carousel-content" class="overflow-hidden"><div${attributes({
			class: clsx$1(cn("flex", emblaCtx.orientation === "horizontal" ? "-ms-4" : "-mt-4 flex-col", className)),
			"data-embla-container": "",
			...restProps
		})}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></div></div>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/carousel/carousel-item.svelte
function Carousel_item($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		const emblaCtx = getEmblaContext("<Carousel.Item/>");
		$$renderer.push(`<div${attributes({
			"data-slot": "carousel-item",
			role: "group",
			"aria-roledescription": "slide",
			class: clsx$1(cn("min-w-0 shrink-0 grow-0 basis-full", emblaCtx.orientation === "horizontal" ? "ps-4" : "pt-4", className)),
			"data-embla-slide": "",
			...restProps
		})}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/carousel/carousel-next.svelte
function Carousel_next($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, variant = "outline", size = "icon-sm", $$slots, $$events, ...restProps } = $$props;
		const emblaCtx = getEmblaContext("<Carousel.Next/>");
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Button($$renderer, spread_props([
				{
					"data-slot": "carousel-next",
					variant,
					size,
					"aria-disabled": !emblaCtx.canScrollNext,
					disabled: !emblaCtx.canScrollNext,
					class: cn("cn-carousel-next absolute touch-manipulation", emblaCtx.orientation === "horizontal" ? "inset-y-0 -end-12 my-auto" : "start-1/2 -bottom-12 -translate-x-1/2 rotate-90", className),
					onclick: emblaCtx.scrollNext,
					onkeydown: emblaCtx.handleKeyDown
				},
				restProps,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer) => {
						Chevron_right($$renderer, {});
						$$renderer.push(`<!----> <span class="sr-only">Next slide</span>`);
					},
					$$slots: { default: true }
				}
			]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/carousel/carousel-previous.svelte
function Carousel_previous($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, variant = "outline", size = "icon-sm", $$slots, $$events, ...restProps } = $$props;
		const emblaCtx = getEmblaContext("<Carousel.Previous/>");
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			Button($$renderer, spread_props([
				{
					"data-slot": "carousel-previous",
					variant,
					size,
					"aria-disabled": !emblaCtx.canScrollPrev,
					disabled: !emblaCtx.canScrollPrev,
					class: cn("cn-carousel-previous absolute touch-manipulation", emblaCtx.orientation === "horizontal" ? "inset-y-0 -start-12 my-auto" : "start-1/2 -top-12 -translate-x-1/2 rotate-90", className),
					onclick: emblaCtx.scrollPrev,
					onkeydown: emblaCtx.handleKeyDown
				},
				restProps,
				{
					get ref() {
						return ref;
					},
					set ref($$value) {
						ref = $$value;
						$$settled = false;
					},
					children: ($$renderer) => {
						Chevron_left($$renderer, {});
						$$renderer.push(`<!----> <span class="sr-only">Previous slide</span>`);
					},
					$$slots: { default: true }
				}
			]));
		}
		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);
		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/carousel/carousel.svelte
function Carousel($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, opts = {}, plugins = [], setApi = () => {}, orientation = "horizontal", class: className, children, $$slots, $$events, ...restProps } = $$props;
		let carouselState = {
			api: void 0,
			scrollPrev,
			scrollNext,
			orientation,
			canScrollNext: false,
			canScrollPrev: false,
			handleKeyDown,
			options: opts,
			plugins,
			onInit,
			scrollSnaps: [],
			selectedIndex: 0,
			scrollTo
		};
		setEmblaContext(carouselState);
		function scrollPrev() {
			carouselState.api?.scrollPrev();
		}
		function scrollNext() {
			carouselState.api?.scrollNext();
		}
		function scrollTo(index, jump) {
			carouselState.api?.scrollTo(index, jump);
		}
		function onSelect() {
			if (!carouselState.api) return;
			carouselState.selectedIndex = carouselState.api.selectedScrollSnap();
			carouselState.canScrollNext = carouselState.api.canScrollNext();
			carouselState.canScrollPrev = carouselState.api.canScrollPrev();
		}
		function handleKeyDown(e) {
			if (e.key === "ArrowLeft") {
				e.preventDefault();
				scrollPrev();
			} else if (e.key === "ArrowRight") {
				e.preventDefault();
				scrollNext();
			}
		}
		function onInit(event) {
			carouselState.api = event.detail;
			setApi(carouselState.api);
			carouselState.scrollSnaps = carouselState.api.scrollSnapList();
			carouselState.api.on("select", onSelect);
			onSelect();
		}
		$$renderer.push(`<div${attributes({
			"data-slot": "carousel",
			class: clsx$1(cn("relative", className)),
			role: "region",
			"aria-roledescription": "carousel",
			...restProps
		})}>`);
		children?.($$renderer);
		$$renderer.push(`<!----></div>`);
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/GalleryLightbox.svelte
function GalleryLightbox($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { images, open = false, index = 0, onclose } = $$props;
		let loaded = [];
		const reduceMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		function onOpenChange(next) {
			if (!next) onclose?.(index);
		}
		/** Only the current image and its neighbours are worth fetching eagerly. */
		const eager = (i) => Math.min(Math.abs(i - index), images.length - Math.abs(i - index)) <= 1;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Dialog) {
				$$renderer.push("<!--[-->");
				Dialog($$renderer, {
					onOpenChange,
					get open() {
						return open;
					},
					set open($$value) {
						open = $$value;
						$$settled = false;
					},
					children: ($$renderer) => {
						if (Portal) {
							$$renderer.push("<!--[-->");
							Portal($$renderer, {
								children: ($$renderer) => {
									if (Dialog_overlay) {
										$$renderer.push("<!--[-->");
										Dialog_overlay($$renderer, { class: "fixed inset-0 z-50 bg-black/92 backdrop-blur-md data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" });
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
									$$renderer.push(` `);
									if (Dialog_content) {
										$$renderer.push("<!--[-->");
										Dialog_content($$renderer, {
											class: "fixed inset-0 z-50 flex flex-col outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
											children: ($$renderer) => {
												if (Dialog_title) {
													$$renderer.push("<!--[-->");
													Dialog_title($$renderer, {
														class: "sr-only",
														children: ($$renderer) => {
															$$renderer.push(`<!---->${escape_html(images[index]?.caption ?? images[index]?.alt ?? "Image viewer")}`);
														},
														$$slots: { default: true }
													});
													$$renderer.push("<!--]-->");
												} else {
													$$renderer.push("<!--[!-->");
													$$renderer.push("<!--]-->");
												}
												$$renderer.push(` `);
												if (Dialog_description) {
													$$renderer.push("<!--[-->");
													Dialog_description($$renderer, {
														class: "sr-only",
														children: ($$renderer) => {
															$$renderer.push(`<!---->Image ${escape_html(index + 1)} of ${escape_html(images.length)}. Use the arrow keys to move between images, Escape to
				close.`);
														},
														$$slots: { default: true }
													});
													$$renderer.push("<!--]-->");
												} else {
													$$renderer.push("<!--[!-->");
													$$renderer.push("<!--]-->");
												}
												$$renderer.push(` <header class="flex items-center justify-between px-5 py-4 sm:px-8 sm:py-6"><span class="text-sm font-medium tabular-nums text-white/60">${escape_html(index + 1)} / ${escape_html(images.length)}</span> `);
												if (Dialog_close) {
													$$renderer.push("<!--[-->");
													Dialog_close($$renderer, {
														class: "flex size-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition duration-300 hover:rotate-90 hover:border-white/40 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
														"aria-label": "Close image viewer",
														children: ($$renderer) => {
															X($$renderer, { class: "size-5" });
														},
														$$slots: { default: true }
													});
													$$renderer.push("<!--]-->");
												} else {
													$$renderer.push("<!--[!-->");
													$$renderer.push("<!--]-->");
												}
												$$renderer.push(`</header> `);
												if (Carousel) {
													$$renderer.push("<!--[-->");
													Carousel($$renderer, {
														setApi: (embla) => embla,
														opts: {
															loop: true,
															duration: reduceMotion ? 0 : 22
														},
														"aria-label": "Full screen image viewer",
														class: "min-h-0 flex-1",
														children: ($$renderer) => {
															if (Carousel_content) {
																$$renderer.push("<!--[-->");
																Carousel_content($$renderer, {
																	class: "ml-0",
																	children: ($$renderer) => {
																		$$renderer.push(`<!--[-->`);
																		const each_array = ensure_array_like(images);
																		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
																			let image = each_array[i];
																			if (Carousel_item) {
																				$$renderer.push("<!--[-->");
																				Carousel_item($$renderer, {
																					class: "basis-full pl-0",
																					children: ($$renderer) => {
																						$$renderer.push(`<div class="flex h-[calc(100dvh-11rem)] items-center justify-center px-5 sm:px-16"><img${attr("src", assetUrl(image.full ?? image.src))}${attr("alt", image.alt)}${attr("loading", eager(i) ? "eager" : "lazy")} decoding="async" draggable="false"${attr_class(`max-h-full max-w-full rounded-xl object-contain shadow-2xl transition-opacity duration-500 ${loaded[i] ? "opacity-100" : "opacity-0"}`)} onload="this.__e=event"/></div>`);
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
															$$renderer.push(` `);
															if (images.length > 1) {
																$$renderer.push("<!--[0-->");
																if (Carousel_previous) {
																	$$renderer.push("<!--[-->");
																	Carousel_previous($$renderer, { class: "left-2 size-12 border-white/15 bg-white/5 text-white backdrop-blur-md transition duration-300 hover:-translate-x-0.5 hover:border-white/40 hover:bg-white/10 hover:text-white active:scale-95 sm:left-6" });
																	$$renderer.push("<!--]-->");
																} else {
																	$$renderer.push("<!--[!-->");
																	$$renderer.push("<!--]-->");
																}
																$$renderer.push(` `);
																if (Carousel_next) {
																	$$renderer.push("<!--[-->");
																	Carousel_next($$renderer, { class: "right-2 size-12 border-white/15 bg-white/5 text-white backdrop-blur-md transition duration-300 hover:translate-x-0.5 hover:border-white/40 hover:bg-white/10 hover:text-white active:scale-95 sm:right-6" });
																	$$renderer.push("<!--]-->");
																} else {
																	$$renderer.push("<!--[!-->");
																	$$renderer.push("<!--]-->");
																}
															} else $$renderer.push("<!--[-1-->");
															$$renderer.push(`<!--]-->`);
														},
														$$slots: { default: true }
													});
													$$renderer.push("<!--]-->");
												} else {
													$$renderer.push("<!--[!-->");
													$$renderer.push("<!--]-->");
												}
												$$renderer.push(` <footer class="px-5 pb-8 text-center sm:px-8">`);
												if (images[index]?.caption) {
													$$renderer.push("<!--[0-->");
													$$renderer.push(`<p class="mx-auto max-w-2xl text-sm leading-relaxed text-balance text-white/75">${escape_html(images[index].caption)}</p>`);
												} else $$renderer.push("<!--[-1-->");
												$$renderer.push(`<!--]--></footer>`);
											},
											$$slots: { default: true }
										});
										$$renderer.push("<!--]-->");
									} else {
										$$renderer.push("<!--[!-->");
										$$renderer.push("<!--]-->");
									}
								}});
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
		bind_props($$props, {
			open,
			index
		});
	});
}
//#endregion
//#region src/lib/components/image-gallery.svelte
function Image_gallery($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { images, label = "Image gallery", openOn = "centered" } = $$props;
		let api = void 0;
		let selected = 0;
		let loaded = [];
		let lightboxOpen = false;
		let lightboxIndex = 0;
		const reduceMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			$$renderer.push(`<div class="relative">`);
			if (Carousel) {
				$$renderer.push("<!--[-->");
				Carousel($$renderer, {
					setApi: (embla) => api = embla,
					opts: {
						loop: true,
						align: "center",
						duration: reduceMotion ? 0 : 26
					},
					"aria-label": label,
					children: ($$renderer) => {
						if (Carousel_content) {
							$$renderer.push("<!--[-->");
							Carousel_content($$renderer, {
								class: "-ml-4 py-4 sm:-ml-6 sm:py-6",
								children: ($$renderer) => {
									$$renderer.push(`<!--[-->`);
									const each_array = ensure_array_like(images);
									for (let i = 0, $$length = each_array.length; i < $$length; i++) {
										let image = each_array[i];
										const active = i === selected;
										if (Carousel_item) {
											$$renderer.push("<!--[-->");
											Carousel_item($$renderer, {
												class: "basis-[72%] pl-4 sm:basis-[46%] sm:pl-6 lg:basis-[34%]",
												children: ($$renderer) => {
													$$renderer.push(`<figure data-gallery-slide=""${attr("data-active", active)} style="transform: scale(var(--depth-scale, 1)); opacity: var(--depth-opacity, 1); filter: blur(var(--depth-blur, 0px));" class="group relative aspect-4/5 overflow-hidden rounded-3xl border border-border bg-muted shadow-[0_2px_12px_-6px_rgb(0_0_0/0.4)] transition-[box-shadow] duration-500 will-change-[transform,opacity] data-[active=true]:shadow-[0_30px_60px_-28px_rgb(0_0_0/0.6)]"><img${attr("src", assetUrl(image.src))}${attr("alt", image.alt)}${attr("loading", i < 2 ? "eager" : "lazy")} decoding="async" draggable="false"${attr_class(`pointer-events-none h-full w-full scale-[1.02] object-cover transition-[transform,opacity,filter] duration-[900ms] ease-out group-hover:scale-[1.09] ${loaded[i] ? "opacity-100 blur-0" : "opacity-0 blur-lg"}`)} onload="this.__e=event"/> <div class="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent opacity-55 transition-opacity duration-500 group-hover:opacity-95 group-data-[active=true]:opacity-85"></div> <div class="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10 ring-inset"></div> <div class="pointer-events-none absolute top-4 right-4 flex size-9 scale-90 items-center justify-center rounded-full bg-black/45 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:scale-100 group-data-[active=true]:opacity-100">`);
													Expand($$renderer, { class: "size-4" });
													$$renderer.push(`<!----></div> `);
													if (image.caption) {
														$$renderer.push("<!--[0-->");
														$$renderer.push(`<figcaption class="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-5 text-[0.9375rem] leading-snug font-medium text-balance text-white opacity-0 transition-[transform,opacity] duration-500 ease-out group-data-[active=true]:translate-y-0 group-data-[active=true]:opacity-100">${escape_html(image.caption)}</figcaption>`);
													} else $$renderer.push("<!--[-1-->");
													$$renderer.push(`<!--]--> <button type="button"${attr("aria-label", i === selected ? `Open ${image.caption ?? image.alt} full screen` : `Show image ${i + 1} of ${images.length}`)}${attr("aria-current", i === selected ? "true" : void 0)} class="absolute inset-0 rounded-3xl focus-visible:-outline-offset-4 focus-visible:outline-2 focus-visible:outline-primary"></button></figure>`);
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
						$$renderer.push(` `);
						if (images.length > 1) {
							$$renderer.push("<!--[0-->");
							if (Carousel_previous) {
								$$renderer.push("<!--[-->");
								Carousel_previous($$renderer, { class: "-left-1 size-11 border-border bg-background/80 shadow-lg backdrop-blur-md transition duration-300 hover:-translate-x-0.5 hover:bg-background hover:text-primary hover:shadow-xl active:scale-95 sm:-left-5" });
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
							$$renderer.push(` `);
							if (Carousel_next) {
								$$renderer.push("<!--[-->");
								Carousel_next($$renderer, { class: "-right-1 size-11 border-border bg-background/80 shadow-lg backdrop-blur-md transition duration-300 hover:translate-x-0.5 hover:bg-background hover:text-primary hover:shadow-xl active:scale-95 sm:-right-5" });
								$$renderer.push("<!--]-->");
							} else {
								$$renderer.push("<!--[!-->");
								$$renderer.push("<!--]-->");
							}
						} else $$renderer.push("<!--[-1-->");
						$$renderer.push(`<!--]-->`);
					},
					$$slots: { default: true }
				});
				$$renderer.push("<!--]-->");
			} else {
				$$renderer.push("<!--[!-->");
				$$renderer.push("<!--]-->");
			}
			$$renderer.push(` `);
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></div> `);
			GalleryLightbox($$renderer, {
				images,
				onclose: (i) => api?.scrollTo(i, true),
				get open() {
					return lightboxOpen;
				},
				set open($$value) {
					lightboxOpen = $$value;
					$$settled = false;
				},
				get index() {
					return lightboxIndex;
				},
				set index($$value) {
					lightboxIndex = $$value;
					$$settled = false;
				}
			});
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
//#endregion
//#region src/lib/components/ui/accordion/accordion-content.svelte
function Accordion_content($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, children, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Accordion_content$1) {
				$$renderer.push("<!--[-->");
				Accordion_content$1($$renderer, spread_props([
					{
						"data-slot": "accordion-content",
						class: "text-sm data-open:animate-accordion-down data-closed:animate-accordion-up overflow-hidden"
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						},
						children: ($$renderer) => {
							$$renderer.push(`<div${attr_class(clsx$1(cn("pt-0 pb-4 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4", className)))}>`);
							children?.($$renderer);
							$$renderer.push(`<!----></div>`);
						},
						$$slots: { default: true }
					}
				]));
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
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/accordion/accordion-item.svelte
function Accordion_item($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Accordion_item$1) {
				$$renderer.push("<!--[-->");
				Accordion_item$1($$renderer, spread_props([
					{
						"data-slot": "accordion-item",
						class: cn("not-last:border-b", className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						}
					}
				]));
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
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/accordion/accordion-trigger.svelte
function Accordion_trigger($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, class: className, level = 3, children, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Accordion_header) {
				$$renderer.push("<!--[-->");
				Accordion_header($$renderer, {
					level,
					class: "flex",
					children: ($$renderer) => {
						if (Accordion_trigger$1) {
							$$renderer.push("<!--[-->");
							Accordion_trigger$1($$renderer, spread_props([
								{
									"data-slot": "accordion-trigger",
									class: cn("gap-6 rounded-none py-4 text-left text-sm font-semibold hover:underline focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-3.5 **:data-[slot=accordion-trigger-icon]:text-muted-foreground group/accordion-trigger relative flex flex-1 items-start justify-between border border-transparent transition-all outline-none disabled:pointer-events-none disabled:opacity-50", className)
								},
								restProps,
								{
									get ref() {
										return ref;
									},
									set ref($$value) {
										ref = $$value;
										$$settled = false;
									},
									children: ($$renderer) => {
										children?.($$renderer);
										$$renderer.push(`<!----> `);
										Chevron_down($$renderer, {
											"data-slot": "accordion-trigger-icon",
											class: "cn-accordion-trigger-icon pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
										});
										$$renderer.push(`<!----> `);
										Chevron_up($$renderer, {
											"data-slot": "accordion-trigger-icon",
											class: "cn-accordion-trigger-icon pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
										});
										$$renderer.push(`<!---->`);
									},
									$$slots: { default: true }
								}
							]));
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
		bind_props($$props, { ref });
	});
}
//#endregion
//#region src/lib/components/ui/accordion/accordion.svelte
function Accordion($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { ref = null, value = void 0, class: className, $$slots, $$events, ...restProps } = $$props;
		let $$settled = true;
		let $$inner_renderer;
		function $$render_inner($$renderer) {
			if (Accordion$1) {
				$$renderer.push("<!--[-->");
				Accordion$1($$renderer, spread_props([
					{
						"data-slot": "accordion",
						class: cn("cn-accordion flex w-full flex-col", className)
					},
					restProps,
					{
						get ref() {
							return ref;
						},
						set ref($$value) {
							ref = $$value;
							$$settled = false;
						},
						get value() {
							return value;
						},
						set value($$value) {
							value = $$value;
							$$settled = false;
						}
					}
				]));
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
		bind_props($$props, {
			ref,
			value
		});
	});
}
//#endregion
//#region src/lib/components/faq-section.svelte
function Faq_section($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { faqs, title = "Frequently Asked Questions", subtitle, class: className = "" } = $$props;
		if (faqs.length) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<section${attr_class(`py-20 ${stringify(className)}`)}><div class="container mx-auto px-4 sm:px-6">`);
			Section_heading($$renderer, {
				title,
				subtitle
			});
			$$renderer.push(`<!----> <div class="mx-auto mt-12 max-w-3xl">`);
			Accordion($$renderer, {
				type: "single",
				class: "w-full",
				children: ($$renderer) => {
					$$renderer.push(`<!--[-->`);
					const each_array = ensure_array_like(faqs);
					for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
						let faq = each_array[$$index];
						Accordion_item($$renderer, {
							value: `item-${stringify(faq.id)}`,
							children: ($$renderer) => {
								Accordion_trigger($$renderer, {
									class: "text-left",
									children: ($$renderer) => {
										$$renderer.push(`<!---->${escape_html(faq.question)}`);
									},
									$$slots: { default: true }
								});
								$$renderer.push(`<!----> `);
								Accordion_content($$renderer, {
									class: "text-muted-foreground",
									children: ($$renderer) => {
										$$renderer.push(`<!---->${escape_html(faq.answer)}`);
									},
									$$slots: { default: true }
								});
								$$renderer.push(`<!---->`);
							},
							$$slots: { default: true }
						});
					}
					$$renderer.push(`<!--]-->`);
				},
				$$slots: { default: true }
			});
			$$renderer.push(`<!----></div></div></section>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}

export { Faq_section as F, Image_gallery as I };
//# sourceMappingURL=faq-section.js-BGAu395n.js.map
