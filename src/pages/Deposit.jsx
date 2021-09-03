import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import HeaderBack from '../components/HeaderBack';
import Footer from '../components/Footer';
import FormDeposit from '../components/FormDeposito';

import { currencyActivity } from '../utils/functions';

function Deposit() {
  const [valueDeposit, setValueDeposit] = useState('');

  return (
    <>
      <HeaderBack rota="/wallet" text="Depositar" />
      <section className="content-form-pagament">
        <div className="content-deposit">
          <p>Quanto deseja depositar ?</p>
          <input value={valueDeposit} onChange={(ev) => setValueDeposit(ev.target.value)} type="number" name="valueDeposito" id="valueDeposito" />
        </div>
        <div className="content-metodo-pagament">
          <h3 className="title-3">Metodo de pagamento</h3>
          <button className="btn-cartao" type="button">Cartão</button>
          <button className="btn-boleto" type="button">Boleto</button>
          <button className="btn-pix" type="button">Pix</button>
        </div>
        {valueDeposit !== '' && <FormDeposit value={valueDeposit} />}
        {valueDeposit !== '' && (
          <div className="link-deposit">
            <Link to="/">
              <button className="btn-acao btn-deposit" onClick={() => currencyActivity(valueDeposit, 'adicionar')} type="button">
                Confirmar
              </button>
            </Link>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Deposit;
