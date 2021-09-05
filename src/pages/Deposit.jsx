import React, { useState } from 'react';

import HeaderBack from '../components/HeaderBack';
import Footer from '../components/Footer';
import FormDeposit from '../components/FormDeposito';
import FormBoleto from '../components/FormBoleto';
import FormPix from '../components/FormPix';
import MetodoPagemento from '../components/MetotoPagamento/indes';

function Deposit() {
  const [valueDeposit, setValueDeposit] = useState('');
  const [metodoPagement, setMetodoPagament] = useState('');

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
        <MetodoPagemento setMetodoPagament={setMetodoPagament} />
        {renderForm()}
      </section>
      <Footer />
    </>
  );
}

export default Deposit;
