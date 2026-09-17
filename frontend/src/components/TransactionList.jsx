function TransactionList() {
  return (
    <section className="transaction-list">
      <div className="transaction-list-header">
        <h2>Recent Transactions</h2>
        <button>View All</button>
      </div>

      <div className="transaction-items">
        <div>
          <p className="transaction-name">Food</p>
          <p className="transaction-category">Lunch</p>
        </div>

        <p className="transaction-amount expense">-¥500</p>
      </div>
    </section>
  );
}

export default TransactionList;
