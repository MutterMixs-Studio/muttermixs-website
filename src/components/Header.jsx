import Navbar from "./Navbar";

export default function Header() {

    return (
        <header className="sticky top-0 z-50">
            {/* Top bar with additional info */}
            <div className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-2 text-sm">
                        <div className="text-gray-400">
                            Welcome to MutterMixs Studio
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                                Support
                            </a>
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                                FAQ
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Navbar />
        </header>
    );
}