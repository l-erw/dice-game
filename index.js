let player1Score = 0 
let player2Score = 0
let player1Turn = ""
let currentClass = ""
let playerTwoCurrentClass = ""
//dice 
const player1dice = document.querySelector(".dice-cube") 
const player2dice = document.querySelector(".dice-cube2")
//buttons
const rollDice = document.getElementById("rollBtn")
const resetGame = document.getElementById("resetBtn")
const startBtn = document.getElementById("startBtn")
//text
const message = document.getElementById("message") //this will show whose turn and who has won
const player1Scoreboard = document.getElementById("player1Scoreboard") //this shows player 1 score 
const player2Scoreboard = document.getElementById("player2Scoreboard")//this shows player 2 score 


function startGame() {
    const randomPlayer = Math.floor(Math.random() * 2) + 1 //generates a random number - 1 or 2
    if (randomPlayer === 1) { 
        //player 1 starts, text is changed, roll function will execute for player 1
        message.classList.remove("blue-text")
        message.textContent = "Player 1 starts" 
        player1Turn = true 
    } else if (randomPlayer === 2) {
        //player 2 starts, text is changed, roll function will execute for player 2
        message.textContent = "Player 2 starts"
        message.classList.add("blue-text")
        player1Turn = false
    }
    //hides start game button, displays roll dice button
    startBtn.style.display = "none"
    rollDice.style.display = "block"
}
 

startBtn.addEventListener("click", startGame) //runs startGame function on click

rollDice.addEventListener("click", roll) //runs roll function on click

//this will switch visibility of the roll and reset buttons once the game is won
function changeDisplayButton() {
    startBtn.style.display = "none"
    rollDice.style.display = "none"
    resetGame.style.display = "block"  
}


function roll() {
    //generates random number between 1-6 
    const randomNumber = Math.floor(Math.random() * 6) + 1
    //attaches randomNumber to class to show corresponding side of the dice
    
    
    if (player1Turn) {  
        let showClass = "show-" + randomNumber
        let player1RepeatAnimation = "show-repeat"
        //removes previous class and adds new class to change side of dice showing (unless same number is rolled twice in a row)     
            if (currentClass) {
                player1dice.classList.remove(currentClass)
            }
            player1dice.classList.add(showClass)
            currentClass = showClass
            //update player 1's score based on randomNumber rolled
            player1Score += randomNumber
            player1Scoreboard.textContent = player1Score
            //switch to player 2's turn
            message.textContent = "Player 2 Turn"
            message.classList.add("blue-text")
            
    } else {
        //same logic as for player 1, but runs for player 2 
        let playerTwoShowClass = "display-" + randomNumber
        let repeatAnimation = "display-repeat"
            if (playerTwoCurrentClass) {
                player2dice.classList.remove(playerTwoCurrentClass)
                }
            player2dice.classList.add(playerTwoShowClass)
            playerTwoCurrentClass = playerTwoShowClass
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        message.classList.remove("blue-text")
        message.textContent = "Player 1 Turn"  
    }
    //player first to get 20 or more wins 
    if (player1Score >= 20) {
        //text changes to confirm who won
        message.classList.remove("blue-text")
        message.textContent = "Player 1 wins! 🎉"
        //roll dice button is hidden, reset button is shown
        changeDisplayButton()
    } else if (player2Score >= 20) {
        message.classList.add("blue-text")
        message.textContent = "Player 2 wins! 🥳"
        changeDisplayButton()
    } 
    //if player1Turn = true then assign to false (player 2 turn instead)
    player1Turn = !player1Turn
}


//this will listen for clicks on the reset button and run the reset function
resetGame.addEventListener("click", function() {
    reset()
})

//this resets the game, returns scores to 0, shows the rule of the game (first to 20), and hides the reset/roll buttons, shows start game button
function reset() {
    message.classList.remove("blue-text")
    message.textContent = "First to 20 wins"
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Score = 0
    player2Score = 0
    startBtn.style.display = "block"
    rollDice.style.display = "none"
    resetGame.style.display = "none" 
    player2dice.classList.remove(playerTwoCurrentClass)
    player2dice.classList.add("dice-cube2.display-1")
    player1dice.classList.remove(currentClass)
    player1dice.classList.add("dice-cube.show-1")
}