const StorageService = {
  store: function (key: string, value: string) {
    localStorage.setItem(key, value);
  },
  fetch: function (key: string) {
    return localStorage.getItem(key);
  },
};

export default StorageService;
