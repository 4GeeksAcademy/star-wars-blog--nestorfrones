import React from "react";
import { Link } from "react-router-dom";
import { Characters } from "../component/Characters.jsx";
import { Planets } from "../component/Planets.jsx";
import { Vehicles } from "../component/Vehicles.jsx";
import "../../styles/home.css"

export const Home = () => {


    return (
        <div className="container">
            <h1 className="mt-5">characters</h1>
            <div className="d-flex flex-row overflow-auto">
                <Characters />
            </div>
            <h1 className="mt-5">Planets</h1>
            <div className="d-flex flex-row overflow-auto">
                <Planets />
            </div>
            <h1 className="mt-5">Vehicles</h1>
            <div className="d-flex flex-row overflow-auto">
                <Vehicles />
            </div>
        </div>
    );
};