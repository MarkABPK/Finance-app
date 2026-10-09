import { House, ReceiptText, Wallet, Target, Settings } from "lucide-react";
function Sidebar({ activePage, setActivePage, compact }) {
  return (
    <aside className={`sidebar ${compact ? "sidebar-compact" : ""}`}>
      {compact ? (
        <img
          className="compact-logo"
          src="/finance-logo.png"
          alt="Finance App"
        />
      ) : (
        <div className="logo">FINANCE APP</div>
      )}

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
          <span className="nav-label">Dashboard</span>
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
          <span className="nav-label">Transactions</span>
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
          <span className="nav-label">Budgets</span>
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
          <span className="nav-label">Goals</span>
        </a>
      </nav>
      {!compact && (
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
            <span className="nav-label">Settings</span>
          </a>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
