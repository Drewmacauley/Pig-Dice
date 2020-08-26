|Behavior|Input|Output|
|----------|----------|----------|
| Player One clicks "roll" to roll the dice | Roll ("click")| Current roll: 2 |
| Player One can roll again | Roll ("click") | Current roll: 4, turn score: 6 |
| Player One can hold, and choose to end turn. Will add turn score to total score| Hold ("click) | Current roll: NA, turn score 6, total score: 6 |
| Player Two can roll | Roll ("click") | Current roll: 4, turn score : 4 |
| Player Two can roll again | Roll ("click") | Current roll: 4, turn score: 8 |
| Player Two can hold and choose to end turn | Hold ("click") | Current roll: n/a, turn score: 8, total score: 8 |
| If Player One or Player Two roll a one, their turn score is set to 0, and turn end | Current roll: 1, turn score: 0, total score [Previous scores added up] |
| The first player to score a 100 points wins the game | total score: 98, turn score: 2 | total score: 100, YOU WIN! |