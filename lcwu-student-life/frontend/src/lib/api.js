import { useEffect, useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

// Fetches JSON from a PHP endpoint. Returns null on any failure so
// callers can fall back to local demo data instead of breaking the
// page, which matters here since the backend will not be running
// in every environment this project is opened in.
async function fetchJSON(path) {
  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      headers: { Accept: "application/json" }
    });
    if (!response.ok) return null;
    const data = await response.json();
    return data;
  } catch {
    return null;
  }
}

// Loads data from a backend endpoint and swaps in fallbackData if
// the request fails or has not resolved yet, so every section
// renders immediately with demo content and upgrades quietly if a
// live backend is present.
export function useApiData(path, fallbackData) {
  const [data, setData] = useState(fallbackData);
  const [source, setSource] = useState("fallback");

  useEffect(() => {
    let cancelled = false;

    fetchJSON(path).then((result) => {
      if (cancelled) return;
      if (Array.isArray(result) ? result.length > 0 : Boolean(result)) {
        setData(result);
        setSource("api");
      }
    });

    return () => {
      cancelled = true;
    };
  }, [path]);

  return { data, source };
}

// Posts a JSON body to a PHP endpoint, used by the contact form.
// Throws on failure so the caller's form library can surface an error.
export async function postJSON(path, body) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  return response.json();
}
