const convert = () => {
  const converterInput = document.getElementById("converter__input");
  const converterInputType = document.getElementById("converter__inputType");
  const converterResultType = document.getElementById("converter__resultType");
  // Get user input values
  let inputValue = converterInput.value;
  let fromUnit = converterInputType.value;
  let toUnit = converterResultType.value;

  console.log("converting...");
  console.log("input value ", inputValue);
  // Define conversion factors
  const conversionFactors = {
    kilometers: {
      meters: 1000,
      centimeters: 100000,
    },
    meters: {
      kilometers: 0.001,
      centimeters: 100,
    },
    centimeters: {
      kilometers: 0.00001,
      meters: 0.01,
    },
  };

  // Perform conversion
  let result;
  if (fromUnit === toUnit) {
    result = inputValue; // No conversion needed if units are the same
  } else {
    result = inputValue * conversionFactors[fromUnit][toUnit];
  }
  console.log(result);
  const converterResult = document.getElementById("converter__result");

  converterResult.value = `${result}`;
};

export const createConverterApp = () => {
  const converterInput = document.getElementById("converter__input");

  const converterInputType = document.getElementById("converter__inputType");

  const converterResultType = document.getElementById("converter__resultType");

  converterInput.addEventListener("keyup", convert);
  converterInputType.addEventListener("change", convert);
  converterResultType.addEventListener("change", convert);
};
