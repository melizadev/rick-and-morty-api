import { useFetchData } from "../../hooks/useFetchData";
import { getCharacter } from "../../../api/characterService";

export function useCharacter() {
  return useFetchData(getCharacter, "characters");
}
