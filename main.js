var view =  {
    displayMessage: function(msg) {
        var messageArea = document.getElementById('messageArea');
            messageArea.innerHTML = msg;
    
    },
    displayHit : function(location){
        var cell = document.getElementById(location);
        cell.setAttribute('class', 'hit');
    },
    displayMiss : function(location){
        var cell = document.getElementById(location);
        cell.setAttribute('class', 'miss');
    }
}

var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    ships : [
		{ locations: ["06", "16", "26"], hits: ["", "", ""] },
		{ locations: ["24", "34", "44"], hits: ["", "", ""] },
		{ locations: ["10", "11", "12"], hits: ["", "", ""] }
	],
    
    fire: function(guess){
        for(var i;i < this.numShips;i++){
            var ship = this.ships[i];
            var index = ship.location.indexOf(guess)
                if(index >= 0){
                    ship.hits[index] = 'hit';
                    view.displayHit(guess);
                    console.log('hit')
                    view.displayMessage('HIT!');

                    if(this.isSunk(ship)){
                        view.displayMessage('YOU SANK my battleship');
                        this.shipsSunk++;
                    }
                    return true;
                }
        }
        view.displayMiss(guess);
        view.displayMessage('you missed')
        return false;
    },
    isSunk: function(ship){
        for(var i = 0;i < this.shipLength; i++){
            if(ship.hits[i] !== 'hit'){
                return false;
            }
        }
        return true;
    }       
};
var controller = {
    guesses : 0,
    processGuess : function (guess){
        var location = parseGuess(guess)
        if (location){
            this.guesses++;
            var hit = model.fire(location);
            if(hit && model.shipsSunk === module.numShips){
                view.displayMessage('Ты потапил все корабли' + this.guesses  + ' guess')
            }
        }
    }
}
function parseGuess(guess){
var alphabet = ['A', 'B','C','D','E','F','G'];

if (guess === null || guess.length !== 2) {
    alert("Oops, please enter a letter and a number on the board.");
} else {
    var row = alphabet.indexOf(guess.charAt(0));
    var column = guess.charAt(1);
    
    if (isNaN(row) || isNaN(column)) {
        alert("Oops, that isn't on the board.");
    } else if (row < 0 || row >= model.boardSize ||
               column < 0 || column >= model.boardSize) {
        alert("Oops, that's off the board!");
    } else {
        return row + column;
    }
}
return null;
}

function handlerFireButton(){
    var guessInput = document.getElementById('guessInput');
    var guess = guessInput.value;
    controller.processGuess(guess);
    console.log(guess)
    guessInput.value = '';
}
function init(){
    var fireButton = document.getElementById('fireButton');
    fireButton.onclick = handlerFireButton;
}

window.onload = init;


controller.processGuess("A0");
console.log(parseGuess("A0"));