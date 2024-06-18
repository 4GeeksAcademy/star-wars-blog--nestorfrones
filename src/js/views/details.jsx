import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";




export const Details = () => {
    const { store, actions } = useContext(Context);

    let details = store.Details
    let id = store.Id
    let description = store.Description

    return (
        <> {details.url.split("/")[4] === "people" &&
            <div className="contaier">
                <div className="stars card mx-auto">
                    <div className="container m-auto p-5 row shadow bg-body-tertiary rounded-3">
                        <div className="col m-auto">
                            <img src={"https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg"} className="card-img-top img_description_people" alt="..." />
                        </div>
                        <div className="col m-auto text-center yellow">
                            <h1 className="card-text mt-5">{details.name}</h1>
                            <h5 className="card-text mt-5">{description}</h5>
                        </div>
                    </div>
                    <div className="description container row mx-auto py-5 text-center white shadow bg-body-tertiary rounded-3 border-top border-5">
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title">Birth Year:</h5>
                                <p className="card-text p-1 m-1">{details.birth_year}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title">Eye Color:</h5>
                                <p className="card-text p-1 m-1"> {details.eye_color}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title">Hair Color:</h5>
                                <p className="card-text p-1 m-1">{details.hair_color}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title">Gender:</h5>
                                <p className="card-text p-1 m-1">{details.gender}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title">Height:</h5>
                                <p className="card-text p-1 m-1">{details.height}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title">Mass:</h5>
                                <p className="card-text p-1 m-1"> {details.mass}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title">Skin Color:</h5>
                                <p className="card-text p-1 m-1"> {details.skin_color}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
            {details.url.split("/")[4] === "vehicles" &&
             <div className="contaier">
                <div className="stars card mx-auto">
                    <div className="container m-auto p-5 row shadow bg-body-tertiary rounded-3">
                        <div className="col m-auto">
                            <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + id + ".jpg"} className="card-img-top img_description" alt="..." />
                        </div>
                        <div className="col m-auto text-center yellow">
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
            }
            {details.url.split("/")[4] === "planets" &&
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
            }
        </>
    );
};
























