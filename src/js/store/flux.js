


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
				const newFavorites = store.Favorites.filter((favorite) => favorite.name !== favoriteToAdd.name);
				setStore({
					Favorites: [...newFavorites, favoriteToAdd]
				})
				actions.checkFavoriteOn(favoriteToAdd.name);
			},


			removeFavorite: async (favoriteToRemove) => {
				const actions = getActions();
				const store = getStore();
				const newFavorites = store.Favorites.filter((favorite) => favorite.name !== favoriteToRemove.name);
				setStore({
					Favorites: newFavorites,
				})
				actions.checkFavoriteOff(favoriteToRemove.name);
			},

			getDetails: async (url) => {
				try {
					const response = await fetch(url);
					if (!response.ok) {
						console.log("getDetails error");
					}
					const data = await response.json();
					setStore({
						Details: data,
						Id: data.url.split("/")[5],
					})
				} catch (error) {
					
				}
			}, 

			getDescription: async (url) => {
				const store = getStore();
				try {
					const response = await fetch(store.apiUrl + url.split("/")[4] + "/" + url.split("/")[5]);
					if (!response.ok) {
						console.log("getDescription error");
					}
					const data = await response.json();
					setStore({
						Description: data.result.description,
					})					
				} catch (error) {
					console.log(error);
				}
			},

			checkFavoriteOn: async (name) => {
				const store = getStore();
				const heartOn = document.getElementById(name);
				if(store.Favorites.filter((favorite) => favorite.name !== name)){
					heartOn.classList.remove("opacity-25");
					heartOn.classList.add("opacity-100");
				}
			},

			checkFavoriteOff: async (name) => {
				const store = getStore();
				const heartOn = document.getElementById(name);
				if(store.Favorites.filter((favorite) => favorite.name !== name)){
					heartOn.classList.add("opacity-25");
					heartOn.classList.remove("opacity-100");
				}
			},

			
		}
	};
};

export default getState;
