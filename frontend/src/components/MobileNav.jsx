import { House, ReceiptText, Wallet, Target, Settings } from "lucide-react";

function MobileNav() {
  return (
    <div className="mobile-nav">
      <h1 className="mobile-nav-logo">FINANCE APP</h1>
      <nav className="mobile-nav-items">
        <a href="#" className="nav-item active">
          <House className="mobile-nav-icon" alt="Dashboard" />
        </a>

        <a href="#" className="nav-item">
          <ReceiptText className="mobile-nav-icon" alt="Transactions" />
        </a>

        <a href="#" className="nav-item">
          <Wallet className="mobile-nav-icon" alt="Budget" />
        </a>

        <a href="#" className="nav-item">
          <Target className="mobile-nav-icon" alt="Goals" />
        </a>

        <a href="#" className="nav-item">
          <Settings className="mobile-nav-icon" alt="Settings" />
        </a>
      </nav>
    </div>
  );
}

export default MobileNav;
