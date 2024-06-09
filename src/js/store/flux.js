const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			apiUrl: "https://www.swapi.tech/api/",

			All: [],

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
						Favorites: data.results
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
						Planets: data.results
					})
				} catch (error) {
					console.log(error);
				}
			},

			getVehicles: async () => {
				const store = getStore();
				try {
					const response = await fetch(store.apiUrl + "vehicles");
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
		}
	};
};

export default getState;
