import { getCountryOfficialName } from "./data.js";
import { createCountryCard } from "./dom-utils.js";

export const createCountriesApp = () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    document.querySelector("#countryDetails").innerHTML = "";

    const nameOfCountry = document.querySelector("input").value;
    console.log(nameOfCountry);
    document.querySelector("#wait").innerText = "Fetching data...";

    try {
      const country = await getCountryOfficialName(nameOfCountry);

      createCountryCard(country, document.querySelector("#countryDetails"));
    } catch (e) {
      const errorP = document.createElement("p");
      const errorText = document.createTextNode(e.message);
      errorP.appendChild(errorText);
      document.querySelector("#countryDetails").appendChild(errorP);
    } finally {
      document.querySelector("#wait").innerText = "";
      form.reset();
    }
  });
};
