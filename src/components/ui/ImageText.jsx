import React from "react";

const ImageText = ({
    image,
    imagePosition = "left",
    imageSize = "1/3", // default
    children,
    className = "",
}) => {
    const isLeft = imagePosition === "left";

    // Map supported sizes to Tailwind classes
    const sizeMap = {
        "1/4": "lg:w-1/4",
        "1/3": "lg:w-1/3",
        "1/2": "lg:w-1/2",
        "2/3": "lg:w-2/3",
        "3/4": "lg:w-3/4",
    };

    const imageWidth = sizeMap[imageSize] || sizeMap["1/3"];
    const textWidth = "lg:flex-1"; // let text take the remaining space

    return (
        <section className={`w-full ${className}`}>
            <div
                className={`max-w-7xl mx-auto flex flex-col lg:flex-row ${isLeft ? "" : "lg:flex-row-reverse"
                    } gap-8 items-center`}
            >
                {/* Image side */}
                <div className={`w-full ${imageWidth}`}>
                    <img
                        src={image}
                        alt=""
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Text side */}
                <div className={`w-full ${textWidth} text-gray-200 leading-relaxed`}>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default ImageText;
