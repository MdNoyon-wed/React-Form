import React from 'react';
import UseInputHook from '../hooks/UseInputHook';

const HookForm = () => {
  const [name,nameOnChange]=UseInputHook('');
  
  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit',name)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" defaultValue={name}
         onChange={nameOnChange} placeholder='Name'/>
         <br />
         <br />
         <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;