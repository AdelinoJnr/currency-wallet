import React, { useEffect, useState } from 'react';
import HeaderBack from '../components/HeaderBack';
import Footer from '../components/Footer';

import './styles.css';
import {
  getHistoric, historyCompras, historyDeposito, historySaque, historyVendas,
} from '../utils/historic';

function History() {
  const [history, setHistory] = useState();

  useEffect(() => {
    const { userId } = JSON.parse(localStorage.getItem('user'));
    const {
      compras, deposito, saque, vendas,
    } = getHistoric(userId);
    const historyUser = [...compras, ...deposito, ...saque, ...vendas]
      .sort((a, b) => b.registerDate - a.registerDate);
    setHistory(historyUser);
  }, []);

  const renderHistory = (atividade, index) => {
    if (atividade.type === 'deposito') return <p key={index}>{historyDeposito(atividade)}</p>;
    if (atividade.type === 'saque') return <p key={index}>{historySaque(atividade)}</p>;
    if (atividade.type === 'compras') return <p key={index}>{historyCompras(atividade)}</p>;
    if (atividade.type === 'vendas') return <p key={index}>{historyVendas(atividade)}</p>;
  };

  console.log(history);
  return (
    <div>
      <HeaderBack text="Historico" rota="/perfil" />
      <h3 className="title-3 title-history">Atividades</h3>
      <div className="content-history">
        {history && history.map((atividade, index) => renderHistory(atividade, index))}
      </div>
      <Footer />
    </div>
  );
}

export default History;
