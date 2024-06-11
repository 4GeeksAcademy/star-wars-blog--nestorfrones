import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Favorites } from "./Favorites.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar fixed-top navbar-dark bg-dark mb-5">
			<Link to="/">
				<span className="navbar-brand">React Boilerplate</span>
			</Link>
			<div className="dropdown m-3">
				<div className="btn-group">
					<button type="button" className="btn btn-secondary dropdown-toggle btn-lg" data-bs-toggle="dropdown" data-bs-display="static" data-bs-auto-close="outside" aria-expanded="false">
                           Favorites..  
						   <FontAwesomeIcon className="mx-1 fs-5" icon={faHeart} />
						   { store.Favorites.length}
					</button>
					<ul className="dropdown-menu dropdown-menu-start">
						<Favorites/>
					</ul>
				</div>
			</div>
		</nav>
	);
};
