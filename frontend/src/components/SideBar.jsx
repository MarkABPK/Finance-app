import { House, ReceiptText, Wallet, Target, Settings } from "lucide-react";
function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <div className="logo">FINANCE APP</div>

      <nav>
        <a
          href="#"
          className={`nav-item ${activePage === "dashboard" ? "active" : ""}`}
          onClick={(event) => {
            event.preventDefault();
            setActivePage("dashboard");
          }}
        >
          <House className="nav-icon" />
          Dashboard
        </a>

        <a
          href="#"
          className={`nav-item ${activePage === "transactions" ? "active" : ""}`}
          onClick={(event) => {
            event.preventDefault();
            setActivePage("transactions");
          }}
        >
          <ReceiptText className="nav-icon" />
          Transactions
        </a>

        <a
          href="#"
          className={`nav-item ${activePage === "budgets" ? "active" : ""}`}
          onClick={(event) => {
            event.preventDefault();
            setActivePage("budgets");
          }}
        >
          <Wallet className="nav-icon" />
          Budgets
        </a>

        <a
          href="#"
          className={`nav-item ${activePage === "goals" ? "active" : ""}`}
          onClick={(event) => {
            event.preventDefault();
            setActivePage("goals");
          }}
        >
          <Target className="nav-icon" />
          Goals
        </a>
      </nav>

      <div className="sidebar-bottom">
        <a
          href="#"
          className={`nav-item ${activePage === "settings" ? "active" : ""}`}
          onClick={(event) => {
            event.preventDefault();
            setActivePage("settings");
          }}
        >
          <Settings className="nav-icon" />
          Settings
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
