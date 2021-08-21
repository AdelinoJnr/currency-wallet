import React, { useContext } from 'react';
import { CurrencyContext } from '../store/Currency/currency';

import CardCurrency from './CardCurrency';
import Loading from './Loading';

function Currencys() {
  const { currencyCrypto, currencyPopular } = useContext(CurrencyContext);

  const renderCurrencyCrypto = () => 
  currencyPopular.map((currency, index) => (
      <CardCurrency key={index} currency={currency} />
    ));

  return (
    <section>
      {!currencyPopular ? <Loading /> : renderCurrencyCrypto()}
    </section>
  );
}

export default Currencys;

