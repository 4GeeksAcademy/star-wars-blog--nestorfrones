import React from "react";
import "../../styles/index.css";


export const Reproductor = () => {
    return (
        <div className="reproductor d-flex">
            <audio controls autoPlay="true" className="m-auto">
                <source src="https://upload.wikimedia.org/wikipedia/en/transcoded/d/de/The_Imperial_March_%28Star_Wars_-_The_Empire_Strikes_Back%2C_Finale%29.ogg/The_Imperial_March_%28Star_Wars_-_The_Empire_Strikes_Back%2C_Finale%29.ogg.mp3" type="audio/mpeg" />
            </audio>
        </div>
    )

}