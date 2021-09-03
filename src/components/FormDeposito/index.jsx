import React from 'react';
import { Link } from 'react-router-dom';
import { currencyActivity } from '../../utils/functions';

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
      <div className="link-deposit">
        <Link to="/">
          <button className="btn-acao btn-deposit" onClick={() => currencyActivity(value, 'adicionar')} type="button">
            Confirmar
          </button>
        </Link>
      </div>
    </form>
  );
}

export default FormDeposit;
