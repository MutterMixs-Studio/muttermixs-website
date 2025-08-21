import React from "react";
import Button from "./Button";

const SecondaryButton = ({ className = '', ...props }) => {
    return (
        <Button
            className={`bg-[#284b63] hover:bg-[#1f3b4d] ${className}`}
            {...props}
        />
    );
};

export default SecondaryButton;
