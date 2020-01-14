var compNames = [
    "Mighty Mike", "Ms.Peppermint", "The Bug", "Mr. Handsome"
][Math.floor(Math.random() * 4)];
document.getElementById("badgeComp").innerHTML = compNames;

function item(x) {
    var userItem = x;
    var appItem = ["Rock", "Paper", "Scissor"][Math.floor(Math.random() * 3)];

    /*     var compScore = []; */
    function compare() {
        if (appItem === userItem) {
            document.getElementById("actionMSG").innerHTML = "This is a DRAW";
            document.getElementById("result").innerHTML = "Nobody wins!";
        }
        else if (appItem === 'Rock') {
            /* document.getElementById("compIndicator").innerHTML = "Opponent chose Rock"; */

            if (userItem === 'Scissor') {
                document.getElementById("actionMSG").innerHTML = "ROCK destroys SCISSOR";
                document.getElementById("result").innerHTML = "You LOOSE!";

                /* document.getElementById("userIndicator").innerHTML = "you chose scissor"; */
            }
        }
        else if (appItem === 'Paper') {

            if (userItem === 'Rock') {
                document.getElementById("actionMSG").innerHTML = "PAPER covers ROCK";
                document.getElementById("result").innerHTML = "You LOOSE!";

            } else {
                document.getElementById("actionMSG").innerHTML = "SCISSOR cuts PAPER";
                document.getElementById("result").innerHTML = "You WIN!";
                document.getElementById(userScore).innerHTML = userScore; //call function in here
            }
        }
        else if (appItem === 'Scissor') {

            if (userItem === 'Rock') {
                document.getElementById("actionMSG").innerHTML = "ROCK destroys SCISSOR";
                document.getElementById("result").innerHTML = "You WIN!";

            } else if (userItem === 'Paper') {
                document.getElementById("actionMSG").innerHTML = "SCISSOR cuts PAPER";
                document.getElementById("result").innerHTML = "You LOOSE!";

            }
        }
    };
    compare();

}
function updateScores(winner) {

    if (winner == userItem) {
        userScore = userScore + 1;
        document.getElementById(userScore).innerHTML = userScore;
    }

    else if (winner == compItem) {
        compScore = compScore + 1;
        document.getElementById(compScore).innerHTML = compScore;
    }
};

function updateScores() {
    var compScore = [0];
    var userScore = [0];
    if (appItem === 'Rock') {
        updateScores(comp);
    }
    else if (userItem === 'Scissor') {
        userScore = userScore + 1;
        document.getElementById("userScore").innerHTML = compScore;
    }


};

function ubdateScore(user) {
    document.getElementById("compScore").innerHTML = compScore + 1;
}
function ubdateScore(comp) {
    document.getElementById("compScore").innerHTML = compScore + 1;
}