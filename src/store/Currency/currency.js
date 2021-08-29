import React, { createContext, useState, useEffect } from 'react';
import { getCurrencyApiCrypto, getCurrencyCryptoPopular } from '../../services/requestApi';

export const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
  const [currencyCrypto, setCurrencyCrypto] = useState();
  const [currencyPopular, setCurrencyPopular] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCurrencyApiCrypto();
      setCurrencyCrypto(data);
    };
    fetchApi();
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      setTimeout(async () => {
        const data = await getCurrencyCryptoPopular();
        setCurrencyPopular(data);
      }, 2000);
    };
    fetchApi();
  }, []);

  return (
    <CurrencyContext.Provider value={{ currencyPopular, currencyCrypto }}>
      {children}
    </CurrencyContext.Provider>
  );
}
