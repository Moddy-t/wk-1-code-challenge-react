import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [searchValue, setSearchValue] = useState("");


  // Fetching initial transactions
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Adding transaction "POST"
  const addTransaction = (e) => {
    e.preventDefault();
    // create an object (empty form) to add to transactions form
    let newObj={
      //  setting the id to continue from last id in the array
      id:String(transactions.length+1),
      date:e.target.date.value,
      description:e.target.description.value,
      category:e.target.category.value,
      amount:e.target.amount.value
    }   
    let newArray=[...transactions,newObj] 
    // assigning the new array to the setTransaction function
    setTransactions(newArray)
    //  resetting the input to empty once a transaction is already added
    e.target.reset()
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newObj),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => console.log(error));
  };
  

  // FILTERED value
  
      const filteredResults = transactions.filter((transaction) => {
        // remove the strict case 
        if(transaction.description.toLowerCase().includes(searchValue.toLowerCase()) )return transaction
          else if(searchValue==='') return true
          
    })


    

  return (
    <div>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <AddTransactionForm addTransaction={addTransaction} />
      <TransactionsList transactions={filteredResults} />
    </div>
  );
}

export default AccountContainer;
