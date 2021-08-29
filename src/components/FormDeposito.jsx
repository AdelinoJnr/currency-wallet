import React from 'react';

function FormDeposit() {
  return (
    <form>
      <label htmlFor="cartao">
        <input type="radio" name="deposit" id="cartao" />
        Cartão de Credito
      </label>
      <label htmlFor="boleto">
        <input type="radio" name="deposit" id="boleto" />
        Boleto
      </label>
      <label htmlFor="Pix">
        <input type="radio" name="deposit" id="Pix" />
        Pix
      </label>
    </form>
  );
}

export default FormDeposit;
