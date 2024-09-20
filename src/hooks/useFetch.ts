import { useEffect, useState } from "react";

interface FetchResult<T> {
  data: T;
}

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetch = <T>(endpoint: string, lan: string): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const locale = lan;

  const sortByOrder = true;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:1337/api/${endpoint}?locale=${locale}&${
            sortByOrder ? "sort=order:asc&" : ""
          }populate=*`
        );
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const result: FetchResult<T> = await response.json();
        setData(result.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, lan]);

  return { data, loading, error };
};

export default useFetch;
