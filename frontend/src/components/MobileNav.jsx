import { House, ReceiptText, Wallet, Target, Settings } from "lucide-react";

function MobileNav({ activePage, setActivePage }) {
  return (
    <div className="mobile-nav">
      <h1 className="mobile-nav-logo">FINANCE APP</h1>
      <nav className="mobile-nav-items">
        <a
          href="#"
          className={`nav-item ${activePage === "dashboard" ? "active" : ""}`}
          onClick={(event) => {
            event.preventDefault();
            setActivePage("dashboard");
          }}
        >
          <House className="mobile-nav-icon" alt="Dashboard" />
        </a>

        <a
          href="#"
          className={`nav-item ${activePage === "transactions" ? "active" : ""}`}
          onClick={(event) => {
            event.preventDefault();
            setActivePage("transactions");
          }}
        >
          <ReceiptText className="mobile-nav-icon" alt="Transactions" />
        </a>

        <a
          href="#"
          className={`nav-item ${activePage === "budgets" ? "active" : ""}`}
          onClick={(event) => {
            event.preventDefault();
            setActivePage("budgets");
          }}
        >
          <Wallet className="mobile-nav-icon" alt="Budget" />
        </a>

        <a
          href="#"
          className={`nav-item ${activePage === "goals" ? "active" : ""}`}
          onClick={(event) => {
            event.preventDefault();
            setActivePage("goals");
          }}
        >
          <Target className="mobile-nav-icon" alt="Goals" />
        </a>

        <a
          href="#"
          className={`nav-item ${activePage === "settings" ? "active" : ""}`}
          onClick={(event) => {
            event.preventDefault();
            setActivePage("settings");
          }}
        >
          <Settings className="mobile-nav-icon" alt="Settings" />
        </a>
      </nav>
    </div>
  );
}

export default MobileNav;
