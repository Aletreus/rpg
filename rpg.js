function stats(){
    var nomep1 = document.getElementById('nomep1')
    nomep1.textContent = `${player1.nome}`
    var hpp1 = document.getElementById('hpp1')
    hpp1.textContent = `${player1.hp}/${maxhpp1}`
    var atkp1 = document.getElementById('atkp1')
    atkp1.textContent = `ATK: ${player1.atk}/${player1.atk}`
    var defp1 = document.getElementById('defp1')
    defp1.textContent = `DEF: ${player1.def}/${player1.def}`
    var nomep2 = document.getElementById('nomep2')
    nomep2.textContent = `${player2.nome}`
    var hpp2 = document.getElementById('hpp2')
    hpp2.textContent = `${player2.hp}/${maxhpp2}`
    var atkp2 = document.getElementById('atkp2')
    atkp2.textContent = `ATK: ${player2.atk}/${player2.atk}`
    var defp2 = document.getElementById('defp2')
    defp2.textContent = `DEF: ${player2.def}/${player2.def}`
}

class Guerreiro{
    constructor(nome, hp, defesa, ataque){
        this.hp = hp
        this.def = defesa
        this.atk = ataque
        this.nome = nome
    }
    slash(player){
        // Calcula o dano e aplica no HP do jogador adversário
        let dano = this.atk - player.def;
        player.hp = Math.max(player.hp - dano, 0); // Garantir que o HP não fique negativo
        console.log(`O jogador ${this.nome} atacou ${player.nome} com Slash. Dano causado: ${dano}. Vida do oponente: ${player.hp}`);
        stats(); // Atualiza as stats na tela
        this.checkDeath(player); // Verifica se o jogador morreu após o ataque
    }

    lifepotion(player){
        player.hp = Math.min(player.hp + 35, maxhpp2); // Garantir que o HP não ultrapasse o máximo
        console.log(`O jogador ${this.nome} usou uma poção de vida. Vida atual: ${player.hp}`);
        stats(); // Atualiza as stats na tela
    }

    status(){
        console.log(`Status do jogador ${this.nome} Atk: ${this.atk} Def: ${this.def} HP: ${this.hp}`);
    }

    checkDeath(player){
        if (player.hp <= 0) {
            console.log(`O jogador ${player.nome} morreu.`);
            alert(`O jogador ${player.nome} morreu!`);
            // Aqui você pode adicionar lógica para finalizar o jogo ou reiniciar
        }
    }
}

// Inicializa os jogadores
const player1 = new Guerreiro('Jogador 1', 100, 35, 50);
const player2 = new Guerreiro('Jogador 2', 100, 25, 50);
var maxhpp1 = player1.hp;
var maxhpp2 = player2.hp;

// Configura o evento do botão
var ataquebasico = document.getElementById('ataquebasico');
ataquebasico.addEventListener('click', function() {
    player1.slash(player2);
});

// Exibe as stats iniciais
stats();
