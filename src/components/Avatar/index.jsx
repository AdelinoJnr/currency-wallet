import React from 'react';
import avatar1 from '../../image/avatar1.png';
import avatar2 from '../../image/avatar2.png';
import avatar3 from '../../image/avatar3.png';
import avatar4 from '../../image/avatar4.png';
import avatar5 from '../../image/avatar5.png';
import avatar6 from '../../image/avatar6.png';

import './style.css';

function Avatar({ setAvatar }) {
  const handleChangeAvatar = ({ target: { nextElementSibling: { alt } } }) => {
    setAvatar(alt);
  };

  return (
    <section className="content-avatares">
      <h3 className="title-3">Escolha o seu Avatar</h3>
      <label htmlFor="avatar1">
        <input
          onChange={handleChangeAvatar}
          className="radio-input"
          type="radio"
          name="avatar"
          id="avatar1"
        />
        <img src={avatar1} alt="avatar1" />
      </label>
      <label htmlFor="avatar2">
        <input
          onChange={handleChangeAvatar}
          className="radio-input"
          type="radio"
          name="avatar"
          id="avatar2"
        />
        <img src={avatar2} alt="avatar2" />
      </label>
      <label htmlFor="avatar3">
        <input
          onChange={handleChangeAvatar}
          className="radio-input"
          type="radio"
          name="avatar"
          id="avatar3"
        />
        <img src={avatar3} alt="avatar3" />
      </label>
      <label htmlFor="avatar4">
        <input
          onChange={handleChangeAvatar}
          className="radio-input"
          type="radio"
          name="avatar"
          id="avatar4"
        />
        <img src={avatar4} alt="avatar4" />
      </label>
      <label htmlFor="avatar5">
        <input
          onChange={handleChangeAvatar}
          className="radio-input"
          type="radio"
          name="avatar"
          id="avatar5"
        />
        <img src={avatar5} alt="avatar5" />
      </label>
      <label htmlFor="avatar6">
        <input
          onChange={handleChangeAvatar}
          className="radio-input"
          type="radio"
          name="avatar"
          id="avatar6"
        />
        <img src={avatar6} alt="avatar6" />
      </label>
    </section>
  );
}

export default Avatar;
