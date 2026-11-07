import { createFileRoute } from "@tanstack/react-router";

import { pageHead, resolveOrigin } from "@/lib/seo";
import { ExperiencePage } from "@/views/pages";

export const Route = createFileRoute("/en/experience")({
  loader: () => resolveOrigin(),
  head: ({ loaderData }) => pageHead({ lang: "en", page: "experience", origin: loaderData, image: "terrace" }),
  component: Page,
});

function Page() {
  return <ExperiencePage lang="en" />;
}
