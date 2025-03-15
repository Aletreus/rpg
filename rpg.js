function stats(){
    var nomep1 = document.getElementById('nomep1')
    nomep1.textContent = `${player1.nome}`
    var hpp1 = document.getElementById('hpp1')
    hpp1.textContent = `HP: ${player1.hp}/${maxhpp1}`
    var atkp1 = document.getElementById('atkp1')
    atkp1.textContent = `ATK: ${player1.atk}`
    var defp1 = document.getElementById('defp1')
    defp1.textContent = `DEF: ${player1.def}/${player1.def}`
    var nomep2 = document.getElementById('nomep2')
    nomep2.textContent = `${player2.nome}`
    var hpp2 = document.getElementById('hpp2')
    hpp2.textContent = `HP: ${player2.hp}/${maxhpp2}`
    var atkp2 = document.getElementById('atkp2')
    atkp2.textContent = `ATK: ${player2.atk}`
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
        if(this.atk - player.def < 0){
            player.def = player.def - this.atk
            console.log(`O ataque causou 0 de dano mas causou ${this.atk} de dano ao escudo do oponente e deixou seu oponente com ${player.def} de escudo.`)
        }
        
        else{
            player.hp = player.hp - (this.atk - player.def)
            console.log(`O ataque quebrou o escudo do oponente e causou ${this.atk - player.def} de dano, deixando seu oponente com ${player.hp} de vida.`)
            player.def = 0
        }
    
        stats(); 
        this.checkDeath(player);
    }

    lifepotion(player){
        player.hp = Math.min(player.hp + 35, maxhpp2);
        console.log(`O jogador ${this.nome} usou uma poção de vida. Vida atual: ${player.hp}`);
        stats(); 
    }
    buffdamage(player){
        player.atk = Math.min(player.atk + (player.atk * 0.3), 100)
        console.log(`O jogador ${player.nome} usou a skill de buff e ganhou +${player.atk * 0.3} de ATK`)
        stats()
    }

    status(){
        console.log(`Status do jogador ${this.nome} Atk: ${this.atk} Def: ${this.def} HP: ${this.hp}`);
    }

    shield(player){
        if(player.def > 0){
        player.def = player.def + (player.def * 0.5)
        }else{
            player.def = 35
        }
        if(player.def > 125){
            player.def = 125
        }
        console.log(`defesa do jogador ${player.nome} aumentada para ${player.def}`)
        stats()
    }

    checkDeath(player){
        if (player.hp <= 0) {
            console.log(`O jogador ${player.nome} morreu.`);
            alert(`O jogador ${player.nome} morreu!`);
            
        }
    }
    
}


const player1 = new Guerreiro('Jogador1', 100, 35, 50);
const player2 = new Guerreiro('Jogador2', 100, 25, 50);
var maxhpp1 = player1.hp;
var maxhpp2 = player2.hp;


stats();
