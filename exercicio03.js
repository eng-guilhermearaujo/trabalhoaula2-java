// Solicitar valores de consumo de energia de cada mes
let consumo1 = parseFloat(prompt("Digite o consumo do 1º mês (em kWh):"));
let consumo2 = parseFloat(prompt("Digite o consumo do 2º mês (em kWh):"));
let consumo3 = parseFloat(prompt("Digite o consumo do 3º mês (em kWh):"));
let consumo4 = parseFloat(prompt("Digite o consumo do 4º mês (em kWh):"));

//Calculado a media de consumo declarada 
let mediaConsumo = (consumo1 + consumo2 + consumo3 + consumo4) / 4;

// Verificando se média está dentro  da meta de 150 kWh por mes
let statusMeta = mediaConsumo <= 150 ? "Dentro da meta (<= 150 kWh)" : "Acima da meta (> 150 kWh)";

// Apresentacao de resultados
console.log("--- Exercício 3: Média de Consumo de Energia ---");
console.log(`Consumos informados: ${consumo1} kWh, ${consumo2} kWh, ${consumo3} kWh e ${consumo4} kWh`);
console.log(`Média de consumo mensal: ${mediaConsumo.toFixed(2)} kWh`);
console.log(`Situação da meta: ${statusMeta}`);