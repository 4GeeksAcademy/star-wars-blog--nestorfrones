import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";







export const Planet_Details = () => {
    const { store, actions } = useContext(Context);

    let details = store.Details_2
    let id = store.Id



    return (
        <>
            <div key={details.name} className="contaier">
                <div className="card mx-auto mt-5 d-flex flex-row">
                    <div className="m-5 p-5 col">
                        <img src={"https://starwars-visualguide.com/assets/img/planets/" + (id) + ".jpg"} className="card-img-top" alt="..." />
                    </div>
                    <div className="m-5 col">
                        <p className="card-text">Name: {details.name}</p>
                        <p className="card-text">Climate: {details.climate}</p>
                        <p className="card-text">Diameter: {details.diameter}</p>
                        <p className="card-text">Gravity: {details.gravity}</p>
                        <p className="card-text">Orbital Period: {details.orbital_period}</p>
                        <p className="card-text">Population: {details.population}</p>
                        <p className="card-text">Rotation Period: {details.rotation_period}</p>
                        <p className="card-text">Surface Water: {details.surface_water}</p>
                        <p className="card-text">Terrain: {details.terrain}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
























