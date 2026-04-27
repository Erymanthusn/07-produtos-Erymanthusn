'use strict'

import { listaProdutos } from './produtos.js'

function criarCardDoProduto(produto) {
    const cartao = document.createElement('div')
    cartao.classList.add('cartao-produto')

    cartao.innerHTML = `
        <img src="./img/${produto.imagem}" alt="Foto do produto ${produto.nome}">
        <h2>${produto.nome}</h2>
        <span class="preco-do-produto">R$ ${produto.preco.toFixed(2).replace('.', ',')}</span>
        <p>${produto.descricao}</p>
        <div class="caixa-de-estrelas">
            <div class="estrelas-coloridas" style="width: ${produto.classificacao * 20}%">
                <span>★★★★★</span>
            </div>
            <div class="estrelas-apagadas">
                <span>★★★★★</span>
            </div>
        </div>
    `

    return cartao
}

const todosOsCards = listaProdutos.map(criarCardDoProduto)

document.getElementById('container').replaceChildren(...todosOsCards)