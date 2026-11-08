import { i as __toESM } from "../_runtime.mjs";
import { v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { N as Globe, U as Check, h as Search, y as Plus } from "../_libs/lucide-react.mjs";
import { O as cn, a as useVela, b as planById, r as Wrap, s as DIDS } from "./router-DIqZ7oSX.mjs";
import { t as Button } from "./button-BDAna_Ig.mjs";
import { t as VoicePanel } from "./voice-panel-CEqvdHGN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/voice-CouO1B4Y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function VoicePage() {
	const owned = useVela((state) => state.ownedDids);
	const active = useVela((state) => state.active);
	const planId = useVela((state) => state.planId);
	const attachDid = useVela((state) => state.attachDid);
	const plan = planById(active ? planId ?? "lattice" : "lattice");
	const [query, setQuery] = (0, import_react.useState)("");
	const filteredDids = DIDS.filter((d) => d.city.toLowerCase().includes(query.toLowerCase()) || d.country.toLowerCase().includes(query.toLowerCase()) || d.id.includes(query));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-line py-12 md:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrap, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs text-muted backdrop-blur-md mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-ios-green animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-white",
						children: "Direct WebRTC Telephony"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-white",
					children: "Carrier voice without per-agent licensing."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base sm:text-lg text-muted leading-relaxed",
					children: "Outbound, inbound, SMS, predictive automated dialer, and IVR queues. Present an international DID you hold. Unlimited seats are already covered in your flat workspace plan."
				})
			]
		}) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
		className: "py-10 md:py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoicePanel, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16 pt-12 border-t border-line",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-wider text-volt",
						children: "Carrier Number Fleet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-2xl sm:text-3xl font-semibold text-white",
						children: "International DIDs Inventory"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs sm:text-sm text-muted",
						children: [
							"Your ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white font-medium",
								children: plan.name
							}),
							" plan includes ",
							plan.dids,
							" free numbers. Attach extra numbers instantly in sandbox."
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full sm:w-64",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						placeholder: "Filter by city, country...",
						className: "h-10 w-full rounded-xl border border-white/10 bg-white/[0.04] pl-10 pr-3.5 text-xs text-white placeholder:text-muted/60 focus:outline-none focus:ring-1 focus:ring-volt"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 ios-glass rounded-3xl overflow-hidden border border-white/10 divide-y divide-line",
				children: filteredDids.map((did, index) => {
					const included = index < plan.dids;
					const held = owned.includes(did.id) || included;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 sm:px-6 hover:bg-white/[0.02] transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-volt shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-sm font-semibold text-white",
								children: did.id
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: [
									did.city,
									", ",
									did.country,
									" · Voice & SMS Enabled"
								]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between sm:justify-end gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium text-muted",
								children: included ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-ios-green font-semibold",
									children: ["Included in ", plan.name]
								}) : `${did.monthly} USDT / mo`
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: held ? "line" : "primary",
								size: "sm",
								disabled: held,
								onClick: () => attachDid(did.id),
								className: cn(held && "border-ios-green/40 text-ios-green bg-ios-green/10"),
								children: held ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Active on Line" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Attach DID" })] })
							})]
						})]
					}, did.id);
				})
			})]
		})]
	})] });
}
//#endregion
export { VoicePage as component };
