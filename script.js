/*--------------------------------------------------------------------------------------------------
Author: David Carvalho
Project: Jokenpô Online
Description:
Script responsável pela lógica do jogo Pedra, Papel e Tesoura.

Responsibilities:
- Receber a escolha do usuário
- Gerar escolha aleatória do computador
- Comparar resultados
- Atualizar o placar
- Exibir mensagens dinâmicas
- Manipular classes CSS via DOM

Technologies:
- JavaScript (Vanilla)
- DOM API
--------------------------------------------------------------------------------------------------*/


let pontosUsuario = 0;
let pontosComputador = 0;

function jogar(escolhaUsuario) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    const resultadoEl = document.getElementById('resultado');

    // limpa classes anteriores
    resultadoEl.classList.remove('vitoria', 'derrota', 'empate');

    let mensagem = '';

    if (escolhaUsuario === escolhaComputador) {
        mensagem = 'Empate!';
        resultadoEl.classList.add('empate');
    } 
    else if (
        (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
    ) {
        mensagem = 'Você venceu! 🎉';
        pontosUsuario++;
        resultadoEl.classList.add('vitoria');
    } 
    else {
        mensagem = 'Você perdeu! 😢';
        pontosComputador++;
        resultadoEl.classList.add('derrota');
    }

    atualizarPlacar();

    resultadoEl.innerHTML = `
        Você escolheu <strong>${escolhaUsuario}</strong><br>
        O computador escolheu <strong>${escolhaComputador}</strong><br><br>
        ${mensagem}
    `;
}

function atualizarPlacar() {
    document.getElementById('pontosUsuario').textContent = pontosUsuario;
    document.getElementById('pontosComputador').textContent = pontosComputador;
}

function resetarJogo() {
    pontosUsuario = 0;
    pontosComputador = 0;

    atualizarPlacar();

    const resultadoEl = document.getElementById('resultado');
    resultadoEl.textContent = '';
    resultadoEl.classList.remove('vitoria', 'derrota', 'empate');
}
