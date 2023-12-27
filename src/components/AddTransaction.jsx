import React, { useState } from "react";

export default function AddTransaction () {

  const categories = [
    "Débit",
    "Crédit",
];

  const subCategories = [
    "Food",
    "Transport",
    "Home",
    "Shopping",
    "Health",
    "Cash",
];

  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [category, setCategory] = useState('')
  const [subcategory, setSubCategory] = useState('')

  function handleAddTransaction() {

  }


  const [title, setTitle] = useState('')

  const handleChange = (e) => {
      setTitle(e.target.value);
  };

    return (
        <div className="add-transaction-form">
          <h1 onChange={handleChange}>Connexion</h1>
          <input onChange={(event)=>{setAmount(event.target.value)}} type="number" name="set-amount" id="set-amount" placeholder="AMOUNT"/>
          <input onChange={(event)=>{setDescription(event.target.value)}} type="text" name="set-description" id="set-description" placeholder="DESCRIPTION"/>
          <input onChange={(event)=>{setDate(event.target.value)}} type="date" name="set-date" id="set-date" placeholder="DATE"/>
          <select onChange={(event)=>{setCategory(event.target.value)}} type="text" name="set-category" id="set-category" placeholder="CATEGORY"/>
          <select onChange={(event)=>{setSubCategory(event.target.value)}} type="text" name="set-subcategory" id="set-subcategory" placeholder="SUBCATEGORY"/>
          <button onClick={handleAddTransaction} type="button" id="submit-transaction">Ajouter</button>
        </div>
    );


};