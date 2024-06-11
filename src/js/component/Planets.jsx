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

    return (
        <>
            {store.Planets.map((planet, index) => {
                return (
                    <div key={planet + index} className="card col-4 m-2">
                        <img src={"https://starwars-visualguide.com/assets/img/planets/" + (index + 2) + ".jpg"} className="card-img-top" alt="Image not found" />
                        <div className="card-body">
                            <h5 className="card-title pb-3">{planet.name}</h5>
                            <p className="card-text">Popularion: {planet.population}</p>
                            <p className="card-text">Terrain: {planet.terrain}</p>
                            <div className="d-flex d-inline">
                                <Link className="text-decoration-none" to="/description">
                                    <button className="btn btn-success m-3">Learn more!</button>
                                </Link>
                                <Link className="ms-auto text-decoration-none">
                                    <FontAwesomeIcon onClick={() => addFavorite(planet)} className="m-3 fs-3" icon={faHeart} />
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