import React, { useContext } from 'react';
import { CurrencyContext } from '../store/Currency/currency';
import CardCurrency from './CardCurrency';

function Currencys() {
  const { currency } = useContext(CurrencyContext);

  const renderCurrency = () => Object.keys(currency).map((curr, index) => (
    <CardCurrency key={curr} currency={Object.values(currency)[index]} />
  ));

  return <section>{renderCurrency()}</section>;
}

export default Currencys;
