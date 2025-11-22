const BASE_URL = "https://rickandmortyapi.com/api";

export async function apiFetch(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en apiFetch:", error);
    throw new Error("Unable to connect to the API. Please try again later.");
  }
}
