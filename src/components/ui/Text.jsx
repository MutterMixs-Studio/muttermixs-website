import React from "react";

const Text = ({ children, className = '' }) => {
    return (
        <p className={`text-gray-400 text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg ${className}`}>
            {children}
        </p>
    );
};

export default Text;