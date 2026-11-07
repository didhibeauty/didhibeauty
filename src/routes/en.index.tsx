import { createFileRoute } from "@tanstack/react-router";

import { pageHead, resolveOrigin } from "@/lib/seo";
import { HomePage } from "@/views/pages";

export const Route = createFileRoute("/en/")({
  loader: () => resolveOrigin(),
  head: ({ loaderData }) => pageHead({ lang: "en", page: "home", origin: loaderData, image: "hero" }),
  component: Page,
});

function Page() {
  return <HomePage lang="en" />;
}
