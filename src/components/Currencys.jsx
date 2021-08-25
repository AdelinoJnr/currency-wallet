import React, { useContext } from 'react';
import { CurrencyContext } from '../store/Currency/currency';

import CardCurrency from './CardCurrency';
import Loading from './Loading';

function Currencys() {
  const { currencyPopular } = useContext(CurrencyContext);

  const renderCurrencyCrypto = () => currencyPopular.map((currency) => (
    <CardCurrency key={Object.keys(currency)[0]} currency={currency} />
  ));

  return (
    <section>
      {currencyPopular.length > 0 ? renderCurrencyCrypto() : <Loading /> }
    </section>
  );
}

export default Currencys;
