import ThemeToggle from "./ThemeToggle";

function AppHeader({ theme, setTheme, currency, setCurrency, showCurrency }) {
  return (
    <header className="app-header">
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
