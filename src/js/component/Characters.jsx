import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'




export const Characters = () => {
    const { store, actions } = useContext(Context);


    function addFavorite(fav) {
        actions.addFavorite(fav);

    }

    function setDetails(characterUrl) {
        actions.getDetails(characterUrl);
    }


    return (
        <>
            {store.People.map((character, index) => {
                return (
                    <div key={character + index} className="card col-4 mx-2 mt-5">
                        <img src={"https://starwars-visualguide.com/assets/img/characters/" + (index + 1) + ".jpg"} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title text-center">{character.name}</h3>
                            <div className="d-flex d-inline">
                                <Link to="/character_details" className="text-decoration-none">
                                    <button onClick={() => setDetails(character.url)} className="btn btn-warning m-3">Learn more!</button>
                                </Link>
                                <Link className="ms-auto text-decoration-none">
                                    <FontAwesomeIcon onClick={() => addFavorite(character)} className="text-warning m-3 fs-3" icon={faHeart} />
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