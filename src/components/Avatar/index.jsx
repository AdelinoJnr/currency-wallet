import React from 'react';
import avatar1 from '../../image/avatar1.png';
import avatar2 from '../../image/avatar2.png';
import avatar3 from '../../image/avatar3.png';
import avatar4 from '../../image/avatar4.png';
import avatar5 from '../../image/avatar5.png';
import avatar6 from '../../image/avatar6.png';

import './style.css';

function Avatar() {
  return (
    <section className="content-avatares">
      <h3 className="title-3">Escolha o seu Avatar</h3>
      <img src={avatar1} alt="avatar1" />
      <img src={avatar2} alt="avatar2" />
      <img src={avatar3} alt="avatar3" />
      <img src={avatar4} alt="avatar4" />
      <img src={avatar5} alt="avatar5" />
      <img src={avatar6} alt="avatar6" />
    </section>
  );
}

export default Avatar;
