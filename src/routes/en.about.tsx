import { createFileRoute } from "@tanstack/react-router";

import { pageHead, resolveOrigin } from "@/lib/seo";
import { AboutPage } from "@/views/pages";

export const Route = createFileRoute("/en/about")({
  loader: () => resolveOrigin(),
  head: ({ loaderData }) => pageHead({ lang: "en", page: "about", origin: loaderData, image: "interior" }),
  component: Page,
});

function Page() {
  return <AboutPage lang="en" />;
}
