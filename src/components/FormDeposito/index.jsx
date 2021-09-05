import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { validadeGereneteCartao } from '../../utils/functions';
import { updateSellAndDeposit } from '../../utils/historic';
import Opiton from '../Options';

import './style.css';

function FormDeposit({ value }) {
  const [nomeTitular, setNomeTitular] = useState('');
  const [cvv, setCvv] = useState('');
  const [vencimento, setVencimento] = useState('');
  const [conta, setConta] = useState('');

  const { userId } = JSON.parse(localStorage.getItem('user'));

  const renderOptions = () => {
    if (value < 100) {
      const totalOption = [1, 2];
      return (
        <select className="select-content">
          {totalOption.map((item) => <Opiton value={item} inputValue={value} />)}
        </select>
      );
    }
    if (value < 1000) {
      const totalOption = [1, 2, 3, 4, 5];
      return (
        <select className="select-content">
          {totalOption.map((item) => <Opiton value={item} inputValue={value} />)}
        </select>
      );
    }
    const totalOption = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
      <select className="select-content">
        {totalOption.map((item) => <Opiton value={item} inputValue={value} />)}
      </select>
    );
  };

  const handleChangeCvv = ({ target }) => {
    if (target.value.length > 3) return setCvv(cvv);
    setCvv(target.value);
  };

  return (
    <form className="form-deposit">
      <h4 className="title-3">Preencher os dados</h4>
      {renderOptions()}
      <input
        className="inputs-deposit"
        type="text"
        name="titular"
        placeholder="Nome do Titular"
        value={nomeTitular}
        onChange={(ev) => setNomeTitular(ev.target.value)}
      />
      <div>
        <input
          className="input-pair"
          type="number"
          name="cvv"
          placeholder="CVV"
          value={cvv}
          onChange={handleChangeCvv}
        />
        <input
          className="input-pair"
          type="number"
          name="vencimento"
          placeholder="Data de vencimento"
          value={vencimento}
          onChange={(ev) => setVencimento(ev.target.value)}
        />
      </div>
      <input
        className="inputs-deposit"
        type="number"
        name="conta"
        placeholder="Número do cartão"
        value={conta}
        onChange={(ev) => setConta(ev.target.value)}
      />
      <div>
        <Link className="link-deposit" to="/">
          <button
            className="btn-acao btn-deposit"
            onClick={() => updateSellAndDeposit(userId, {
              value,
              metodo: 'cartão',
              name: nomeTitular,
            }, 'deposito')}
            type="button"
            disabled={!validadeGereneteCartao(nomeTitular, cvv, vencimento, conta)}
          >
            Confirmar
          </button>
        </Link>
      </div>
    </form>
  );
}

export default FormDeposit;
