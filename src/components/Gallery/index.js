import React, { useState } from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/commercial/0.jpg";

function Gallery() {
    const currentCategory = {
        name: "squats",
        description:
            "Photos and video of my squat PR attempts.",
    };

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <div className="flex-row">
                <img
                    src={photo}
                    alt="Placeholder 1"
                    className="img-thumbnail mx-1"
                />
            </div>
        </section>
    );
}

export default Gallery;