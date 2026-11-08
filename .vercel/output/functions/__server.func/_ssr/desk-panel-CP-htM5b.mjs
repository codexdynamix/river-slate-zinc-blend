import { i as __toESM } from "../_runtime.mjs";
import { v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { P as FileText, T as Monitor, U as Check, s as Terminal, u as ShieldCheck } from "../_libs/lucide-react.mjs";
import { O as cn, S as regionById, T as tunnelAddress, _ as effectivePlanId, a as useVela, b as planById, i as useHydrated, u as MACHINES, v as machineById, y as planAllows } from "./router-DIqZ7oSX.mjs";
import { t as Button } from "./button-BDAna_Ig.mjs";
import { t as formatClock } from "./format-C2pV7IaQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/desk-panel-CP-htM5b.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILES = [
	{
		name: "Calls.csv",
		body: "peer,seconds,result\n+1 212 555 0174,18,human\n+1 415 555 0138,0,machine\n+44 20 7946 0123,0,no-answer\n"
	},
	{
		name: "Routes.conf",
		body: "gateway = locked\nclipboard = local\nwipe = on-cancel\nencryption = chacha20poly1305\n"
	},
	{
		name: "Scratchpad.txt",
		body: "Session notes stay in browser memory until disconnect.\nNo disk snapshots are preserved upon workspace reset.\n"
	}
];
function DeskPanel() {
	const machineId = useVela((state) => state.machineId);
	const deskOpen = useVela((state) => state.deskOpen);
	const planId = useVela((state) => state.planId);
	const active = useVela((state) => state.active);
	const callsign = useVela((state) => state.callsign);
	const vpnOn = useVela((state) => state.vpnOn);
	const regionId = useVela((state) => state.regionId);
	const setMachine = useVela((state) => state.setMachine);
	const setDeskOpen = useVela((state) => state.setDeskOpen);
	const plan = planById(effectivePlanId(planId, active));
	const machine = machineById(machineId);
	if (!deskOpen) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 md:grid-cols-2",
		children: MACHINES.map((item) => {
			const allowed = planAllows(plan.id, item.min);
			const selected = item.id === machineId;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: cn("ios-glass flex flex-col justify-between rounded-3xl p-6 border transition-all duration-200", selected ? "border-volt/60 bg-volt/[0.04] shadow-xl shadow-volt/10" : "border-white/10 hover:border-white/20"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs uppercase tracking-wider font-semibold text-muted",
							children: [item.os, " Instance"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-white/[0.06] px-2.5 py-0.5 text-[11px] font-mono text-muted",
							children: item.id
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-2xl font-semibold text-white tracking-tight",
						children: item.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted leading-relaxed",
						children: item.note
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid grid-cols-3 gap-2 rounded-2xl bg-black/40 border border-white/5 p-3 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-wider text-muted block",
								children: "Compute"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-white mt-0.5 block",
								children: item.cpu
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-wider text-muted block",
								children: "Memory"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-white mt-0.5 block",
								children: item.ram
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-wider text-muted block",
								children: "NVMe Disk"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold text-white mt-0.5 block",
								children: item.disk
							})] })
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 pt-4 border-t border-line flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-muted flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5 text-ios-green" }), "Wipe on cancel"]
					}), allowed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						onClick: () => {
							setMachine(item.id);
							setDeskOpen(true);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Launch Desk" })]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/pricing",
						className: "text-xs font-semibold text-volt hover:underline",
						children: "Included with Foundry"
					})]
				})]
			}, item.id);
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Desktop, {
		name: machine.name,
		spec: `${machine.cpu} · ${machine.ram}`,
		callsign: callsign || "guest",
		address: vpnOn ? tunnelAddress(regionId) : "direct",
		region: regionById(regionId).city,
		planName: plan.name,
		onClose: () => setDeskOpen(false)
	});
}
function Desktop({ name, spec, callsign, address, region, planName, onClose }) {
	const hydrated = useHydrated();
	const [clock, setClock] = (0, import_react.useState)("--:--");
	const [file, setFile] = (0, import_react.useState)(FILES[2].name);
	const [notes, setNotes] = (0, import_react.useState)(FILES[2].body);
	const [lines, setLines] = (0, import_react.useState)([{
		kind: "out",
		text: `${name} active on isolated gateway. Type 'help' for diagnostics.`
	}]);
	const [command, setCommand] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		const tick = () => setClock(formatClock(/* @__PURE__ */ new Date()));
		tick();
		const id = window.setInterval(tick, 1e3);
		return () => window.clearInterval(id);
	}, [hydrated]);
	function openFile(next) {
		const found = FILES.find((item) => item.name === next);
		setFile(next);
		if (found) setNotes(found.body);
	}
	function run(event) {
		event.preventDefault();
		const raw = command.trim();
		if (!raw) return;
		const verb = raw.toLowerCase();
		let output = `command not found: ${raw}`;
		if (verb === "help") output = "whoami · ip · status · clear · ping";
		if (verb === "whoami") output = `callsign: ${callsign} (anonymous session)`;
		if (verb === "ip") output = address === "direct" ? `gateway: direct · exit via ${region}` : `encrypted tunnel address: ${address} via ${region}`;
		if (verb === "status") output = `${name} · ${planName} · ${spec} · crypto verified`;
		if (verb === "ping") output = "64 bytes from 10.8.4.1: icmp_seq=1 ttl=64 time=14.2 ms";
		if (verb === "clear") {
			setLines([]);
			setCommand("");
			return;
		}
		setLines((current) => [
			...current,
			{
				kind: "in",
				text: raw
			},
			{
				kind: "out",
				text: output
			}
		].slice(-14));
		setCommand("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "ios-glass rounded-3xl overflow-hidden border border-white/15 shadow-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3 border-b border-line px-5 py-3.5 bg-black/40 text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-3 rounded-full bg-red-500/80" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-3 rounded-full bg-amber-500/80" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-3 rounded-full bg-emerald-500/80" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-semibold text-white",
						children: [
							name,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted font-normal",
								children: [
									"(",
									spec,
									")"
								]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 font-mono text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: callsign }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums text-white",
							children: clock
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "desk-wallpaper p-4 md:p-6 grid gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: FILES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => openFile(item.name),
						className: cn("h-8 rounded-lg px-3 text-xs font-medium flex items-center gap-1.5 transition-all", file === item.name ? "bg-white text-black font-semibold shadow-sm" : "bg-white/[0.06] text-muted hover:text-white border border-white/5"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.name })]
					}, item.name))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 lg:grid-cols-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-white/10 bg-black/50 p-4 lg:col-span-3 flex flex-col min-h-64",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between pb-3 border-b border-white/10 text-xs text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: file }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[11px] text-ios-green flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" }), "Local Memory Only"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: notes,
							onChange: (event) => setNotes(event.target.value),
							className: "flex-1 mt-3 resize-none bg-transparent font-mono text-xs text-fg outline-none leading-relaxed",
							"aria-label": "Desk notes"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-white/10 bg-black/80 p-4 lg:col-span-2 flex flex-col min-h-64 justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between pb-2 border-b border-white/10 text-xs text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1.5 font-medium text-white",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "size-3 text-volt" }), "Terminal"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] text-muted",
								children: "sh-v5"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 space-y-1.5 font-mono text-xs overflow-y-auto max-h-48 pr-1",
							children: lines.map((line, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn(line.kind === "in" ? "text-volt font-semibold" : "text-fg/80"),
								children: line.kind === "in" ? `› ${line.text}` : line.text
							}, idx))
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: run,
							className: "mt-3 flex items-center gap-2 border-t border-white/10 pt-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-volt font-mono text-xs font-bold",
									children: "›"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: command,
									onChange: (event) => setCommand(event.target.value),
									placeholder: "type help...",
									className: "h-8 flex-1 bg-transparent font-mono text-xs text-white outline-none placeholder:text-muted/50"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "text-xs font-semibold text-volt px-2.5 py-1 rounded-md hover:bg-white/5",
									children: "Run"
								})
							]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3 border-t border-line px-5 py-3 bg-black/40 text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted",
					children: "Secure sandbox. Clipboard isolated to browser session. Machine wiped upon termination."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "line",
					size: "sm",
					onClick: onClose,
					children: "Disconnect Session"
				})]
			})
		]
	});
}
//#endregion
export { DeskPanel as t };
