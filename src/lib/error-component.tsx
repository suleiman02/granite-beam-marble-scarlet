import { useState } from "react";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { Check, Copy, TriangleAlert } from "lucide-react";

const FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  const message = errorMessage(error);
  const [copied, setCopied] = useState(false);
  const report = `Bassa Nge crashed: ${message}`;

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-3 bg-bg px-6 text-center text-ink">
      <span className="text-clay" aria-hidden="true">
        <TriangleAlert className="size-10" strokeWidth={2} />
      </span>
      <h1 className="text-3xl text-river">Something went wrong</h1>
      <p className="max-w-md text-base break-words text-muted">{message}</p>
      <button
        type="button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(report);
            setCopied(true);
          } catch {
            setCopied(false);
          }
        }}
        className="mt-2 inline-flex h-11 items-center gap-2 rounded-full bg-river px-4 text-sm font-semibold text-sand"
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
        {copied ? "Copied — paste it in the chat" : "Copy this for the chat"}
      </button>
      <p className="max-w-md text-sm text-muted">
        If copy does not work, select the sentence above and paste it into the chat.
      </p>
    </main>
  );
}
