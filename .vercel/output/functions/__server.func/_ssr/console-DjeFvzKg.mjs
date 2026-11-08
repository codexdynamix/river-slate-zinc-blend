import { i as __toESM } from "../_runtime.mjs";
import { v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as PhoneCall, R as Copy, T as Monitor, U as Check, V as CircleCheck, _ as RefreshCw, d as ShieldAlert, j as KeyRound, l as Shield } from "../_libs/lucide-react.mjs";
import { O as cn, _ as effectivePlanId, a as useVela, b as planById, r as Wrap } from "./router-DIqZ7oSX.mjs";
import { t as Button } from "./button-BDAna_Ig.mjs";
import { t as DeskPanel } from "./desk-panel-CP-htM5b.mjs";
import { t as TunnelPanel } from "./tunnel-panel-D5QHzq5e.mjs";
import { t as VoicePanel } from "./voice-panel-CEqvdHGN.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/console-DjeFvzKg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RecoveryDialog() {
	const recovery = useVela((state) => state.recovery);
	const seen = useVela((state) => state.recoverySeen);
	const active = useVela((state) => state.active);
	const ack = useVela((state) => state.ackRecovery);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const open = Boolean(active && recovery && !seen);
	async function copy() {
		if (!recovery) return;
		try {
			await navigator.clipboard.writeText(recovery.join(" "));
			setCopied(true);
			setTimeout(() => setCopied(false), 2e3);
		} catch {
			setCopied(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-md animate-in fade-in duration-200" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "fixed top-1/2 left-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/15 bg-[#0e1118]/95 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl animate-in zoom-in-95 duration-200",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-10 rounded-xl bg-volt/15 border border-volt/30 flex items-center justify-center text-volt",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-xl sm:text-2xl font-semibold text-white tracking-tight",
						children: "Store Your Workspace Phrase"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-ios-green font-medium",
						children: "Cryptographic Seed Key"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "mt-3 text-xs sm:text-sm text-muted leading-relaxed",
					children: "These twelve words restore access to your private phone lines, WireGuard tunnels, and virtual desktops. We do not store this key and cannot recover it if lost."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2",
					children: (recovery ?? []).map((word, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-mono",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums text-muted/60 text-[10px] w-4",
							children: [index + 1, "."]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-white font-medium",
							children: word
						})]
					}, word))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center gap-2 text-[11px] text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-3.5 text-volt shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Never share this seed phrase with anyone." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap items-center gap-3 border-t border-line pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						onClick: () => void copy(),
						children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-ios-green" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: copied ? "Copied" : "Copy Seed Phrase" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "line",
						size: "sm",
						onClick: ack,
						children: "I have safely backed it up"
					})]
				})
			]
		})] })
	});
}
function ConsolePage() {
	const [pane, setPane] = (0, import_react.useState)("voice");
	const callsign = useVela((state) => state.callsign);
	const active = useVela((state) => state.active);
	const planId = useVela((state) => state.planId);
	const invoiceId = useVela((state) => state.invoiceId);
	const asset = useVela((state) => state.asset);
	const reset = useVela((state) => state.resetWorkspace);
	const plan = planById(effectivePlanId(planId, active));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
		className: "py-8 md:py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecoveryDialog, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ios-glass rounded-3xl p-6 sm:p-8 border border-white/10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-ios-green animate-pulse" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs uppercase tracking-wider font-semibold text-muted",
									children: "Enterprise Workspace"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted/40",
									children: "·"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs text-volt font-mono uppercase",
									children: [plan.name, " Tier"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 text-3xl sm:text-4xl font-semibold text-white tracking-tight",
							children: callsign || "Unsigned Sandbox"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs sm:text-sm text-muted",
							children: active ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5 text-ios-green",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4" }),
									"Invoice ",
									invoiceId,
									" confirmed via ",
									asset.toUpperCase(),
									" on-chain settlement."
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								"Running in live interactive sandbox mode. Full features enabled.",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/pricing",
									className: "text-volt font-medium hover:underline",
									children: "Settle crypto invoice"
								}),
								" ",
								"to reserve your callsign."
							] })
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: cn("rounded-full px-3.5 py-1 text-xs font-semibold flex items-center gap-1.5", active ? "bg-ios-green/15 text-ios-green border border-ios-green/30" : "bg-volt/15 text-volt border border-volt/30"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-current" }), active ? "Settled Account" : "Sandbox Preview"]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex items-center justify-start border-t border-line pt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex items-center gap-1.5 p-1 rounded-2xl bg-white/[0.05] border border-white/10",
						children: [
							[
								"voice",
								"Voice & Dialer",
								PhoneCall
							],
							[
								"tunnel",
								"WireGuard Tunnel",
								Shield
							],
							[
								"desk",
								"Virtual Desktops",
								Monitor
							]
						].map(([id, label, Icon]) => {
							const selected = pane === id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								role: "tab",
								"aria-selected": selected,
								onClick: () => setPane(id),
								className: cn("flex items-center gap-2 h-10 px-4 sm:px-5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200", selected ? "bg-white text-black shadow-md shadow-black/20" : "text-muted hover:text-white hover:bg-white/[0.04]"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
							}, id);
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8",
				children: [
					pane === "voice" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoicePanel, {}) : null,
					pane === "tunnel" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TunnelPanel, {}) : null,
					pane === "desk" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskPanel, {}) : null
				]
			}),
			active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 pt-6 border-t border-line flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: reset,
					className: "inline-flex items-center gap-2 text-xs font-medium text-red-400/80 hover:text-red-400 hover:underline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Terminate & Wipe This Sandbox Workspace" })]
				})
			}) : null
		]
	});
}
//#endregion
export { ConsolePage as component };
