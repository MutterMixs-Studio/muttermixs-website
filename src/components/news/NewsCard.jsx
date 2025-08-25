import React from "react";

const NewsCard = ({ post }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <article
            className={`
                group relative bg-gradient-to-b from-gray-800 to-gray-900 
                rounded-lg overflow-hidden shadow-lg transition-all duration-300 
                hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1
                border border-gray-700 hover:border-blue-500/50
                flex flex-col md:flex-row
            `}
        >
            {/* News Image */}
            {post.image && (
                <div className="relative h-48 md:h-auto md:w-1/3 lg:w-1/4 overflow-hidden bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-auto md:w-auto md:h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=500&fit=crop';
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/50 transition-all duration-300" />

                    {/* News Badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-[#3c6e71] to-[#284b63] text-white">
                        {post.tag.charAt(0).toUpperCase() + post.tag.slice(1)}
                    </div>
                </div>
            )}

            {/* News Content */}
            <div className="p-4 space-y-3 flex-1">
                {/* Title and Date */}
                <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold text-white transition-colors leading-tight">
                        {post.title}
                    </h3>
                    <span className="text-xs bg-gray-700 text-[#d9d9d9] px-2 py-1 rounded whitespace-nowrap">
                        {formatDate(post.date)}
                    </span>
                </div>

                {/* Description */}
                <p className="text-[#d9d9d9] text-sm leading-relaxed">
                    {post.description}
                </p>

                {/* Full Content */}
                <div className="pt-2 border-t border-gray-700/50">
                    <div className="text-[#d9d9d9] text-sm leading-relaxed whitespace-pre-line">
                        {post.content.trim()}
                    </div>
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3c6e71]/10 via-[#284b63]/10 to-[#3c6e71]/10 animate-pulse" />
            </div>
        </article>
    );
};

export default NewsCard;