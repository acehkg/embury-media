import { useState, useEffect } from 'react';

export const useSessionStorage = (sessionStorageKey) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const storedValue = sessionStorage.getItem(sessionStorageKey);
    setValue(storedValue || '');
  }, []);

  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, value);
  }, [value]);

  return [value, setValue];
};
