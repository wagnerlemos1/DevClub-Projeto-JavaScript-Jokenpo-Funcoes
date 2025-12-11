// capturando elementos do DOM
const result = document.querySelector('.result')
const myScore = document.querySelector('#meuScore')
const myMachine = document.querySelector('#machineScore')

// variaveis de pontuação
let scoreHuman = 0
let scoreMachine = 0


// função que captura a escolha do humano
const clickHuman = (humanChoice) => {
    playGame(humanChoice, playMachine())

}

// função que gera a escolha da maquina
const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * 3)

    return choices[random] // retorna a escolha da maquina 
}

// função que executa o jogo
const playGame = (human, machine) => {
    if (human === machine) {
        result.innerHTML = 'It´s a tie!'
    } else if ((human === 'paper' && machine === 'rock' ||
        (human === 'rock' && machine === 'scissors' ||
            (human === 'scissors' && machine === 'paper')))) {
        scoreHuman++
        myScore.innerHTML = scoreHuman
        result.innerHTML = 'You Win!'
    } else {
        scoreMachine++
        myMachine.innerHTML = scoreMachine
        result.innerHTML = 'You Lose!'
    }


}

// raciocionio para o jogo 
// paper ganha de rock
// rock ganha de scissors
// scissors ganha de paper






















