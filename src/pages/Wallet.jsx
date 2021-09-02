import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    const result = Number(lucroCurrent).toFixed(2);
    const calculate = Number(result) - data;
    /* const total = calculate >= 0 ? `+ RS ${calculate.toFixed(2)}` : calculate.toFixed(2); */
    setLucro(calculate);
    setTotalBalance(data.toFixed(2));
  };

  const renderLucro = (number) => {
    if (number < 0) {
      return (
        <span className="valor-negativo">{`- R$ ${Math.abs(number.toFixed(2))}`}</span>
      );
    }
    return (
      <span className="valor-positivo">{`+ R$ ${number.toFixed(2)}`}</span>
    );
  };

  useEffect(() => {
    updateBalance();
  }, []);

  const renderInvestments = () => (
    <section className="main-investimentos">
      {storage.map((item) => <Investimentos key={item.code} investiment={item} />)}
    </section>
  );

  if (!currencyCrypto) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <hr />
      <Welcome />
      <div className="content-btn-atividades-user">
        <Link to="/depositar">
          <button type="button" className="btn-metade btn-depositar">
            Depositar
          </button>
        </Link>
        <Link to="/saque">
          <button type="button" className="btn-metade btn-sacar">
            Retirar
          </button>
        </Link>
      </div>

      <section>
        <div className="content-balance">
          <div>
            <p>Total Investimentos</p>
            <span className="total-investiments">{totalBalance}</span>
          </div>
          <div>
            <p>Lucro total</p>
            {renderLucro(lucro)}
          </div>
        </div>

        <h3 className="title-3 title-investimentos">Meus investimentos</h3>
        {renderInvestments()}
      </section>
      <Footer />
    </>
  );
}

export default Wallet;
