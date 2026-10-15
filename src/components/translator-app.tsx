import { useEffect, useMemo, useState } from "react";
import {
  BookOpen,
  Check,
  Copy,
  GraduationCap,
  Landmark,
  Languages,
  ListOrdered,
  RotateCcw,
  Search,
  Star,
} from "lucide-react";
import {
  CATEGORIES,
  CATEGORY_LABEL,
  LEXICON,
  entryById,
  type CategoryId,
  type Entry,
} from "@/data/lexicon";
import { cn } from "@/lib/cn";
import { trace } from "@/lib/session-trace";
import { numbers, quizPool, searchEntries, type Direction } from "@/lib/search";
import { ProblemReport } from "@/components/problem-report";

type Mode = "translate" | "topics" | "numbers" | "practice" | "land" | "saved";

const SAVE_KEY = "bassa-nge-saved";
const BEST_KEY = "bassa-nge-best";
const ROUND = 8;

const MODES: { id: Mode; label: string; icon: typeof Languages }[] = [
  { id: "translate", label: "Translate", icon: Languages },
  { id: "topics", label: "Topics", icon: BookOpen },
  { id: "numbers", label: "Numbers", icon: ListOrdered },
  { id: "practice", label: "Practice", icon: GraduationCap },
  { id: "land", label: "The land", icon: Landmark },
  { id: "saved", label: "Saved", icon: Star },
];

function hourEntry() {
  const h = new Date().getHours();
  const id = h < 11 ? "morning" : h < 16 ? "afternoon" : h < 21 ? "evening" : "night";
  return entryById(id) ?? null;
}

export function TranslatorApp() {
  const [mode, setMode] = useState<Mode>("translate");
  const [query, setQuery] = useState("");
  const [direction, setDirection] = useState<Direction>("both");
  const [topic, setTopic] = useState<CategoryId | "all">("greetings");
  const [saved, setSaved] = useState<string[]>([]);
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [greeting, setGreeting] = useState<Entry | null>(null);
  const [openNumber, setOpenNumber] = useState(1);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as unknown;
        if (Array.isArray(parsed)) setSaved(parsed.filter((id) => typeof id === "string"));
      }
    } catch {
      /* ignore broken local storage */
    }
    setGreeting(hourEntry());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(SAVE_KEY, JSON.stringify(saved));
  }, [saved, ready]);

  const results = useMemo(() => searchEntries(query, direction), [query, direction]);

  function openMode(next: Mode) {
    trace(`Opened ${MODES.find((item) => item.id === next)?.label ?? next}`);
    setMode(next);
  }

  function toggleSave(id: string) {
    setSaved((prev) => {
      const on = prev.includes(id);
      trace(on ? `Unsaved ${id}` : `Saved ${id}`);
      return on ? prev.filter((x) => x !== id) : [id, ...prev];
    });
  }

  async function copyEntry(entry: Entry) {
    const text = `${entry.bn} — ${entry.en}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(entry.id);
      window.setTimeout(() => setCopied((cur) => (cur === entry.id ? null : cur)), 1400);
    } catch {
      trace(`Could not copy ${entry.id}`);
      setCopied(null);
    }
  }

  const savedEntries = saved
    .map((id) => entryById(id))
    .filter((e): e is Entry => Boolean(e));

  return (
    <div className="min-h-dvh bg-bg text-ink">
      <header className="border-b border-line bg-sand">
        <div className="mx-auto flex max-w-3xl items-start gap-3 px-4 py-5">
          <div
            className="mt-1 grid size-11 shrink-0 place-items-center rounded-2xl bg-river text-sand"
            aria-hidden="true"
          >
            <span className="block h-5 w-7">
              <svg viewBox="0 0 28 20" className="h-full w-full">
                <path
                  d="M1 14c4-6 6-6 9-1s5 5 9 0 5-5 8-1"
                  fill="none"
                  className="text-sand"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M1 8c4-6 6-6 9-1s5 5 9 0 5-5 8-1"
                  fill="none"
                  className="text-clay"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold tracking-widest text-clay uppercase">
              Kogi State · Nupe-Tako
            </p>
            <h1 className="text-4xl leading-none text-river">Bassa Nge</h1>
            <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
              English and the language of the Bassa-Nge people — Nupe as spoken below the Niger,
              in Bassa, Koton Karfe, and Lokoja.
            </p>
          </div>
        </div>
        <nav className="mx-auto flex max-w-3xl flex-wrap gap-2 px-4 pb-4" aria-label="Sections">
          {MODES.map((item) => {
            const Icon = item.icon;
            const active = mode === item.id;
            const count = item.id === "saved" ? saved.length : 0;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => openMode(item.id)}
                className={cn(
                  "inline-flex h-11 shrink-0 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-colors",
                  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay",
                  active ? "bg-river text-sand" : "bg-bg text-ink hover:bg-river-soft",
                )}
                aria-current={active ? "page" : undefined}
              >
                <Icon className="size-4" aria-hidden="true" />
                {item.label}
                {item.id === "saved" ? (
                  <span className={cn("tabular-nums", active ? "text-sand" : "text-muted")}>{count}</span>
                ) : null}
              </button>
            );
          })}
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-5 pb-16">
        {mode === "translate" || mode === "topics" || mode === "numbers" ? (
          <SearchBar query={query} direction={direction} onQuery={setQuery} onDirection={setDirection} />
        ) : null}

        {mode === "translate" ? (
          <TranslatePane
            query={query}
            results={results}
            greeting={greeting}
            saved={saved}
            copied={copied}
            onCopy={copyEntry}
            onSave={toggleSave}
          />
        ) : null}

        {mode === "topics" ? (
          <TopicsPane
            topic={topic}
            onTopic={setTopic}
            query={query}
            direction={direction}
            saved={saved}
            copied={copied}
            onCopy={copyEntry}
            onSave={toggleSave}
          />
        ) : null}

        {mode === "numbers" ? (
          <NumbersPane
            query={query}
            open={openNumber}
            onOpen={setOpenNumber}
            saved={saved}
            copied={copied}
            onCopy={copyEntry}
            onSave={toggleSave}
          />
        ) : null}

        {mode === "practice" ? <PracticePane /> : null}
        {mode === "land" ? <LandPane onJump={(id) => {
          const entry = entryById(id);
          if (!entry) return;
          setQuery(entry.en);
          openMode("translate");
        }} /> : null}
        {mode === "saved" ? (
          <SavedPane
            entries={savedEntries}
            saved={saved}
            copied={copied}
            onCopy={copyEntry}
            onSave={toggleSave}
          />
        ) : null}
      </main>
      <ProblemReport
        section={MODES.find((item) => item.id === mode)?.label ?? mode}
        search={query.trim()}
        direction={
          direction === "en" ? "English to Bassa-Nge" : direction === "bn" ? "Bassa-Nge to English" : "Either language"
        }
        topic={
          mode === "topics" ? (topic === "all" ? "All topics" : CATEGORY_LABEL[topic]) : "not in Topics"
        }
        savedCount={saved.length}
      />
    </div>
  );
}

function SearchBar({
  query,
  direction,
  onQuery,
  onDirection,
}: {
  query: string;
  direction: Direction;
  onQuery: (value: string) => void;
  onDirection: (value: Direction) => void;
}) {
  return (
    <div className="mb-5">
      <label htmlFor="lookup" className="mb-2 block text-sm font-semibold text-ink">
        Look up a word or phrase
      </label>
      <div className="relative">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-5 -translate-y-1/2 text-muted" />
        <input
          id="lookup"
          value={query}
          onChange={(event) => onQuery(event.target.value)}
          placeholder="Try water, oku, thank you, etsu…"
          className="h-12 w-full rounded-2xl border border-line bg-sand pr-4 pl-11 text-base text-ink outline-none placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
          autoComplete="off"
          enterKeyHint="search"
        />
      </div>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Search direction">
        {(
          [
            ["both", "Either language"],
            ["en", "English → Bassa-Nge"],
            ["bn", "Bassa-Nge → English"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => onDirection(id)}
            className={cn(
              "h-10 rounded-full px-3 text-sm font-semibold transition-colors",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay",
              direction === id ? "bg-clay text-sand" : "bg-sand text-ink ring-1 ring-line",
            )}
            aria-pressed={direction === id}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

function EntryCard({
  entry,
  saved,
  copied,
  onCopy,
  onSave,
  featured,
}: {
  entry: Entry;
  saved: boolean;
  copied: boolean;
  onCopy: () => void;
  onSave: () => void;
  featured?: boolean;
}) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-line bg-sand p-4",
        featured && "bg-river text-sand",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className={cn("font-display text-2xl leading-tight", featured ? "text-sand" : "text-river")}>
            {entry.bn}
          </p>
          <p className={cn("mt-1 text-base", featured ? "text-sand" : "text-ink")}>{entry.en}</p>
        </div>
        <div className="flex shrink-0 gap-1">
          <button
            type="button"
            onClick={onCopy}
            className={cn(
              "grid size-11 place-items-center rounded-full transition-colors",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay",
              featured ? "text-sand hover:bg-clay" : "text-ink hover:bg-bg",
            )}
            aria-label={copied ? "Copied" : `Copy ${entry.bn}`}
          >
            {copied ? <Check className="size-5" /> : <Copy className="size-5" />}
          </button>
          <button
            type="button"
            onClick={onSave}
            className={cn(
              "grid size-11 place-items-center rounded-full transition-colors",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay",
              featured ? "text-sand hover:bg-clay" : "text-ink hover:bg-bg",
            )}
            aria-pressed={saved}
            aria-label={saved ? `Remove ${entry.en} from saved` : `Save ${entry.en}`}
          >
            <Star className={cn("size-5", saved && "fill-current", saved && (featured ? "text-sand" : "text-clay"))} />
          </button>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-semibold",
            featured ? "bg-sand text-river" : "bg-gold-soft text-ink",
          )}
        >
          {CATEGORY_LABEL[entry.category]}
        </span>
        {entry.alt ? (
          <span className={cn("text-sm", featured ? "text-sand" : "text-muted")}>Also {entry.alt}</span>
        ) : null}
      </div>
      {entry.note ? (
        <p className={cn("mt-2 text-sm leading-relaxed", featured ? "text-sand" : "text-muted")}>{entry.note}</p>
      ) : null}
    </article>
  );
}

function TranslatePane({
  query,
  results,
  greeting,
  saved,
  copied,
  onCopy,
  onSave,
}: {
  query: string;
  results: Entry[];
  greeting: Entry | null;
  saved: string[];
  copied: string | null;
  onCopy: (entry: Entry) => void;
  onSave: (id: string) => void;
}) {
  const trimmed = query.trim();
  if (!trimmed) {
    const starters = ["how-are-you", "thanks", "nuwon", "etsu", "i-love-you"]
      .map((id) => entryById(id))
      .filter((e): e is Entry => Boolean(e));
    return (
      <div className="space-y-4">
        <p className="rounded-2xl bg-river-soft px-4 py-3 text-sm leading-relaxed text-river">
          This book only shows words it actually has. If a line is missing, it will say so — it will not
          invent Bassa-Nge. Tone changes meaning, and villages spell things a little differently.
        </p>
        {greeting ? (
          <div>
            <h2 className="mb-2 text-lg text-ink">For this hour</h2>
            <EntryCard
              entry={greeting}
              featured
              saved={saved.includes(greeting.id)}
              copied={copied === greeting.id}
              onCopy={() => onCopy(greeting)}
              onSave={() => onSave(greeting.id)}
            />
          </div>
        ) : null}
        <div>
          <h2 className="mb-2 text-lg text-ink">Start here</h2>
          <div className="space-y-3">
            {starters.map((entry) => (
              <EntryCard
                key={entry.id}
                entry={entry}
                saved={saved.includes(entry.id)}
                copied={copied === entry.id}
                onCopy={() => onCopy(entry)}
                onSave={() => onSave(entry.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!results.length) {
    return (
      <div className="rounded-2xl border border-line bg-sand p-5">
        <h2 className="text-2xl text-river">Not in the book</h2>
        <p className="mt-2 text-base leading-relaxed text-muted">
          No confident match for “{trimmed}”. Bassa-Nge here is Nupe-Tako, not Bassa-Komu and not the Bassa
          of Liberia or Cameroon. Try a simpler word such as water, mother, or thank you. Markets and
          place names are under The land.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-muted" aria-live="polite">
        <span className="tabular-nums">{results.length}</span>{" "}
        {results.length === 1 ? "match" : "matches"}
      </p>
      {results.map((entry) => (
        <EntryCard
          key={entry.id}
          entry={entry}
          saved={saved.includes(entry.id)}
          copied={copied === entry.id}
          onCopy={() => onCopy(entry)}
          onSave={() => onSave(entry.id)}
        />
      ))}
    </div>
  );
}

function TopicsPane({
  topic,
  onTopic,
  query,
  direction,
  saved,
  copied,
  onCopy,
  onSave,
}: {
  topic: CategoryId | "all";
  onTopic: (id: CategoryId | "all") => void;
  query: string;
  direction: Direction;
  saved: string[];
  copied: string | null;
  onCopy: (entry: Entry) => void;
  onSave: (id: string) => void;
}) {
  const matched = query.trim() ? searchEntries(query, direction) : LEXICON;
  const entries = matched.filter((entry) => topic === "all" || entry.category === topic);
  const chips: { id: CategoryId | "all"; label: string }[] = [
    { id: "all", label: "All" },
    ...CATEGORIES,
  ];

  return (
    <div>
      <div className="mb-4 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Topics">
        {chips.map((chip) => (
          <button
            key={chip.id}
            type="button"
            onClick={() => onTopic(chip.id)}
            className={cn(
              "h-10 shrink-0 rounded-full px-3 text-sm font-semibold",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay",
              topic === chip.id ? "bg-river text-sand" : "bg-sand text-ink ring-1 ring-line",
            )}
            aria-pressed={topic === chip.id}
          >
            {chip.label}
          </button>
        ))}
      </div>
      {entries.length === 0 ? (
        <p className="rounded-2xl border border-line bg-sand p-4 text-muted">
          Nothing in this topic matches that search.
        </p>
      ) : (
        <div className="space-y-3">
          {entries.map((entry) => (
            <EntryCard
              key={entry.id}
              entry={entry}
              saved={saved.includes(entry.id)}
              copied={copied === entry.id}
              onCopy={() => onCopy(entry)}
              onSave={() => onSave(entry.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function NumbersPane({
  query,
  open,
  onOpen,
  saved,
  copied,
  onCopy,
  onSave,
}: {
  query: string;
  open: number;
  onOpen: (n: number) => void;
  saved: string[];
  copied: string | null;
  onCopy: (entry: Entry) => void;
  onSave: (id: string) => void;
}) {
  const all = numbers();
  const q = query.trim();
  const matched = q ? searchEntries(q, "both").filter((e) => e.n != null) : [];
  const grid = q && matched.length > 0 ? matched : all;
  const active = (q && matched.length > 0 ? matched : all).find((e) => e.n === open) ?? grid[0];

  return (
    <div className="space-y-4">
      <p className="text-sm leading-relaxed text-muted">
        Counted the way Nupe lessons teach it. Eleven is “ten and one”. Eighteen is “twenty less two”.
        The book stops at twenty — the rest of the pattern was not published in that lesson.
      </p>
      {active ? (
        <EntryCard
          entry={active}
          featured
          saved={saved.includes(active.id)}
          copied={copied === active.id}
          onCopy={() => onCopy(active)}
          onSave={() => onSave(active.id)}
        />
      ) : null}
      <div className="grid grid-cols-5 gap-2">
        {(q ? grid : all).map((entry) => (
          <button
            key={entry.id}
            type="button"
            onClick={() => entry.n && onOpen(entry.n)}
            className={cn(
              "h-12 rounded-xl text-base font-semibold tabular-nums transition-colors",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay",
              entry.n === open ? "bg-clay text-sand" : "bg-sand text-ink ring-1 ring-line",
            )}
            aria-pressed={entry.n === open}
            aria-label={`${entry.n} ${entry.bn}`}
          >
            {entry.n}
          </button>
        ))}
      </div>
      {q && matched.length === 0 ? (
        <p className="text-sm text-muted">No number matches that search. The full count is still here — try 7, five, or eshi.</p>
      ) : null}
    </div>
  );
}

function SavedPane({
  entries,
  saved,
  copied,
  onCopy,
  onSave,
}: {
  entries: Entry[];
  saved: string[];
  copied: string | null;
  onCopy: (entry: Entry) => void;
  onSave: (id: string) => void;
}) {
  if (!entries.length) {
    return (
      <div className="rounded-2xl border border-line bg-sand p-5">
        <h2 className="text-2xl text-river">Nothing saved yet</h2>
        <p className="mt-2 text-muted">
          Star a greeting or a word. It stays on this device, ready the next time you open the book.
        </p>
      </div>
    );
  }
  return (
    <div className="space-y-3">
      {entries.map((entry) => (
        <EntryCard
          key={entry.id}
          entry={entry}
          saved={saved.includes(entry.id)}
          copied={copied === entry.id}
          onCopy={() => onCopy(entry)}
          onSave={() => onSave(entry.id)}
        />
      ))}
    </div>
  );
}

type Ask = "bn" | "en";

function shuffle<T>(list: T[]) {
  const next = [...list];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function makeQuestion(pool: Entry[], ask: Ask) {
  const prompt = pool[Math.floor(Math.random() * pool.length)];
  const distractors = shuffle(pool.filter((entry) => entry.id !== prompt.id)).slice(0, 3);
  return {
    prompt,
    choices: shuffle([prompt, ...distractors]),
    ask,
  };
}

function PracticePane() {
  const pool = useMemo(() => quizPool(), []);
  const [ask, setAsk] = useState<Ask>("bn");
  const [round, setRound] = useState<{ prompt: Entry; choices: Entry[]; ask: Ask }[]>([]);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);
  const [best, setBest] = useState(0);
  const [live, setLive] = useState(false);

  useEffect(() => {
    setRound([makeQuestion(pool, "bn")]);
    setLive(true);
    const raw = localStorage.getItem(BEST_KEY);
    const n = raw ? Number(raw) : 0;
    if (!Number.isNaN(n)) setBest(n);
  }, [pool]);

  const question = round[index];

  if (!live || !question) {
    return (
      <p className="rounded-2xl border border-line bg-sand p-5 text-muted">Setting a round…</p>
    );
  }

  function restart(nextAsk: Ask) {
    setAsk(nextAsk);
    setRound([makeQuestion(pool, nextAsk)]);
    setIndex(0);
    setPicked(null);
    setCorrect(0);
    setDone(false);
  }

  function choose(id: string) {
    if (picked || !question) return;
    setPicked(id);
    trace(
      id === question.prompt.id
        ? `Practice: correct for ${question.prompt.en}`
        : `Practice: chose ${id}, answer was ${question.prompt.id}`,
    );
    if (id === question.prompt.id) setCorrect((n) => n + 1);
  }

  function next() {
    if (!question) return;
    const score = correct;
    if (index + 1 >= ROUND) {
      const finalScore = score;
      setDone(true);
      setBest((prev) => {
        const value = Math.max(prev, finalScore);
        localStorage.setItem(BEST_KEY, String(value));
        return value;
      });
      return;
    }
    setRound((prev) => [...prev, makeQuestion(pool, ask)]);
    setIndex((n) => n + 1);
    setPicked(null);
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-line bg-sand p-5">
        <p className="text-xs font-semibold tracking-widest text-clay uppercase">Round complete</p>
        <h2 className="mt-1 text-4xl text-river">
          <span className="tabular-nums">{correct}</span>
          <span className="text-2xl text-muted"> / {ROUND}</span>
        </h2>
        <p className="mt-2 text-muted">
          Best on this device: <span className="tabular-nums font-semibold text-ink">{best}</span>
        </p>
        <button
          type="button"
          onClick={() => restart(ask)}
          className="mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-clay px-4 font-semibold text-sand hover:bg-clay-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
        >
          <RotateCcw className="size-4" />
          Another round
        </button>
      </div>
    );
  }

  if (!question) return null;
  const promptText = question.ask === "bn" ? question.prompt.en : question.prompt.bn;
  const choiceText = (entry: Entry) => (question.ask === "bn" ? entry.bn : entry.en);

  return (
    <div>
      <div className="mb-4 flex flex-col gap-3">
        <p className="text-sm font-semibold text-muted">
          <span className="tabular-nums text-ink">{index + 1}</span> of {ROUND}
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => restart("bn")}
            className={cn(
              "h-10 rounded-full px-3 text-sm font-semibold",
              ask === "bn" ? "bg-river text-sand" : "bg-sand ring-1 ring-line",
            )}
          >
            Say it in Bassa-Nge
          </button>
          <button
            type="button"
            onClick={() => restart("en")}
            className={cn(
              "h-10 rounded-full px-3 text-sm font-semibold",
              ask === "en" ? "bg-river text-sand" : "bg-sand ring-1 ring-line",
            )}
          >
            Say it in English
          </button>
        </div>
      </div>
      <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-line">
        <div
          className="h-full bg-clay transition-all"
          style={{ width: `${(index / ROUND) * 100}%` }}
        />
      </div>
      <p className="text-sm font-semibold text-clay">
        {question.ask === "bn" ? "How would you say this?" : "What does this mean?"}
      </p>
      <h2 className="mt-1 font-display text-4xl leading-tight text-river">{promptText}</h2>
      <div className="mt-4 space-y-2">
        {question.choices.map((choice) => {
          const isRight = choice.id === question.prompt.id;
          const isPicked = picked === choice.id;
          return (
            <button
              key={choice.id}
              type="button"
              onClick={() => choose(choice.id)}
              className={cn(
                "min-h-12 w-full rounded-2xl border px-4 py-3 text-left text-lg font-semibold transition-colors",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay",
                !picked && "border-line bg-sand hover:border-clay",
                picked && isRight && "border-river bg-river text-sand",
                picked && isPicked && !isRight && "border-clay bg-clay text-sand",
                picked && !isRight && !isPicked && "border-line bg-sand text-muted",
              )}
            >
              {choiceText(choice)}
            </button>
          );
        })}
      </div>
      {picked ? (
        <div className="mt-4">
          {question.prompt.note ? <p className="mb-3 text-sm text-muted">{question.prompt.note}</p> : null}
          <button
            type="button"
            onClick={next}
            className="inline-flex h-11 items-center rounded-full bg-clay px-5 font-semibold text-sand hover:bg-clay-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay"
          >
            {index + 1 >= ROUND ? "See score" : "Next"}
          </button>
        </div>
      ) : null}
    </div>
  );
}

const LAND = [
  {
    title: "Who the Bassa-Nge are",
    body: "The Bassa-Nge are a Nupe people of Kogi State. Oral history traces them to followers of Etsu Jimada who left the Nupe kingdom and settled south of the Niger. Linguists call their speech Nupe-Tako — “the Nupe below” — a dialect closest to central Nupe around Bida. Speakers understand central Nupe from childhood, and the Nupe Bible has long been the one used in their churches.",
  },
  {
    title: "Not the same as Bassa-Komu",
    body: "Kogi is also home to the Bassa-Komu, or Basa, whose language is a different family entirely and whose towns centre on Oguma. Colonial clerks folded both peoples into the name Bassa, then added Nge and Komu to pull them apart. This book is only for Bassa-Nge. It will not mix in Bassa-Komu, and it is not the Bassa of Liberia or Cameroon.",
  },
  {
    title: "Where the language is at home",
    body: "Bassa-Nge is spoken in Bassa, Koton Karfe, and Lokoja local governments, in the confluence country of the Niger and the Benue. Gboloko is a principal town — speakers explain the name as Nupe Boloko or Bologi. Ajigido is another village. People speak of 144 villages in Bassa land. Ecewu market and Gboloko market meet every five days, and traders come in from the other villages. Between villages, the older road was often a canoe.",
  },
  {
    title: "How to greet",
    body: "Respect is in the body as much as the word. Men squat. Women kneel. A man asking for a bride kneels and puts his hands to the floor. Almost every greeting begins with Oku, then names the moment: morning, sun, evening, work, rain, a journey, a long absence. Answer Oku with Oku.",
  },
  {
    title: "Names, the Etsu, and a proverb",
    body: "Children are named on the eighth day. Mayemde — shortened Ma’ade — means “I have my own”. Sarotasoko is “God’s kingdom” or “God’s bosom”. Erewtasoko is “God’s gift”. Soko is God, and it sits inside many names. The chief is the Etsu. When he dies, kingmakers choose the next from a ruling house, and the houses rotate. One proverb a Bassa-Nge speaker offered in English: “The morsel of food that falls from your hand into the soup is for the comfort of the throat.” The Bassa-Nge wording of that line was not recorded, so it is not invented here.",
  },
  {
    title: "Dress and the December festival",
    body: "Men wear a kaftan and a cap. Women wear a blouse and wrapper, another wrapper above the bust, and a gele with a second scarf folded over it. Bassa Day falls on the 26th of December, with masquerades. A wedding still has three movements in memory: the families ask, the bride herself sets the bride-price, and on the day an older woman bathes her. If the villages differed, the husband’s people once came by canoe. That last part is fading.",
  },
  {
    title: "A name for the land",
    body: "One telling among Nupe speakers is that Bassa comes from ba’sa or ba’age, a pleasant place fit to settle, and that Nge comes from an exclamation. Treat that as a community story, not a settled etymology. What is settled is the language: Nupoid, written in Latin letters, and tonal. The same letters can mean different things. This book uses the practical spelling of community lessons and published Nupe word-lists, not a full tone transcription.",
  },
];

function LandPane({ onJump }: { onJump: (id: string) => void }) {
  const jumps = [
    ["morning", "Good morning"],
    ["etsu", "Etsu"],
    ["soko", "Soko"],
    ["mayemde", "Mayemde"],
  ] as const;

  return (
    <div className="space-y-4">
      <figure className="rounded-2xl bg-gold-soft p-5">
        <blockquote className="font-display text-2xl leading-snug text-ink">
          The morsel of food that falls from your hand into the soup is for the comfort of the throat.
        </blockquote>
        <figcaption className="mt-3 text-sm text-muted">
          A Bassa-Nge proverb, as told in English by Ma’ade Yaila of Ajigido.
        </figcaption>
      </figure>
      {LAND.map((section) => (
        <section key={section.title} className="rounded-2xl border border-line bg-sand p-5">
          <h2 className="text-2xl text-river">{section.title}</h2>
          <p className="mt-2 text-base leading-relaxed text-ink">{section.body}</p>
        </section>
      ))}
      <div className="rounded-2xl bg-river p-5 text-sand">
        <h2 className="text-2xl">Open a word from the land</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {jumps.map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => onJump(id)}
              className="h-11 rounded-full bg-sand px-4 font-semibold text-river focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <p className="text-sm leading-relaxed text-muted">
        Spellings follow Nupe-Tako greeting lists, a Nupe community counting lesson, word-lists shared by
        Nupe and Bassa-Nge speakers, notes in Roger Blench’s draft Nupe dictionary, and Ma’ade Yaila’s
        account of Bassa life in Kogi. This is a learner’s book, not a speaker’s last word. Ask an elder
        before you print a name, a price, or a prayer.
      </p>
    </div>
  );
}
