let view =  {
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

let model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    ships : [{location:['10', '20', '30'], hits : ['','',''] },
            {location:['32','33','34'], hits:['', '','' ]},
            {location:['42','43','44'], hits:['', '',''] }],
    fire: function(guess){
        for(var i;i < this.numShips;i++){
            var ship = this.ships[i];
            ship.location.indexOf(guess)
                if(index >= 0){
                    ship.hits[index] = "hit";
                    view.displayHit(guess);
                    view.displayMessage('HIT!');
                    if(this.isSunk(ship)){
                        view.displayMessage('YOU SANK my battleship');
                        this.shipsSunk++;
                    }
                    return true;
                }
        }
        view.displayMiss(guess);
        view.displayMiss('you missed')
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
let controller = {
    guesses : 0,
    processGuess : function (guess){
        let alphabet = ['A', 'B','C','D','E','F','G'];
        if (guess === null || guess.lenght !== 2){
            alert("неправильно")
        }else{
            firstChar = guess.charAt(0);
            let row = alphabet.indexOf(firstChar);
            let column = guess.charAt(1);
            if(isNaN(row) || isNaN(column)){
                alert('нет такого значения')
            }else if(row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize){
                alert('нета')
            }

            
        }
    }

}


