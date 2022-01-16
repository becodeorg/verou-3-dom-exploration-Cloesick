const SURVIVAL_HORROR = "survival-horror";
const OPEN_WORLD = "open-world";
const ACTION_ADVENTURE = "action-adventure";
const GRAPHIC_ADVENTURE = "graphic-adventure";
const SINGLE_PLAYER = "single-player";
const INTERACTIVE_DRAMA = "interactive-drama";

 
export const gameOfTheYear =[
	{
		game: "Resident Evil Village",
		creator: "Quentin Tarantino",
		releaseYear: 2021,
		cover: "images/Resident_Evil_Village.png",
		genre: ["survival-horror"],
	},

	{
		game: "Cyberpunk 2077",
		creator: "CD Projekt",
		releaseYear: 2020,
		cover: "images/Cyberpunk_2077.jpg",
		genre: ["open-world", "action-adventure"],
	},

	{
		game: "Sekiro: Shadows die twice",
		creator: ["Activision", "FromSoftware"],
		releaseYear: 2019,
		cover: "images/Sekiro_shadow_die_twice.jpg",
		genre: ["action-adventure"],
	},

	{
		game: "God of War",
		creator: "Sony Santa Monica",
		releaseYear: 2018,
		cover: "images/God_of_War_4.jpg",
		genre: ["action-adventure"],
	},

	{
		game: "The Legend of Zelda: Breath of the Wild",
		creator: "Nintendo Entertainment",
		releaseYear: 2017,
		cover: "images/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
		genre: ["action-adventure"],
	},

	{
		game: "Overwatch",
		creator: "Blizzard Entertainment",
		releaseYear: 2016,
		cover: "images/Overwatch.jpg",
		genre: ["RPG"],
	},

	{
		game: "The Witcher 3: Wild Hunt",
		creator: "CD PROJEKT",
		releaseYear: 2015,
		cover: "images/Witcher_wild_hunt.jpg",
		genre: ["single-player", "RPG"],
	},

	{
		game: "Dragon Age: inquisition",
		creator: "Electronic Arts",
		releaseYear: 2014,
		cover: "images/Dragon_Age_Inquisition.jpg",
		genre: ["action-adventure", "RPG"],
	},

	{
		game: "The last of us",
		creator: ["Naughty Dog", "Sony Interactive Entertainment"],
		releaseYear: 2013,
		cover: "images/The_Last_of_Us.jpg",
		genre: ["action-adventure"],
	},

	{
		game: " The Walking Dead",
		creator: "TellTaleGames",
		releaseYear: 2012,
		cover: "images/The_Walking_Dead.jpeg",
		genre: ["graphic-adventure", "interactive-drama"],
	},
];