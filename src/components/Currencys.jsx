import React, { useContext, useState } from 'react';
import Select from 'react-select';
import { currencysNames } from '../data';
import { CurrencyContext } from '../store/Currency/currency';

import CardCurrency from './CardCurrency';
import Loading from './Loading';

function Currencys() {
  const { currencyCrypto, currencyPopular } = useContext(CurrencyContext);
  const [ searchedCoins, setOtherCoins ] = useState([]);

  const options = currencyCrypto?.map((currency, index) => (
    {value: currency, label: `${currencysNames[Object.keys(currency)]} (${Object.keys(currencysNames)[index]})`}
  ));

  const renderCurrencyCrypto = () =>
  currencyPopular.map((currency, index) => (
      <CardCurrency key={index} currency={currency} />
    ));

  return (
    <section className="currencys-container">
      <Select
        className="coin-selector"
        isLoading={(!currencyCrypto) === true}
        onChange={(e) => setOtherCoins(searchedCoins.concat(e.value))}
        options={options}
      />
      { (searchedCoins.length) !== 0
        ? searchedCoins.map((coin, index) => (<CardCurrency key={index} currency={coin}/>))
        : <p className="coin-selector-tip-text">Procure por uma meoda específica no seletor acima</p>
      }
      <h1>Most Popular Coins</h1>
      {!currencyPopular ? <Loading /> : renderCurrencyCrypto()}
    </section>
  );
}

export default Currencys;

