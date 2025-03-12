import { useEffect, useState, useRef } from "react";

const useFetch = (url, options = {}) => {
  const [status, setStatus] = useState("Loading");
  const [data, setData] = useState(undefined);
  // const [error, setError] = useState<boolean>(false);
  const cache = useRef({});

  useEffect(() => {
    let cancelRequest = false;
    if (!url) return;

    const fetchData = async () => {
      setStatus("Loading");
      if (cache.current[url]) {
        const data = cache.current[url];
        setData(data);
        setStatus("Success");
      } else {
        try {
          const response = await fetch(url, options);
          const data = await response.json();
          cache.current[url] = data;
          setData(data);
          setStatus("Success");
        } catch (error) {
          setStatus("Failed");
          // setError();
        }
      }
    };

    fetchData();

    return function cleanup() {
      cancelRequest = true;
    };
  }, [url]);

  return { status, data };
};

export default useFetch;
