// 1. getElementById - Obtendo o elemento select de cursos
const selectCurso = document.getElementById('curso');
console.log("Elemento select recuperado por ID:", selectCurso);

// 2. getElementsByClassName - Obtendo elementos pela classe 'destaque'
const elementosDestaque = document.getElementsByClassName('destaque');
console.log("Elementos com a classe 'destaque':", elementosDestaque);

// 3. getElementsByTagName - Obtendo todas as tags 'p' da página
TagsParagrafos = document.getElementsByTagName('p');
console.log("Quantidade total de parágrafos na página:", TagsParagrafos.length);

// 4. querySelector - Selecionando o botão principal
const botaoPrincipal = document.querySelector('#botao-principal');

// 5. querySelectorAll - Selecionando todas as caixas de exercícios
const caixas = document.querySelectorAll('.caixa');

// 6. innerHTML - Modificando/acessando dinamicamente o conteúdo de uma tag (Exemplo no primeiro parágrafo)
const primeiroParagrafo = document.querySelector('.card-section p');
// primeiroParagrafo.innerHTML += " <strong>(Interação JS aplicada)</strong>";

// 7. addEventListener & classList.toggle(class)
// Cada caixa, ao ser clicada, alterna (toggle) a borda verde
caixas.forEach(caixa => {
    caixa.addEventListener('click', function() {
        // Remove a borda azul se houver, para focar na verde do clique individual
        caixa.classList.remove('borda-azul');
        // Alterna a classe de borda verde
        caixa.classList.toggle('borda-verde');
    });
});

// Botão secundário: ao clicar, todas as caixas perdem a borda
const botaoSecundario = document.getElementById('botao-secundario');
botaoSecundario.addEventListener('click', function() {
    caixas.forEach(caixa => {
        caixa.classList.remove('borda-verde', 'borda-azul');
    });
});

// Botão principal: ao clicar, todas as caixas ficam com a borda azul
botaoPrincipal.addEventListener('click', function() {
    caixas.forEach(caixa => {
        caixa.classList.remove('borda-verde');
        caixa.classList.add('borda-azul');
    });
});

// 8. createElement e appendChild - Criando um novo item dinamicamente na lista de tecnologias
const listaTecnologias = document.querySelector('.lista-tecnologias');
if (listaTecnologias) {
    const novoItem = document.createElement('li');
    novoItem.innerHTML = 'React (Adicionado via createElement)';
    listaTecnologias.appendChild(novoItem);
}