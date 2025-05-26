let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")
let botao = document.querySelector(".botao-carrinho")
// document = html
// querySelector = pegador / selecionador

function mudarVisual(cor, imagem){
    tenis.classList.add("troca-efeito")
    
    body.style.background = cor
    
    botao.style.background = cor
    
    // contador de tempo
    setTimeout(() => {
        tenis.src = imagem
        tenis.classList.remove("troca-efeito")
    }, 500);

    // 1000 milisegundos = 1segundo
}

