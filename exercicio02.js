// Solicitar valores de vendas de cada semana
let venda1 = parseFloat(prompt("Digite o valor das vendas da 1ª semana:"));
let venda2 = parseFloat(prompt("Digite o valor das vendas da 2ª semana:"));
let venda3 = parseFloat(prompt("Digite o valor das vendas da 3ª semana:"));
let venda4 = parseFloat(prompt("Digite o valor das vendas da 4ª semana:"));

// Calcular a media semanal de vendas
let mediaVendas = (venda1 + venda2 + venda3 + venda4) / 4;

// Apresentar os valores informados e a média formatada com duas casas decimais (toFixed)
console.log("--- Exercício 2: Média de Vendas ---");
console.log(`Vendas semanais informadas: R$ ${venda1.toFixed(2)}, R$ ${venda2.toFixed(2)}, R$ ${venda3.toFixed(2)}, R$ ${venda4.toFixed(2)}`);
console.log(`Média semanal de vendas: R$ ${mediaVendas.toFixed(2)}`);