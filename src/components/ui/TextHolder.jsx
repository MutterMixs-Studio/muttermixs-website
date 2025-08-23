import React from "react";

const TextHeader = ({ children, className = "" }) => {
    return (
        <div className={`
      w-full
      px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20
      mx-auto
      max-w-7xl
      ${className}
    `}>
            {children}
        </div>
    );
};

export default TextHeader;
