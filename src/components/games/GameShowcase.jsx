import React from "react";
import GameCard from "./GameCard";
import { useState } from "react";

const GameShowcase = ({ featuredGames, hoveredGame, setHoveredGame, className = "" }) => {
    return (
        <div className="px-4 pb-16">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {featuredGames.map((game, index) => (
                        <GameCard
                            key={game.slug}
                            game={game}
                            isHovered={hoveredGame === index}
                            onHover={() => setHoveredGame(index)}
                            onLeave={() => setHoveredGame(null)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GameShowcase;