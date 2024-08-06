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
    let newObj={
      //  setting the id to the next id in the array
      id:transactions.length+1,
      date:e.target.date.value,
      description:e.target.description.value,
      category:e.target.category.value,
      amount:e.target.amount.value
    }   
    let newArray=[...transactions,newObj] 
    setTransactions(newArray)
    e.target.reset()
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      // changing amount to integer
      body: JSON.stringify(newObj),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => console.log(error));
  };

  // FILTERED value
  
      const filteredResults = transactions.filter((transaction) => {
        if(transaction.description.toLowerCase().includes(searchValue.toLocaleLowerCase()) )return transaction
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
