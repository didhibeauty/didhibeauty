import { createFileRoute } from "@tanstack/react-router";

import { pageHead, resolveOrigin } from "@/lib/seo";
import { ContactPage } from "@/views/pages";

export const Route = createFileRoute("/en/contact")({
  loader: () => resolveOrigin(),
  head: ({ loaderData }) => pageHead({ lang: "en", page: "contact", origin: loaderData, image: "candles" }),
  component: Page,
});

function Page() {
  return <ContactPage lang="en" />;
}
