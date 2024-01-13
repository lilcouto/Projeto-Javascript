/*dobrar números//
function calculardobro(num) {
    const dobro = num * 2;
    return dobro;
}
const resultado = calculardobro(5);
console.log(resultado);

//separador de informações//
function informações() {
    const nome = prompt("digite eu nome");
    const paisL = prompt("digite seu local de origem");
    const idade = parseInt(prompt("digite sua idade"));
    return { nome, paisL, idade };
}
const recebendoinformaçoes = informações();
console.log(recebendoinformaçoes);
//calculadora de IMC//
function calculadoraIMC() {
    const peso = parseFloat(prompt("digite seu peso Ex:69.5"));
    const altura = parseFloat(prompt("digite sua altura Ex:1.70"));
    const calculoIMC = peso / (altura * altura);
    if (calculoIMC >= 18.5 && calculoIMC <= 24.9) {
        alert("Você está no peso ideal, Parabéns!");
    } else {
        alert(
            "Você não está no seu peso ideal, procure a ajuda de um profissional :)"
        );
    }
    console.log(
        "IMC é a sigla para Índice de Massa Corpórea,parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa. O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9."
    );
    console.log("Seu IMC é " + calculoIMC);
}

calculadoraIMC();*/

//for
const valorTotal = prompt("Digite o valor total do produto");
const numeroDeParcelas = prompt("Digite a quantidade de parcelas");
const total = parseInt(valorTotal);
const parcelas = parseInt(numeroDeParcelas);

if (!isNaN(parcelas) && parcelas > 0) {
  const calculo = total / parcelas;
  for (let i = 1; i <= parcelas; i++) {
    console.log("O valor da parcela " + i + " é: R$ " + calculo);
  }
} else {
  console.log("Insira um valor válido");
}

    
