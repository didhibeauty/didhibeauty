import { createFileRoute } from "@tanstack/react-router";

import { pageHead, resolveOrigin } from "@/lib/seo";
import { HomePage } from "@/views/pages";

export const Route = createFileRoute("/")({
  loader: () => resolveOrigin(),
  head: ({ loaderData }) => pageHead({ lang: "es", page: "home", origin: loaderData, image: "hero" }),
  component: Page,
});

function Page() {
  return <HomePage lang="es" />;
}
