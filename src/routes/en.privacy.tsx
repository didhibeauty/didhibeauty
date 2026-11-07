import { createFileRoute } from "@tanstack/react-router";

import { pageHead, resolveOrigin } from "@/lib/seo";
import { LegalPage } from "@/views/pages";

export const Route = createFileRoute("/en/privacy")({
  loader: () => resolveOrigin(),
  head: ({ loaderData }) => pageHead({ lang: "en", page: "privacy", origin: loaderData }),
  component: Page,
});

function Page() {
  return <LegalPage lang="en" kind="privacy" />;
}
