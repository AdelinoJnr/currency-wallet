import React from 'react';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';

import { userDefault, avatars } from '../../data';

import './style.css';

function Welcome() {
  const key = localStorage.getItem('user');
  const { name, balance, avatar } = key ? JSON.parse(key) : userDefault;

  return (
    <section className="content-welcome">
      <div className="content-user-profile">
        <img className="img-user" src={avatars[avatar]} alt="Avatar" />
        <p className="user-name">{name}</p>
      </div>
      <div className="content-money">
        <RiMoneyDollarCircleFill className="icon-money" />
        <div className="content-money-balance">
          <span className="money">{`R$ ${Number(balance).toFixed(2)}`}</span>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
