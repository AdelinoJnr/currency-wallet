import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import HeaderBack from '../components/HeaderBack';
import { validadeSaque } from '../utils/functions';
import { updateBuyAndSaque } from '../utils/historic';

function Withdraw() {
  const [valuedraw, setValuedraw] = useState('');
  const [nomeTitular, setNomeTitular] = useState('');
  const [email, setEmail] = useState('');
  const [conta, setConta] = useState('');
  const [bank, setBank] = useState('');
  const [telefone, setTelefone] = useState('');

  const { userId } = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <HeaderBack text="Sacar" rota="/wallet" />
      <div className="content-saque">
        <p>Quanto deseja sacar ?</p>
        <input
          value={valuedraw}
          onChange={(ev) => setValuedraw(ev.target.value)}
          type="number"
          name="saque"
          placeholder="Valor"
        />
      </div>

      <form className="form-sacar">
        <h4 className="title-3">Preencher os dados</h4>
        <select className="select-content" onChange={(ev) => setBank(ev.target.value)} name="banco">
          <option selected>-- Esolha seu banco --</option>
          <option value="caixa">Caixa economica federal</option>
          <option value="brasil">Banco do Brasil</option>
          <option value="itau">Banco Itaú</option>
          <option value="nubank">Nubank</option>
        </select>

        <input
          type="number"
          name="conta"
          placeholder="Número da conta"
          value={conta}
          onChange={(ev) => setConta(ev.target.value)}
          autoComplete="off"
        />
        <input
          type="text"
          name="name"
          placeholder="Nome do Titular"
          value={nomeTitular}
          onChange={(ev) => setNomeTitular(ev.target.value)}
          autoComplete="off"
        />
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="text"
          name="telefone"
          placeholder="Telefone para contato"
          value={telefone}
          onChange={(ev) => setTelefone(ev.target.value)}
        />
        <Link className="content-btn" to="/">
          <button
            onClick={() => updateBuyAndSaque(userId, {
              value: Number(valuedraw),
              name: nomeTitular,
              email,
              bank,
            }, 'saque')}
            disabled={!validadeSaque(valuedraw, conta, nomeTitular, email, telefone)}
            type="button"
            className="btn-acao btn-saque"
          >
            confirmar
          </button>
        </Link>
      </form>

      <Footer />
    </>
  );
}

export default Withdraw;
