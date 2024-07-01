const COUNTRY_URL = "https://restcountries.com/v3.1";

export const getCountryOfficialName = async (nameOfCountry) => {
  const response = await fetch(`${COUNTRY_URL}/name/${nameOfCountry}`);
  // console.log(response, "response");

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();
  // console.log(data);

  const dataResponse = data[0];

  console.log("dataResponse", dataResponse);

  const {
    capital,
    flags,
    languages,
    name: { common },
  } = dataResponse;

  console.log(capital[0]);
  const languageSpoken = Object.values(languages);
  const cleanedData = {
    flags,
    capital: capital[0],
    languageSpoken,
    country: common,
  };
  console.log(cleanedData);
  return cleanedData;
};
