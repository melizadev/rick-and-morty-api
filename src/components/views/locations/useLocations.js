import { useFetchData } from "../../hooks/useFetchData";
import { getLocation } from "../../../api/locationService";
export function useLocations() {
  return useFetchData(getLocation, "locations");
}
