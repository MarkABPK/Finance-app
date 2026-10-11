import ThemeToggle from "./ThemeToggle";
import { Search } from "lucide-react";

function AppHeader({
  theme,
  setTheme,
  currency,
  setCurrency,
  showCurrency,
  showSettingsSearch,
}) {
  return (
    <header className="app-header">
      {showSettingsSearch && (
        <div className="settings-search-wrapper">
          <Search className="settings-search-icon" size={26} />
          <input
            type="search"
            placeholder="Search..."
            className="search-input"
            aria-label="Search settings"
          />
        </div>
      )}

      <ThemeToggle theme={theme} setTheme={setTheme} />

      {showCurrency && (
        <div className="currency-select-wrapper">
          <select
            className="currency-select"
            value={currency}
            onChange={(event) => setCurrency(event.target.value)}
          >
            <option value="JPY">Japanese Yen (JPY)</option>
            <option value="USD">US Dollar (USD)</option>
            <option value="MMK">Myanmar Kyat (MMK)</option>
          </select>
        </div>
      )}
    </header>
  );
}

export default AppHeader;
