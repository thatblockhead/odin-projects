// Initialize variables for keeping score
let userScore = 0
let computerScore = 0

// Select relevant DOM elements
const matchResultElement = document.querySelector('#matchResult')
const userScoreElement = document.querySelector('#userScore')
const computerScoreElement = document.querySelector('#computerScore')
const gameResultElement = document.querySelector('#gameResult')
const resetElement = document.querySelector('#reset')

// End game if anyone has 5 or more points
function checkWinner() {
    if (userScore >= 5) {
        gameResultElement.textContent = 'You win! Skynet foiled!'
        resetElement.innerHTML = '<button onClick={resetGame()}>Reset Game</button>'
    }
    if (computerScore >= 5) {
        gameResultElement.textContent = 'You\'ve been beaten by a machine. Better luck next time.'
        resetElement.innerHTML = '<button onClick={resetGame()}>Reset Game</button>'
    }
}

// Reset all fields
function resetGame() {
    userScore = 0
    computerScore = 0
    matchResultElement.textContent = ''
    userScoreElement.textContent = ''
    computerScoreElement.textContent = ''
    gameResultElement.textContent = ''
    resetElement.innerHTML = ''
}

// Update DOM with current scores
function updateScores() {
    userScoreElement.textContent = `User score: ${userScore}`
    computerScoreElement.textContent = `Computer score: ${computerScore}`
    checkWinner()
}

// Randomly select choice for computer
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

// Play game round based on user's button click
function playSingleRound(userSelection) {

    let computerSelection = getComputerChoice()
    
    if (userSelection === computerSelection) {
        matchResultElement.textContent = 'Tie!'
    }
    switch(userSelection) {
        case 'rock':
            if (computerSelection === 'scissors') {
                matchResultElement.textContent = 'You win! Rock beats scissors!'
                userScore++
                updateScores()
                break
            }
            matchResultElement.textContent = 'You lose! Paper beats rock!'
            computerScore++
            updateScores()
            break

        case 'paper':
            if (computerSelection === 'rock') {
                matchResultElement.textContent = 'You win! Paper beats rock!'
                userScore++
                updateScores()
                break
            }
            matchResultElement.textContent = 'You lose! Scissors beats paper!'
            computerScore++
            updateScores()
            break

        case 'scissors':
            if (computerSelection === 'paper') {
                matchResultElement.textContent = 'You win! Scissors beats paper!'
                userScore++
                updateScores()
                break
            }
            matchResultElement.textContent = 'You lose! Rock beats scissors!'
            computerScore++
            updateScores()
            break
    }
}