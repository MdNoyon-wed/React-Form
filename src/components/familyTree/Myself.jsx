import React from 'react';
import Special from './Special';

const Myself = ({asset}) => {
  return (
    <div>
      <h2>Me</h2>
      <Special asset={asset}></Special>
    </div>
  );
};

export default Myself;