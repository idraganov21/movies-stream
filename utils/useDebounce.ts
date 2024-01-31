import { useEffect, useState } from 'react';

export default function useDebounce(value: any, delay: nubmer) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
        setDebouncedValue(value);
    }, delay);
  }, [value, delay]);

  return debouncedValue;
}
