import React, { useContext, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Welcome from '../components/Welcome';
import Investimentos from '../components/Investimentos';

import { CurrencyContext } from '../store/Currency/currency';
import { calculateBalanceValues, converteInNumber } from '../utils/functions';

function Wallet() {
  const [totalBalance, setTotalBalance] = useState(0);
  const [lucro, setLucro] = useState(0);
  const { currency } = useContext(CurrencyContext);
  const key = localStorage.getItem('investimentos');

  useEffect(() => {
    const updateBalance = () => {
      const storage = key ? JSON.parse(key) : [];
      const lucroCurrent = storage.reduce((acc, curr) => {
        const inputCurrent = converteInNumber(curr.currentValue);
        const price = converteInNumber(currency[curr.code].ask);
        const totalPrice = inputCurrent * price;
        return acc + totalPrice;
      }, 0);
      const data = calculateBalanceValues('totalValue', storage);
      const calculate = data - lucroCurrent;
      const total = calculate >= 0 ? `+${calculate.toFixed(2)}` : calculate.toFixed(2); 
      setLucro(total);
      setTotalBalance(data.toFixed(2));
    };
    updateBalance();
  }, []);

  const renderInvestments = () => {
    const storage = key ? JSON.parse(key) : [];
    return (
      <section className="main-investimentos">
        {storage.map((item, index)=> <Investimentos key={ index } investiment={item} currency={currency} />)}
      </section>
    );
  };

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
          <span>{lucro}</span>
          <p>{`${totalBalance} BRL`}</p>
        </div>
      {renderInvestments()}
      </section>
      <Footer />
    </>
  );
}

export default Wallet;
