import React from "react";
import GameShowcase from "../components/games/GameShowcase";
import staticData from '../static/index.js';

const { featuredGames } = staticData;

export default function Games() {
    return (
        <div>
            <GameShowcase featuredGames={featuredGames} />
        </div>
    );
}
