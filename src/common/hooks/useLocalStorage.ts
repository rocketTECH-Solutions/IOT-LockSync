'use client';
type StorageType = 'session' | 'local';

type UseStorageReturnValue = {
  getItem: (key: string) => string | null;
};

export const useStorage = (): UseStorageReturnValue => {
  const isBrowser: boolean = typeof window !== 'undefined';

  const getItem = (key: string): string | null => {
    if (!isBrowser) return null; // Return null if not running in the browser
    const data = localStorage.getItem(key);
    return (data && JSON.parse(data)) || null;
  };

  return {
    getItem,
  };
};
