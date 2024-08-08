import React from "react";

function Transaction({ id, date, description, category, amount }) {
  function handleDelete() {
    fetch(`http://localhost:8001/transactions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
         window.location.reload();
      })
      .catch((error) => console.log(error));
    //  console.log(newId)
  }
  
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button onClick={ handleDelete}>DELETE</button>
      </td>
    </tr>
  );
}

export default Transaction;
