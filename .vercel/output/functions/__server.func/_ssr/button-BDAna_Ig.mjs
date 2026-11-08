import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { O as cn } from "./router-DIqZ7oSX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-BDAna_Ig.js
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98]", {
	variants: {
		variant: {
			primary: "bg-volt text-white hover:bg-volt-hover shadow-lg shadow-volt/25 hover:shadow-volt/40 border border-white/20 font-semibold",
			secondary: "bg-volt-light text-volt hover:bg-[#ebdfff] border border-volt-border font-semibold",
			line: "border border-line-bright bg-white text-fg hover:bg-card-hover hover:border-volt/30 shadow-xs backdrop-blur-md",
			ghost: "bg-transparent text-muted hover:text-volt hover:bg-card-hover",
			call: "bg-ios-green text-white font-semibold hover:brightness-105 shadow-md shadow-ios-green/30",
			hangup: "bg-hangup text-white font-semibold hover:brightness-105 shadow-md shadow-hangup/30"
		},
		size: {
			sm: "min-h-9 px-3.5 text-xs rounded-full",
			md: "min-h-11 px-5 text-sm rounded-full",
			lg: "min-h-12 px-6 text-base rounded-full font-semibold"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
//#endregion
export { buttonVariants as n, Button as t };
