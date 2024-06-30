export const createCountryCard = (
  { capital, country, flags: { png }, languageSpoken },
  parent
) => {
  var card = document.createElement("div");
  card.className = "countryCard";

  var countryImg = document.createElement("img");
  countryImg.src = png;
  countryImg.alt = "Avatar";
  countryImg.style.width = "100%";
  countryImg.className = "countryImg";

  var container = document.createElement("div");
  container.className = "countryContainer";

  var h3 = document.createElement("h3");
  var bold1 = document.createElement("b");
  bold1.appendChild(document.createTextNode(country));
  h3.appendChild(bold1);

  var h4 = document.createElement("h4");
  var bold = document.createElement("b");
  bold.appendChild(document.createTextNode(capital));
  h4.appendChild(bold);

  var p1 = document.createElement("p");
  p1.appendChild(document.createTextNode(languageSpoken));

  // Construct the structure
  container.appendChild(h3);
  container.appendChild(h4);
  container.appendChild(p1);

  card.appendChild(countryImg);
  card.appendChild(container);
  parent.appendChild(card);

  //   const card = document.createElement("div");
  //   const heading = createTextEl("h3", country);
  //   card.appendChild(heading);

  //   const paraCapital = createTextEl("p", capital);
  //   card.appendChild(paraCapital);

  //   const paraFlag = createTextEl("p", flag);
  //   card.appendChild(paraFlag);

  //   const imageFlag = document.createElement("img");

  //   // Laguage Spokes :[English,French]
  //   const paraLanguageSpoken = createTextEl("p", languageSpoken.join(", "));
  //   card.appendChild(paraLanguageSpoken);

  //   parent.appendChild(card);
};
