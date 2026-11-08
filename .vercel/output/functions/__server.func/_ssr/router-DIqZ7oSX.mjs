import { i as __toESM } from "../_runtime.mjs";
import { v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { S as useRouter, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { H as ChevronDown, W as ArrowUpRight, k as Menu, n as X, o as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DIqZ7oSX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("voiso-mark relative flex size-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#ff5d92] via-[#b14dff] to-[#4d6bff] p-1.5 shadow-md shadow-[#b14dff]/30 ring-1 ring-white/30", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "size-4.5 text-white",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2.3",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" })
		})
	});
}
var PLANS = [
	{
		id: "relay",
		name: "Relay",
		price: 19,
		blurb: "A line, one tunnel, and burst time on a shared desk.",
		seats: 2,
		minutes: 800,
		dids: 1,
		tunnels: "1 device",
		desk: "Shared pool · 8 hours",
		features: [
			"2 voice seats",
			"800 outbound minutes",
			"1 DID included",
			"1 WireGuard device",
			"Shared desk, 8 hours",
			"Manual dialer and SMS"
		]
	},
	{
		id: "lattice",
		name: "Lattice",
		price: 49,
		blurb: "The workspace most teams actually run.",
		seats: 8,
		minutes: 3e3,
		dids: 3,
		tunnels: "5 devices · 12 regions",
		desk: "Dedicated 4 vCPU",
		featured: true,
		features: [
			"8 voice seats",
			"3,000 outbound minutes",
			"3 DIDs included",
			"5 tunnels across 12 regions",
			"Dedicated desk, 4 vCPU / 8 GB",
			"Predictive dialer and IVR"
		]
	},
	{
		id: "foundry",
		name: "Foundry",
		price: 129,
		blurb: "A floor of seats, a pinned exit IP, three desks.",
		seats: 25,
		minutes: 1e4,
		dids: 8,
		tunnels: "Dedicated exit IP",
		desk: "3 desks · up to 8 vCPU",
		features: [
			"25 voice seats",
			"10,000 outbound minutes",
			"8 DIDs included",
			"Dedicated VPN exit address",
			"3 desks, up to 8 vCPU / 32 GB",
			"Recordings kept for the term"
		]
	}
];
var PLAN_RANK = {
	relay: 0,
	lattice: 1,
	foundry: 2
};
function planById(id) {
	return PLANS.find((plan) => plan.id === id) ?? PLANS[1];
}
function effectivePlanId(planId, active) {
	if (!active) return "lattice";
	return planId ?? "lattice";
}
function planAllows(current, min) {
	return PLAN_RANK[current] >= PLAN_RANK[min];
}
function termPrice(monthly, term) {
	if (term === "month") return monthly;
	return Math.round(monthly * 12 * .85);
}
function velaForSeats(seats) {
	if (seats <= 2) return {
		plan: PLANS[0],
		monthly: PLANS[0].price,
		extra: 0
	};
	if (seats <= 8) return {
		plan: PLANS[1],
		monthly: PLANS[1].price,
		extra: 0
	};
	if (seats <= 25) return {
		plan: PLANS[2],
		monthly: PLANS[2].price,
		extra: 0
	};
	const extra = seats - 25;
	return {
		plan: PLANS[2],
		monthly: PLANS[2].price + extra * 6,
		extra
	};
}
var ASSETS = [
	{
		id: "usdt",
		label: "USDT",
		network: "TRC-20",
		rate: 1,
		digits: 2,
		address: "TSandBoxVelaDoNotSendUSDT111111"
	},
	{
		id: "usdc",
		label: "USDC",
		network: "ERC-20",
		rate: 1,
		digits: 2,
		address: "0x5andb0xvela000usdc000donotsend"
	},
	{
		id: "btc",
		label: "BTC",
		network: "Bitcoin",
		rate: 67420,
		digits: 6,
		address: "bc1qsandboxveladonotsend000000000000"
	},
	{
		id: "eth",
		label: "ETH",
		network: "Ethereum",
		rate: 3184,
		digits: 5,
		address: "0x5andb0xvela0000eth000donotsend"
	},
	{
		id: "xmr",
		label: "XMR",
		network: "Monero",
		rate: 312,
		digits: 4,
		address: "8SandboxVelaDoNotSendXMR000000000000"
	},
	{
		id: "ltc",
		label: "LTC",
		network: "Litecoin",
		rate: 86,
		digits: 4,
		address: "ltc1qsandboxveladonotsend00000000"
	}
];
function assetById(id) {
	return ASSETS.find((asset) => asset.id === id) ?? ASSETS[0];
}
function cryptoAmount(usd, id) {
	const asset = assetById(id);
	return (usd / asset.rate).toFixed(asset.digits);
}
var DIDS = [
	{
		id: "+1 212 555 0148",
		city: "New York",
		country: "US",
		monthly: 2
	},
	{
		id: "+44 20 7946 0188",
		city: "London",
		country: "UK",
		monthly: 3
	},
	{
		id: "+49 30 555 0190",
		city: "Berlin",
		country: "DE",
		monthly: 3
	},
	{
		id: "+31 20 555 1180",
		city: "Amsterdam",
		country: "NL",
		monthly: 3
	},
	{
		id: "+65 6555 2204",
		city: "Singapore",
		country: "SG",
		monthly: 4
	},
	{
		id: "+81 3 5550 2291",
		city: "Tokyo",
		country: "JP",
		monthly: 5
	},
	{
		id: "+55 11 5555 2206",
		city: "São Paulo",
		country: "BR",
		monthly: 3
	},
	{
		id: "+971 4 555 2201",
		city: "Dubai",
		country: "AE",
		monthly: 5
	}
];
function visibleDids(owned, count) {
	const base = DIDS.slice(0, count).map((did) => did.id);
	const extra = owned.filter((id) => !base.includes(id) && DIDS.some((did) => did.id === id));
	return [...base, ...extra];
}
var REGIONS = [
	{
		id: "iad",
		city: "Ashburn",
		ms: 11,
		load: 72
	},
	{
		id: "fra",
		city: "Frankfurt",
		ms: 18,
		load: 64
	},
	{
		id: "ams",
		city: "Amsterdam",
		ms: 20,
		load: 58
	},
	{
		id: "lhr",
		city: "London",
		ms: 22,
		load: 61
	},
	{
		id: "zrh",
		city: "Zurich",
		ms: 24,
		load: 33
	},
	{
		id: "cdg",
		city: "Paris",
		ms: 26,
		load: 49
	},
	{
		id: "arn",
		city: "Stockholm",
		ms: 28,
		load: 27
	},
	{
		id: "sin",
		city: "Singapore",
		ms: 41,
		load: 55
	},
	{
		id: "nrt",
		city: "Tokyo",
		ms: 48,
		load: 44
	},
	{
		id: "gru",
		city: "São Paulo",
		ms: 54,
		load: 38
	},
	{
		id: "syd",
		city: "Sydney",
		ms: 62,
		load: 22
	},
	{
		id: "jnb",
		city: "Johannesburg",
		ms: 71,
		load: 18
	}
];
function regionById(id) {
	return REGIONS.find((region) => region.id === id) ?? REGIONS[1];
}
function tunnelAddress(regionId) {
	const index = REGIONS.findIndex((region) => region.id === regionId);
	return `10.8.${index < 0 ? 4 : index + 4}.14`;
}
var MACHINES = [
	{
		id: "pool-1",
		name: "pool-1",
		cpu: "2 vCPU",
		ram: "4 GB",
		disk: "40 GB",
		os: "Windows 11",
		min: "relay",
		note: "Shared burst desk. Sleeps after the included hours."
	},
	{
		id: "dx-04",
		name: "dx-04",
		cpu: "4 vCPU",
		ram: "8 GB",
		disk: "80 GB NVMe",
		os: "Windows 11",
		min: "lattice",
		note: "Pinned to your callsign for the term. Wiped on cancel."
	},
	{
		id: "dx-09",
		name: "dx-09",
		cpu: "8 vCPU",
		ram: "16 GB",
		disk: "160 GB NVMe",
		os: "Windows 11",
		min: "foundry",
		note: "Second desk. Same gateway, separate volume."
	},
	{
		id: "dx-12",
		name: "dx-12",
		cpu: "8 vCPU",
		ram: "32 GB",
		disk: "240 GB NVMe",
		os: "Windows 11",
		min: "foundry",
		note: "Heavy desk for browsers, CRMs, and call recordings."
	}
];
function machineById(id) {
	return MACHINES.find((machine) => machine.id === id) ?? MACHINES[1];
}
var PROTOCOLS = [
	{
		id: "wg",
		name: "WireGuard",
		detail: "Default. Short handshake, small surface."
	},
	{
		id: "ovpn",
		name: "OpenVPN",
		detail: "UDP 1194, when a network blocks WireGuard."
	},
	{
		id: "ike",
		name: "IKEv2",
		detail: "Native on phones. Roams between cell and wifi."
	}
];
var LEADS = [
	{
		name: "Northwind Goods",
		number: "+1 212 555 0174"
	},
	{
		name: "Harbor & Pine",
		number: "+1 415 555 0138"
	},
	{
		name: "Lumen Clinic",
		number: "+44 20 7946 0123"
	},
	{
		name: "Fieldnote Studio",
		number: "+49 30 555 0192"
	},
	{
		name: "Kite Logistics",
		number: "+65 6555 0144"
	}
];
var FAQ = [
	{
		q: "Do you require KYC?",
		a: "No. A callsign is the account. Vela does not ask for a legal name, a government ID, a selfie, or a phone number you already own."
	},
	{
		q: "What is prohibited?",
		a: "Fraud, spam, phishing, and unlawful access. No-KYC is not a permit to abuse carriers or other people's machines. Routes that burn our upstreams are dropped."
	},
	{
		q: "Which assets can I pay with?",
		a: "USDT on TRC-20, USDC on ERC-20, Bitcoin, Ethereum, Monero, and Litecoin. Quotes in this preview are fixed, not a live market."
	},
	{
		q: "How fast is provisioning?",
		a: "The sandbox unlocks a workspace immediately. On a real deployment, USDT usually clears in a few minutes and Bitcoin after one confirmation."
	},
	{
		q: "Do you keep VPN logs?",
		a: "Traffic contents and DNS queries are not stored. Session counters reset when you disconnect. A dedicated exit IP on Foundry is reserved for your callsign, not shared."
	},
	{
		q: "What happens to the desk on cancel?",
		a: "The volume is wiped. Recordings that lived on it go with it. Thirty-day plans have no lock-in. Unused months on a yearly invoice return to the paying asset, minus the network fee."
	},
	{
		q: "Is this preview taking my crypto?",
		a: "No. Invoice addresses here are not wallets. Use “Settle in sandbox” to try the workspace. Do not send real funds."
	}
];
var WORDS = [
	"amber",
	"birch",
	"cedar",
	"delta",
	"ember",
	"fjord",
	"granite",
	"harbor",
	"iris",
	"juniper",
	"kite",
	"linen",
	"maple",
	"north",
	"orchid",
	"pine",
	"quartz",
	"ridge",
	"sage",
	"timber",
	"umber",
	"violet",
	"willow",
	"yarrow",
	"brass",
	"flint",
	"keel",
	"mercury",
	"osprey",
	"prairie",
	"quill",
	"rapids"
];
function phraseFor(callsign) {
	let hash = 2166136261;
	const seed = `${callsign}:vela`;
	for (let i = 0; i < seed.length; i += 1) hash = Math.imul(hash ^ seed.charCodeAt(i), 16777619);
	let x = hash >>> 0;
	const used = /* @__PURE__ */ new Set();
	const out = [];
	while (out.length < 12) {
		x = Math.imul(x, 1664525) + 1013904223 >>> 0;
		const index = x % WORDS.length;
		if (used.has(index)) continue;
		used.add(index);
		out.push(WORDS[index]);
	}
	return out;
}
var ADJECTIVES = [
	"amber",
	"quiet",
	"north",
	"brass",
	"cedar",
	"iron",
	"still",
	"rapid",
	"keen",
	"low"
];
var NOUNS = [
	"lark",
	"harbor",
	"ridge",
	"kiln",
	"orbit",
	"pine",
	"ledger",
	"spur",
	"vista",
	"mere"
];
function suggestCallsign() {
	return `${ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)]}-${NOUNS[Math.floor(Math.random() * NOUNS.length)]}`;
}
function cleanCallsign(raw) {
	const value = raw.toLowerCase().replace(/[^a-z0-9-]/g, "").replace(/^-+/, "").slice(0, 16);
	if (value.length < 3 || !/^[a-z]/.test(value)) return null;
	return value;
}
function profileText(protocol, regionId, address) {
	const host = `${regionId}.vela.invalid`;
	if (protocol === "ovpn") return `client\ndev tun\nproto udp\nremote ${host} 1194\n# Vela sandbox profile — not a live gateway. Do not import.\n`;
	if (protocol === "ike") return `server: ike.${host}\nremote-id: sandbox\nlocal-address: ${address}\n# Vela sandbox profile — not a live gateway. Do not import.\n`;
	return `[Interface]\nPrivateKey = SANDBOX_DO_NOT_IMPORT\nAddress = ${address}/32\nDNS = 1.1.1.1\n\n[Peer]\nPublicKey = SANDBOX_DO_NOT_IMPORT\nEndpoint = ${host}:51820\nAllowedIPs = 0.0.0.0/0, ::/0\n# Vela sandbox profile — not a live gateway. Do not import.\n`;
}
var dialTimer = null;
function rid() {
	return Math.random().toString(36).slice(2, 10);
}
function clearDial() {
	if (dialTimer) {
		clearTimeout(dialTimer);
		dialTimer = null;
	}
}
var useVela = create()(persist((set, get) => ({
	callsign: "",
	planId: null,
	term: "month",
	asset: "usdt",
	recovery: null,
	recoverySeen: false,
	active: false,
	invoiceId: null,
	did: DIDS[0].id,
	ownedDids: [],
	callStatus: "idle",
	callPeer: "",
	callDirection: "out",
	callStarted: null,
	muted: false,
	held: false,
	recents: [],
	messages: [],
	regionId: "fra",
	protocol: "wg",
	vpnOn: false,
	killSwitch: true,
	machineId: "dx-04",
	deskOpen: false,
	setDid: (id) => set({ did: id }),
	attachDid: (id) => {
		const owned = get().ownedDids;
		set({
			ownedDids: owned.includes(id) ? owned : [...owned, id],
			did: id
		});
	},
	setRegion: (id) => set({ regionId: id }),
	setProtocol: (id) => set({ protocol: id }),
	setKillSwitch: (on) => set({ killSwitch: on }),
	setMachine: (id) => set({ machineId: id }),
	setDeskOpen: (open) => set({ deskOpen: open }),
	toggleMute: () => set({ muted: !get().muted }),
	toggleHold: () => set({ held: !get().held }),
	startCall: (peer) => {
		const trimmed = peer.trim();
		if (!trimmed) return;
		clearDial();
		set({
			callStatus: "dialing",
			callPeer: trimmed,
			callDirection: "out",
			callStarted: null,
			muted: false,
			held: false
		});
		dialTimer = setTimeout(() => {
			const current = get();
			if (current.callStatus === "dialing" && current.callPeer === trimmed) set({
				callStatus: "live",
				callStarted: Date.now()
			});
		}, 850);
	},
	ring: () => {
		clearDial();
		set({
			callStatus: "dialing",
			callPeer: "+1 415 555 0136",
			callDirection: "in",
			callStarted: null,
			muted: false,
			held: false
		});
		dialTimer = setTimeout(() => {
			const current = get();
			if (current.callStatus === "dialing" && current.callDirection === "in") set({
				callStatus: "live",
				callStarted: Date.now()
			});
		}, 4e3);
	},
	answer: () => {
		clearDial();
		if (get().callStatus === "idle") return;
		set({
			callStatus: "live",
			callStarted: Date.now()
		});
	},
	hangup: () => {
		clearDial();
		const current = get();
		if (current.callStatus === "idle") return;
		const seconds = current.callStatus === "live" && current.callStarted ? Math.max(1, Math.round((Date.now() - current.callStarted) / 1e3)) : 0;
		set({
			callStatus: "idle",
			callStarted: null,
			muted: false,
			held: false,
			recents: [{
				id: rid(),
				peer: current.callPeer,
				direction: current.callDirection,
				seconds,
				at: Date.now()
			}, ...current.recents].slice(0, 8)
		});
	},
	sendSms: (to, body) => {
		const trimmedTo = to.trim();
		const trimmedBody = body.trim();
		if (!trimmedTo || !trimmedBody) return;
		set({ messages: [{
			id: rid(),
			to: trimmedTo,
			body: trimmedBody.slice(0, 160),
			at: Date.now()
		}, ...get().messages].slice(0, 12) });
	},
	connectVpn: () => set({ vpnOn: true }),
	disconnectVpn: () => set({ vpnOn: false }),
	settle: ({ planId, term, asset, callsign, invoiceId }) => {
		const included = planId === "relay" ? 1 : planId === "lattice" ? 3 : 8;
		const defaults = DIDS.slice(0, included).map((did) => did.id);
		set({
			active: true,
			planId,
			term,
			asset,
			callsign,
			invoiceId,
			recovery: phraseFor(callsign),
			recoverySeen: false,
			ownedDids: defaults,
			did: defaults[0] ?? DIDS[0].id,
			machineId: planId === "relay" ? "pool-1" : "dx-04",
			deskOpen: false
		});
	},
	ackRecovery: () => set({ recoverySeen: true }),
	resetWorkspace: () => {
		clearDial();
		set({
			callsign: "",
			planId: null,
			active: false,
			recovery: null,
			recoverySeen: false,
			invoiceId: null,
			ownedDids: [],
			did: DIDS[0].id,
			vpnOn: false,
			deskOpen: false,
			callStatus: "idle",
			callPeer: "",
			callStarted: null,
			recents: [],
			messages: [],
			machineId: "dx-04"
		});
	}
}), {
	name: "vela-workspace",
	skipHydration: true,
	partialize: (state) => ({
		callsign: state.callsign,
		planId: state.planId,
		term: state.term,
		asset: state.asset,
		recovery: state.recovery,
		recoverySeen: state.recoverySeen,
		active: state.active,
		invoiceId: state.invoiceId,
		did: state.did,
		ownedDids: state.ownedDids,
		recents: state.recents,
		messages: state.messages,
		regionId: state.regionId,
		protocol: state.protocol,
		vpnOn: state.vpnOn,
		killSwitch: state.killSwitch,
		machineId: state.machineId
	})
}));
function useHydrateVela() {
	(0, import_react.useEffect)(() => {
		useVela.persist.rehydrate();
	}, []);
}
function useHydrated() {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setReady(true), []);
	return ready;
}
var PRODUCT_LINKS = [
	{
		to: "/voice",
		label: "Voice",
		detail: "Browser calling and global numbers"
	},
	{
		to: "/tunnel",
		label: "Tunnel",
		detail: "Private WireGuard connectivity"
	},
	{
		to: "/desk",
		label: "Desk",
		detail: "Flexible remote workstations"
	}
];
function Wrap({ className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8", className),
		children
	});
}
function Shell({ children }) {
	useHydrateVela();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-screen flex-col overflow-x-hidden bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none fixed inset-0 -z-10 ios-glow-radial",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-volt focus:px-4 focus:py-2 focus:text-white",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "content",
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function SiteHeader() {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setOpen(false);
		const sectionId = window.location.hash.slice(1);
		if (pathname === "/" && sectionId) requestAnimationFrame(() => {
			document.getElementById(sectionId)?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		});
	}, [pathname]);
	const handleSectionClick = (event, sectionId) => {
		if (pathname !== "/") return;
		event.preventDefault();
		window.history.replaceState(null, "", `/#${sectionId}`);
		document.getElementById(sectionId)?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "sticky top-0 z-40 w-full pt-2 sm:pt-3 pb-2 transition-all",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex h-14 md:h-16 items-center justify-between gap-4 md:gap-6 rounded-full bg-white/92 backdrop-blur-xl border border-slate-200/80 shadow-[0_10px_40px_-24px_rgba(16,24,40,0.45)] px-4 md:px-6 transition-all",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "inline-flex items-center gap-2.5 text-slate-900 whitespace-nowrap shrink-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "voiso-wordmark text-[1.05rem] leading-none",
							children: "VELA"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden xl:inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500",
							children: "Communications Cloud"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					"aria-label": "Primary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							className: "group relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
								className: cn("inline-flex h-9 list-none items-center gap-1.5 rounded-full px-3 text-sm font-medium text-slate-600 transition-colors hover:text-[#1264d8] hover:bg-slate-100/60 cursor-pointer", [
									"/voice",
									"/tunnel",
									"/desk"
								].includes(pathname) && "bg-blue-50 text-[#1264d8] font-semibold"),
								children: ["Products", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3.5 transition-transform group-open:rotate-180" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-0 top-full z-50 w-72 pt-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-2xl p-2 shadow-xl border border-slate-200 bg-white",
									children: PRODUCT_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: link.to,
										className: "block rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-50",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "block text-sm font-semibold text-slate-900",
											children: link.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-0.5 block text-xs text-slate-500",
											children: link.detail
										})]
									}, link.to))
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#sales",
							onClick: (event) => handleSectionClick(event, "sales"),
							className: "inline-flex h-9 items-center rounded-full px-3 text-sm font-medium text-slate-600 transition-colors hover:text-[#1264d8] hover:bg-slate-100/60",
							children: "Sales"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#support",
							onClick: (event) => handleSectionClick(event, "support"),
							className: "inline-flex h-9 items-center rounded-full px-3 text-sm font-medium text-slate-600 transition-colors hover:text-[#1264d8] hover:bg-slate-100/60",
							children: "Support"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#flow-builder",
							onClick: (event) => handleSectionClick(event, "flow-builder"),
							className: "inline-flex h-9 items-center rounded-full px-3 text-sm font-medium text-slate-600 transition-colors hover:text-[#1264d8] hover:bg-slate-100/60",
							children: "Flow Builder"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#omnichannel",
							onClick: (event) => handleSectionClick(event, "omnichannel"),
							className: "inline-flex h-9 items-center rounded-full px-3 text-sm font-medium text-slate-600 transition-colors hover:text-[#1264d8] hover:bg-slate-100/60",
							children: "Omnichannel"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#ai-models",
							onClick: (event) => handleSectionClick(event, "ai-models"),
							className: "inline-flex h-9 items-center rounded-full px-3 text-sm font-medium text-slate-600 transition-colors hover:text-[#1264d8] hover:bg-slate-100/60",
							children: "Multi-LLM"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pricing",
							className: cn("inline-flex h-9 items-center rounded-full px-3 text-sm font-medium text-slate-600 transition-colors hover:text-[#1264d8] hover:bg-slate-100/60", pathname === "/pricing" && "bg-blue-50 text-[#1264d8] font-semibold"),
							children: "Pricing"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5 shrink-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/console",
							className: cn("hidden lg:inline-flex items-center justify-center text-xs font-semibold text-slate-700 hover:text-[#1264d8] px-3.5 py-2 rounded-full hover:bg-slate-100 transition-colors", pathname === "/console" && "text-[#1264d8] bg-blue-50"),
							children: "Console"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/pricing",
							className: "voiso-cta inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Try for Free" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5 opacity-90" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-9 items-center justify-center rounded-full text-slate-600 hover:text-slate-900 lg:hidden",
							"aria-expanded": open,
							"aria-controls": "mobile-navigation",
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen((value) => !value),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-navigation",
			className: "mt-2 ios-glass rounded-2xl p-4 lg:hidden animate-in fade-in slide-in-from-top-2 duration-200",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-4 pb-1 text-xs font-semibold uppercase tracking-wider text-muted",
						children: "Products"
					}),
					PRODUCT_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: cn("flex h-11 items-center px-4 rounded-xl text-base font-medium transition-colors", pathname === link.to ? "ios-pill-active text-fg" : "text-muted hover:text-volt"),
						children: link.label
					}, link.to)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#solutions",
						onClick: (event) => handleSectionClick(event, "solutions"),
						className: "flex h-11 items-center rounded-xl px-4 text-base font-medium text-muted transition-colors hover:text-volt",
						children: "Solutions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#trust",
						onClick: (event) => handleSectionClick(event, "trust"),
						className: "flex h-11 items-center rounded-xl px-4 text-base font-medium text-muted transition-colors hover:text-volt",
						children: "Security"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/pricing",
						className: "flex h-11 items-center rounded-xl px-4 text-base font-medium text-muted transition-colors hover:text-volt",
						children: "Pricing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-2 border-t border-line" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/console",
						className: "flex h-11 items-center justify-between px-4 rounded-xl text-base font-medium text-white hover:bg-white/5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Console" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted",
							children: "Workspace"
						})]
					})
				]
			})
		}) : null] })
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-20 border-t border-line bg-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
			className: "grid gap-10 py-16 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "voiso-wordmark text-[0.95rem] leading-none",
								children: "VELA"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-sm text-sm text-muted leading-relaxed",
							children: "Enterprise telecommunications cloud and intelligent contact center platform. Global SIP trunking, WebRTC browser softphones, WireGuard encrypted tunnels, and multi-LLM intelligence."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center gap-3 text-xs text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Claude 3.5 & GPT-4o & Gemini" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "·"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Predictive AI Dialer" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "·"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "130+ Global DIDs" })
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-wider text-muted",
					children: "Telephony & Network"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2.5 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/voice",
							className: "text-muted hover:text-white transition-colors",
							children: "Cloud Voice & Dialer"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/tunnel",
							className: "text-muted hover:text-white transition-colors",
							children: "WireGuard Private Tunnel"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/desk",
							className: "text-muted hover:text-white transition-colors",
							children: "Disposable Cloud Desk"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-wider text-muted",
					children: "Operations"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2.5 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pricing",
							className: "text-muted hover:text-white transition-colors",
							children: "Workspace Pricing"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/checkout",
							search: {
								plan: "lattice",
								term: "month"
							},
							className: "text-muted hover:text-white transition-colors",
							children: "Instant Activation"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/console",
							className: "text-muted hover:text-white transition-colors",
							children: "Subscriber Console"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line/60 py-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Wrap, {
				className: "flex flex-col gap-3 text-xs text-muted/80 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" VELA Communications Cloud. All network rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-4 text-faint",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Carrier-grade 99.99% SLA" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Zero Call Recording Retention" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Private Callsign Authentication" })
					]
				})]
			})
		})]
	});
}
var styles_default = "/assets/styles-CrlLUuW2.css";
var Route$7 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Vela — Voice, Tunnel, and Desk" },
			{
				name: "description",
				content: "Vela is a no-KYC communications cloud featuring VoIP numbers, WireGuard tunnels, and disposable virtual desktops settled in crypto."
			},
			{
				name: "theme-color",
				content: "#050608"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$6 = () => import("./routes-BTPHapKi.mjs");
var Route$6 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./checkout-CU_YUcnD.mjs");
function readPlan(value) {
	if (value === "relay" || value === "lattice" || value === "foundry") return value;
	return "lattice";
}
function readTerm(value) {
	return value === "year" ? "year" : "month";
}
var Route$5 = createFileRoute("/checkout")({
	validateSearch: (search) => ({
		plan: readPlan(search.plan),
		term: readTerm(search.term)
	}),
	head: () => ({ meta: [{ title: "Instant Activation — Vela Communications Cloud" }, {
		name: "description",
		content: "Instant crypto invoice for Vela cloud communications. No KYC. No credit card."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./console-DjeFvzKg.mjs");
var Route$4 = createFileRoute("/console")({
	head: () => ({ meta: [{ title: "Console — Vela" }, {
		name: "description",
		content: "Vela workspace. Voice, tunnel, and desk under one callsign."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./desk-BqBAddxM.mjs");
var Route$3 = createFileRoute("/desk")({
	head: () => ({ meta: [{ title: "Virtual Desktops — Vela Communications Cloud" }, {
		name: "description",
		content: "Ephemeral cloud workstations on an isolated WireGuard gateway. Wiped cleanly on cancellation."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./pricing-S46jiw8H.mjs");
var Route$2 = createFileRoute("/pricing")({
	head: () => ({ meta: [{ title: "Pricing — Vela Communications Cloud" }, {
		name: "description",
		content: "Predictable flat workspace rates for voice, encrypted tunnels, and virtual desktops. No per-seat penalties, no KYC."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./tunnel-Da1FvIVh.mjs");
var Route$1 = createFileRoute("/tunnel")({
	head: () => ({ meta: [{ title: "Tunnel — Vela Communications Cloud" }, {
		name: "description",
		content: "WireGuard, OpenVPN, and IKEv2 across 12 international egress hubs with hardware kill switch."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./voice-CouO1B4Y.mjs");
var Route = createFileRoute("/voice")({
	head: () => ({ meta: [{ title: "Voice & Dialer — Vela Communications Cloud" }, {
		name: "description",
		content: "Browser WebRTC softphone, global DID virtual numbers, SMS, and predictive dialer without KYC."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	CheckoutRoute: Route$5.update({
		id: "/checkout",
		path: "/checkout",
		getParentRoute: () => Route$7
	}),
	ConsoleRoute: Route$4.update({
		id: "/console",
		path: "/console",
		getParentRoute: () => Route$7
	}),
	DeskRoute: Route$3.update({
		id: "/desk",
		path: "/desk",
		getParentRoute: () => Route$7
	}),
	PricingRoute: Route$2.update({
		id: "/pricing",
		path: "/pricing",
		getParentRoute: () => Route$7
	}),
	TunnelRoute: Route$1.update({
		id: "/tunnel",
		path: "/tunnel",
		getParentRoute: () => Route$7
	}),
	VoiceRoute: Route.update({
		id: "/voice",
		path: "/voice",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { suggestCallsign as C, visibleDids as D, velaForSeats as E, cn as O, regionById as S, tunnelAddress as T, effectivePlanId as _, useVela as a, planById as b, FAQ as c, PLANS as d, PROTOCOLS as f, cryptoAmount as g, cleanCallsign as h, useHydrated as i, LEADS as l, assetById as m, Route$5 as n, ASSETS as o, REGIONS as p, Wrap as r, DIDS as s, router_exports as t, MACHINES as u, machineById as v, termPrice as w, profileText as x, planAllows as y };
