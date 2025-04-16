import React from 'react';
import Cousin from './Cousin';

const Aunt = ({asset}) => {
  return (
    <div>
      <h2>Aunt</h2>
      <section>
        <Cousin asset={asset} name='Tom Tom'></Cousin>
        <Cousin name='Jo joo'></Cousin>
      </section>
    </div>
  );
};

export default Aunt;