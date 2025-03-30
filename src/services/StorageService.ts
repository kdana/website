const StorageService = {
  store: function (key: string, value: string) {
    localStorage.setItem(key, value);
  },
  fetch: function (key: string) {
    return localStorage.getItem(key);
  },
  delete: function (key: string) {
    localStorage.removeItem(key);
  },
};

export default StorageService;
