import React from 'react';

const FromAction = () => {

  const handleFormAction = (fromData) => {
    fromData.preventDefault();
    console.log(fromData.get('name'));
    console.log(fromData.get('email'));
  }
  return (
    <div>
      <form action={handleFormAction}>
        <input type="text" placeholder='Name' name="name" id="" />
        <br />
        <input type="email" placeholder='Email' name="email" id="" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FromAction;