import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/games", label: "Games" },
        { path: "/about", label: "About" },
        { path: "/news", label: "News" },
    ];

    return (
        <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0">
                        <Link
                            to="/"
                            className="flex items-center space-x-2"
                        >
                            <div className="w-full h-10 bg-gradient-to-br from-[#3c6e71] to-[#284b63] hover:from-[#2a4b52] hover:to-[#1f3b4d] rounded-lg flex items-center justify-center shadow-lg px-4">
                                <span className="text-[#d9d9d9] font-bold text-lg">MutterMixs Studio</span>
                            </div>

                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 ${isActive(link.path)
                                        ? "bg-[#284b63] text-white shadow-lg shadow-[#1f3b4d]"
                                        : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                                        }`}
                                >
                                    {link.label}

                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            to="/games"
                            className="bg-gradient-to-r from-[#3c6e71] to-[#284b63] hover:from-[#2a4b52] hover:to-[#1f3b4d] text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Play Now
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800/95 backdrop-blur-sm border-t border-gray-700">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${isActive(link.path)
                                    ? "bg-[#3c6e71] text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            to="/games"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2 mt-2 bg-gradient-to-r from-[#3c6e71] to-[#284b63] text-white text-center rounded-md font-medium"
                        >
                            Play Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
