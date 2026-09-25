function TransactionList({ transactions, currency, formatCurrency }) {
  return (
    <section className="transaction-list">
      <div className="transaction-list-header">
        <h2>Recent Transactions</h2>
        <button>View All</button>
      </div>
      <div className="transaction-items">
        {transactions.map((transaction, index) => (
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
        ))}
      </div>
    </section>
  );
}

export default TransactionList;
