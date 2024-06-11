import React from "react";
import { Characters } from "../component/Characters.jsx";
import { Planets } from "../component/Planets.jsx";
import { Vehicles } from "../component/Vehicles.jsx";
import "../../styles/home.css"

export const Home = () => {


    return (
        <div className="container-fluid fondo pt-5">
            <div className="container mt-5">
                <h1 className="pt-5 mt-5 text-warning">Characters</h1>
                <div className="d-flex overflow-auto">
                    <Characters />
                </div>
                <h1 className="my-5  text-warning">Planets</h1>
                <div className="d-flex overflow-auto">
                    <Planets />
                </div>
                <h1 className="my-5 text-warning">Vehicles</h1>
                <div className="d-flex overflow-auto">
                    <Vehicles />
                </div>
            </div>
        </div>
    );
};