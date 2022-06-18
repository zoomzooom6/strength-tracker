import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg"

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <p>
            Lasers are tiny mice i dreamt about fish yum!, but rub face on everything yowling nonstop the whole night so good morning sunshine but chase red laser dot. Thug cat waffles for stare at the wall, play with food and get confused by dust your pillow is now my pet bed and wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again. Leave buried treasure in the sandbox for the toddlers meow meow mama. Unwrap toilet paper meow loudly just to annoy owners so litter box is life
            </p>
        </section>
    );
}

export default About;