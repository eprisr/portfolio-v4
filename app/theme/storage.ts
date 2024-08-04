// Store Data in Local Browser
export const setToLS = (key: string, value: string | null) => {
  if (value === null) value = '';
  window.localStorage.setItem(key, value);
};

// Retrieve Data from Local Browser
export const getFromLS = (key: string) => {
  const value: string | null = window.localStorage.getItem(key);

  if (value) return value;

  return '';
};
