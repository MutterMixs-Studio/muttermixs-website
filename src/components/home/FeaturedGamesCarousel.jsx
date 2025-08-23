import React from "react";
import { useEffect, useState } from "react";
import Button from "../ui/Button";

const FeaturedGamesCarousel = ({ featuredGames, className }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [imageLoadStates, setImageLoadStates] = useState({});

    const games = featuredGames;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % games.length)
        }, 20000)
        return () => clearInterval(timer)
    }, [games.length])

    // Preload images and track loading states
    useEffect(() => {
        games.forEach((game, index) => {
            const img = new Image();
            img.onload = () => {
                setImageLoadStates(prev => ({
                    ...prev,
                    [index]: 'loaded'
                }));
            };
            img.onerror = () => {
                setImageLoadStates(prev => ({
                    ...prev,
                    [index]: 'error'
                }));
            };
            img.src = game.image;

            // Set initial loading state
            setImageLoadStates(prev => ({
                ...prev,
                [index]: 'loading'
            }));
        });
    }, [games]);

    const ImageComponent = ({ game, index }) => {
        const loadState = imageLoadStates[index];

        return (
            <div className="relative w-full h-full bg-gray-900">
                {/* Loading placeholder */}
                {loadState === 'loading' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/50 to-cyan-900/50">
                        <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 border-t-2 border-b-2 border-[#3c6e71]"></div>
                    </div>
                )}

                {/* Error placeholder */}
                {loadState === 'error' && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                        <div className="text-3xl sm:text-4xl lg:text-6xl mb-2 sm:mb-4">🎮</div>
                        <div className="text-gray-400 text-sm sm:text-base">Game Image</div>
                    </div>
                )}

                {/* Actual image */}
                {loadState === 'loaded' && (
                    <img
                        src={game.image}
                        alt={game.title}
                        className="w-full h-full object-cover object-center"
                        style={{
                            filter: 'brightness(0.8) contrast(1.1)',
                        }}
                    />
                )}

                {/* Enhanced gradient overlay - stronger on mobile for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/25 to-transparent sm:from-black/25 sm:via-black/40 sm:to-transparent">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                </div>
            </div>
        );
    };

    return (
        <section className={`relative z-10 px-3 sm:px-6 ${className}`}>
            <div className="max-w-7xl mx-auto">
                {/* Responsive carousel container with better mobile heights */}
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl">
                    {games.map((game, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide
                                ? 'opacity-100 scale-100 pointer-events-auto'
                                : 'opacity-0 scale-105 pointer-events-none'
                                }`}
                        >
                            <ImageComponent game={game} index={index} />

                            {/* Mobile-optimized content overlay */}
                            <div className="absolute inset-0">
                                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12">
                                    {/* Mobile: Stack layout, Desktop: Flex layout */}
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 sm:gap-4">
                                        <div className="flex-1 min-w-0">
                                            {/* Tags - responsive sizing and wrapping */}
                                            <div className="mb-2 sm:mb-3 lg:mb-4 flex flex-wrap gap-1 sm:gap-2">
                                                <span className="px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 bg-gradient-to-r from-[#3c6e71] to-[#284b63] rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm">
                                                    {game.status}
                                                </span>
                                                {game.genre.slice(0, 2).map((genreItem, genreIndex) => (
                                                    <span key={genreIndex} className="px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 bg-transparent border border-[#d9d9d9] rounded-full text-xs sm:text-sm font-semibold text-[#d9d9d9] backdrop-blur-sm">
                                                        {genreItem}
                                                    </span>
                                                ))}
                                                <span className="px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 bg-transparent border border-[#d9d9d9] rounded-full text-xs sm:text-sm font-semibold text-[#d9d9d9] backdrop-blur-sm">
                                                    {game.platform}
                                                </span>
                                            </div>

                                            {/* Title - responsive sizing */}
                                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2 lg:mb-4 drop-shadow-lg leading-tight">
                                                {game.title}
                                            </h3>

                                            {/* Description - hidden on very small screens, shown on larger */}
                                            <p className="hidden xs:block text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl leading-relaxed drop-shadow-md line-clamp-2 sm:line-clamp-3">
                                                {game.description}
                                            </p>

                                            {/* Shorter description for very small screens */}
                                            <p className="block xs:hidden text-sm text-gray-300 drop-shadow-md">
                                                {game.description.split('.')[0] + '.'}
                                            </p>
                                        </div>

                                        {/* Button - responsive sizing and positioning */}
                                        <div className="flex-shrink-0 sm:ml-4 lg:ml-6">
                                            <Button
                                                className="w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 
                                            bg-gradient-to-r from-[#3c6e71] to-[#284b63] rounded-full text-sm sm:text-base
                                             font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                                                to={`/games/${game.slug}`}
                                            >
                                                Learn More
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Thumbnail preview strip - responsive sizing */}
                <div className="relative z-20 mt-3 sm:mt-4 lg:mt-5 pt-2 sm:pt-3 lg:pt-4 flex justify-center space-x-2 sm:space-x-3 lg:space-x-4 overflow-x-auto pb-2 sm:pb-3 lg:pb-4">
                    {games.map((game, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`flex-shrink-0 w-16 h-10 sm:w-20 sm:h-12 lg:w-24 lg:h-16 rounded-md sm:rounded-lg overflow-hidden transition-all duration-300 shadow-md lg:shadow-lg ${index === currentSlide
                                ? 'ring-1 sm:ring-2 ring-[#3c6e71] scale-105 sm:scale-110'
                                : 'opacity-60 hover:opacity-100 hover:scale-105'
                                }`}
                        >
                            <img
                                src={game.image}
                                alt={game.title}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedGamesCarousel;