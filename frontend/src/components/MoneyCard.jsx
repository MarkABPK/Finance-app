function MoneyCard({ title, amount }) {
  return (
    <div className="money-card">
      <p>{title}</p>
      <h3>¥{amount}</h3>
    </div>
  );
}

export default MoneyCard;
