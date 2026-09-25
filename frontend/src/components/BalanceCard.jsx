function BalanceCard({ amountBalance, currency, formatCurrency }) {
  return (
    <div className="balance-card">
      <p className="balance-label">Current Balance</p>

      <h2>{formatCurrency(amountBalance, currency)}</h2>

      <p className="balance-description">Your available balance</p>
    </div>
  );
}

export default BalanceCard;
