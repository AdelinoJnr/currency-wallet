import React from 'react';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';

import { userDefault } from '../data';

import Obama from '../image/barack_obama.jpg';

function Welcome() {
  const key = localStorage.getItem('user');
  const { name, elent } = key ? JSON.parse(key) : userDefault;
  return (
    <section className="content-welcome">
      <div className="content-user-profile">
        <img className="img-user" src={Obama} alt="Foto usuario" />
        <p className="user-name">{name}</p>
      </div>
      <div className="content-money">
        <RiMoneyDollarCircleFill className="icon-money" />
        <div className="content-money">
          <span className="money">{Number(elent).toFixed(2)}</span>
          <span className="sigla">BRL</span>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
