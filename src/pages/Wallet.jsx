import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Welcome from '../components/Welcome';
import Investimentos from '../components/Investimentos';

import { CurrencyContext } from '../store/Currency/currency';
import { getHistoryBuys } from '../utils/historic';

function Wallet() {
  const [totalBalance, setTotalBalance] = useState(0);
  const [lucro, setLucro] = useState(0);
  const { currencyCrypto } = useContext(CurrencyContext);
  const { userId } = JSON.parse(localStorage.getItem('user'));

  const sumTotalBuys = () => {
    const history = getHistoryBuys(userId).compras;
    const value = history.reduce((acc, curr) => acc + Number(curr.value), 0);
    setTotalBalance(value);
  };

  const sumLucroBuys = () => {
    const history = getHistoryBuys(userId).compras;
    const value = history.reduce((acc, curr) => {
      const find = currencyCrypto.find((e) => Object.keys(e)[0] === curr.code);
      const calculate = Number(curr.totalCurrency) * Number(find[curr.code].buy);
      const result = Number(calculate) - Number(curr.value);
      return acc + Number(result);
    }, 0);
    setLucro(value);
  };

  useEffect(() => {
    sumTotalBuys();
    sumLucroBuys();
  }, []);

  const renderLucro = (number) => {
    if (number < 0) {
      return (
        <span className="valor-negativo">{`- R$ ${Math.abs(number.toFixed(2))}`}</span>
      );
    }
    return (
      <span className="valor-positivo">{`+ R$ ${number.toFixed(2)}`}</span>
    );
  };

  const renderInvestments = () => (
    <section className="main-investimentos">
      {getHistoryBuys(userId).compras
        .map((item) => <Investimentos key={item.code} investiment={item} />)}
    </section>
  );

  if (!currencyCrypto) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <Welcome />
      <div className="content-btn-atividades-user">
        <Link to="/depositar">
          <button type="button" className="btn-metade btn-depositar">
            Depositar
          </button>
        </Link>
        <Link to="/saque">
          <button type="button" className="btn-metade btn-sacar">
            Retirar
          </button>
        </Link>
      </div>

      <section>
        <div className="content-balance">
          <div>
            <p>Total Investimentos</p>
            <span className="total-investiments">{`R$ ${totalBalance.toFixed(2)}`}</span>
          </div>
          <div>
            <p>Lucro total</p>
            {renderLucro(lucro)}
          </div>
        </div>

        <h3 className="title-3 title-investimentos">Meus investimentos</h3>
        {renderInvestments()}
      </section>
      <Footer />
    </>
  );
}

export default Wallet;
