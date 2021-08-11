import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FaWallet, FaUserCircle } from 'react-icons/fa';

import './styles.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="content-footer">
        <Link to="/perfil">
          <FaUserCircle
            className="icons-footer"
          />
        </Link>
        <Link to="/">
          <AiFillHome className="icons-footer" />
        </Link>
        <Link to="wallet">
          <FaWallet className="icons-footer" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
