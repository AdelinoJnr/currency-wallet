import React from 'react';

function Opiton({ value, inputValue }) {
  return (
    <option value={`${value}x`}>{`${value}x - R$ ${Number(inputValue / value).toFixed(2)}`}</option>
  );
}

export default Opiton;
