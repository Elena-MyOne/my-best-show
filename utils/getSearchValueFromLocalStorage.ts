export const getSearchValueFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('TVShowSearch') ?? '';
  }

  return '';
};
