export const getCurrencyApi = async () => {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await request.json();
  return data;
};

export const getCurrencyApiQuery = async (query) => {
  const request = await fetch(`https://economia.awesomeapi.com.br/json/${query}`);
  const data = await request.json();
  return data;
};
