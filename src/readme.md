#Dice Game

A two player game, where each player rolls the dice and the first to get 20 points wins

The game starts by randomly selecting whether player 1 or 2 starts, and changes the message at the top to let the players know who starts

The starting player clicks the 'roll dice' button. This generates a random number between 1-6, changes the class on the dice so an animation runs as the dice turns to the chosen random number. The number is then added to that player's score, and displayed in the 'score'. The function switches to the other player, and the message at the top changes to confirm it's the other player's turn

This continues, each player taking their turn, until one of their scores is 20 or over, at which point the message will change to confirm the winner, and the 'reset game' button will appear to reset the game, return scores to zero, returns dice to the same position, and display the 'start game' button