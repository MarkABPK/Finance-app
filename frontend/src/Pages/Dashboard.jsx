import BalanceCard from "../components/BalanceCard";
import MoneyCard from "../components/MoneyCard";
import TransactionList from "../components/TransactionList";

import { useState } from "react"; // Importing useState
import TransactionForm from "../components/TransactionForm";

function Dashboard() {
  const [isFormOpen, setIsFormOpen] = useState(false); // State to track if the form is open or closed
  const [transactions, setTransactions] = useState([]);

  //income
  const incomeTransaction = transactions.filter(
    (transaction) => transaction.type === "income",
  );
  const totalIncome = incomeTransaction.reduce(
    (incomeTotal, incomeTransaction) => {
      return incomeTotal + incomeTransaction.amount;
    },
    0,
  );
  //expense
  const expenseTransaction = transactions.filter(
    (transaction) => transaction.type === "expense",
  );
  const totalExpense = expenseTransaction.reduce(
    (expenseTotal, expenseTransaction) => {
      return expenseTotal + expenseTransaction.amount;
    },
    0,
  );

  //balance
  const balance = totalIncome - totalExpense;

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
        <BalanceCard amountBalance={balance} />
      </section>

      <section className="money-cards">
        <MoneyCard title="Income" amount={totalIncome} />
        <MoneyCard title="Expenses" amount={totalExpense} />
      </section>

      <TransactionList transactions={transactions} />
    </main>
  );
}

export default Dashboard;
