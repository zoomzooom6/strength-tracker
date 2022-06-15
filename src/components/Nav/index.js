import React from "react";

const categories = [
    {
        name: "squat",
        description:
            "Collection of my squat PR progession",
    },
    {
        name: "deadlift",
        description: 
            "Collection of my deadlift PR progression",
    },
    {
        name: "bench",
        description:
            "Collection of my bench press PR progression",
    },
];

function Nav() {
    function categorySelected(name) {
        console.log(`${name} clicked`)
    }


    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="leg">🦵💪</span>LFG!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <a href="#food">
                            Food Trips
                        </a>
                    </li>
                    <li className="mx-2">
                        <span>Personal Bests:</span>
                    </li>
                        {categories.map((category) => (
                            <li
                                className="mx-1"
                                key={category.name}
                            >
                                <span onClick={ () => categorySelected}>
                                    {category.name}
                                </span>
                            </li>
                        ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav