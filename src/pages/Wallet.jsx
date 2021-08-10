import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';

import { CurrencyContext } from '../store/Currency/currency';

function Wallet() {
  const {
    currency,
  } = useContext(CurrencyContext);

  if (!currency) {
    return <Loading />
  }

  return (
    <>
      <Header />
      <hr />
      <section>
        <div className="content-balance">
          <span>Total Balance</span>
          <p>100000</p>
          <select name="" id="">
            <option value="BRL">BRL</option>
            {Object.keys(currency).map((sigla) => <option key={sigla}>{sigla}</option>)}
          </select>
        </div>
        <div>
          <button
            type="button"
            className="btn-padrao btn-ladoalado btn-exit"
          >
            Depositar
          </button>
          <button
            type="button"
            className="btn-padrao btn-ladoalado"
          >
            Retirar
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Wallet;