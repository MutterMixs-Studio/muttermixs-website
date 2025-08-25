import React, { useState, useMemo } from "react";
import staticData from '../static/index.js';
import TextHeader from "../components/ui/TextHeader";
import TextHolder from "../components/ui/TextHolder";
import NewsCard from "../components/news/NewsCard";

const { newsPosts } = staticData;

export default function News() {
    const [currentPage, setCurrentPage] = useState(0);
    const postsPerPage = 5;

    // Sort news posts by date (most recent first)
    const sortedPosts = useMemo(() => {
        return [...newsPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
    }, [newsPosts]);

    // Calculate pagination
    const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
    const startIndex = currentPage * postsPerPage;
    const currentPosts = sortedPosts.slice(startIndex, startIndex + postsPerPage);

    const goToNextPage = () => {
        setCurrentPage(prev => (prev + 1) % totalPages);
    };

    const goToPreviousPage = () => {
        setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
    };

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    return (
        <TextHolder>
            <TextHeader className="text-4xl font-bold py-6 text-center">
                Latest News
            </TextHeader>

            {/* News List - Full Width */}
            <div className="flex flex-col gap-6 py-6">
                {currentPosts.map((post) => (
                    <NewsCard key={post.id} post={post} />
                ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 py-6">
                    {/* Previous Button */}
                    <button
                        onClick={goToPreviousPage}
                        className="p-3 rounded-lg bg-gradient-to-r from-[#3c6e71] to-[#284b63] text-white hover:from-[#284b63] hover:to-[#3c6e71] transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={totalPages <= 1}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Page Indicators */}
                    <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => goToPage(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentPage
                                    ? 'bg-gradient-to-r from-[#3c6e71] to-[#284b63] scale-125'
                                    : 'bg-gray-600 hover:bg-gray-500'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={goToNextPage}
                        className="p-3 rounded-lg bg-gradient-to-r from-[#3c6e71] to-[#284b63] text-white hover:from-[#284b63] hover:to-[#3c6e71] transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={totalPages <= 1}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Page Info */}
                    <div className="ml-4 text-sm text-[#d9d9d9]">
                        Page {currentPage + 1} of {totalPages}
                    </div>
                </div>
            )}

            {/* No news message */}
            {sortedPosts.length === 0 && (
                <div className="text-center py-12">
                    <div className="text-6xl mb-4">📰</div>
                    <h3 className="text-xl font-semibold text-white mb-2">No News Yet</h3>
                    <p className="text-[#d9d9d9]">Check back later for the latest updates!</p>
                </div>
            )}
        </TextHolder>
    );
}