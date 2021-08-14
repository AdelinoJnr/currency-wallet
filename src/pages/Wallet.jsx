import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Welcome from '../components/Welcome';

import { CurrencyContext } from '../store/Currency/currency';

function Wallet() {
  const { currency } = useContext(CurrencyContext);

  if (!currency) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <hr />
      <Welcome />
      <h3 className="title-login">Carteira</h3>
      <div>
        <button type="button" className="btn-padrao btn-ladoalado btn-exit">
          Depositar
        </button>
        <button type="button" className="btn-padrao btn-ladoalado">
          Retirar
        </button>
      </div>
      <section>
        <div className="content-balance">
          <span>Total Balance</span>
          <p>100000</p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Wallet;
