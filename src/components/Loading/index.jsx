import React from 'react';
import GifGoku from '../../image/goku-correndo.gif';

import './style.css';

function Loading() {
  return (
    <section>
      <img className="img-gif-loading" src={GifGoku} alt="Loading" />
    </section>
  );
}

export default Loading;
