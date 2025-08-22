import { useParams } from "react-router-dom";
import staticData from '../static/index.js';
import GameDetailWrapper from "../components/gamedetails/GameDetailWrapper.jsx";

const { featuredGames } = staticData;

export default function GameDetail() {
    const { slug } = useParams();
    const game = featuredGames.find((g) => g.slug === slug);

    return (
        <div className="max-w-2xl mx-auto text-center space-y-6">
            <GameDetailWrapper id={slug} />
        </div>
    );
}
