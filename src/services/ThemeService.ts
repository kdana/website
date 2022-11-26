import StorageService from "./StorageService";

const ThemeService = {
  setTheme: function (value: string): void {
    StorageService.store("theme", value);
  },
  getTheme: function (): string | null {
    return StorageService.fetch("theme");
  },
  isLightMode: function (): boolean {
    return this.getTheme() === "light";
  },
};

export default ThemeService;
