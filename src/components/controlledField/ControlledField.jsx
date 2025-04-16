  import React, { useState } from 'react';

  const ControlledField = () => {

 const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword] = useState('');
  const [error,setError]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log("submitted")
  };

  const handleEmailChange = e => {
    e.preventDefault();
    setEmail(e.target.value)
  }

  const handleNameChange = e => {
    setName(e.target.value)
  }

  const handlePasswordOnChange = e => {
    // console.log(e.target.value);
    setPassword(e.target.value);
    e.preventDefault();
    console.log(email,password,name)
    if(password.length < 6){
      setError("password is error")

    }
    else{
      setError('');
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' onChange={handleNameChange}
         defaultValue={name} required />
         <br />
        <input type="email" onChange={handleEmailChange} name='email'
         placeholder='Email' defaultValue={email} required />
         <br />
         <input type="password" placeholder='Password'
          name='password'onChange={handlePasswordOnChange} defaultValue={password} required />
            <br />
            <input type="submit" value='Submit' />
      </form>
      <p style={{color : 'red'}}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;