import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import HeaderBack from '../components/HeaderBack';
import Loading from '../components/Loading';

import { currencysNames } from '../data';
import { getCurrencyApiCryptoQuery } from '../services/requestApi';
import { updateBuyAndSaque } from '../utils/historic';

import './styles.css';

function Detalhes({ match }) {
  const [currency, setCurrency] = useState(false);
  const [currentValue, setcurrentValue] = useState('');
  const { buy } = currency;
  const { id } = match.params;

  const { userId } = JSON.parse(localStorage.getItem('user'));

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
      <HeaderBack text="Investir" rota="/" />
      <section className="content-pay-currency">
        <div className="content-currency-detalhes">
          <h4 className="title-3">{`${currencysNames[id]} - ${id}`}</h4>
          <p>{`R$ ${Number(buy).toFixed(2)}`}</p>
        </div>

        <label htmlFor="valorCurrency" className="label-quant-investir">
          <p>Quanto deseja investir ?</p>
          <input
            onChange={(ev) => setcurrentValue(ev.target.value)}
            type="number"
            name="valorCurrency"
            id="valorCurrency"
            value={currentValue}
            className="input-investir"
          />
        </label>

        <div className="content-calculo">
          <span>Valor convertido</span>
          <p>{`${id} ${renderValueToPayBRL()}`}</p>
        </div>

        <Link className="link-btn" to="/">
          <button
            onClick={() => {
              updateBuyAndSaque(userId, {
                value: Number(currentValue),
                code: id,
                buy: Number(buy),
                totalCurrency: renderValueToPayBRL(),
              }, 'compras');
            }}
            disabled={currentValue === ''}
            type="button"
            className="btn-acao btn-comprar"
          >
            Comprar
          </button>
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default Detalhes;
