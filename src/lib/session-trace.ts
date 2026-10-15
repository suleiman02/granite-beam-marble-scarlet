export type TraceItem = { at: string; what: string };

const steps: TraceItem[] = [];
const crashes: string[] = [];
let installed = false;

function stamp() {
  return new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export function trace(what: string) {
  steps.push({ at: stamp(), what });
  if (steps.length > 16) steps.shift();
}

function rememberCrash(message: string) {
  const clean = message.replace(/\s+/g, " ").trim().slice(0, 400);
  if (!clean) return;
  crashes.push(`${stamp()} ${clean}`);
  if (crashes.length > 6) crashes.shift();
}

export function installCrashCapture() {
  if (installed || typeof window === "undefined") return;
  installed = true;
  window.addEventListener("error", (event) => {
    rememberCrash(event.message || "Unknown error");
  });
  window.addEventListener("unhandledrejection", (event) => {
    const reason = event.reason;
    rememberCrash(reason instanceof Error ? reason.message : String(reason));
  });
}

export function readTrace() {
  return { steps: steps.slice(), crashes: crashes.slice() };
}
