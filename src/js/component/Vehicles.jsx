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

    function setDetails(vehicleUrl) {
        actions.getDetails(vehicleUrl);
        actions.getDescription(vehicleUrl);
    }

    return (
        <>
            {store.Vehicles.map((vehicle, index) => {
                return (
                    <div key={vehicle + index} className="card_vehicles white card col-3 m-2 shadow bg-body-tertiary rounded-3">
                        <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (vehicle.url.split("/")[5]) + ".jpg"} className="card-img-top" alt="Image not found" />
                        <div className="card-body d-flex flex-column">
                            <h3 className="card-title text-center pb-3">{vehicle.name}</h3>
                            <p className="card-text">Max Atmospering Speed: {vehicle.max_atmosphering_speed}</p>
                            <p className="card-text">Passengers: {vehicle.passengers}</p>
                            <p className="card-text">Vehicle Class: {vehicle.vehicle_class}</p>
                            <div className="d-flex mt-auto ">
                                <Link className="text-decoration-none" to="/vehicles_details">
                                    <button onClick={() => setDetails(vehicle.url)} className="btn home_button m-3">Learn more!</button>
                                </Link>
                                <Link className="ms-auto text-decoration-none">
                                    <FontAwesomeIcon onClick={() => addFavorite(vehicle)} className="yellow m-3 fs-3" icon={faHeart} />
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