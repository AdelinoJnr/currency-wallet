import { createContext, useState, useEffect } from 'react';
import { getCurrencyApi } from '../../services/requestApi';

export const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState(false);

  useEffect(() => {
    const fetchApi = () => {
      setTimeout(async () => {
        const data = await getCurrencyApi();
        setCurrency(data);
      }, 3000);
    };
    fetchApi();
  }, []);
  return (
    <CurrencyContext.Provider value={{ currency }}>
      {children}
    </CurrencyContext.Provider>
  );
}
