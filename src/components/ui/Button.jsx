import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, onClick, className = '', to, href, ...props }) => {
    const baseClasses = `py-2 px-4 rounded-md font-medium text-white ${className}`;

    // If 'to' prop is provided, render as React Router Link
    if (to) {
        return (
            <Link
                to={to}
                className={baseClasses}
                {...props}
            >
                {children}
            </Link>
        );
    }

    // If 'href' prop is provided, render as external link
    if (href) {
        return (
            <a
                href={href}
                className={baseClasses}
                {...props}
            >
                {children}
            </a>
        );
    }

    // Default: render as button
    return (
        <button
            onClick={onClick}
            className={baseClasses}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;