import React from 'react';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import Obama from '../image/barack_obama.jpg';

function Welcome() {
  return (
    <section className="content-welcome">
      <div className="content-user-profile">
        <img className="img-user" src={Obama} alt="Foto usuario" />
        <p className="user-name">Barack Obama</p>
      </div>
      <div className="content-money">
        <RiMoneyDollarCircleFill className="icon-money" />
        <div className="content-money">
          <span className="money">2937000</span>
          <span className="sigla">BRL</span>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
