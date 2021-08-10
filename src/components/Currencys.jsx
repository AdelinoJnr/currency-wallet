import React, { useContext } from 'react';
import { CurrencyContext } from '../store/Currency/currency';

function Currencys(props) {
  const {
    currency,
  } = useContext(CurrencyContext);
  console.log(Object.values(currency));
  console.log(Object.keys(currency));
  return (
    <section>
      OLA
    </section>
  );
}

export default Currencys;