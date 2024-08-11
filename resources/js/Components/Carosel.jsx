import { url } from "@/Data/Url";
import React, { useState, useRef, useEffect } from "react";

function Carosel({ data }) {
    const slides = (data || []).map((item, index) => ({
        id: index + 1,
        imageUrl: item.imageUrl || "",
        caption: item.caption || "No Caption",
        kategori: item.kategori || "Unknown Category",
        penerbit: item.penerbit || "Unknown Publisher",
        tahun: item.tahun || "Unknown Year",
        edisi: item.edisi || "Unknown Edition",
        desc: item.desc || "No Description",
    }));

    const [selectedIndex, setSelectedIndex] = useState(slides[0]?.id || 1);
    const [loading, setLoading] = useState(true);
    const [dominantColor, setDominantColor] = useState("#179BAE");
    const canvasRef = useRef(null);

    useEffect(() => {
        const loadImage = () => {
            const image = new Image();
            image.crossOrigin = "Anonymous";
            image.src = slides[selectedIndex - 1].imageUrl
                ? url + slides[selectedIndex - 1].imageUrl
                : "";

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

            image.onerror = () => {
                setDominantColor("#179BAE");
                setLoading(false);
            };
        };

        if (slides.length > 0 && slides[selectedIndex - 1].imageUrl) {
            loadImage();
        } else {
            setDominantColor("#179BAE");
            setLoading(false);
        }
    }, [selectedIndex, slides]);

    const analyzeColors = (pixelData) => {
        const colorMap = {};
        for (let i = 0; i < pixelData.length; i += 4) {
            const [r, g, b] = pixelData.slice(i, i + 3);
            const hexColor = rgbToHex(r, g, b);
            colorMap[hexColor] = (colorMap[hexColor] || 0) + 1;
        }
        const sortedColors = Object.keys(colorMap).sort(
            (a, b) => colorMap[b] - colorMap[a]
        );
        setDominantColor(sortedColors[0] || "#179BAE");
        setLoading(false);
    };

    const rgbToHex = (r, g, b) => {
        return (
            "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    };

    useEffect(() => {
        const autoPlay = setTimeout(() => {
            setSelectedIndex((prevIndex) =>
                prevIndex === slides.length ? 1 : prevIndex + 1
            );
            setLoading(true);
        }, 3000);

        return () => clearTimeout(autoPlay);
    }, [selectedIndex, slides.length]);

    return (
        <div>
            <canvas ref={canvasRef} style={{ display: "none" }} />
            {slides.map((slide) => (
                <div
                    key={slide.id}
                    style={{
                        display: slide.id === selectedIndex ? "block" : "none",
                    }}
                >
                    <div className="relative">
                        <img
                            src={
                                (slide.imageUrl === "null") |
                                (slide.imageUrl === null)
                                    ? "/default-book.jpg"
                                    : url + slide.imageUrl
                            }
                            alt=""
                            className={`transition-all duration-1000 w-full h-screen object-cover ${
                                loading ? "opacity-0" : "opacity-1"
                            }`}
                        />
                        <div className="absolute z-30 bottom-72 left-5 md:left-20">
                            <h1 className="font-black text-white text-xl md:text-3xl uppercase w-[500px] truncate">
                                {slide.caption}
                            </h1>
                            <div className="mt-10 flex flex-row gap-5">
                                <p className="text-xs text-white backdrop-opacity-10 bg-white/20 p-2 rounded-lg">
                                    {slide.kategori}
                                </p>
                                <p className="text-xs text-white backdrop-opacity-10 bg-white/20 p-2 rounded-lg">
                                    {slide.penerbit} | {slide.tahun}
                                </p>
                                <p className="text-xs text-white backdrop-opacity-10 bg-white/20 p-2 rounded-lg">
                                    {slide.edisi}
                                </p>
                            </div>
                            <div className="mt-5 w-[300px] md:w-[500px] h-20">
                                <p className="text-xs text-white line-clamp-5">
                                    {slide.desc}
                                </p>
                            </div>
                        </div>
                        <div className="absolute z-20 -bottom-1 inset-0 bg-gradient-to-t from-white from-10% via-white/50 via-30% to-transparent to-90% w-full h-full"></div>
                        <div
                            className="absolute inset-0 w-full h-full"
                            style={{
                                background: `linear-gradient(90deg, ${dominantColor} 25%, rgba(255,143,167,0.03))`,
                            }}
                        ></div>
                    </div>
                </div>
            ))}
            <div className="absolute bottom-64 left-5 md:left-20">
                <div className="flex justify-center gap-1 mt-10">
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className={`relative overflow-hidden transition-all duration-1000 h-[5px] rounded-full ${
                                slide.id === selectedIndex
                                    ? "bg-white/30 w-10"
                                    : "bg-white w-[5px]"
                            }`}
                            onClick={() => setSelectedIndex(slide.id)}
                        >
                            <div
                                className={`transition-all duration-[4000ms] h-2 rounded-full ${
                                    slide.id === selectedIndex
                                        ? "w-full"
                                        : "w-0"
                                }`}
                            >
                                <div
                                    className="inset-0 bg-white h-2"
                                    style={{
                                        width: `${
                                            slide.id === selectedIndex
                                                ? "100%"
                                                : "0%"
                                        }`,
                                        transition: "width 1s ease-in-out",
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Carosel;
