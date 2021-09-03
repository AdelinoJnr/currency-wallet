import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { currencyActivity, validadeGereneteBolet } from '../../utils/functions';

import './style.css';

function FormBoleto({ value }) {
  const [nomeTitular, setNomeTitular] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');

  return (
    <form className="form-deposit">
      <h4 className="title-3">Preencher os dados</h4>
      <input
        onChange={(ev) => setNomeTitular(ev.target.value)}
        className="inputs-deposit"
        type="text"
        name="titular"
        placeholder="Nome completo"
        value={nomeTitular}
      />
      <input
        onChange={(ev) => setEmail(ev.target.value)}
        className="inputs-deposit"
        type="email"
        name="email"
        placeholder="E-mail"
        value={email}
      />
      <input
        onChange={(ev) => setCpf(ev.target.value)}
        className="inputs-deposit"
        type="number"
        name="cpf"
        placeholder="Número do CPF"
        value={cpf}
      />
      <input
        onChange={(ev) => setTelefone(ev.target.value)}
        className="inputs-deposit"
        type="number"
        name="telefone"
        placeholder="Telefone para contato"
        value={telefone}
      />
      <div>
        <Link className="content-btn-boleto" to="/">
          <button
            className="btn-acao btn-deposit"
            onClick={() => currencyActivity(value, 'adicionar')}
            type="button"
            disabled={!validadeGereneteBolet(nomeTitular, email, cpf, telefone)}
          >
            Gerar Boleto
          </button>
        </Link>
      </div>
    </form>
  );
}

export default FormBoleto;
