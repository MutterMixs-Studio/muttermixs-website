import React from "react";

const TextHeader = ({ children, className = '' }) => {
    return (
        <h1 className={`text-white ${className}`}>
            {children}
        </h1>
    );
};

export default TextHeader;