import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";



export const Planet_Details = () => {
    const { store, actions } = useContext(Context);

    let details = store.Details
    let description = store.Description


    return (

        <>
            <div className="contaier">
                <div className="stars card mx-auto shadow bg-body-tertiary rounded-3">
                    <div className="container m-auto p-5 row shadow bg-body-tertiary rounded-3">
                        <div className="col m-auto">
                            <img src={"https://starwars-visualguide.com/assets/img/planets/3.jpg"} className="card-img-top img_description" alt="..." />
                        </div>
                        <div className="col m-auto text-center yellow">
                            <h1 className="card-text mt-5">{details.name}</h1>
                            <h5 className="card-text mt-5">{description}</h5>
                        </div>
                    </div>
                    <div className="description container row mx-auto py-5 text-center white shadow bg-body-tertiary rounded-3 border-top border-5">
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title">Climate:</h5>
                                <p className="card-text p-1 m-1">{details.climate}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title">Diameter:</h5>
                                <p className="card-text p-1 m-1">{details.diameter}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title">Gravity:</h5>
                                <p className="card-text p-1 m-1">{details.gravity}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title">Orbital Period:</h5>
                                <p className="card-text p-1 m-1">{details.orbital_period}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title">Population:</h5>
                                <p className="card-text p-1 m-1">{details.population}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title">Rotation Period:</h5>
                                <p className="card-text p-1 m-1">{details.rotation_period}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title">Terrain:</h5>
                                <p className="card-text p-1 m-1">{details.terrain}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
























