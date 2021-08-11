import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Currencys from '../components/Currencys';

import { CurrencyContext } from '../store/Currency/currency';

function Home() {
  const {
    currency,
  } = useContext(CurrencyContext);

  if (!currency) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <hr />
      <Welcome />
      <Currencys />
      <Footer />
    </>
  );
}

export default Home;
