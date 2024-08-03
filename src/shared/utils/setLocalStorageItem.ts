export const setItemToLocalStorage = (keyName: string, data: string) => {
  window.localStorage.setItem(keyName, data);
};
