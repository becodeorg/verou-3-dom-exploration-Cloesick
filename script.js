const SURVIVAL_HORROR = "survival-horor";
const OPEN_WORLD = "open-world";
const ACTION_ADVENTURE = "action-adventure";
const GRAPHIC_ADVENTURE = "graphic-adventure";
const SINGLE_PLAYER = "single-player";
const INTERACTIVE_DRAMA = "interactive-drama";

const gameOfTheYear = [
	{
		game: "Resident Evil Village",
		creator: "Quentin Tarantino",
		releaseYear: 2021,
		cover: "link/to/a/cover",
		genre: ["survival-horror"],
	},

	{
		game: "Cyberpunk 2077",
		creator: "CD Projekt",
		releaseYear: 2020,
		cover: "link/to/a/cover",
		genre: ["open-world", "action-adventure"],
	},

	{
		game: "Sekiro: Shadows die twice",
		creator: ["Activision", "FromSoftware"],
		releaseYear: 2019,
		cover: "link/to/a/cover",
		genre: ["action-adventure"],
	},

	{
		game: "God of War from",
		creator: "Sony Santa Monica ",
		releaseYear: 2018,
		cover: "link/to/a/cover",
		genre: ["action-adventure"],
	},

	{
		game: "The Legend of Zelda: Breath of the Wild",
		creator: "Nintendo Entertainment",
		releaseYear: 2017,
		cover: "link/to/a/cover",
		genre: ["action-adventure"],
	},

	{
		game: "Overwatch",
		creator: "Blizzard Entertainment",
		releaseYear: 2016,
		cover: "link/to/a/cover",
		genre: ["RPG "],
	},

	{
		game: "The Witcher 3: Wild Hunt",
		creator: "CD PROJEKT",
		releaseYear: 2015,
		cover: "link/to/a/cover",
		genre: ["single-player", "RPG"],
	},

	{
		game: "Dragon Age: inquisition",
		creator: "Electronic Arts",
		releaseYear: 1994,
		cover: "link/to/a/cover",
		genre: ["action-adventure", "RPG"],
	},

	{
		game: "The last of us",
		creator: "Naughty Dog",
		releaseYear: 2013,
		cover: "link/to/a/cover",
		genre: ["action-adventure"],
	},

	{
		game: " The Walking Dead",
		creator: "TellTaleGames",
		releaseYear: 2012,
		cover: "link/to/a/cover",
		genre: ["graphic-adventure", "interactive-drama"],
	},
];

const cardsContainerElement = document.querySelector(".cards-container");
// use this step to get your "game elements into div"

for(game of gameOfTheYear) {
	//create "elements" with game properties
	const newGameElement = document.createElement ("p");
	newGameElement.classList.add("game");
	newGameElement.textContent=game.game;

	const newCreatorElement = document.createElement ("p");
	newCreatorElement.classList.add("creator");
	newCreatorElement.textContent=game.creator;
	
	const newReleaseYearElement = document.createElement ("p");
	newReleaseYearElement.classList.add("releaseYear");
	newReleaseYearElement.textContent=game.releaseYear;
	
	const newCoverElement = document.createElement ("img");
	newCoverElement.classList.add("cover");
	newCoverElement.textContent=game.cover;
	
	const newGenreElement = document.createElement ("p");
	newGenreElement.classList.add("genre");
	newGenreElement.textContent=game.genre;


	 // adding genres to sub division
	
	const newGenreContainer = document.createElement("div");
	newGenreContainer.classList.add("genre-container");
	for (genre of game.genre){
		const newGenreElement = document.createElement ("p");
		newGenreElement.classList.add("genre");
		newGenreElement.classList.add(genre);
		newGenreElement.textContent = genre;
		newGenreContainer.appendChild (newGenreElement);
	}

	const newDataContainer = document.createElement ("div");
	newDataContainer.classList.add("data-container");
	newDataContainer.appendChild(newReleaseYearElement);

	//add data to sub division

	const newCardElement = document.createElement ("div");
	newCardElement.classList.add("card");
	newCardElement.appendChild(newCoverElement);
	newCardElement.appendChild(newGameElement);
	newCardElement.appendChild(newGenreContainer);
	newCardElement.appendChild(newDescriptionElement);
	newCardElement.appendChild(document.createElement ("hr"));
	newCardElement.appendChild(newDataContainer);

	// add card to game-container

	cardsContainerElem.appendChild(newCardElement);
}
	const showAllButton = document.querySelector (".show-all-button");
	console.log(showAllButton);
	showAllButton.addEventListener("click", showAll);
	function showAll (){
		const cards = document.querySelectorAll(".card");
		for (card of cards) {
				cards.style.display="flex";
		}
	}
	
	const buttons = document.querySelectorAll(".filter-button");
	buttons.forEach(button =>
		{
			button.addEventlistener("click", ()=>{
				const cards = document.querySelectorAll (".card");
				for (card of cards){
					const genreToFilter = button.textContent;
					const gameHasGenre = card.querySelector(`.${genreToFilter}`);
					if (!gameHasGenre){
						card.style.display = "none";
					} else {
						card.style.display = "flex";
					}
				}
			});
		});


