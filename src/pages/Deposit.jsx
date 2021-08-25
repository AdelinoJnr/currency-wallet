import React, { useState } from 'react';

import HeaderBack from '../components/HeaderBack';
import Footer from '../components/Footer';
import FormDeposit from '../components/FormDeposito';

import { currencyActivity } from '../utils/functions';
import { Link } from 'react-router-dom';

function Deposit() {
  const [valueDeposit, setValueDeposit] = useState('');

  const renderButtonFinish = () => {
    return (
      <Link to="/">
        <button onClick={() => currencyActivity(valueDeposit, 'adicionar')} type="button">Depositar</button>
      </Link>
    );
  };

  return (
    <>
      <HeaderBack rota="/wallet" text="Depositar" />
      <section className="content-form-pagament">
        <h4>Valor para depositar</h4>
        <input value={valueDeposit} onChange={ (ev) => setValueDeposit(ev.target.value)  } type="number" name="valueDeposito" id="valueDeposito" />
        <h4>Metodo de pagamento</h4>
        {valueDeposit !== '' && <FormDeposit />}
        {valueDeposit !== '' && renderButtonFinish()}
      </section>
      <Footer />
    </>
  );
}

export default Deposit;