import React from "react";

const Button = ({ children, onClick, className = '', ...props }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;