// Seleciona todos os botões com a classe 'meuBotao'
var botoes = document.querySelector('.btn');
var card = document.querySelector('.card');
const criptografar = document.querySelector('.btn_cripto');
const descriptografar = document.querySelector('.btn_descripto');
const copiar = document.querySelector('.btn_copiar');


// Adiciona um ouvinte de evento de clique para cada botão encontrado
for (var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener('click', function() {
        // Verifica se o botão já possui a classe 'botao-clique'
        var estaClicado = this.classList.contains('botao-clique');
        
        // Se já estiver clicado, remove a classe 'botao-clique' e restaura para a cor original
        if (estaClicado) {
            this.classList.remove('botao-clique');
            this.style.backgroundColor = 'transparent';
            this.style.color = '#0a3871';
        } else {
            // Se não estiver clicado, adiciona a classe 'botao-clique' e aplica a cor alterada
            this.classList.add('botao-clique');
            this.style.backgroundColor = '#082d5b';
            this.style.color = 'white';
        }
    });
}

function btnCripto(){
    const caixa_texto = document.querySelector(".caixa_texto").value;
    const resultTexto = caixa_texto.replace(/[aeiou]/g, function(match) {
        switch (match) {
            case 'a': return 'ai';
            case 'e': return 'enter';
            case 'i': return 'imes';
            case 'o': return 'ober';
            case 'u': return 'ufat';
        }
    });

    const caixa_texto_cripto = document.querySelector(".caixa_texto_cripto");
    caixa_texto_cripto.value = resultTexto;
    //verifica se a caixa de texto tem texto, se tiver remove a imagem, se não recoloca a imagem
    if(caixa_texto_cripto.value.trim() !== "") caixa_texto_cripto.style.backgroundImage = "none";
    else caixa_texto_cripto.style.backgroundImage = "url(img/ilustracao-vetorial-de-uma-menina-em-uma-sala-com-um-conjunto-de-ferramentas_1057-73375.svg)";
}
criptografar.onclick = btnCripto;

function btnDescripto() {
    const caixa_texto = document.querySelector(".caixa_texto").value;

    const resultTexto = caixa_texto
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    const caixa_texto_cripto = document.querySelector(".caixa_texto_cripto");
    caixa_texto_cripto.value = resultTexto;
}
descriptografar.onclick = btnDescripto;

function btnCopiar() {
    const caixa_texto_cripto = document.querySelector(".caixa_texto_cripto");
    caixa_texto_cripto.select();
    caixa_texto_cripto.setSelectionRange(0, 99999);
    document.execCommand('copy');
    exibirMensagem("Texto copiado para a área de transferência!");
}
copiar.onclick = btnCopiar;

function exibirMensagem(mensagem) {
    const divMensagem = document.querySelector(".mensagem");
    divMensagem.textContent = mensagem;
    divMensagem.classList.add("mostrar");

    setTimeout(() => {
        divMensagem.classList.remove("mostrar");
    }, 2000);
}
