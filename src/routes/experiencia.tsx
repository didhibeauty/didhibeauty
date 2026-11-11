import { createFileRoute } from "@tanstack/react-router";

import { pageHead, resolveOrigin } from "@/lib/seo";
import { ExperiencePage } from "@/views/pages";

export const Route = createFileRoute("/experiencia")({
  loader: () => resolveOrigin(),
  head: ({ loaderData }) => pageHead({ lang: "es", page: "experience", origin: loaderData, image: "aromatherapy" }),
  component: Page,
});

function Page() {
  return <ExperiencePage lang="es" />;
}
