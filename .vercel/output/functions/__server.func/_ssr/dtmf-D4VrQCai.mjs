//#region node_modules/.nitro/vite/services/ssr/assets/dtmf-D4VrQCai.js
var audioCtx = null;
function getAudioContext() {
	if (typeof window === "undefined") return null;
	if (!audioCtx) {
		const AudioContextClass = window.AudioContext || window.webkitAudioContext;
		if (AudioContextClass) audioCtx = new AudioContextClass();
	}
	if (audioCtx && audioCtx.state === "suspended") audioCtx.resume().catch(() => {});
	return audioCtx;
}
var DTMF_FREQS = {
	"1": [697, 1209],
	"2": [697, 1336],
	"3": [697, 1477],
	"4": [770, 1209],
	"5": [770, 1336],
	"6": [770, 1477],
	"7": [852, 1209],
	"8": [852, 1336],
	"9": [852, 1477],
	"*": [941, 1209],
	"0": [941, 1336],
	"#": [941, 1477]
};
function playKeyTone(key) {
	try {
		const ctx = getAudioContext();
		if (!ctx) return;
		const freqs = DTMF_FREQS[key] || [520, 800];
		const now = ctx.currentTime;
		const duration = .12;
		const osc1 = ctx.createOscillator();
		const osc2 = ctx.createOscillator();
		const gainNode = ctx.createGain();
		osc1.type = "sine";
		osc2.type = "sine";
		osc1.frequency.setValueAtTime(freqs[0], now);
		osc2.frequency.setValueAtTime(freqs[1], now);
		gainNode.gain.setValueAtTime(.001, now);
		gainNode.gain.exponentialRampToValueAtTime(.08, now + .015);
		gainNode.gain.exponentialRampToValueAtTime(.001, now + duration);
		osc1.connect(gainNode);
		osc2.connect(gainNode);
		gainNode.connect(ctx.destination);
		osc1.start(now);
		osc2.start(now);
		osc1.stop(now + duration);
		osc2.stop(now + duration);
	} catch {}
}
function playRingbackTone() {
	try {
		const ctx = getAudioContext();
		if (!ctx) return () => {};
		let stopped = false;
		let timer = null;
		const triggerBurst = () => {
			if (stopped) return;
			const now = ctx.currentTime;
			const osc1 = ctx.createOscillator();
			const osc2 = ctx.createOscillator();
			const gain = ctx.createGain();
			osc1.type = "sine";
			osc2.type = "sine";
			osc1.frequency.setValueAtTime(440, now);
			osc2.frequency.setValueAtTime(480, now);
			gain.gain.setValueAtTime(.001, now);
			gain.gain.exponentialRampToValueAtTime(.05, now + .05);
			gain.gain.setValueAtTime(.05, now + 1.8);
			gain.gain.exponentialRampToValueAtTime(.001, now + 2);
			osc1.connect(gain);
			osc2.connect(gain);
			gain.connect(ctx.destination);
			osc1.start(now);
			osc2.start(now);
			osc1.stop(now + 2);
			osc2.stop(now + 2);
			timer = window.setTimeout(triggerBurst, 4e3);
		};
		triggerBurst();
		return () => {
			stopped = true;
			if (timer) window.clearTimeout(timer);
		};
	} catch {
		return () => {};
	}
}
//#endregion
export { playRingbackTone as n, playKeyTone as t };
