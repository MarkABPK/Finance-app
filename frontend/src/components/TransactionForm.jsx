import { useState } from "react";

function TransactionForm({ onAddTransaction }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAddTransaction({ description, amount, type });
    setDescription("");
    setAmount("");
    setType(""); // Clear the field after submission
  }

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <h2 className="transaction-form__title">Transaction Form</h2>

      <div className="transaction-form__field">
        <label className="transaction-form__label">Description</label>
        {/*onChange event to update the description*/}
        <input
          className="transaction-form__input"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="e.g. Lunch"
        />
      </div>
      <div className="transaction-form__field">
        <label className="transaction-form__label">Amount ¥</label>
        {/*onChange event to update the amount*/}
        <input
          className="transaction-form__input"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          type="number"
          placeholder="e.g. 500"
        ></input>
      </div>

      <div className="transaction-form__field">
        <label className="transaction-form__label">Type</label>
        <select
          className="transaction-form__select"
          value={type}
          onChange={(event) => setType(event.target.value)}
        >
          <option value="">Select Type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <button className="transaction-form__button" type="submit">
        Add
      </button>
    </form>
  );
}

export default TransactionForm;
