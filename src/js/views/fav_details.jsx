import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";







export const Fav_Details = () => {
    const { store, actions } = useContext(Context);
    
    

    let details = store.Details_2
    let id = store.Id

    return (
        <>
            <div key={details.name} className="contaier">
                <div className="card mx-auto mt-5 d-flex flex-row">
                    <div className="m-5 p-5 col">
                        <img src={"https://starwars-visualguide.com/assets/img/characters/"+`${id}`+".jpg"} className="card-img-top" alt="..." />
                    </div>
                    <div className="m-5 col">
                        <p className="card-text">Name: {details.name}</p>
                        <p className="card-text p-1 m-1">Hair Color: {details.hair_color}</p>
                        <p className="card-text p-1 m-1">Eye Color: {details.eye_color}</p>
                        <p className="card-text p-1 m-1">Birth Year: {details.birth_year}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
























