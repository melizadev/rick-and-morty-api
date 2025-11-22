// ...existing code...
import { apiFetch } from "./apiFetch";

export async function getEpisode() {
  const base = await apiFetch("episode"); // endpoint correcto: "episode" o "episode?page=1"

  const episodes = await Promise.all(
    base.results.map(async (epis) => {
      try {
        // traer hasta 10 personajes por episodio en paralelo
        const charUrls = (epis.characters || []).slice(0, 10);
        const chars = await Promise.all(
          charUrls.map(async (url) => {
            try {
              const res = await fetch(url);
              if (!res.ok) return null;
              return await res.json(); // objeto de personaje con id y name
            } catch {
              return null;
            }
          })
        );
        const characters = chars.filter(Boolean);
        return { ...epis, characters }; // ahora characters es array de objetos
      } catch (err) {
        console.error(err);
        return { ...epis, characters: [] };
      }
    })
  );

  return episodes;
}
// ...existing code...
