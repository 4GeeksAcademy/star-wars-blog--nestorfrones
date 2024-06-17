import React from "react";
import { Characters } from "../component/Characters.jsx";
import { Planets } from "../component/Planets.jsx";
import { Vehicles } from "../component/Vehicles.jsx";



export const Home = () => {


    return (
        <div className="stars container-fliud">
            <div className="container">
                <div className="lista shadow-lg p-3 rounded-3">
                    <h1 className="text-center pt-5 mt-5 yellow">Characters</h1>
                    <div className="d-flex overflow-auto">
                        <Characters />
                    </div>
                </div>
                <div className="shadow-lg p-3 rounded-3">
                    <h1 className="text-center my-5 yellow">Planets</h1>
                    <div className="d-flex overflow-auto">
                        <Planets />
                    </div>
                </div>
                <div className="shadow-lg p-3 rounded-3">
                    <h1 className="text-center my-5 yellow">Vehicles</h1>
                    <div className="d-flex overflow-auto my-3">
                        <Vehicles />
                    </div>
                </div>
            </div>
        </div>
    );
};