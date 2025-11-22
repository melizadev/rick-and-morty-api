import { useFetchData } from "../../hooks/useFetchData";
import { getLocation } from "../../../Api/locationService";

export function useLocation() {
  return useFetchData(getLocation, "locations");
}
