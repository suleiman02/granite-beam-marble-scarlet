import { LEXICON, type Entry } from "@/data/lexicon";

export type Direction = "both" | "en" | "bn";

export function fold(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^a-z0-9\s'-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function fieldsFor(entry: Entry, direction: Direction) {
  const bn = [entry.bn, entry.alt ?? ""];
  const en = [entry.en, ...(entry.keys ?? [])];
  if (direction === "en") return en;
  if (direction === "bn") return bn;
  return [...en, ...bn];
}

function scoreField(query: string, field: string) {
  const n = fold(field);
  if (!n) return 0;
  if (query.length < 2) return n === query ? 100 : 0;
  if (n === query) return 100;
  if (n.startsWith(query)) return 82;
  const words = n.split(" ");
  if (words.includes(query)) return 74;
  if (n.includes(query)) return 56;
  const tokens = query.split(" ").filter((t) => t.length > 1);
  if (!tokens.length) return 0;
  const hits = tokens.filter((t) => n.includes(t)).length;
  if (hits === 0) return 0;
  return 18 + hits * 12 + (hits === tokens.length ? 10 : 0);
}

export function searchEntries(query: string, direction: Direction) {
  const q = fold(query);
  if (!q) return [];
  return LEXICON.map((entry) => {
    let score = 0;
    for (const field of fieldsFor(entry, direction)) {
      score = Math.max(score, scoreField(q, field));
    }
    return { entry, score };
  })
    .filter((row) => row.score > 0)
    .sort(
      (a, b) =>
        b.score - a.score ||
        a.entry.en.localeCompare(b.entry.en) ||
        a.entry.bn.localeCompare(b.entry.bn),
    )
    .slice(0, 30)
    .map((row) => row.entry);
}

export function numbers() {
  return LEXICON.filter((e) => e.n != null).sort((a, b) => (a.n ?? 0) - (b.n ?? 0));
}

export function quizPool() {
  const seenBn = new Set<string>();
  const seenEn = new Set<string>();
  return LEXICON.filter((entry) => {
    const bn = fold(entry.bn);
    const en = fold(entry.en);
    if (seenBn.has(bn) || seenEn.has(en)) return false;
    if (entry.bn.length > 42) return false;
    seenBn.add(bn);
    seenEn.add(en);
    return true;
  });
}
