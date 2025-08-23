import { useParams } from "react-router-dom";
import staticData from '../static/index.js';
import GameDetailWrapper from "../components/gamedetails/GameDetailWrapper.jsx";
import TextHolder from "../components/ui/TextHolder.jsx";

const { featuredGames } = staticData;

export default function GameDetail() {
    const { slug } = useParams();
    const game = featuredGames.find((g) => g.slug === slug);

    return (
        <TextHolder className="">
            <GameDetailWrapper id={slug} />
        </TextHolder>
    );
}
