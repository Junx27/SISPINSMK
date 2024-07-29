import React, { useState, useRef, useEffect } from "react";

function Carosel() {
    const slides = [
        {
            id: 1,
            imageUrl: "/cover1.jpg",
            caption: "Teknologi untuk kehidupan",
            kategori: "Sains dan Teknik",
            penerbit: "Enlslikopedia Techology",
            tahun: "2019",
            edisi: "kelas XI Semester 1",
            desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali  melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
        },
        {
            id: 2,
            imageUrl: "/cover.jpg",
            caption: "Senja di pagi hari",
            kategori: "Karya Ilmiah",
            penerbit: "Cahaya Lentera",
            tahun: "2019",
            edisi: "kelas XII Semester 4",
            desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak  yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
        },
        {
            id: 3,
            imageUrl: "/cover2.jpg",
            caption: "manajemen waktu berbisnis",
            kategori: "Ekonomi dan Bisnis",
            penerbit: "Jurnal Bisnis dan Manajemen",
            tahun: "2019",
            edisi: "kelas XII Semester 1",
            desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda  tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
        },
        {
            id: 4,
            imageUrl: "/cover3.jpg",
            caption: "Mengenal Jauh lebih dalam kehidupan",
            kategori: "Karya Non-Ilmiah",
            penerbit: "Edukasi Mandiri",
            tahun: "2019",
            edisi: "kelas XII Semester 1",
            desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang  ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
        },
    ];

    const [selectedIndex, setSelectedIndex] = useState(slides[0].id); // Start with first slide
    const [loading, setLoading] = useState(true); // Initially set loading to true
    const [dominantColor, setDominantColor] = useState(""); // State to hold dominant color
    const canvasRef = useRef(null);

    useEffect(() => {
        const loadImage = () => {
            const image = new Image();
            image.crossOrigin = "Anonymous";
            image.src = slides[selectedIndex - 1].imageUrl; // Adjusted to use selectedIndex properly
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
    }, [selectedIndex, slides]);

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
        setDominantColor(sortedColors[0]);
        setLoading(false); // Set loading to false once image is loaded
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
            setLoading(true); // Set loading to true when changing slide
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
                            src={slide.imageUrl}
                            alt=""
                            className={`transition-all duration-1000 w-full h-screen object-cover ${
                                loading ? "opacity-0" : "opacity-1"
                            }`}
                        />
                        <div className="absolute z-30 bottom-72 left-20">
                            <h1 className="font-black text-white text-3xl uppercase w-[500px] truncate">
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
                            <div className="mt-5 w-[500px] h-20">
                                <p className="text-xs text-white line-clamp-5">
                                    {slide.desc}
                                </p>
                            </div>
                            <div className="mt-10 flex gap-5">
                                <a href="/admin/buku">
                                    <button className="font-bold flex items-center bg-white text-3xl p-4 rounded-lg">
                                        <img
                                            src="/bookmarkblack.png"
                                            alt=""
                                            className="w-10 h-10 mx-3"
                                        />
                                        Pinjam sekarang
                                    </button>
                                </a>
                                <a href="/register">
                                    <button className="text-white flex items-center font-bold backdrop-opacity-10 bg-white/20 text-3xl p-4 rounded-lg">
                                        <img
                                            src="/invitewhite.png"
                                            alt=""
                                            className="w-10 h-10 mx-3"
                                        />
                                        Daftar anggota
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="absolute z-20 inset-0 bg-gradient-to-t from-white from-10% via-white/50 via-30% to-transparent to-90% w-full h-full"></div>
                        <div
                            className="absolute inset-0 w-full h-full"
                            style={{
                                background: `linear-gradient(90deg, ${dominantColor} 25%, rgba(255,143,167,0.03))`,
                            }}
                        ></div>
                    </div>
                </div>
            ))}
            <div className="absolute bottom-64 left-20">
                <div className="flex justify-center gap-1 mt-10">
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className={`relative overflow-hidden transition-all duration-1000 h-[5px] rounded-full ${
                                slide.id === selectedIndex
                                    ? "bg-gray-400 w-10"
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
