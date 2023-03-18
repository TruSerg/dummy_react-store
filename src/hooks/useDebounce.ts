import { useEffect, useState } from "react";

const UseDebounce = (value: string, delay = 500) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handleDebounce = setTimeout(() => setDebounced(value), delay);

    return () => clearTimeout(handleDebounce);
  }, [value, delay]);

  return debounced;
};

export default UseDebounce;
