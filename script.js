//Capturar entradas por meio de prompt().
//Declarar variáveis, objetos e arrays necessários para simular o processo selecionado.
//Criar funções e/ou métodos para realizar operações (soma, subtração, concatenação, divisão, porcentagem, etc.).
//Efetuar uma saída, que é o resultado dos dados processados, por alert() ou console.log().
let carrinhoCompras = [];

function adicionarCarrinho() {
  let nomeItem = prompt("Digite o nome do item:");
  let quantidadeItem = parseInt(prompt("Digite a quantidade do item:"));
  let precoItem = parseFloat(prompt("Digite o preço do item:"));

  let novoItem = {
    nome: nomeItem,
    quantidade: quantidadeItem,
    preco: precoItem,
  };

  carrinhoCompras.push(novoItem);

  console.log(nomeItem + " foi adicionado ao carrinho.");
}

let adicionarMaisItens = true;

while (adicionarMaisItens) {
  adicionarCarrinho();
  adicionarMaisItens = prompt("Deseja adicionar mais um item ao carrinho? (Digite 'sim' ou 'não')").toLowerCase() === 'sim';
}

console.log("Conteúdo final do carrinho: ", carrinhoCompras);

