import { i as __toESM } from "../_runtime.mjs";
import { v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { I as Download, N as Globe, d as ShieldAlert, l as Shield, p as Server, u as ShieldCheck } from "../_libs/lucide-react.mjs";
import { O as cn, S as regionById, T as tunnelAddress, _ as effectivePlanId, a as useVela, b as planById, f as PROTOCOLS, p as REGIONS, x as profileText, y as planAllows } from "./router-DIqZ7oSX.mjs";
import { t as Button } from "./button-BDAna_Ig.mjs";
import { n as SwitchThumb, t as Switch } from "../_libs/radix-ui__react-switch.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tunnel-panel-D5QHzq5e.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TunnelPanel() {
	const regionId = useVela((state) => state.regionId);
	const protocol = useVela((state) => state.protocol);
	const vpnOn = useVela((state) => state.vpnOn);
	const killSwitch = useVela((state) => state.killSwitch);
	const planId = useVela((state) => state.planId);
	const active = useVela((state) => state.active);
	const setRegion = useVela((state) => state.setRegion);
	const setProtocol = useVela((state) => state.setProtocol);
	const setKillSwitch = useVela((state) => state.setKillSwitch);
	const connectVpn = useVela((state) => state.connectVpn);
	const disconnectVpn = useVela((state) => state.disconnectVpn);
	const [handshaking, setHandshaking] = (0, import_react.useState)(false);
	const plan = planById(effectivePlanId(planId, active));
	const region = regionById(regionId);
	const address = tunnelAddress(regionId);
	const dedicated = planAllows(plan.id, "foundry");
	(0, import_react.useEffect)(() => {
		if (!handshaking) return;
		const id = window.setTimeout(() => {
			connectVpn();
			setHandshaking(false);
		}, 650);
		return () => window.clearInterval(id);
	}, [handshaking, connectVpn]);
	function onConnect() {
		if (handshaking) {
			setHandshaking(false);
			return;
		}
		if (vpnOn) disconnectVpn();
		else setHandshaking(true);
	}
	function download() {
		const text = profileText(protocol, region.id, address);
		const blob = new Blob([text], { type: "text/plain" });
		const url = URL.createObjectURL(blob);
		const anchor = document.createElement("a");
		anchor.href = url;
		anchor.download = `vela-${region.id}-sandbox.conf`;
		anchor.click();
		URL.revokeObjectURL(url);
	}
	const status = handshaking ? "Handshaking" : vpnOn ? "Active" : killSwitch ? "Held" : "Disconnected";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 ios-glass rounded-3xl p-6 border border-white/10 flex flex-col justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("size-12 rounded-2xl flex items-center justify-center transition-all", vpnOn ? "bg-ios-green/15 text-ios-green border border-ios-green/30 shadow-lg shadow-ios-green/10" : handshaking ? "bg-volt/15 text-volt border border-volt/30 animate-pulse" : "bg-white/[0.04] text-muted border border-white/10"),
							children: vpnOn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-6" }) : killSwitch && !vpnOn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-6 text-volt" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-wider font-semibold text-muted",
								children: "WireGuard Tunnel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 rounded-full", vpnOn ? "bg-ios-green animate-pulse" : "bg-muted") })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-semibold text-white tracking-tight",
							children: status
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: onConnect,
						variant: vpnOn ? "line" : "primary",
						size: "lg",
						className: cn(vpnOn && "hover:border-red-500/50 hover:text-red-400"),
						children: handshaking ? "Cancel Handshake" : vpnOn ? "Disconnect Tunnel" : "Connect to Gateway"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 rounded-2xl bg-black/40 border border-white/10 p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted block",
								children: "Selected Egress"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold text-white mt-1 block flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-3.5 text-volt" }), region.city]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted block",
								children: "Virtual IP (IPv4)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono font-semibold text-white mt-1 block",
								children: vpnOn ? address : "Not Assigned"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted block",
								children: "Measured Roundtrip"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono font-semibold text-ios-green mt-1 block tabular-nums",
								children: [region.ms, " ms latency"]
							})] })
						]
					}), !vpnOn && killSwitch && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-volt",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Kill switch active: Network adapter drops raw packets until handshake completes." })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-white",
						children: "Network Kill Switch"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted mt-0.5",
						children: "Block all unencrypted system traffic if the WireGuard tunnel drops unexpectedly."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						checked: killSwitch,
						onCheckedChange: setKillSwitch,
						"aria-label": "Kill switch",
						className: "relative h-7 w-12 shrink-0 rounded-full bg-white/10 data-[state=checked]:bg-volt transition-colors duration-200 outline-none",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: "block size-5 translate-x-1 rounded-full bg-white transition-transform duration-200 data-[state=checked]:translate-x-6 data-[state=checked]:bg-black shadow-md" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wider text-muted font-semibold mb-3",
						children: "Tunnel Protocol"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2.5 sm:grid-cols-3",
						children: PROTOCOLS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-pressed": protocol === item.id,
							onClick: () => setProtocol(item.id),
							className: cn("p-3 rounded-2xl border text-left transition-all", protocol === item.id ? "border-volt/60 bg-volt/[0.08] shadow-sm shadow-volt/10" : "border-white/10 bg-white/[0.02] hover:border-white/20"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-semibold text-white",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-xs text-muted leading-snug",
								children: item.detail
							})]
						}, item.id))
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 pt-5 border-t border-line flex flex-wrap items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: dedicated ? "Dedicated exit IP allocated to your callsign." : "High-reputation shared egress IP pool. Dedicated IP available on Foundry."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "line",
					size: "sm",
					onClick: download,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Download .conf Profile" })]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ios-glass rounded-3xl p-6 border border-white/10 flex flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-line pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-wider text-muted font-semibold",
					children: "Global Gateways"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-semibold text-white",
					children: "12 Available Regions"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] font-mono text-ios-green",
					children: "All Nominal"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-2 max-h-[460px] overflow-y-auto pr-1",
				children: REGIONS.map((item) => {
					const selected = item.id === regionId;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setRegion(item.id),
						"aria-pressed": selected,
						className: cn("w-full rounded-2xl border p-3.5 text-left transition-all", selected ? "border-volt/60 bg-volt/[0.08] shadow-md shadow-volt/10" : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm font-semibold text-white flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "size-3.5 text-muted" }), item.city]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs text-ios-green font-medium tabular-nums",
									children: [item.ms, " ms"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2.5 flex items-center justify-between gap-3 text-[11px] text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Node load" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono tabular-nums",
									children: [item.load, "%"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 h-1 w-full rounded-full bg-white/10 overflow-hidden",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-volt rounded-full",
									style: { width: `${item.load}%` }
								})
							})
						]
					}) }, item.id);
				})
			})]
		})]
	});
}
//#endregion
export { TunnelPanel as t };
