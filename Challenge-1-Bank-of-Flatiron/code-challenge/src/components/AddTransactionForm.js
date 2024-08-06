import React from "react";

function AddTransactionForm({addTransaction}) {
  
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={addTransaction}> 
        <div className="inline fields">

          {/* // assigning the values to the inputs and giving the onchange listner a function to perform. The event targets the function formdata */}

          <input type="date" name="date" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
