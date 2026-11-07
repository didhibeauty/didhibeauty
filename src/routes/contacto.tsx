import { createFileRoute } from "@tanstack/react-router";

import { pageHead, resolveOrigin } from "@/lib/seo";
import { ContactPage } from "@/views/pages";

export const Route = createFileRoute("/contacto")({
  loader: () => resolveOrigin(),
  head: ({ loaderData }) => pageHead({ lang: "es", page: "contact", origin: loaderData, image: "candles" }),
  component: Page,
});

function Page() {
  return <ContactPage lang="es" />;
}
