import { useState, useEffect } from 'react';

export const useSessionStorage = (sessionStorageKey) => {
  const [value, setValue] = useState(
    sessionStorage.getItem(sessionStorageKey) || ''
  );
  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, value);
  }, [value]);

  return [value, setValue];
};
