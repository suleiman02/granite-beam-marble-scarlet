import { createFileRoute } from "@tanstack/react-router";
import { TranslatorApp } from "@/components/translator-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <TranslatorApp />;
}
