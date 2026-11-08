import { i as __toESM } from "../_runtime.mjs";
import { v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { E as velaForSeats, O as cn } from "./router-DIqZ7oSX.mjs";
import { i as SliderTrack, n as SliderRange, r as SliderThumb, t as Slider } from "../_libs/@radix-ui/react-slider+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/seat-math-BEdhCVk5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SeatMath() {
	const [seats, setSeats] = (0, import_react.useState)(12);
	const voisoCost = seats * 65;
	const quote = velaForSeats(seats);
	const savings = Math.max(0, voisoCost - quote.monthly);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "ios-glass rounded-3xl p-6 md:p-9 border border-white/10 shadow-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold uppercase tracking-wider text-volt",
						children: "Cost & Capacity Calculator"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-white",
						children: "Stop paying per-seat taxes to legacy telecom"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs sm:text-sm text-muted",
						children: "Slide to match your team size. See how Vela eliminates seat markups compared to Voiso."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted block font-medium",
						children: "Active Agent Floor"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-4xl font-semibold tracking-tight text-white tabular-nums",
						children: [
							seats,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base font-normal text-muted",
								children: "agents"
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slider, {
					className: "relative flex h-12 w-full touch-none select-none items-center",
					min: 1,
					max: 50,
					step: 1,
					value: [seats],
					onValueChange: ([value]) => setSeats(value ?? 1),
					"aria-label": "Number of agent seats",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderTrack, {
						className: "relative h-2.5 grow rounded-full bg-white/10 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderRange, { className: "absolute h-full rounded-full bg-gradient-to-r from-volt to-[#0071e3]" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SliderThumb, {
						className: "block size-6 rounded-full bg-white shadow-lg shadow-black/50 ring-2 ring-volt focus-visible:outline-none active:scale-110 transition-transform cursor-grab active:cursor-grabbing",
						"aria-label": "Seats"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between text-[11px] text-muted font-mono mt-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "1 seat (Solo)" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "12 seats (Core)" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "25 seats (Scale)" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "50+ seats (Enterprise)" })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
						label: "Voiso / Zadarma Estimated",
						value: `$${voisoCost.toLocaleString()}`,
						sublabel: "Billed per seat",
						hint: "$65/agent/mo + PBX add-ons",
						_muted: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
						label: `Vela ${quote.plan.name} Tier`,
						value: `$${quote.monthly.toLocaleString()}`,
						sublabel: "Flat workspace fee",
						hint: quote.extra > 0 ? `Includes 25 core seats + ${quote.extra} overflow @ 6 USDT` : `All ${seats} agent seats included in flat pool`,
						highlight: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
						label: "Estimated Monthly Retained",
						value: `$${savings.toLocaleString()}`,
						sublabel: "Net capital saved",
						hint: `Save ~${Math.round(savings / voisoCost * 100)}% every month with zero seat penalty`,
						accent: true
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-xs text-muted/70 leading-relaxed",
				children: "Calculations in USDT (1:1 with USD). Minute overages past included pool billed at 0.012 USDT per minute. Inbound calls to all attached international DIDs are 100% free with zero per-minute fees."
			})
		]
	});
}
function Figure({ label, value, sublabel, hint, _muted, highlight, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("rounded-2xl p-5 border transition-all", accent ? "bg-ios-green/[0.08] border-ios-green/30 text-white" : highlight ? "bg-volt/[0.08] border-volt/30 text-white" : "bg-white/[0.03] border-white/5 text-muted"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-between text-xs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold uppercase tracking-wider",
					children: label
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: cn("mt-3 text-3xl font-semibold tracking-tight tabular-nums", accent ? "text-ios-green" : highlight ? "text-volt" : "text-fg"),
				children: [value, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-normal text-muted ml-1.5",
					children: "/ mo"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs font-medium text-white/90",
				children: sublabel
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs text-muted leading-snug",
				children: hint
			})
		]
	});
}
//#endregion
export { SeatMath as t };
