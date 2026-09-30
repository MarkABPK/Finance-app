import Sidebar from "./components/SideBar";
import Dashboard from "./Pages/Dashboard";
import useTheme from "./hooks/useTheme";
import MobileNav from "./components/MobileNav";
import { useState } from "react";
import TransactionPage from "./Pages/TransactionPage";
import BudgetPage from "./Pages/BudgetPage";
import GoalsPage from "./Pages/GoalsPage";

function App() {
  const { theme, setTheme, toggleTheme } = useTheme();
  const [activePage, setActivePage] = useState("dashboard");

  function renderPage() {
    switch (activePage) {
      case "dashboard":
        return (
          <Dashboard
            theme={theme}
            toggleTheme={toggleTheme}
            setTheme={setTheme}
          />
        );
      case "transactions":
        return (
          <TransactionPage
            theme={theme}
            toggleTheme={toggleTheme}
            setTheme={setTheme}
          />
        );
      case "budgets":
        return (
          <BudgetPage
            theme={theme}
            toggleTheme={toggleTheme}
            setTheme={setTheme}
          />
        );
      case "goals":
        return (
          <GoalsPage
            theme={theme}
            toggleTheme={toggleTheme}
            setTheme={setTheme}
          />
        );
      default:
        return (
          <Dashboard
            theme={theme}
            toggleTheme={toggleTheme}
            setTheme={setTheme}
          />
        );
    }
  }

  return (
    <div className={`app-layout ${theme}`}>
      <MobileNav activePage={activePage} setActivePage={setActivePage} />
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      {renderPage()}
    </div>
  );
}

export default App;
