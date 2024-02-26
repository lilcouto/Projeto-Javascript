let produtos = [
  {
    id: 1,
    imagem: 'assets/img/buffalo-trace-bourbon-750-ml_1_250.webp',
    nome: 'Whisky Buffalo Trace Bourbon 750 ml',
    preco: 130,
    pagina: 'projeto_bebidas/Whisky_Buffalo_Trace_Bourbon/whisky.html',
  },
  {
    id: 2,
    imagem: 'assets/img/espumante-cava-freixenet-carta-nevada-semi-seco_1_250.webp',
    nome: 'Espumante Cava Freixenet Carta Nevada 750 ml',
    preco: 60,
    pagina: 'projeto_bebidas/Espumante_Cava_Freixenet_Carta_Nevada/espumante.html'
  },
  {
    id: 3,
    imagem: 'assets/img/johnnie-walker-red-label-500-ml_1_250.webp',
    nome: 'Johnnie Walker Red Label 500 ml',
    preco: 45,
    pagina: 'projeto_bebidas/Johnnie_Walker_Red_Label/redlabel.html'
  },
  {
    id: 4,
    imagem: 'assets/img/vietti-barolo-castiglione-750-ml_1_250.webp',
    nome: 'Vinho Vietti Barolo Castiglione 750 ml',
    preco: 750,
    pagina: 'projeto_bebidas/Vinho_Vietti_Barolo_Castiglione/vinho.html'
  },
  {
    id: 5,
    imagem: 'assets/img/vinhopenfolds-koonunga-hill-shiraz-750-ml_1_250.webp',
    nome: 'Vinho Penfolds Koonunga Hill Shiraz 750 ml',
    preco: 250,
    pagina: 'projeto_bebidas/Vinho_Penfolds_Koonunga_Hill_Shiraz/penfolds.html'
  },
  {
    id: 6,
    imagem: 'assets/img/whisky-chivas-royal-salute-21-anos_1_250.webp',
    nome: 'Whisky Chivas Royal Salute 21 anos Azul 700 ml',
    preco: 820,
  },
  {
    id: 7,
    imagem: 'assets/img/whisky-jack-daniels-honey_1_250.webp',
    nome: 'Whisky Jack Daniels Honey 1000 ml',
    preco: 120,
  },
  {
    id: 8,
    imagem: 'assets/img/whisky-johnnie-walker-double-black_1_250.webp',
    nome: 'Whisky Johnnie Walker Double Black 1000 ml',
    preco: 170,
  },
  {
    id: 9,
    imagem: 'assets/img/whisky-gentleman-jack_1_250.webp',
    nome: 'Whisky Gentleman Jack 1000 ml',
    preco: 160,
  },
  {
    id: 10,
    imagem: 'assets/img/rose-piscine-paris-750-ml_1_250.webp',
    nome: 'Vinho Rosé Piscine Paris 750 ml',
    preco: 80,
  }
];

const categories = [...new Set(produtos.map((item) => { return item }))]
let i = 0;
document.getElementById('loja').innerHTML = categories.map((item) => {
  var { imagem, nome, preco, pagina } = item;
  return (
    `<div class='product'>
        <a href=${pagina}><img src=${imagem}></a>
        <p>${nome}</p>
        <h2>R$ ${preco},00</h2>` +
    "<button onclick='addtocart(" + (i++) + ")'>Comprar</button>" +
    `</div>
        </div>`
  )
}).join('')

var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  saveCartToSessionStorage();
  displaycart();
}
function delElement(a) {
  cart.splice(a, 1);
  saveCartToSessionStorage();
  displaycart();
}
function saveCartToSessionStorage() {
  sessionStorage.setItem('cart', JSON.stringify(cart));
}
function displaycart() {
  let j = 0, total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById('cartItem').innerHTML = "Seu carrinho está vazio";
    document.getElementById("total").innerHTML = "R$ " + 0 + ",00";
  }
  else {
    document.getElementById("cartItem").innerHTML = cart.map((items) => {
      var { imagem, nome, preco } = items;
      total = total + preco;
      document.getElementById("total").innerHTML = "R$ " + total + ",00";
      return (
        `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${imagem}>
                </div>
                <p style='font-size:12px;'>${nome}</p>
                <h2 style='font-size: 15px;'>R$ ${preco},00</h2>` +
        "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
      );
    }).join('');
  }
}
window.onload = function () {
  const savedCart = sessionStorage.getItem('cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    displaycart();
  }
};