import React, { useContext, useState } from 'react';

import { CurrencyContext } from '../../store/Currency/currency';
import { currencysNames } from '../../data';

import CardCurrency from '../CardCurrency';
import Loading from '../Loading';

import './style.css';

function Currencys() {
  const { currencyPopular, currencyCrypto } = useContext(CurrencyContext);
  const [nameFilter, setNameFilter] = useState('');

  const filteredOptions = currencyCrypto?.filter((c) => {
    const code = Object.keys(c)[0];
    return currencysNames[code].toLowerCase().includes(nameFilter);
  });

  const renderCurrencyPopular = () => currencyPopular.map((currency) => (
    <CardCurrency key={Object.keys(currency)[0]} currency={currency} />
  ));

  const renderFilteredCoins = () => filteredOptions.map((o) => {
    if (currencyPopular.length < 0) return <Loading />;
    return <CardCurrency key={Object.keys(o)[0]} currency={o} />;
  });

  return (
    <section>
      <div className="input-block">
        <input type="text" onChange={(e) => setNameFilter(e.target.value)} />
        <p>{ nameFilter.length > 0 ? nameFilter : 'Pesquisa por uma moeda' }</p>
      </div>
      <h3 className="title-3 title-currency">Cripto Moedas</h3>
      { nameFilter.length > 0 ? renderFilteredCoins() : renderCurrencyPopular() }
    </section>
  );
}

export default Currencys;
