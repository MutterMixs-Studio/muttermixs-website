import React from "react";
import { useState, useEffect } from "react";
import TextHeader from "../ui/TextHeader";
import Text from "../ui/Text";

const HeroSection = () => {
    const [currentWord, setCurrentWord] = useState(0);
    const words = ['Innovation', 'Creativity', 'Excellence', 'Adventure'];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Studio logo/name */}
                <div className="mb-8 sm:mb-12">
                    <TextHeader className="text-5xl sm:text-6xl lg:text-8xl font-bold bg-clip-text text-transparent mb-4 tracking-tight">
                        MutterMixs
                    </TextHeader>
                    <div className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light tracking-wider">
                        STUDIO
                    </div>
                </div>

                {/* Animated tagline */}
                <div className="mb-12 sm:mb-16">
                    <div className="text-2xl sm:text-3xl lg:text-4xl text-white mb-6 font-medium">
                        Crafting Games with{' '}
                        <span className="inline-block min-w-[200px] text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text font-bold">
                            {words[currentWord]}
                        </span>
                    </div>
                    <Text className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                        We push the boundaries of interactive entertainment, creating immersive worlds
                        that captivate players and redefine gaming experiences.
                    </Text>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16">
                    <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                        <span className="flex items-center justify-center">
                            Explore Our Games
                            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                            </svg>
                        </span>
                    </button>
                    <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                        About Our Studio
                    </button>
                </div>
            </div>
        </section>
    );
};
export default HeroSection;