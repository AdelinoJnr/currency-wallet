import React from 'react';
import { TiArrowLeftThick } from 'react-icons/ti';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function HeaderBack({ text, rota }) {
  return (
    <header className="headerback">
      <Link to={rota}>
        <TiArrowLeftThick className="icon-headerback" />
      </Link>
      <h3 className="text-headerback">{text}</h3>
      <GiHamburgerMenu className="icon-headerback" />
    </header>
  );
}

export default HeaderBack;
