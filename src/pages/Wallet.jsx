import React, { useContext, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Welcome from '../components/Welcome';
import Investimentos from '../components/Investimentos';

import { CurrencyContext } from '../store/Currency/currency';
import { calculateBalanceValues, converteInNumber } from '../utils/functions';
import { Link } from 'react-router-dom';

function Wallet() {
  const [totalBalance, setTotalBalance] = useState(0);
  const [lucro, setLucro] = useState(0);
  const { currencyCrypto } = useContext(CurrencyContext);
  const key = localStorage.getItem('investimentos');
  const storage = key ? JSON.parse(key) : [];

  const updateBalance = () => {
    const lucroCurrent = storage.reduce((acc, curr) => {
      const inputCurrent = converteInNumber(curr.totalValue);
      const searchCurrency = currencyCrypto
        .find((currency) => Object.keys(currency)[0] === curr.code);
      console.log(searchCurrency);
      const price = searchCurrency[curr.code].sell;
      const totalPrice = inputCurrent * price;
      return acc + totalPrice;
    }, 0);
    const data = calculateBalanceValues(storage);
    const result = Number(lucroCurrent).toFixed(2)
    const calculate = Number(result) - data;
    const total = calculate >= 0 ? `+${calculate.toFixed(2)}` : calculate.toFixed(2); 
    setLucro(total);
    setTotalBalance(data.toFixed(2));
  };

  useEffect(() => {
    updateBalance();
  }, []);

  const renderInvestments = () => {
    const storage = key ? JSON.parse(key) : [];
    return (
      <section className="main-investimentos">
        {storage.map((item, index)=> <Investimentos key={ index } investiment={item} />)}
      </section>
    );
  };

  if (!currencyCrypto) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <hr />
      <Welcome />
      <h3 className="title-login">Carteira</h3>
      <div>
        <Link to="/depositar">
          <button type="button" className="btn-padrao btn-ladoalado btn-exit">
            Depositar
          </button>
        </Link>
        <Link to="/saque">
          <button type="button" className="btn-padrao btn-ladoalado">
            Retirar
          </button>
        </Link>
      </div>
      <section>
        <div className="content-balance">
          <span>Total Balance</span>
          <span>{`${lucro} BRL`}</span>
          <p>{`${totalBalance} BRL`}</p>
        </div>
      {renderInvestments()}
      </section>
      <Footer />
    </>
  );
}

export default Wallet;
