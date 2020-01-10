/* 
function item(x) {
    console.log(x);
}; */
/*
<button id="rock" onclick="item(this.id)">Rock</button>
    <button id="paper" onclick="item(this.id)">Paper</button>
    <button id="scissor" onclick="item(this.id)">Scissor</button> */
var appItem = ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
var userItem = ;


/* let converter = function (itemNumber) {
    switch (itemNumber) {
        case 1:
            return ('Rock');
        case 2:
            return ('Paper');
        case 3:
            return ('Scissors');
        default:
            return ('Number has to be between 1-3');
    }
}; 

let game = {
    userItem: converter(userItem),
}
*/
function compare() {
    if (appItem === userItem) {
        alert("This is a tie!!");
    }
    else if (appItem === 'Rock') {

        if (userItem === 'Scissors') {
            alert("Rock wins");
        }
    }
    else if (appItem === 'Paper') {

        if (userItem === 'Rock') {
            alert("Paper wins");
        } else {
            alert("Scissors win");
        }
    }
    else if (appItem === 'Scissors') {

        if (userItem === 'Rock') {
            alert("Rock wins");
        } else if (userItem === 'Paper') {
            alert("Scissors wins");
        }
    }
};
console.log(userItem);
console.log(appItem);
compare();

    /*
    for (var i = 0, max = 3; i < max; i += 1) {
        getResource(i);
    } */


    /* ################################################# */
    /* GUI TEST
    
    function player() {
        var x = document.getElementById("mySelect").value;
        document.getElementById("player-selection").innerHTML = "You selected: " + x;
    }
     ################################################# */




