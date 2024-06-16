import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Favorites } from "./Favorites.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import "../../styles/index.css";




export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar fixed-top mb-5 px-3">
			<Link to="/">
				<img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" alt="Logo" width="150" height="150" className="logo d-inline-block align-text-top"/>
			</Link>
			<div className="dropdown m-3">
				<div className="btn-group">
					<button type="button" className="nav_button btn dropdown-toggle btn-lg" data-bs-toggle="dropdown" data-bs-display="static" data-bs-auto-close="outside" aria-expanded="false">
						Favorites...
						<FontAwesomeIcon className="mx-1 fs-5 yellow" icon={faHeart} />
						<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
							{store.Favorites.length}
							<span className="visually-hidden">favorites</span>
						</span>
					</button>
					<ul className="drop_favorites dropdown-menu dropdown-menu-start">
						<Favorites />
					</ul>
				</div>
			</div>
		</nav>
	);
};
