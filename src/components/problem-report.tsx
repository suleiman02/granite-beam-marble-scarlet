import { useEffect, useId, useState } from "react";
import { Check, Copy, Flag } from "lucide-react";
import { installCrashCapture, readTrace } from "@/lib/session-trace";

const PROMPTS = [
  "A translation looks wrong",
  "A word I need is missing",
  "Practice marked the wrong answer",
  "Something on the page broke",
];

export function ProblemReport({
  section,
  search,
  direction,
  topic,
  savedCount,
}: {
  section: string;
  search: string;
  direction: string;
  topic: string;
  savedCount: number;
}) {
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [happened, setHappened] = useState("");
  const [expected, setExpected] = useState("");
  const [note, setNote] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    installCrashCapture();
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function buildNote() {
    const { steps, crashes } = readTrace();
    const lines = [
      "Bassa Nge — problem",
      `What happened: ${happened.trim() || "(not written)"}`,
      `What I expected: ${expected.trim() || "(not written)"}`,
      `Section: ${section}`,
      `Search: ${search || "(empty)"}`,
      `Direction: ${direction}`,
      `Topic: ${topic}`,
      `Saved words: ${savedCount}`,
      crashes.length ? `Errors:\n${crashes.map((line) => `- ${line}`).join("\n")}` : "Errors: none",
      steps.length
        ? `Recent steps:\n${steps.map((step) => `- ${step.at} ${step.what}`).join("\n")}`
        : "Recent steps: none",
    ];
    return lines.join("\n");
  }

  async function copyNote(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  function prepare() {
    const text = buildNote();
    setNote(text);
    setCopied(false);
    void copyNote(text);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 pb-28">
      <div className="rounded-2xl border border-line bg-sand p-4">
        <p className="text-sm leading-relaxed text-muted">
          See a wrong word, a missing phrase, or a broken page? Write it down here, then paste the
          note into the chat.
        </p>
        <button
          type="button"
          onClick={() => {
            setOpen(true);
            setCopied(false);
          }}
          className="mt-3 inline-flex h-11 items-center gap-2 rounded-full bg-river px-4 text-sm font-semibold text-sand hover:bg-clay focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
        >
          <Flag className="size-4" aria-hidden="true" />
          Found a mistake?
        </button>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-40 flex items-end justify-center bg-ink/40 p-3 sm:items-center"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="max-h-[min(40rem,calc(100dvh-1.5rem))] w-full max-w-lg overflow-y-auto rounded-2xl border border-line bg-sand p-5 text-ink"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 id={titleId} className="text-3xl text-river">
              Tell me what went wrong
            </h2>
            <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-relaxed text-muted">
              <li>Say what you did and what you expected.</li>
              <li>Tap “Make the note”. It copies if the page allows it.</li>
              <li>Paste that note into the chat. One message is enough.</li>
            </ol>

            <div className="mt-4 flex flex-wrap gap-2">
              {PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => setHappened(prompt)}
                  className="h-10 rounded-full bg-bg px-3 text-sm font-semibold text-ink ring-1 ring-line hover:bg-river-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <label className="mt-4 block text-sm font-semibold" htmlFor="problem-happened">
              What happened?
            </label>
            <textarea
              id="problem-happened"
              value={happened}
              onChange={(event) => setHappened(event.target.value)}
              rows={3}
              placeholder="I looked up water and the Bassa-Nge word looked wrong."
              className="mt-1 w-full rounded-2xl border border-line bg-bg px-3 py-2 text-base text-ink outline-none placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
            />

            <label className="mt-3 block text-sm font-semibold" htmlFor="problem-expected">
              What should it have been?
            </label>
            <textarea
              id="problem-expected"
              value={expected}
              onChange={(event) => setExpected(event.target.value)}
              rows={2}
              placeholder="The word should be … I heard it in Gboloko."
              className="mt-1 w-full rounded-2xl border border-line bg-bg px-3 py-2 text-base text-ink outline-none placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
            />

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={prepare}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-clay px-4 text-sm font-semibold text-sand hover:bg-clay-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
              >
                {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                {copied ? "Note copied" : "Make the note"}
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="h-11 rounded-full px-4 text-sm font-semibold text-ink ring-1 ring-line hover:bg-bg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
              >
                Close
              </button>
            </div>

            {note ? (
              <div className="mt-4">
                <p className="text-sm font-semibold">Paste this into the chat</p>
                <textarea
                  readOnly
                  value={note}
                  rows={8}
                  className="mt-1 w-full rounded-2xl border border-line bg-bg px-3 py-2 font-mono text-xs leading-relaxed text-ink"
                  onFocus={(event) => event.currentTarget.select()}
                />
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
