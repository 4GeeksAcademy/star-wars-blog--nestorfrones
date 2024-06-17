


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			apiUrl: "https://www.swapi.tech/api/",

			apiUrl_2: "https://swapi.dev/api/",

			People: [],

			Planets: [],

			Vehicles: [],

			Favorites: [],

			Details: [],

			Description: "",

			Id: "",

		},

		actions: {

			getPeople: async () => {
				const store = getStore();
				const actions = getActions();
				try {
					const response = await fetch(store.apiUrl_2 + "people");
					if (!response.ok) {
						console.log("getPeolple error");
					}
					const data = await response.json();
					setStore({
						People: data.results,
					})
				} catch (error) {
					console.log(error);
				}
			},


			getPlanets: async () => {
				const store = getStore();
				try {
					const response = await fetch(store.apiUrl_2 + "planets");
					if (!response.ok) {
						console.log("gePlanets error");
					}
					const data = await response.json();
					setStore({
						Planets: data.results,
					})
				} catch (error) {
					console.log(error);
				}
			},

			getVehicles: async () => {
				const store = getStore();
				try {
					const response = await fetch(store.apiUrl_2 + "vehicles");
					if (!response.ok) {
						console.log("getVehicles error");
					}
					const data = await response.json();
					setStore({
						Vehicles: data.results
					})
				} catch (error) {
					console.log(error);
				}
			},

			addFavorite: async (favoriteToAdd) => {
				const actions = getActions();
				const store = getStore();
				const heartOn = document.getElementById(favoriteToAdd.name);
				const newFavorites = store.Favorites.filter((favorite) => favorite.name !== favoriteToAdd.name);
				setStore({
					Favorites: [...newFavorites, favoriteToAdd]
				})
				heartOn.classList.remove("opacity-25");
				heartOn.classList.add("opacity-100");
			},


			removeFavorite: async (favoriteToRemove) => {
				const actions = getActions();
				const store = getStore();
				const heartOn = document.getElementById(favoriteToRemove.name);
				const newFavorites = store.Favorites.filter((favorite) => favorite.name !== favoriteToRemove.name);
				setStore({
					Favorites: newFavorites,
				})
				heartOn.classList.add("opacity-25");
				heartOn.classList.remove("opacity-100");
			},

			getDetails: (element) => {
				const store = getStore();
				if (element.url.split("/")[4] === "people")
					store.People.find((character) => character.url === element.url)
				setStore({
					Details: element,
					Id: element.url.split("/")[5],
				})
				if (element.url.split("/")[4] === "planets")
					store.Planets.find((planet) => planet.url === element.url)
				setStore({
					Details: element,
					Id: element.url.split("/")[5],
				})
				if (element.url.split("/")[4] === "vehicles")
					store.Vehicles.find((vehicle) => vehicle.url === element.url)
				setStore({
					Details: element,
					Id: element.url.split("/")[5],
				})
			},


			getDescription: (url) => {
				const store = getStore();
					setStore({
						Description: url,
					})
			},
		}
	};
};

export default getState;
