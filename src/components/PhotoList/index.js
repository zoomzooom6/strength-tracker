import React, { useState } from "react";
import Modal from '../Modal'

function PhotoList({category}) {
    const [photos] = useState([
        { name: 'First Sq', category: 'portraits', description: 'first ever squat PR, 255lbs'},
        { name: 'Second Sq', category: 'portraits', description: '275lbs attempt'},
        { name: 'Third Sq', category: 'portraits', description: '315lbs attempt'},
        { name: 'Fourth Sq', category: 'portraits', description: '380lbs attempt'},
        { name: 'First Dl', category: 'food', description: 'first ever deadlift PR, 225lbs'},
        { name: 'Second Dl', category: 'food', description: '265lbs attempt'},
        { name: 'Third Dl', category: 'food', description: '285lbs attempt'},
        { name: 'Fourth Dl', category: 'food', description: '355lbs attempt'},
        { name: 'First Bn', category: 'landscape', description: 'first ever bench PR, 185lbs'},
        { name: 'Second Bn', category: 'landscape', description: '195lbs attempt'},
        { name: 'Third Bn', category: 'landscape', description: '205lbs attempt'},
        { name: 'Fourth Bn', category: 'landscape', description: '215lbs attempt'},
    ])

    const currentPhotos = photos.filter((photo) => photo.category === category)

    return (
        <div>
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img src={require(`../../assets/small/${category}/${i}.jpg`)} alt={image.name} className="img-thumbnail mx-1" key={image.name} />
                ))}
            </div>
        </div>
    );
}

export default PhotoList;