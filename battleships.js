let loc1 = 3;
let loc2 = 4;
let loc3 = 5;

let currentGuess;

let guesses = 0;

let hits = 0;

let isSunk = false;

while (isSunk == false){
    currentGuess = prompt("Ready, aim, fire! Enter a number from 0 - 6:");
    
    if (currentGuess < 0 || currentGuess > 6){
        alert("Please enter a valid cell number from 0 - 6!");
    } else {
        guesses = guesses + 1;
        
        if ( currentGuess == loc1 || currentGuess == loc2 || currentGuess == loc3){
            alert("HIT!");
            hits = hits + 1;
            if ( hits == 3) {
                    isSunk = true;
                    alert("You've sank my Battleship!");
            } 
        } else {
            alert("Miss!");
        }
    }    
}
var stats = "You took " + guesses + " guesses to sink the Battleship, " + "which means your shooting accuracy was " + (3 / guesses);

alert(stats);