import React from "react";


const StatsSection = () => {
    const stats = [
        { number: '10+', label: 'Players Worldwide' },
        { number: '1', label: 'Games Published' },
        { number: '1', label: 'Years of Excellence' },
        { number: '100%', label: 'Positive Reviews' }
    ];

    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                                {stat.number}
                            </div>
                            <div className="text-gray-400 text-sm sm:text-base lg:text-lg font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default StatsSection;