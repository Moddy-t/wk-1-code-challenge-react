import React from "react";

function AddTransactionForm({addTransaction}) {
  
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={addTransaction}> 
        <div className="inline fields">
          <input required type="date" name="date" />
          <input  required type="text" name="description" placeholder="Description" />
          <input required type="text" name="category" placeholder="Category" />
          <input required type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
