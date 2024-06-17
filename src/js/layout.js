import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";




import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Home } from "./views/home.jsx";
import { People_Details } from "./views/people_details.jsx";
import { Planet_Details } from "./views/planets_details.jsx";
import { Vehicle_Details } from "./views/vehicles_details.jsx";
import { Reproductor } from "./component/Reproductor.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/people_details" element={<People_Details/>}/>
						<Route path="/planets_details" element={<Planet_Details/>}/>
						<Route path="/vehicles_details" element={<Vehicle_Details/>}/>
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Reproductor/>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
