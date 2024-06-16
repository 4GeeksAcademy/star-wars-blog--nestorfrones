import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";




export const People_Details = () => {
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
                            <img src={"https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg"} className="card-img-top img_description_people" alt="..." />
                        </div>
                        <div className="col m-5 text-center yellow">
                            <h1 className="card-text mt-5">{details.name}</h1>
                            <h5 className="card-text mt-5">{description}</h5>
                        </div>
                    </div>
                    <div className="description container row mx-auto py-5 text-center text-light shadow bg-body-tertiary rounded-3 border-top border-5">
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
        </>
    );
};
























