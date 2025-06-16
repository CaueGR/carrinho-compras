let total = 0;
limpar();

function adicionar(){
//recuperar valores nome do produto, quantidade e valor
let produto = document.getElementById('produto').value;
let quantidade = document.getElementById('quantidade').value;

if(!produto || produto.trim() === ""){
    alert("Selecione um produto válido.");
    return;
}
if(isNaN(quantidade) || quantidade <= 0){
    alert("Insira uma quantidade válida.");
    return;
}

let nomeProduto = produto.split('-')[0];
let valorUnitario = produto.split('R$')[1];

//calcular o preco

let preco = quantidade * valorUnitario;


//adicionar no carrinho
let carrinho = document.getElementById('lista-produtos');
carrinho.innerHTML = carrinho.innerHTML + ` <section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${preco}</span>;
        </section>
      </section>`
//atualizar o valor total
total += preco;
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `R$ ${total}`;
document.getElementById('quantidade').value = 0;

}

function limpar(){
 total = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';
}
