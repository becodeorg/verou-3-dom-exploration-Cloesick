import { gameOfTheYear } from "./GOTY";
const cardsContainerElement = document.querySelector(".cards-container");
// use this step to get your "game elements into div"

for (game of gameOfTheYear) {
	//create "elements" with game properties
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
	newCoverElement.classList.add("cover");
	newCoverElement.textContent = game.cover;

	const newGenreElement = document.createElement("p");
	newGenreElement.classList.add("genre");
	newGenreElement.textContent = game.genre;

	// adding genres to sub division

	const newGenreContainer = document.createElement("div");
	newGenreContainer.classList.add("genre-container");
	for (genre of game.genre) {
		const newGenreElement = document.createElement("p");
		newGenreElement.classList.add("genre");
		newGenreElement.classList.add(genre);
		newGenreElement.textContent = genre;
		newGenreContainer.appendChild(newGenreElement);
	}

	const newDataContainer = document.createElement("div");
	newDataContainer.classList.add("data-container");
	newDataContainer.appendChild(newReleaseYearElement);

	//add data to sub division

	const newCardElement = document.createElement("div");
	newCardElement.classList.add("card");
	newCardElement.appendChild(newCoverElement);
	newCardElement.appendChild(newGameElement);
	newCardElement.appendChild(newGenreContainer);
	newCardElement.appendChild(document.createElement("hr"));
	newCardElement.appendChild(newDataContainer);

	// add card to game-container

	cardsContainerElem.appendChild(newCardElement);
}
const showAllButton = document.querySelector(".show-all-button");
console.log(showAllButton);
showAllButton.addEventListener("click", showAll);
function showAll() {
	const cards = document.querySelectorAll(".card");
	for (card of cards) {
		cards.style.display = "flex";
	}
}

const buttons = document.querySelectorAll(".filter-button");
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const cards = document.querySelectorAll(".card");
		for (card of cards) {
			const genreToFilter = button.textContent;
			const gameHasGenre = card.querySelector(`.${genreToFilter}`);
			if (!gameHasGenre) {
				card.style.display = "none";
			} else {
				card.style.display = "flex";
			}
		}
	});
});
