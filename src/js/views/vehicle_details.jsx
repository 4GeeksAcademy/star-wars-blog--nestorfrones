import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";







export const Vehicle_Details = () => {
    const { store, actions } = useContext(Context);

    let details = store.Details_2
    let id = store.Id



    return (
        <>
            <div key={details.name} className="contaier">
                <div className="card mx-auto mt-5 d-flex flex-row">
                    <div className="m-5 p-5 col">
                        <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + (id) + ".jpg"} className="card-img-top" alt="..." />
                    </div>
                    <div className="m-5 col">
                        <p className="card-text">Name: {details.name}</p>
                        <p className="card-text">Cargo Capacity: {details.cargo_capacity}</p>
                        <p className="card-text">Consmables: {details.consumables}</p>
                        <p className="card-text">Cost in Credits: {details.cost_in_credits}</p>
                        <p className="card-text">Crew: {details.crew}</p>
                        <p className="card-text">Length: {details.length}</p>
                        <p className="card-text">Manufacturer: {details.manufacturer}</p>
                        <p className="card-text">Max Atmospering Speed: {details.max_atmosphering_speed}</p>
                        <p className="card-text">Passengers: {details.passengers}</p>
                        <p className="card-text">Vehicle Class: {details.vehicle_class}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
























