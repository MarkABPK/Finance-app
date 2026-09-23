import BalanceCard from "../components/BalanceCard";
import MoneyCard from "../components/MoneyCard";
import TransactionList from "../components/TransactionList";

import { useState } from "react"; // Importing useState
import TransactionForm from "../components/TransactionForm";

function Dashboard() {
  const [isFormOpen, setIsFormOpen] = useState(false); // State to track if the form is open or closed
  const [transactions, setTransactions] = useState([]);

  function handleAddTransaction() {
    // Function to handle the button click
    setIsFormOpen(!isFormOpen);
  }
  function handleNewTransaction(transaction) {
    setTransactions([...transactions, transaction]);
  }

  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <div>
          <p className="page-label">Overview</p>
          <h1>Dashboard</h1>
        </div>
        <button className="add-button" onClick={handleAddTransaction}>
          + Add Transaction
        </button>
      </header>
      {isFormOpen && (
        <TransactionForm onAddTransaction={handleNewTransaction} />
      )}

      <section className="balance-section">
        <BalanceCard />
      </section>

      <section className="money-cards">
        <MoneyCard title="Income" amount="0" />
        <MoneyCard title="Expenses" amount="0" />
      </section>

      <TransactionList transactions={transactions} />
    </main>
  );
}

export default Dashboard;
