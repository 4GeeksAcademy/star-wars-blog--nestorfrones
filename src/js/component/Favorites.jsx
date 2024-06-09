import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";




export const Favorites = () => {
    const { store, actiones } = useContext(Context);


    return (
        <>
            {store.Favorites.map((favorite) => {
                return (
                    <div key={favorite.uid} className="d-flex d-inline">
                        <p>{favorite.name}</p>
                        <Link className="d-flex align-items-end text-decoration-none ms-auto" to="/description">
                            <button className="btn btn-success m-3">X</button>
                        </Link>
                    </div>
                )
            })
            }
        </>
    );
};