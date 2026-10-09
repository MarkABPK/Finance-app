import Sidebar from "./components/SideBar";
import Dashboard from "./Pages/Dashboard";
import useTheme from "./hooks/useTheme";
import MobileNav from "./components/MobileNav";
import { useState } from "react";
import TransactionPage from "./Pages/TransactionPage";
import BudgetPage from "./Pages/BudgetPage";
import GoalsPage from "./Pages/GoalsPage";
import SettingPage from "./Pages/SettingPage";
import AppHeader from "./components/AppHeader";

function App() {
  const { theme, setTheme } = useTheme();
  const [activePage, setActivePage] = useState("dashboard");
  const [transactions, setTransactions] = useState([]);
  const [currency, setCurrency] = useState("JPY");

  function handleNewTransaction(transaction) {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  }

  function handleViewAllTransactions() {
    setActivePage("transactions");
  }
  //format currency
  function formatCurrency(amount, currency) {
    if (currency === "MMK") {
      const formatted = new Intl.NumberFormat("my-MM", {}).format(amount);
      return "Ks " + formatted;
    }
    const formatted = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(amount);
    return formatted;
  }

  function renderPage() {
    switch (activePage) {
      case "dashboard":
        return (
          <Dashboard
            transactions={transactions}
            onAddTransaction={handleNewTransaction}
            currency={currency}
            formatCurrency={formatCurrency}
            onViewAllTransactions={handleViewAllTransactions}
          />
        );
      case "transactions":
        return (
          <TransactionPage
            transactions={transactions}
            currency={currency}
            formatCurrency={formatCurrency}
          />
        );
      case "budgets":
        return <BudgetPage />;
      case "goals":
        return <GoalsPage />;
      case "settings":
        return <SettingPage />;
      default:
        return (
          <Dashboard
            transactions={transactions}
            onAddTransaction={handleNewTransaction}
            currency={currency}
            formatCurrency={formatCurrency}
            onViewAllTransactions={handleViewAllTransactions}
          />
        );
    }
  }

  return (
    <div className={`app-layout ${theme}`}>
      {activePage !== "settings" && (
        <>
          <MobileNav activePage={activePage} setActivePage={setActivePage} />
        </>
      )}
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        compact={activePage === "settings"}
      />

      <div className="app-content">
        <AppHeader
          theme={theme}
          setTheme={setTheme}
          currency={currency}
          setCurrency={setCurrency}
          showCurrency={
            activePage === "dashboard" || activePage === "transactions"
          }
        />

        {renderPage()}
      </div>
    </div>
  );
}

export default App;
