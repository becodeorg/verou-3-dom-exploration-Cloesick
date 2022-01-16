import { gameOfTheYear } from "./goty.js";
const cardsContainerElement = document.querySelector(".cards-container");
// use this step to get your 'game elements into div'

for (const game of gameOfTheYear) {
	//create 'elements' with game properties
	const newGameElement = document.createElement("p");
	newGameElement.classList.add("game");
	newGameElement.textContent = game.game;

	const newCreatorElement = document.createElement("p");
	newCreatorElement.classList.add("creator");
	newCreatorElement.textContent = game.creator;

	const newReleaseYearElement = document.createElement("p");
	newReleaseYearElement.classList.add("releaseYear");
	newReleaseYearElement.textContent = game.releaseYear;

	const newCoverElement = document.createElement("img");
	newCoverElement.setAttribute("src", game.cover);
	newCoverElement.classList.add("cover");
	// didn't have the last 2 lines src,game.cover and cover

	const newGenreElement = document.createElement("p");
	newGenreElement.classList.add('genre');
	newGenreElement.textContent = game.genre;

	// adding genres to sub division

	const newGenreContainer = document.createElement('div');
	newGenreContainer.classList.add('genre-container');
	for ( const genre of game.genre) {
		const newGenreElement = document.createElement("p");
		newGenreElement.classList.add("genre");
		newGenreElement.classList.add(genre);
		newGenreElement.textContent = genre;
		newGenreContainer.appendChild(newGenreElement);
	}

	const newDataContainer = document.createElement('div');
	newDataContainer.classList.add("year");
	newDataContainer.appendChild(newReleaseYearElement);

	//add data to sub division

	const newCardElement = document.createElement('div');
	newCardElement.classList.add("card");
	newCardElement.appendChild(newCoverElement);
	newCardElement.appendChild(newGameElement);
	newCardElement.appendChild(newGenreContainer);
	newCardElement.appendChild(document.createElement("hr"));
	newCardElement.appendChild(newDataContainer);

	// add card to game-container

	cardsContainerElement.appendChild(newCardElement);
	// !!! before cardsContainerElem instead of cardsContainerElement !!!
}
const showAllButton = document.querySelector('.show-all-button');
// console.log(showAllButton);

showAllButton.addEventListener('click', showAll);
function showAll() {
	const cards = document.querySelectorAll(".card");
	for (const card of cards) {
		card.style.display = "flex";
	}
}

const buttons = document.querySelectorAll(".filter-button");
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const cards = document.querySelectorAll(".card");
		for ( const card of cards) {
			const genreToFilter = button.textContent;
			const gameHasGenre = card.querySelector(`.${genreToFilter}`);
			if (!gameHasGenre) {
				card.style.display = 'none';
			} else {
				card.style.display = 'flex';
			}
		}
	});
});
