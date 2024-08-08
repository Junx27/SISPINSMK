import { url } from "@/Data/Url";
import React from "react";
import { useState } from "react";

function Slider({ data }) {
    const [slide, setSlide] = useState(false);
    const [panjangData, setPanjangData] = useState(data.length);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const handleIndex = (id) => {
        setSelectedIndex(id);
    };

    const handleClickKanan = () => {
        setSlide(true);
        setPanjangData(data.length + 1);
    };
    const handleClickKiri = () => {
        setSlide(false);
        setPanjangData(panjangData - 1);
    };
    return (
        <div className="relative">
            <div
                className={`transition-all duration-700 ${
                    slide ? `-ml-[1220px]` : "ml-[70px]"
                }`}
            >
                <div className="flex flex-row gap-5 px-[10px] pt-10 h-[355px] overflow-hidden">
                    {data.map((row, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer relative rounded-md hover:scale-y-[112%] hover:scale-x-[110%] hover:-mt-3 ${
                                selectedIndex === row.id ? "group" : ""
                            }`}
                            onMouseOver={() => handleIndex(row.id)}
                            onMouseLeave={() => setSelectedIndex(null)}
                        >
                            <div className="w-[196px] h-[240px]">
                                <img
                                    src={
                                        (row.imageUrl === "null") |
                                        (row.imageUrl === null)
                                            ? "/default-book.jpg"
                                            : url + row.imageUrl
                                    }
                                    alt=""
                                    className="transition-all duration-100 w-full h-[240px] object-cover rounded-md group-hover:h-[300px] group-hover:scale-115"
                                />
                                <div
                                    className={`absolute inset-0 bg-gradient-to-t w-full h-[300px] rounded-md from-black to-transparent ${
                                        selectedIndex === row.id
                                            ? "block"
                                            : "hidden"
                                    }`}
                                ></div>
                                <p className="text-[13px] group-hover:hidden mt-2 z-50 font-bold w-full h-[40px] line-clamp-2 capitalize">
                                    {row.caption}
                                </p>
                                <div
                                    className={`absolute bottom-10 left-2 ${
                                        selectedIndex === row.id
                                            ? "block"
                                            : "hidden"
                                    }`}
                                >
                                    <p className="text-[13px] text-white font-bold w-full h-[40px] line-clamp-2">
                                        {row.tahun}
                                    </p>
                                    <p className="-mt-5 text-[13px] text-white font-bold w-full h-[40px] line-clamp-2 capitalize">
                                        {row.caption}
                                    </p>
                                    <div className="flex gap-2">
                                        <p className="mt-5 text-white text-[10px] w-20 text-center backdrop-opacity-10 bg-white/10 p-2 rounded-lg truncate">
                                            {row.kategori}
                                        </p>
                                        <p className="mt-5 text-white text-[10px] w-20 text-center backdrop-opacity-10 bg-white/10 p-2 rounded-lg truncate">
                                            {row.edisi}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                {panjangData > data.length && (
                    <button
                        className="absolute z-30 top-10 hover:bg-gradient-to-r from-black to-transparent text-white text-2xl h-[240px] w-[50px] rounded-r-md font-bold p-2"
                        onClick={handleClickKiri}
                    >
                        <img
                            src="/arrowwhite.png"
                            alt=""
                            className="-rotate-90"
                        />
                    </button>
                )}
                {panjangData === data.length && (
                    <button
                        className="absolute z-30 top-10 right-0 hover:bg-gradient-to-l from-black to-transparent text-white text-2xl h-[240px] w-[50px] rounded-l-md font-bold p-2"
                        onClick={handleClickKanan}
                    >
                        <img
                            src="/arrowwhite.png"
                            alt=""
                            className="rotate-90"
                        />
                    </button>
                )}
            </div>
        </div>
    );
}

export default Slider;
