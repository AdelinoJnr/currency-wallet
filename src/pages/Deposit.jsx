import React, { useState } from 'react';

import HeaderBack from '../components/HeaderBack';
import Footer from '../components/Footer';
import FormDeposit from '../components/FormDeposito';
import FormBoleto from '../components/FormBoleto';
import FormPix from '../components/FormPix';

function Deposit() {
  const [valueDeposit, setValueDeposit] = useState('');
  const [metodoPagement, setMetodoPagament] = useState('');

  const handleClick = ({ target: { innerHTML } }) => setMetodoPagament(innerHTML);

  const renderForm = () => {
    if (metodoPagement === 'Cartao') return <FormDeposit value={valueDeposit} />;
    if (metodoPagement === 'Boleto') return <FormBoleto value={valueDeposit} />;
    if (metodoPagement === 'Pix') return <FormPix value={valueDeposit} />;
  };

  return (
    <>
      <HeaderBack rota="/wallet" text="Depositar" />
      <section className="content-form-pagament">
        <div className="content-deposit">
          <p>Quanto deseja depositar ?</p>
          <input value={valueDeposit} onChange={(ev) => setValueDeposit(ev.target.value)} type="number" name="valueDeposito" id="valueDeposito" />
        </div>
        <div className="content-metodo-pagament">
          <h3 className="title-3">Metodo de pagamento</h3>
          <button onClick={handleClick} className="btn-cartao" type="button">Cartao</button>
          <button onClick={handleClick} className="btn-boleto" type="button">Boleto</button>
          <button onClick={handleClick} className="btn-pix" type="button">Pix</button>
        </div>
        {renderForm()}
      </section>
      <Footer />
    </>
  );
}

export default Deposit;
