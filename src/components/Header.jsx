import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

function Header() {
  return (
    <header className="header">
      <div className="content-logo">
        <span>TryWallet</span>
      </div>
      <GiHamburgerMenu className="icon-hamb" />
    </header>
  );
}

export default Header;