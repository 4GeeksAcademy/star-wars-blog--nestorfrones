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

    function setDetails (planetUrl) {
        actions.getDetails(planetUrl);
    }


    return (
        <>
            {store.Planets.map((planet, index) => {
                return (
                    <div key={planet + index} className="card col-4 m-2">
                        <img src={"https://starwars-visualguide.com/assets/img/planets/" + (index + 2) + ".jpg"} className="card-img-top" alt="Image not found" />
                        <div className="card-body">
                            <div className="mb-auto">
                                <h3 className="card-title text-center pb-3">{planet.name}</h3>
                            </div>
                            <div className="d-flex d-inline">
                                <Link className="text-decoration-none" to="/planet_details">
                                    <button onClick={()=> setDetails(planet.url)} className="btn btn-warning m-3">Learn more!</button>
                                </Link>
                                <Link className="ms-auto text-decoration-none">
                                    <FontAwesomeIcon onClick={() => addFavorite(planet)} className="text-warning    m-3 fs-3" icon={faHeart} />
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