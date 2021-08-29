import React, { useContext, useEffect, useState } from 'react';
import Select from 'react-select';
import { currencysNames } from '../data';
import { CurrencyContext } from '../store/Currency/currency';

import CardCurrency from './CardCurrency';
import Loading from './Loading';

function Currencys() {
  const { currencyCrypto, currencyPopular } = useContext(CurrencyContext);
  const [ searchedCoins, setOtherCoins ] = useState([]);
  const [ options, setOptions ] = useState([]);

  useEffect(() => {
    const serializedOptions = currencyCrypto?.map((currency, index) => (
      {value: currency, label: `${currencysNames[Object.keys(currency)]} (${Object.keys(currencysNames)[index]})`}
    ));

    setOptions(serializedOptions);
  }, [currencyCrypto]);

  useEffect(() => {
    const lastIndex = searchedCoins.length - 1;
    const lastSearchedCoin = (searchedCoins.length > 0)
      ? Object.keys(searchedCoins[lastIndex])[0]
      : ""

    const filteredOptions = options.filter(({value}) => {
      return Object.keys(value)[0] !== lastSearchedCoin;
    })

    setOptions(filteredOptions);
  }, [searchedCoins]);

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

      {!currencyPopular ? <Loading /> : (
        (searchedCoins.length > 0) ? "" : renderCurrencyCrypto()
      )}
    </section>
  );
}

export default Currencys;
