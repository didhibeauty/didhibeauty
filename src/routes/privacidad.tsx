import { createFileRoute } from "@tanstack/react-router";

import { pageHead, resolveOrigin } from "@/lib/seo";
import { LegalPage } from "@/views/pages";

export const Route = createFileRoute("/privacidad")({
  loader: () => resolveOrigin(),
  head: ({ loaderData }) => pageHead({ lang: "es", page: "privacy", origin: loaderData }),
  component: Page,
});

function Page() {
  return <LegalPage lang="es" kind="privacy" />;
}
