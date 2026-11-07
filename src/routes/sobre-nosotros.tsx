import { createFileRoute } from "@tanstack/react-router";

import { pageHead, resolveOrigin } from "@/lib/seo";
import { AboutPage } from "@/views/pages";

export const Route = createFileRoute("/sobre-nosotros")({
  loader: () => resolveOrigin(),
  head: ({ loaderData }) => pageHead({ lang: "es", page: "about", origin: loaderData, image: "interior" }),
  component: Page,
});

function Page() {
  return <AboutPage lang="es" />;
}
