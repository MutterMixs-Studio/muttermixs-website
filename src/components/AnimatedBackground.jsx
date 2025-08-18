import React from 'react';

const AnimatedBackground = ({ mousePosition }) => (
    <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${2 + Math.random() * 2}s`
                    }}
                />
            ))}
        </div>
        <div
            className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl transition-all duration-300 ease-out pointer-events-none"
            style={{
                left: mousePosition.x - 192,
                top: mousePosition.y - 192
            }}
        />
    </div>
);

export default AnimatedBackground;
