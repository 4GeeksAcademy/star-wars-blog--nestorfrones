import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import "../../styles/index.css";



export const Characters = () => {
    const { store, actions } = useContext(Context);



    function addFavorite(fav) {
        actions.addFavorite(fav)
    }

    function setDetails(character) {
        actions.getDetails(character);
        actions.getDescription(character.url);
    }



    return (
        <>
            {store.People.map((character, index) => {
                return (
                    <div key={character + index} className="card_people white card col-sm-6 col-md-3 mx-2 mt-5 shadow bg-body-tertiary rounded-3">
                        <img src={"https://starwars-visualguide.com/assets/img/characters/" + (character.url.split("/")[5]) + ".jpg"} className="card-img-top" alt="..." />
                        <div className="card-body d-flex flex-column">
                            <h3 className="card-title text-center">{character.name}</h3>
                            <p className="card-title">Gender: {character.gender}</p>
                            <p className="card-title">Hair Color: {character.hair_color}</p>
                            <p className="card-title">Eye Color: {character.eye_color}</p>
                            <div className="d-flex mt-auto">
                                <Link to={"/people/"+ (character.url.split("/")[5]) } className="text-decoration-none">
                                    <button onClick={() => setDetails(character)} className="home_button btn m-3">Learn more!</button>
                                </Link>
                                <Link className="ms-auto text-decoration-none">
                                    <FontAwesomeIcon onClick={() => addFavorite(character)} id={character.name} className="yellow m-3 fs-3 opacity-25" icon={faHeart} />
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