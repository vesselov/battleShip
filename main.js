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
    ships = [{location:['10', '20', '30'], hits : ['hit','',''] },
            {location:['32','33','34'], hits:['', '','' ]},
            {location:['42','43','44'], hits:['', '',''] }],
    fire: function(guess){
        for(var i;i < this.numShips;i++){
            var ship = this.ships[i];
        }
    }        
}
// view.displayHit('00');
// view.displayMiss('26');
// view.displayMessage('программа работает');