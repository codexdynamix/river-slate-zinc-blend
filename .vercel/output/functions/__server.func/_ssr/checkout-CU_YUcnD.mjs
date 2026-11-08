import { i as __toESM } from "../_runtime.mjs";
import { v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { G as ArrowRight, R as Copy, U as Check, _ as RefreshCw, u as ShieldCheck } from "../_libs/lucide-react.mjs";
import { C as suggestCallsign, O as cn, a as useVela, b as planById, d as PLANS, g as cryptoAmount, h as cleanCallsign, m as assetById, n as Route$5, o as ASSETS, r as Wrap, w as termPrice } from "./router-DIqZ7oSX.mjs";
import { t as Button } from "./button-BDAna_Ig.mjs";
import { t as TermToggle } from "./term-toggle-JL3nDiBD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-CU_YUcnD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CheckoutPage() {
	const search = Route$5.useSearch();
	const navigate = useNavigate();
	const settle = useVela((state) => state.settle);
	const [planId, setPlanId] = (0, import_react.useState)(search.plan);
	const [term, setTerm] = (0, import_react.useState)(search.term);
	const [assetId, setAssetId] = (0, import_react.useState)("usdt");
	const [name, setName] = (0, import_react.useState)("");
	const [suggestion, setSuggestion] = (0, import_react.useState)("north-lark");
	const [step, setStep] = (0, import_react.useState)("draft");
	const [phase, setPhase] = (0, import_react.useState)(0);
	const [watching, setWatching] = (0, import_react.useState)(false);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const finished = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		setSuggestion(suggestCallsign());
	}, []);
	const plan = planById(planId);
	const usd = termPrice(plan.price, term);
	const asset = assetById(assetId);
	const amount = cryptoAmount(usd, assetId);
	const cleaned = name.trim() ? cleanCallsign(name) : suggestion;
	const invalid = name.trim().length > 0 && !cleanCallsign(name);
	(0, import_react.useEffect)(() => {
		if (!watching) return;
		const timers = [
			window.setTimeout(() => setPhase(1), 500),
			window.setTimeout(() => setPhase(2), 1100),
			window.setTimeout(() => setPhase(3), 1700),
			window.setTimeout(() => finish(), 2200)
		];
		return () => timers.forEach((id) => window.clearTimeout(id));
	}, [watching]);
	function finish() {
		if (finished.current || !cleaned) return;
		finished.current = true;
		const invoiceId = `VL-${Date.now().toString(36).toUpperCase()}`;
		settle({
			planId,
			term,
			asset: assetId,
			callsign: cleaned,
			invoiceId
		});
		navigate({ to: "/console" });
	}
	async function copyAddress() {
		try {
			await navigator.clipboard.writeText(asset.address);
			setCopied(true);
			setTimeout(() => setCopied(false), 2e3);
		} catch {
			setCopied(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
		className: "py-10 md:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl mb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs text-muted backdrop-blur-md mb-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5 text-ios-green" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-white",
						children: "Instant Private Activation"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl sm:text-4xl font-semibold tracking-tight text-white",
					children: "Reserve your communications workspace"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "No credit card, no identity documents, no per-agent agreements. Settle in crypto and start instantly."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 lg:grid-cols-12 items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ios-glass rounded-3xl p-6 sm:p-8 border border-white/10 lg:col-span-8 shadow-2xl",
				children: step === "draft" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-muted font-semibold mb-3",
							children: "1. Select Tier"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 sm:grid-cols-3",
							children: PLANS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-pressed": planId === item.id,
								onClick: () => setPlanId(item.id),
								className: cn("p-4 rounded-2xl border text-left transition-all", planId === item.id ? "border-volt/60 bg-volt/[0.08] shadow-md shadow-volt/10" : "border-white/10 bg-white/[0.02] hover:border-white/20"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-semibold text-white",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-1 block font-mono text-sm text-volt tabular-nums",
									children: [
										item.price,
										" USDT ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted",
											children: "/ mo"
										})
									]
								})]
							}, item.id))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-muted font-semibold mb-3",
							children: "2. Billing Cycle"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TermToggle, {
							term,
							onChange: setTerm
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-wider text-muted font-semibold mb-3",
							children: "3. Settlement Asset"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 gap-2.5 sm:grid-cols-3",
							children: ASSETS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-pressed": assetId === item.id,
								onClick: () => setAssetId(item.id),
								className: cn("p-3 rounded-2xl border text-left transition-all", assetId === item.id ? "border-volt/60 bg-volt/[0.08] shadow-sm shadow-volt/10" : "border-white/10 bg-white/[0.02] hover:border-white/20"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-semibold text-white",
									children: item.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs text-muted font-mono",
									children: item.network
								})]
							}, item.id))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "callsign",
								className: "text-xs uppercase tracking-wider text-muted font-semibold block mb-2",
								children: "4. Callsign (Private Workspace Handle)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "callsign",
									value: name,
									autoComplete: "off",
									placeholder: suggestion,
									onChange: (event) => setName(event.target.value),
									className: "h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-sm font-mono text-white placeholder:text-muted/50 focus:outline-none focus:ring-1 focus:ring-volt"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2.5 flex items-center gap-3 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "text-volt font-medium hover:underline flex items-center gap-1",
										onClick: () => setName(suggestion),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											"Use “",
											suggestion,
											"”"
										] })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted/40",
										children: "·"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "text-muted hover:text-white flex items-center gap-1",
										onClick: () => setSuggestion(suggestCallsign()),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Shuffle" })]
									})
								]
							}),
							invalid ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-red-400",
								children: "Must be 3–16 letters or digits starting with a letter."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-muted",
								children: "This callsign represents the entire account. No personal identity is linked or required."
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							className: "w-full sm:w-auto",
							size: "lg",
							disabled: Boolean(invalid),
							onClick: () => setStep("invoice"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Generate Sandbox Invoice" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-line pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-semibold uppercase tracking-wider text-volt",
									children: "Sandbox Settlement Node"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "mt-1 text-3xl font-semibold text-white tracking-tight",
									children: [
										amount,
										" ",
										asset.label
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted mt-0.5",
									children: [
										usd,
										" USDT value on ",
										asset.network,
										" · Callsign: ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-white font-medium",
											children: cleaned
										})
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-ios-green/15 text-ios-green border border-ios-green/30 px-3 py-1 text-xs font-semibold",
								children: "Quote Active"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row items-center sm:items-start gap-6 p-5 rounded-2xl bg-black/40 border border-white/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InvoiceQr, { value: `vela-sandbox:${asset.label}:${amount}:${asset.address}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1 w-full",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs uppercase tracking-wider text-muted font-semibold block",
										children: [
											"Deposit Address (",
											asset.network,
											")"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs font-mono break-all text-white p-3 rounded-xl bg-white/[0.04] border border-white/10 select-all",
										children: asset.address
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 flex items-center gap-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "line",
											size: "sm",
											onClick: () => void copyAddress(),
											children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-ios-green" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: copied ? "Address Copied" : "Copy Address" })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-xs text-muted leading-relaxed",
										children: "Sandbox simulation: Click “Confirm & Unlock Workspace” below to simulate instantaneous on-chain confirmation."
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-white/5 bg-white/[0.02] p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted mb-3",
								children: "Chain Verification"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs",
								children: [
									"Invoice Generated",
									"Tx Broadcasted",
									"Confirmations (1/1)",
									"Workspace Live"
								].map((label, index) => {
									const done = index <= phase;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: cn("p-2.5 rounded-xl border text-center transition-all", done ? "bg-ios-green/10 border-ios-green/30 text-white" : "bg-white/[0.01] border-white/5 text-muted"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-2 rounded-full inline-block mx-auto mb-1.5", done ? "bg-ios-green" : "bg-muted/40") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium text-[11px] leading-tight",
											children: label
										})]
									}, label);
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-3 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								disabled: watching,
								onClick: () => setWatching(true),
								children: watching ? "Broadcasting Confirmation..." : "Confirm & Unlock Workspace"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "line",
								size: "lg",
								disabled: watching,
								onClick: () => {
									setStep("draft");
									setPhase(0);
								},
								children: "Modify Tier"
							})]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "ios-glass rounded-3xl p-6 sm:p-7 border border-white/10 lg:col-span-4 shadow-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wider text-muted font-semibold",
						children: "Workspace Summary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-2xl font-semibold text-white tracking-tight",
						children: [plan.name, " Package"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-6 space-y-3 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-center py-2 border-b border-line",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "Subscription Term"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-semibold text-white",
									children: term === "year" ? "Annual (Save 15%)" : "30-Day Monthly"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-center py-2 border-b border-line",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "Included Agent Seats"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "font-semibold text-white font-mono",
									children: [plan.seats, " Seats"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-center py-2 border-b border-line",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "Outbound Minute Pool"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "font-semibold text-white font-mono",
									children: [plan.minutes.toLocaleString(), " Min"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-center py-2 border-b border-line",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "Included Carrier DIDs"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "font-semibold text-white font-mono",
									children: [plan.dids, " Numbers"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-center py-2 border-b border-line",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "Private Tunnel Hubs"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-semibold text-white",
									children: "12 Global Gateways"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-center py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-sm font-semibold text-white",
									children: "Total Crypto Due"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "text-base font-semibold text-volt font-mono tabular-nums",
									children: [
										amount,
										" ",
										asset.label
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-[11px] text-muted leading-relaxed",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-white block mb-1",
							children: "Zero Identity Obligation"
						}), "Vela workspaces do not require KYC. The generated callsign is the cryptographic key to your entire communication instance."]
					})
				]
			})]
		})]
	});
}
function InvoiceQr({ value }) {
	const [src, setSrc] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let alive = true;
		import("../_libs/qrcode.mjs").then((n) => /* @__PURE__ */ __toESM(n.t())).then((mod) => {
			const qr = typeof mod.toDataURL === "function" ? mod : mod.default;
			if (!qr?.toDataURL) return null;
			return qr.toDataURL(value, {
				margin: 1,
				width: 280,
				color: {
					dark: "#000000",
					light: "#ffffff"
				}
			});
		}).then((url) => {
			if (alive && url) setSrc(url);
		}).catch(() => {
			if (alive) setSrc(null);
		});
		return () => {
			alive = false;
		};
	}, [value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex size-44 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-lg",
		children: src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt: "Sandbox invoice QR code",
			className: "size-full object-contain"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "px-4 text-center text-xs text-black font-medium",
			children: "Generating QR..."
		})
	});
}
//#endregion
export { CheckoutPage as component };
