import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Welcome from '../components/Welcome';

import { currencysNames } from '../data';
import { getCurrencyApiCryptoQuery } from '../services/requestApi';
import { currencyActivity, updateLocalStorage } from '../utils/functions';

function Detalhes({ match }) {
  const [currency, setCurrency] = useState(false);
  const [currentValue, setcurrentValue] = useState('');
  const { buy } = currency;
  const { id } = match.params;

  useEffect(() => {
    const fetchAPI = async () => {
      setTimeout(async () => {
        const data = await getCurrencyApiCryptoQuery(id);
        setCurrency(data.ticker);
      }, 2000);
    };
    fetchAPI();
  }, []);

  const renderValueToPayBRL = () => {
    const enteredValue = Number(currentValue);
    const currencyPrice = Number(buy);
    const result = enteredValue / currencyPrice;
    return (result).toFixed(7);
  };

  if (!currency) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <hr />
      <Welcome />
      <h3 className="title-login">Investir</h3>
      <section className="content-pay-currency">
        <h4 className="name-currency-detalhes">{currencysNames[id]}</h4>
        <div className="content-currency-detalhes">
          <p>{id}</p>
          <p>{Number(buy).toFixed(2)}</p>
        </div>
        <input
          onChange={(ev) => setcurrentValue(ev.target.value)}
          type="number"
          name="valorCurrency"
          value={currentValue}
          className="input-investir"
        />
        <div className="content-calculo">
          <p className="amount-to-pay">{`${renderValueToPayBRL()} ${id}`}</p>
        </div>
        <Link
          onClick={() => {
            currencyActivity(Number(currentValue), 'comprar');
            updateLocalStorage('investimentos', {
              code: id,
              buy,
              nome: currencysNames[id],
              currentValue,
              totalValue: renderValueToPayBRL(),
            });
          }}
          className="link-btn"
          to="/"
        >
          <button type="button" className="btn-padrao">Comprar</button>
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default Detalhes;
