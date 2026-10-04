import BalanceCard from "../components/BalanceCard";
import MoneyCard from "../components/MoneyCard";
import TransactionList from "../components/TransactionList";

import { useState } from "react"; // Importing useState
import TransactionForm from "../components/TransactionForm";

function Dashboard({
  transactions,
  onAddTransaction,
  currency,
  formatCurrency,
  onViewAllTransactions,
}) {
  const [isFormOpen, setIsFormOpen] = useState(false); // State to track if the form is open or closed

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

  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <div className="dashboard-heading">
          <p className="page-label">Overview</p>
          <h1>Dashboard</h1>
        </div>

        <div className="dashboard-actions">
          <button className="add-button" onClick={handleAddTransaction}>
            + Add Transaction
          </button>
        </div>
      </header>
      {isFormOpen && (
        <TransactionForm
          onAddTransaction={onAddTransaction}
          currency={currency}
        />
      )}

      <section className="balance-section">
        <BalanceCard
          amountBalance={balance}
          currency={currency}
          formatCurrency={formatCurrency}
        />
      </section>

      <section className="money-cards">
        <MoneyCard
          title="Income"
          amount={totalIncome}
          currency={currency}
          formatCurrency={formatCurrency}
        />
        <MoneyCard
          title="Expenses"
          amount={totalExpense}
          currency={currency}
          formatCurrency={formatCurrency}
        />
      </section>

      <TransactionList
        transactions={transactions}
        currency={currency}
        formatCurrency={formatCurrency}
        onViewAllTransactions={onViewAllTransactions}
      />
    </main>
  );
}

export default Dashboard;
