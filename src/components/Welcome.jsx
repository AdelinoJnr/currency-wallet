import React from 'react';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';

function Welcome() {
  return (
    <section className="content-welcome">
      <p className="user-name">Bem vindo Neymar Junior</p>
      <div className="content-money">
        <RiMoneyDollarCircleFill className="icon-money" />
        <div className="content-money">
          <span className="money">0</span>
          <span className="sigla">BRL</span>
        </div>
      </div>
    </section>
  );
}

export default Welcome;