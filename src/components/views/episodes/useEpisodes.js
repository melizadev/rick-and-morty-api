import { useFetchData } from "../../hooks/useFetchData";
import { getEpisode } from "../../../api/episodeService";
export function useEpisodes() {
  return useFetchData(getEpisode, "episodes");
}
