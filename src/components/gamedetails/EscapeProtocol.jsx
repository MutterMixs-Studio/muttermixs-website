import React from "react";
import staticData from '../../static/index.js';
import TextHolder from "../ui/TextHolder.jsx";
import TextHeader from "../ui/TextHeader.jsx";
import ImageText from "../ui/ImageText.jsx";
import Text from "../ui/Text.jsx";

const { featuredGames } = staticData;

const EscapeProtocol = () => {
    const game = featuredGames.find((g) => g.slug === "escape-protocol");

    return (
        <>
            <TextHeader className="text-4xl font-bold py-4">
                {game.title}
            </TextHeader>

        </>
    );
};

export default EscapeProtocol;