import { preloadQuery } from "convex/nextjs";

import { api } from "@/convex/_generated/api";

import { TrilhasContent } from "./trilhas-content";

export default async function TrilhasPage() {
  // Preload static data on the server - no loading flash for themes and trilhas
  const [preloadedThemes, preloadedTrilhas] = await Promise.all([
    preloadQuery(api.themes.listSorted),
    preloadQuery(api.presetQuizzes.listTrilhasSorted),
  ]);

  return (
    <TrilhasContent
      preloadedThemes={preloadedThemes}
      preloadedTrilhas={preloadedTrilhas}
    />
  );
}
