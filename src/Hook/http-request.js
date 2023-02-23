import { useCallback, useEffect, useState } from "react";

const useHttp = () => {
  const [data, setData] = useState([]);

  const Request = useCallback((request) => {
    const Request = async () => {
      const res = await fetch(request.url, {
        method: request.method ? request.method : null,
        body: request.body ? JSON.stringify(request.body) : null,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        alert("response not ok");
        return;
      } else {
        alert("operation done");
      }
    };
    Request();
  }, []);

  useEffect(() => {
    const Request = async () => {
      const res = await fetch("http://localhost:4000/posts");
      if (!res.ok) {
        return;
      } else {
        const data = await res.json();
        setData(data);
      }
    };
    Request();
  }, []);

  return {
    data,

    Request,
  };
};

export default useHttp;
