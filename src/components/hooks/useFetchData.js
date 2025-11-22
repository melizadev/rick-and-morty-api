import { useState, useEffect, useCallback } from "react";

export function useFetchData(fetchFn, key) {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const loadData = useCallback(async () => {
    setError(null);
    try {
      const result = await fetchFn();
      setData(result.results || result);
    } catch (error) {
      setError(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [fetchFn]);
  useEffect(() => {
    if (data.length === 0) {
      setLoading(true);
      loadData();
    }
  }, []);
  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem(key, JSON.stringify(data));
    }
  }, [data, key]);

  return { data, loading, error, retry: loadData };
}
