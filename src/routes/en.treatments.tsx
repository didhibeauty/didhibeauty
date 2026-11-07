import { createFileRoute } from "@tanstack/react-router";

import { pageHead, resolveOrigin } from "@/lib/seo";
import { TreatmentsPage } from "@/views/pages";

export const Route = createFileRoute("/en/treatments")({
  loader: () => resolveOrigin(),
  head: ({ loaderData }) => pageHead({ lang: "en", page: "treatments", origin: loaderData, image: "hotStone" }),
  component: Page,
});

function Page() {
  return <TreatmentsPage lang="en" />;
}
