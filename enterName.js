function enterName() {
    var player = prompt("Please enter your name", "Harry Potter");
    if (player != null) {
        document.getElementById("badgePlayer").innerHTML = player;
    }
}
enterName();
