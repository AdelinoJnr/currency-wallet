import React from 'react';
import { Link } from 'react-router-dom';

import { currencyActivity } from '../../utils/functions';

import './style.css';

function FormBoleto({ value }) {
  return (
    <form className="form-deposit">
      <h4 className="title-3">Preencher os dados</h4>
      <input className="inputs-deposit" type="text" name="titular" placeholder="Nome completo" />
      <input className="inputs-deposit" type="email" name="email" placeholder="E-mail" />
      <input className="inputs-deposit" type="number" name="cpf" placeholder="Número do CPF" />
      <input className="inputs-deposit" type="number" name="telefone" placeholder="Telefone para contato" />
      <div>
        <Link className="content-btn-boleto" to="/">
          <button className="btn-acao btn-deposit" onClick={() => currencyActivity(value, 'adicionar')} type="button">
            Gerar Boleto
          </button>
        </Link>
      </div>
    </form>
  );
}

export default FormBoleto;
