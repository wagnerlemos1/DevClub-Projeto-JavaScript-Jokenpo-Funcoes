const result = document.querySelector('.result')
const score = document.querySelector('#meuScore')
const scoreMachine = document.querySelector('#machineScore')

let meuScore = 0
let maquina = 0


const clickHuman = (humanChoice) => {
    playGame = (clickHuman, playMachine())
}



const playMachine = () => {
    const choice = ['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * 3)

    return [random]
}


const playGame = () => {

    if (human === machine) {
        result.innerHTML = 'Voce empatou'
    } else if ((human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')) {
        result.innerHTML = 'Voce ganhou'
        score.innerHTML = meuScore
        meuScore++

    } else {
        result.innerHTML = 'Voce perdeu amigao'
        scoreMachine = maquina
        maquina++
    }
}





/* papel -> pedra -> tesoura */























