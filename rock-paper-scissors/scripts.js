
function getComputerChoice() {
    let randomInt = Math.floor(Math.random()*100)

    if (randomInt < 33) {
        return 'rock'
    } 
    else if (randomInt < 66) {
        return 'scissors'
    }
    return 'paper'
}

function playSingleRound() {
    let computerSelection = getComputerChoice()
    let userSelection = prompt('choose rock, paper, or scissors:').toLowerCase()

    if (userSelection === 'rock' || userSelection === 'paper' || userSelection === 'scissors') {
        if (userSelection === computerSelection) {
            return 'Tie!'
        }
        switch(userSelection) {
            case 'rock':
                if (computerSelection === 'scissors') {
                    return 'You win! Rock beats scissors!'
                }
                return 'You lose! Paper beats rock!'
            case 'paper':
                if (computerSelection === 'rock') {
                    return 'You win! Paper beats rock!'
                }
                return 'You lose! Scissors beats paper!'
            case 'scissors':
                if (computerSelection === 'paper') {
                    return 'You win! Scissors beats paper!'
                }
        }

    }
    return 'enter a valid selection: rock, paper, or scissors'
    
}

function game() {
    let rounds = 1
    let userScore = 0
    let computerScore = 0

    while (rounds < 6) {
        let result = playSingleRound()

        if (result.substring(4, 7) === 'win') {
            userScore++
        } else {
            computerScore++
        }
        console.log(`Round ${rounds} - User:${userScore}, Computer:${computerScore}`)
        rounds++
    }
    if (userScore > computerScore) {
        console.log('User wins!')
    } else {
    console.log('You\'ve been beaten by a machine')
    }
}