function convert() {
    const value = parseFloat(document.getElementById("value").value);
    const unitFrom = document.getElementById("unitFrom").value;
    const unitTo = document.getElementById("unitTo").value;
    const resultElement = document.getElementById("result");
  
    if (isNaN(value) || value < 0) {
      resultElement.innerText = "Por favor, insira um valor válido maior ou igual a zero.";
      return;
    }
  
    const conversionFactors = {
      km: 1000,  // 1 km = 1000 m
      m: 1,      // 1 m = 1 m
      cm: 0.01   // 1 cm = 0.01 m
    };
  
    if (!(unitFrom in conversionFactors) || !(unitTo in conversionFactors)) {
      resultElement.innerText = "Unidade inválida selecionada.";
      return;
    }
  
    const meters = value * conversionFactors[unitFrom];
    const convertedValue = meters / conversionFactors[unitTo];
  
    const formattedValue = new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: convertedValue % 1 === 0 ? 0 : 2,
      maximumFractionDigits: 2
    }).format(convertedValue);
  
    resultElement.innerText = `${value} ${unitFrom} = ${formattedValue} ${unitTo}`;
  }
  
