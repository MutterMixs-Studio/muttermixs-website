import React from 'react';

const Header = () => {
    return (
        <header className="relative z-50 p-6">
            <nav className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Logo / Studio Name */}
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    MutterMixs Studio
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-8">
                    {['Games', 'About', 'News', 'Careers'].map((item) => (
                        <button
                            key={item}
                            className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;
