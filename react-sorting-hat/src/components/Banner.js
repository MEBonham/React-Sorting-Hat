import React from "react";
import "./Banner.css";

const Banner = props => {
    switch (props.progress) {
        case 0:
            return (
                <div className="banner">
                    <h1>Sorting Hat App</h1>
                    <img src="../hogwartsCrest.gif" alt="Hogwarts Crest" />
                    <button onClick={props.advance}>Take the Quiz!</button>
                </div>
            );
            break;
        case 1:
            return (
                <form className="banner">
                    <h1>Sorting Hat App</h1>
                    <h2>If you were to save the world, how would you do it?</h2>
                    <ul>
                        <li><input type="radio" name="q1" value="slyth" /> By leadership: keeping other people from doing stupid things.</li>
                        <li><input type="radio" name="q1" value="gryff" /> Through great heroic deeds of bravery.</li>
                        <li><input type="radio" name="q1" value="huff" /> I would start a grass-roots movement focused on people being kinder to each other.</li>
                        <li><input type="radio" name="q1" value="raven" /> I would have a keen new idea.</li>
                    </ul>
                    <button type="submit" onClick={props.processAnswer}>Next</button>
                </form>
            );
            break;
    }
}

export default Banner;