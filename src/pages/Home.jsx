import React from 'react';
import FeaturedGamesCarousel from '../components/home/FeaturedGamesCarousel';
import staticData from '../static/index.js';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';

const { featuredGames } = staticData;

export default function Home() {
    return (
        <div>

            <HeroSection />
            <FeaturedGamesCarousel featuredGames={featuredGames} className="" />
            <StatsSection />

        </div>
    );
}
