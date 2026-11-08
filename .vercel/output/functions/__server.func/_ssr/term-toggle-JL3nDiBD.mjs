import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { O as cn } from "./router-DIqZ7oSX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/term-toggle-JL3nDiBD.js
var import_jsx_runtime = require_jsx_runtime();
function TermToggle({ term, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "inline-flex rounded-full bg-white/[0.06] p-1.5 border border-white/10 shadow-inner",
		role: "group",
		"aria-label": "Billing term",
		children: [["month", "Monthly Billing"], ["year", "Annual · Save 15%"]].map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-pressed": term === value,
			onClick: () => onChange(value),
			className: cn("h-10 rounded-full px-5 text-xs sm:text-sm font-semibold transition-all duration-200", term === value ? "bg-white text-black shadow-md shadow-black/20" : "text-muted hover:text-white"),
			children: label
		}, value))
	});
}
//#endregion
export { TermToggle as t };
