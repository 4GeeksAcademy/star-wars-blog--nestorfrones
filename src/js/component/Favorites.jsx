import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'




export const Favorites = () => {
    const { store, actions } = useContext(Context);

    function deleteFavorite (element) {
        actions.removeFavorite(element);
    }

    function setDetails (favoriteUrl) {
        actions.getDetails(favoriteUrl);
    }


    return (
        <>
            {store.Favorites.length === 0 && <span>No favorites</span>}
            {store.Favorites.map((favorite, index) => {
                return (
                    <div key={favorite + index} className="d-flex d-inline ">
                        <Link to="/fav_details">
                            <p onClick={()=>setDetails(favorite.url)} className="m-3">{favorite.name}</p>
                        </Link>
                        <Link className="text-decoration-none ms-auto m-3">
                            <FontAwesomeIcon onClick={() => deleteFavorite(favorite)} className="text-warning fs-5" icon={faTrash} />
                        </Link>
                    </div>
                )
            })
            }
        </>
    );
};