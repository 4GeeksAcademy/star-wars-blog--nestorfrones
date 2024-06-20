import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'



export const Planets = () => {
    const { store, actions } = useContext(Context);

    function addFavorite(fav) {
        actions.addFavorite(fav);
    }

    function setDetails(planet) {
        actions.getDetails(planet);
        actions.getDescription(planet.url);
    }


    return (
        <>
            {store.Planets.map((planet, index) => {
                return (
                    <div key={planet + index} className="card_planets white card col-12 col-sm-6 col-md-3 m-2 shadow bg-body-tertiary rounded-3">
                        <Link className="text-decoration-none" to={"/details/" + (planet.url.split("/")[4]) + "/" + (planet.url.split("/")[5])}>
                            <img onClick={() => setDetails(planet)} src={"https://starwars-visualguide.com/assets/img/planets/" + (index + 2) + ".jpg"} className="card-img-top" alt="Image not found" />
                        </Link>
                        <div className="card-body d-flex flex-column">
                            <h3 className="card-title text-center pb-3">{planet.name}</h3>
                            <p className="card-text">Population: {planet.population}</p>
                            <p className="card-text">Terrain: {planet.terrain}</p>
                            <div className="d-flex mt-auto">
                                <Link className="text-decoration-none" to={"/details/" + (planet.url.split("/")[4]) + "/" + (planet.url.split("/")[5])}>
                                    <button onClick={() => setDetails(planet)} className="btn home_button m-3">Learn more!</button>
                                </Link>
                                <Link className="ms-auto text-decoration-none">
                                    <FontAwesomeIcon onClick={() => addFavorite(planet)} className={`${store.Favorites.includes(planet) ? "opacity-100" : " opacity-25"} yellow m-3 fs-3`} icon={faHeart} />
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </>
    );
};