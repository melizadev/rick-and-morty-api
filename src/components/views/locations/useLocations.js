import { useFetchData } from "../../hooks/useFetchData";
import getLocation from "../../../services/getLocation";
export function useLocations() {
  return useFetchData(getLocation, "locations");
}
