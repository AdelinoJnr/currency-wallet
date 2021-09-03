import React from 'react';

import './style.css';

function FormDeposit({ value }) {
  return (
    <form className="form-deposit">
      <h4 className="title-3">Preencher os dados</h4>
      <input className="inputs-deposit" type="text" name="titular" placeholder="Nome do Titular" />
      <div>
        <input className="input-pair" type="number" name="cvv" placeholder="CVV" />
        <input className="input-pair" type="number" name="vencimento" placeholder="Data de vencimento" />
      </div>
      <input className="inputs-deposit" type="number" name="conta" placeholder="Número do cartão" />
      <select name="parcela">
        <option value="1x">{`1x - R$ ${value}`}</option>
      </select>
    </form>
  );
}

export default FormDeposit;
