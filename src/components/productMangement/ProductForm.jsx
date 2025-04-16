import React, { useState } from 'react';
 

const ProductForm = ({handleAddProducts}) => {
  const [error,setError]=useState('');
  
  const handleProduct = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    console.log(name, price, quantity);

    // Validation
    if(name.length === 0){
      setError('Please Provide a product name');
      return;

     }else if(price.length === 0){
     setError('Please Provide a Price')
     return;
     }else if(quantity.length === 0){
      setError('Please Provide a Quantity')
      return;
    }else{
      setError('');
    }

    const newProduct = {
      name,
      price,
      quantity
    }
    // console.log(newProduct)

    handleAddProducts(newProduct);
  };
  return (
    <div>
    <form onSubmit={handleProduct}>
      <input type="text" name='name' placeholder='Product Name'/>
      <br/>
      <input type="number" name='price' placeholder='Product Price'/>
      <br/>
      <input type="text" name='quantity' placeholder='Product Quantity'/>
      <br/>
      <br/>
      <input type="submit" value="Submit" />
    </form>
      <p style={{color:'red'}}><small>{error}</small></p>
    </div>
  );
};

export default ProductForm;