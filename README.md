# Pig-Dice

#### Pig Dice Game created on 8/26/2020

#### By _Mark Tiapkov_ & _Andrew Macauley_

## Description
This is a dice game on a webpage. Roll the dice, and receive the points. Player can roll as many times as they would like. If Player rolls a 1, Player loses all point from that turn and gives the dice to the next player. Player can choose to hold, and add the points collected that round to score total. First player to reach 100 points wins the game.

## Behavior Specs

|Behavior|Input|Output|
|----------|----------|----------|
| Player One clicks "roll" to roll the dice | Roll Dice! ("click")| Current roll: 2 |
| Player One can roll again | Roll Dice! ("click") | Current roll: 4, turn score: 6 |
| Player One can hold, and choose to end turn. Will add turn score to total score| Hold! ("click) | Current roll: NA, turn score 6, total score: 6 |
| Player Two can roll | Roll Dice!("click") | Current roll: 4, turn score : 4 |
| Player Two can roll again | Roll Dice! ("click") | Current roll: 4, turn score: 8 |
| Player Two can hold and choose to end turn | Hold! ("click") | Current roll: n/a, turn score: 8, total score: 8 |
| If Player One or Player Two roll a one, their turn score is set to 0, and turn end | Current roll: 1, turn score: 0, total score [Previous scores added up] |
| The first player to score a 100 points wins the game | total score: 98, turn score: 2 | total score: 100, YOU WIN!|

## Installation/Setup

* Clone this repository
* Run index.html
* See product in your browser window

## Bugs/Issues
There are no known bugs at this time

## Contact/Support
For feedback.support you can reach Mark via [email](mailto:mark.tiapkov@gmail.com) or Andrew via Discord @Andrew Macauley #6965

## Technologies USused
* HTML5
* Bootstrap
* CSS
* JavaScript
* jQuery

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright © 2020 **_Mark Tiapkov_** & **_Andrew Macauley__**

*Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:*

*The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.*

*THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE*