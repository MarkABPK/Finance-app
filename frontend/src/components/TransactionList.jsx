function TransactionList({
  transactions,
  currency,
  formatCurrency,
  title = "Recent Transactions",
  showViewAll = true,
  onViewAllTransactions,
}) {
  return (
    <section className="transaction-list">
      <div className="transaction-list-header">
        <h2>{title}</h2>
        {showViewAll && (
          <button onClick={onViewAllTransactions}>View All</button>
        )}
      </div>
      <div className="transaction-items">
        {transactions.length === 0 ? (
          <p>No transactions available.</p>
        ) : (
          transactions.map((transaction, index) => (
            <div key={index} className="transaction-item">
              <div>
                <p className="transaction-description">
                  {transaction.description}
                </p>
                <p className="transaction-type">{transaction.type}</p>
              </div>

              <p className={`transaction-amount ${transaction.type}`}>
                {formatCurrency(transaction.amount, currency)}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default TransactionList;
