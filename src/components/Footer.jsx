import React from 'react';
import { AiFillSetting, AiFillHome } from 'react-icons/ai';

import { FaUserCircle } from 'react-icons/fa';

import './styles.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="content-footer">
        <FaUserCircle className="icons-footer" />
        <AiFillHome className="icons-footer" />
        <AiFillSetting className="icons-footer" />
      </div>
    </footer>
  );
}

export default Footer;