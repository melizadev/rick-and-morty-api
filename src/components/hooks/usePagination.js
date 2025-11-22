import { useState, useEffect } from "react";

function getItemsPerPage() {
  const width = window.innerWidth;
  if (width >= 1200) return 5;
  if (width >= 768) return 3;
  if (width >= 400) return 2;
  return 1;
}

export function usePagination(items) {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(getItemsPerPage());

  useEffect(() => {
    const onResize = () => {
      setPerPage(getItemsPerPage());
      setPage(0);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const pages = Math.ceil(items.length / perPage);
  const start = page * perPage;
  const visibleItems = items.slice(start, start + perPage);

  return { page, setPage, pages, visibleItems };
}

export default usePagination;
