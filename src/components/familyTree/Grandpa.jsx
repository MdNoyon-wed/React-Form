import React from 'react';
import Uncle from './Uncle';
import Dad from './Dad';
import Aunt from './Aunt';

const Grandpa = ({asset}) => {
  return (
    <div>
      <h2>GrandPa</h2>
      <section className='flexS'>
         <Dad asset={asset}></Dad>
        <Uncle></Uncle>
        <Aunt asset={asset}></Aunt>
    
      </section>
    </div>
  );
};

export default Grandpa;