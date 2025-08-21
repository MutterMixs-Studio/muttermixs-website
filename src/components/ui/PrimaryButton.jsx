import React from "react";
import Button from "./Button";

const PrimaryButton = ({ className = '', ...props }) => {
    return (
        <Button
            className={`bg-[#3c6e71] hover:bg-[#335a5d] ${className}`}
            {...props}
        />
    );
};

export default PrimaryButton;
