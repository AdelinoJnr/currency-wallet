import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import formatar from 'formatar-valores'

import Footer from '../components/Footer';
import HeaderBack from '../components/HeaderBack';
import { currencyActivity } from '../utils/functions';

function Withdraw() {
  const [valueWithdraw, setValueWithdraw] = useState('');
  const [cpfTitular, setCpfTitular] = useState('');
  const [phoneTitular, setPhoneTitular] = useState('');

  return (
    <>
      <HeaderBack text="Saque" rota="/wallet" />
      <h3>Saque agora</h3>
      <p>quantidade que deseja sacar</p>
      <input value={valueWithdraw} onChange={ (ev) => setValueWithdraw(ev.target.value) } type="number" name="saque" id="saque" />
      <input type="text" name="name" id="name" placeholder="Nome do titular" />
      <input onChange={ (ev) => setCpfTitular(ev.target.value) } value={formatar.cpfCnpj(cpfTitular)} type="text" name="cpf" id="cpf" placeholder="CPF do Titular" />
      <input onChange={ (ev) => setPhoneTitular(ev.target.value) } value={phoneTitular} type="text" name="phone" id="phone" placeholder="Telefone para contato" />
      <input type="number" name="numCart" id="numCart" placeholder="Numero do cartão" />
      <Link to="/">
        <button onClick={ () => currencyActivity(valueWithdraw, 'sacar') } disabled={ valueWithdraw === '' } type="button">confirmar</button>
      </Link>
      <Footer />
    </>
  );
}

export default Withdraw;