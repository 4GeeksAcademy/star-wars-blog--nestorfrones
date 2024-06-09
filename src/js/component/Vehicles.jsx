import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



export const Vehicles = () => {
    const { store, actiones } = useContext(Context);


    return (
        <>
            {store.Vehicles.map((vehicle) => {
                return (
                    <div key={vehicle.uid} className="card col-4 m-2">
                        <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + vehicle.uid + ".jpg"} className="card-img-top" alt="Image not found" />
                        <div className="card-body">
                            <h5 className="card-title">{vehicle.name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link className="d-flex align-items-end text-decoration-none" to="/description">
                                <button className="btn btn-success m-3">Learn more!</button>
                            </Link>
                        </div>
                    </div>
                )
            })
            }
        </>
    );
};