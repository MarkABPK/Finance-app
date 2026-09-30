import { House, ReceiptText, Wallet, Target, Settings } from "lucide-react";
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">FINANCE APP</div>

      <nav>
        <a href="#" className="nav-item active">
          <House className="nav-icon" />
          Dashboard
        </a>

        <a href="#" className="nav-item">
          <ReceiptText className="nav-icon" />
          Transactions
        </a>

        <a href="#" className="nav-item">
          <Wallet className="nav-icon" />
          Budgets
        </a>

        <a href="#" className="nav-item">
          <Target className="nav-icon" />
          Goals
        </a>
      </nav>

      <div className="sidebar-bottom">
        <a href="#" className="nav-item">
          <Settings className="nav-icon" />
          Settings
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
