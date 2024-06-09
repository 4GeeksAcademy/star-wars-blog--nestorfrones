import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.css"



export const Characters = () => {
    const { store, actions } = useContext(Context);
    


    return (
        <>
            {store.People.map((character) => {
                return (
                    <div key={character.uid} className="card col-4 m-2">
                        <img src={"https://starwars-visualguide.com/assets/img/characters/" + character.uid + ".jpg"} className="card-img-top width-200" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{character.name}</h5>
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