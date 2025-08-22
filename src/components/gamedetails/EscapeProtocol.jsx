import React from "react";
import staticData from '../../static/index.js';

const { featuredGames } = staticData;

const EscapeProtocol = () => {
    const game = featuredGames.find((g) => g.slug === "escape-protocol");

    return (
        <div>
            <h2>{game.title}</h2>
            <p>{game.description}</p>
        </div>
    );
};

export default EscapeProtocol;