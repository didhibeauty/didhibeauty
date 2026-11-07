import { createFileRoute } from "@tanstack/react-router";

import { pageHead, resolveOrigin } from "@/lib/seo";
import { TreatmentsPage } from "@/views/pages";

export const Route = createFileRoute("/tratamientos")({
  loader: () => resolveOrigin(),
  head: ({ loaderData }) => pageHead({ lang: "es", page: "treatments", origin: loaderData, image: "hotStone" }),
  component: Page,
});

function Page() {
  return <TreatmentsPage lang="es" />;
}
