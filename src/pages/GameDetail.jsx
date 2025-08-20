import { useParams } from "react-router-dom";
import staticData from '../static/index.js';

const { featuredGames } = staticData;

export default function GameDetail() {
    const { id } = useParams();

    // find the game by slug
    const game = featuredGames.find((g) => g.slug === id);

    if (!game) {
        return (
            <div className="text-center">
                <h1 className="text-2xl font-bold">Game Not Found</h1>
                <p className="text-gray-400 mt-2">
                    Sorry, this game doesn’t exist in our catalog.
                </p>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto text-center space-y-6">
            <h1 className="text-3xl font-bold">{game.title}</h1>
            <img src={game.image} alt={game.title} className="rounded-xl shadow-lg mx-auto" />
            <p className="text-gray-300">{game.description}</p>
            <p className="italic text-sm text-gray-400">Status: {game.status} | Genre: {game.genre}</p>

            <a
                href="#"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-2xl shadow-lg transition"
            >
                View on {game.store}
            </a>
        </div>
    );
}
