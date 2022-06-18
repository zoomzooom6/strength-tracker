import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props

    useEffect(() => {
        document.title = "Tony Lifts and Eats - " + capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory])

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="arm">💪</span>Just lift<span role="img" aria-label="leg">🦵</span>
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
                            <li className={`mx-1 ${
                                currentCategory.name === category.name && 'navActive'
                            }`} key={category.name}>
                                <span 
                                    onClick={() => setCurrentCategory(category)}
                                >
                                    {capitalizeFirstLetter(category.name)}
                                </span>
                            </li>
                        ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav