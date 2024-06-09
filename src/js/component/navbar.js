import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Favorites } from "./Favorites.jsx";


export const Navbar = () => {
	const { store, actiones } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="dropdown m-3">
				<div className="btn-group">
					<button type="button" className="btn btn-secondary dropdown-toggle btn-lg" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
						Favorites {store.Favorites.length}
					</button>
					<ul className="dropdown-menu dropdown-menu-start col-12">
						<Favorites/>
					</ul>
				</div>
			</div>
		</nav>
	);
};
