import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";






export const Vehicle_Details = () => {
    const { store, actions } = useContext(Context);

    let details = store.Details
    let id = store.Id
    let description = store.Description


    return (
        <>
            <div className="contaier">
                <div className="stars card mx-auto">
                    <div className="container m-auto p-5 d-flex shadow bg-body-tertiary rounded-3">
                        <div className="col m-5">
                            <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + id + ".jpg"} className="card-img-top img_description" alt="..." />
                        </div>
                        <div className="col m-5 text-center yellow">
                            <h1 className="card-text mt-5">{details.name}</h1>
                            <h5 className="card-text mt-5">{description}</h5>
                        </div>
                    </div>
                    <div className="description container row mx-auto py-5 text-center white shadow bg-body-tertiary rounded-3 border-top border-5">
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title">Cargo Capacity:</h5>
                                <p className="card-text p-1 m-1">{details.cargo_capacity}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title">Consmables:</h5>
                                <p className="card-text p-1 m-1">{details.consumables}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title">Cost in Credits:</h5>
                                <p className="card-text p-1 m-1">{details.cost_in_credits}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title">Crew:</h5>
                                <p className="card-text p-1 m-1">{details.crew}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title">Length:</h5>
                                <p className="card-text p-1 m-1">{details.length}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title">Manufacturer:</h5>
                                <p className="card-text p-1 m-1">{details.manufacturer}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title">Vehicle Class:</h5>
                                <p className="card-text p-1 m-1"> {details.vehicle_class}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
























