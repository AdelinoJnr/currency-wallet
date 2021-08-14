import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Welcome from '../components/Welcome';

import { getCurrencyApiQuery } from '../services/requestApi';
import { updateLocalStorage } from '../utils/functions';

function Detalhes({ match }) {
  const [currency, setCurrency] = useState(false);
  const [currentValue, setcurrentValue] = useState('')
  const { name, ask, code } = currency;

  useEffect(() => {
    const fetchAPI = async () => {
      const { id } = match.params;
      const data = await getCurrencyApiQuery(id);
      setCurrency(data[0])
    };
    fetchAPI();
  }, []);

  const renderValueToPay = () => {
    const enteredValue = Number(currentValue);
    const currencyPrice = Number(ask);
    return (enteredValue * currencyPrice).toFixed(2);
  };

  if (!currency) {
    return <Loading />
  }

  return (
    <>
      <Header />
      <hr />
      <Welcome />
      <h3 className="title-login">Investir</h3>
      <section className="content-pay-currency">
        <h4 className="name-currency-detalhes">{name.split('/')[0]}</h4>
        <div className="content-currency-detalhes">
          <p>{code}</p>
          <p>{Number(ask).toFixed(2)}</p>
        </div>
        <input
          onChange={ (ev) => setcurrentValue(ev.target.value) }
          type="number"
          name="valorCurrency"
          value={currentValue}
          className="input-investir"
        />
        <div className="content-calculo">
          <p className="amount-to-pay">{`BRL ${renderValueToPay()}`}</p>
        </div>
        <Link
          onClick={ () => updateLocalStorage('investimentos', {
            code,
            ask,
            name,
            currentValue,
            totalValue: renderValueToPay()
          }) }
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