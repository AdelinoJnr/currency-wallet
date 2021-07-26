import React, { useEffect, useState } from 'react';

import { getCurrencyApi } from '../services/requestApi';

function Wallet() {
  const [currency, setCurrency] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCurrencyApi();
      setCurrency(data);
    };
    fetchApi();
  }, [])
  console.log(currency);
  return (
    <div>
      Carteira
    </div>
  );
}

export default Wallet;