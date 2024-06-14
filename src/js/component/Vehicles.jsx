import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'



export const Vehicles = () => {
    const { store, actions } = useContext(Context);

    function addFavorite(fav) {
        actions.addFavorite(fav);
    }

    function setDetails (planetUrl) {
        actions.getDetails(planetUrl);
    }

    return (
        <>
            {store.Vehicles.map((vehicle) => {
                return (
                    <div key={vehicle.uid} className="card col-4 m-2">
                        <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (vehicle.uid) + ".jpg"} className="card-img-top" alt="Image not found" />
                        <div className="card-body">
                            <h3 className="card-title text-center pb-3">{vehicle.name}</h3>
                            <div className="d-flex d-inline">
                                <Link className="text-decoration-none" to="/vehicle_details">
                                    <button onClick={()=> setDetails(vehicle.url)} className="btn btn-warning m-3">Learn more!</button>
                                </Link>
                                <Link className="ms-auto text-decoration-none">
                                    <FontAwesomeIcon onClick={() => addFavorite(vehicle)} className="text-warning m-3 fs-3" icon={faHeart} />
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