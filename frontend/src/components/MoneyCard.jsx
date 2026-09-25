function MoneyCard({ title, amount, currency, formatCurrency }) {
  return (
    <div className="money-card">
      <p>{title}</p>
      <h3>{formatCurrency(amount, currency)}</h3>
    </div>
  );
}

export default MoneyCard;
