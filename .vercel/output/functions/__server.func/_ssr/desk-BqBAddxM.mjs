import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as Wrap } from "./router-DIqZ7oSX.mjs";
import { t as DeskPanel } from "./desk-panel-CP-htM5b.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/desk-BqBAddxM.js
var import_jsx_runtime = require_jsx_runtime();
function DeskPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-line py-12 md:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrap, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs text-muted backdrop-blur-md mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-ios-purple animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-white",
						children: "Isolated Virtual Desktops"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-white",
					children: "Disposable cloud workstations for secure operations."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base sm:text-lg text-muted leading-relaxed",
					children: "Launch dedicated Windows 11 remote environments locked inside your private WireGuard gateway. Local clipboard protection and complete volume wiping when your term ends."
				})
			]
		}) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrap, {
		className: "py-10 md:py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskPanel, {})
	})] });
}
//#endregion
export { DeskPage as component };
