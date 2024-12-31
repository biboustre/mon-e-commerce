import { useState, useEffect } from "react";

interface UseFetchResult<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

function useFetch<T>(url: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       if (error instanceof Error) {
  //         setError(error.message);
  //       } else {
  //         setError("An unknown error occurred");
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [url]);

  //   AVEC THEN :----------------------------------------------
//   useEffect(() => {
//     fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((result) => {
//         setData(result);
//         setLoading(false);
//       })
//       .catch((error) => {
//         if (error instanceof Error) {
//           setError(error.message);
//         } else {
//           setError("An unknown error occurred");
//         }
//         setLoading(false);
//       });
//   }, [url]);

useEffect(() => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text(); // Change to text to handle empty responses
    })
    .then((text) => {
      if (text) {
        return JSON.parse(text);
      }
      return null;
    })
    .then((result) => {
      setData(result);
      setLoading(false);
    })
    .catch((error) => {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
      setLoading(false);
    });
}, [url]);

  return { data, error, loading };
}

export default useFetch;
