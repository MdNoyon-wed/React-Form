import React, { useRef } from 'react';

const UncontrolledField = () => {

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    const email = emailRef.current.value;
    const Password =passwordRef.current.value;
    console.log(email,Password);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={emailRef} type="email" name=''/>
        <br />
        <input ref={passwordRef} type="Password" name='' />
        <br />
        <br />
        <input type="submit" value='Submit'/>
      </form>
    </div>
  );
};

export default UncontrolledField;