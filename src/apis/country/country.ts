const BASE_URL = "https://restcountries.com/v3.1";

export const getCountries = async () => {
  const response = await fetch(`${BASE_URL}/all`);
  const data = await response.json();
  return data;
};
