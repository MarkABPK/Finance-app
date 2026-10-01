import TransactionList from "../components/TransactionList";

function TransactionPage({ transactions, currency, formatCurrency }) {
  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <h1>Transaction Page</h1>
        <p>Number of transactions: {transactions.length}</p>
        <TransactionList
          transactions={transactions}
          currency={currency}
          formatCurrency={formatCurrency}
          title="All Transactions"
          showViewAll={false}
        />
      </header>
    </main>
  );
}

export default TransactionPage;
