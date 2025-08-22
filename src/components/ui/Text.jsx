import React from "react";

const Text = ({ children, className = '' }) => {
    return (
        <p className={`text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl py-4 ${className}`}>
            {children}
        </p>
    );
};

export default Text;