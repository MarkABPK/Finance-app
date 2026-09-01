import BalanceCard from "../components/BalanceCard";
import MoneyCard from "../components/MoneyCard";

function Dashboard() {
  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <div>
          <p className="page-label">Overview</p>
          <h1>Dashboard</h1>
        </div>

        <button className="add-button">+ Add Transaction</button>
      </header>

      <section className="balance-section">
        <BalanceCard />
      </section>

      <section className="money-cards">
        <MoneyCard title="Income" amount="0" />
        <MoneyCard title="Expenses" amount="0" />
      </section>
    </main>
  );
}

export default Dashboard;
