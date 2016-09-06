var gameBoard = document.getElementById ('game-board');

var cards = ['king','king','queen','queen'];

var cardsInPlay = [];

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var newCardElement = document.createElement('div');
			newCardElement.className = 'card';
			gameBoard.appendChild(newCardElement);
	}
}

createBoard();

var cardElements = document.getElementsByClassName('card');

for (var i=0; i<cards.length; i++) {
	cardElements[i].setAttribute('data-card', cards[i]);
}

for (var i=0; i<cards.length; i++) {
	cardElements[i].addEventListener('click', isTwoCards);
}

var isMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert ("You found a match!")
} else {
	alert ("Sorry, try again.")
	}
}

var isTwoCards = function() {
	
	cardsInPlay.push(this.getAttribute('data-card'));

	if (cardsInPlay.length === 2) {
		
		isMatch();

		cardsInPlay = [];
	}

}
