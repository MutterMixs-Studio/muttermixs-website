import React from "react";

const GameCard = ({ game, isHovered, onHover, onLeave, className = "" }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case "Out Now":
                return "bg-gradient-to-r from-[#3c6e71] to-[#284b63] text-white";
            case "In Development":
                return "bg-gradient-to-r from-[#3c6e71] to-[#284b63] text-white";
            case "Coming Soon":
                return "bg-gradient-to-r from-[#3c6e71] to-[#284b63] text-white";
            default:
                return "bg-gradient-to-r from-[#3c6e71] to-[#284b63] text-white";
        }
    };

    const getStoreColor = (store) => {
        return "bg-gradient-to-r from-[#3c6e71] to-[#284b63] hover:from-[#284b63] hover:to-[#3c6e71]";
    };

    return (
        <div
            className={`
                group relative bg-gradient-to-b from-gray-800 to-gray-900 
                rounded-lg overflow-hidden shadow-lg transition-all duration-300 
                hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2
                border border-gray-700 hover:border-blue-500/50
                ${isHovered ? 'transform scale-105' : ''}
            `}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            {/* Game Image */}
            <div className="relative h-48 md:h-56 overflow-hidden bg-gray-800 flex items-center justify-center">
                <img
                    src={game.image}
                    alt={game.title}
                    className="w-full min-h-full object-cover sm:object-contain transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=500&fit=crop';
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/50 transition-all duration-300" />

                {/* Status Badge */}
                <div className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(game.status)}`}>
                    {game.status}
                </div>
            </div>

            {/* Game Info */}
            <div className="p-4 space-y-3">
                {/* Title and Platform */}
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white transition-colors">
                        {game.title}
                    </h3>
                    <span className="text-xs bg-gray-700 text-[#d9d9d9] px-2 py-1 rounded">
                        {game.platform}
                    </span>
                </div>

                {/* Description */}
                <p className="text-[#d9d9d9] text-sm leading-relaxed line-clamp-2">
                    {game.description}
                </p>

                {/* Genres */}
                <div className="flex flex-wrap gap-1">
                    {game.genre.map((genre, index) => (
                        <span
                            key={index}
                            className="text-xs border border-[#d9d9d9] text-[#d9d9d9] px-2 py-1 rounded-full font-semibold"
                        >
                            {genre}
                        </span>
                    ))}
                </div>

                {/* Store Button */}
                <div className="pt-2">
                    <button className={`
                        w-full py-2 px-4 rounded font-semibold text-white text-sm
                        transition-all duration-200 transform active:scale-95
                        ${getStoreColor(game.store)}
                    `}>
                        {game.status === "Out Now" ? `Available on ${game.store}` : `Wishlist on ${game.store}`}
                    </button>
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3c6e71]/10 via-[#284b63]/10 to-[#3c6e71]/10 animate-pulse" />
            </div>
        </div>
    );
};

export default GameCard;