import React from "react";
import staticData from '../../static/index.js';

const { featuredGames } = staticData;

const Blockline64 = () => {
    const game = featuredGames.find((g) => g.slug === "blockline64");

    return (
        <div>
            <h2>{game.title}</h2>
            <p>{game.description}</p>
        </div>
    );
};

export default Blockline64;
