var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*
if (cardOne === cardTwo) {
	alert ("You found a match!")
} else if (cardOne === cardThree) {
	alert ("Sorry, try again.")
} else if (cardOne === cardFour) {
	alert ("Sorry, try again.")
} else if (cardTwo === cardOne) {
	alert ("You found a match!")
} else if (cardTwo === cardThree) {
	alert ("Sorry, try again.")
} else if (cardTwo === cardFour) {
	alert ("Sorry, try again.")
} else if (cardThree === cardOne) {
	alert ("Sorry, try again.")
} else if (cardThree === cardTwo) {
	alert ("Sorry, try again.")
} else if (cardThree === cardFour) {
	alert ("You found a match!")
} else if (cardFour === cardOne) {
	alert ("Sorry, try again.")
} else if (cardFour === cardTwo) {
	alert ("Sorry, try again.")
} else if (cardFour === cardThree) {
	alert ("You found a match!")
}
*/

var gameBoard = document.getElementById ('game-board');

var createBoard = function() {
	for (var i = 0; i < 4; i++) {
		var newCardElement = document.createElement ('div');
			newCardElement.className = 'card';
			gameBoard.appendChild (newCardElement);
	}
}
createBoard ();