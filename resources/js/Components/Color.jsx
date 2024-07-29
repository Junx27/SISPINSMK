import React, { useState, useRef, useEffect } from "react";

const ColorDetector = () => {
    const imageUrl = "/cover.jpg"; // Adjust based on your actual file path
    const [dominantColor, setDominantColor] = useState(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const loadImage = () => {
            const image = new Image();
            image.crossOrigin = "Anonymous";
            image.src = imageUrl;
            image.onload = () => {
                const canvas = canvasRef.current;
                const ctx = canvas.getContext("2d");
                canvas.width = image.width;
                canvas.height = image.height;
                ctx.drawImage(image, 0, 0);
                const imageData = ctx.getImageData(
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );
                const pixelData = imageData.data;
                analyzeColors(pixelData);
            };
        };

        loadImage();
    }, []);

    const analyzeColors = (pixelData) => {
        const colorMap = {};
        for (let i = 0; i < pixelData.length; i += 4) {
            const [r, g, b] = pixelData.slice(i, i + 3);
            const hexColor = rgbToHex(r, g, b);
            if (colorMap[hexColor]) {
                colorMap[hexColor]++;
            } else {
                colorMap[hexColor] = 1;
            }
        }
        const sortedColors = Object.keys(colorMap).sort(
            (a, b) => colorMap[b] - colorMap[a]
        );
        setDominantColor(sortedColors[0]); // Set the most dominant color
    };

    const rgbToHex = (r, g, b) => {
        return (
            "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    };
    return (
        <div>
            <canvas ref={canvasRef} style={{ display: "none" }} />
            <div>
                <h3>Dominant Color:</h3>
                {dominantColor && (
                    <div
                        style={{
                            backgroundColor: dominantColor,
                            width: "50px",
                            height: "50px",
                            display: "inline-block",
                        }}
                    ></div>
                )}
            </div>
        </div>
    );
};

export default ColorDetector;
