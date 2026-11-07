import { createFileRoute } from "@tanstack/react-router";

import { pageHead, resolveOrigin } from "@/lib/seo";
import { LegalPage } from "@/views/pages";

export const Route = createFileRoute("/cookies")({
  loader: () => resolveOrigin(),
  head: ({ loaderData }) => pageHead({ lang: "es", page: "cookies", origin: loaderData }),
  component: Page,
});

function Page() {
  return <LegalPage lang="es" kind="cookies" />;
}
