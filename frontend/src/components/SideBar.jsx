function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">FINANCE</div>

      <nav>
        <a href="#" className="nav-item active">
          Dashboard
        </a>

        <a href="#" className="nav-item">
          Transactions
        </a>

        <a href="#" className="nav-item">
          Budgets
        </a>

        <a href="#" className="nav-item">
          Goals
        </a>
      </nav>

      <div className="sidebar-bottom">
        <a href="#" className="nav-item">
          Settings
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
