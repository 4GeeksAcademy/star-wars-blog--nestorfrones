

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			apiUrl: "https://swapi.dev/api/",

			apiUrl_2: "https://www.swapi.tech/api/",

			Planets: [],

			Vehicles: [],

			People: [],

			Favorites: [],


		},

		actions: {

			getPeople: async () => {
				const store = getStore();
				try {
					const response = await fetch(store.apiUrl + "people");
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
					const response = await fetch(store.apiUrl + "planets");
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
				const store = getStore();
				const newFavorites = store.Favorites.filter((favorite) => favorite.name !== favoriteToAdd.name);
				setStore({
					Favorites: [...newFavorites, favoriteToAdd]
				})
			},

			removeFavorite: async (favoriteToRemove) => {
				const store = getStore();
				const newFavorites = store.Favorites.filter((favorite) => favorite.name !== favoriteToRemove.name);
				setStore({
					Favorites: newFavorites,
				})
			},

			heartOnOff: async () => {
				const store = getStore();
				store.Favorites.filter()
			}


		}
	};
};

export default getState;
