import React, { useState } from "react";

function Buku({ slides }) {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const handleIndex = (id) => {
        setSelectedIndex(id);
    };
    return (
        <div className="grid grid-cols-6 gap-5 mb-10 py-10">
            {slides.map((slide) => (
                <div
                    key={slide.id}
                    className={`cursor-pointer relative overflow-hidden w-full h-[300px] rounded-md hover:scale-y-[112%] hover:scale-x-[110%] hover:-mt-3 ${
                        selectedIndex === slide.id ? "group" : ""
                    }`}
                    onMouseOver={() => handleIndex(slide.id)}
                    onMouseLeave={() => setSelectedIndex(null)}
                >
                    <img
                        src={slide.imageUrl}
                        alt=""
                        className="transition-all duration-100 w-full h-[240px] object-cover rounded-md group-hover:h-[300px] group-hover:scale-115"
                    />
                    <div
                        className={`absolute inset-0 bg-gradient-to-t from-black to-transparent ${
                            selectedIndex === slide.id ? "block" : "hidden"
                        }`}
                    ></div>
                    <p className="text-[13px] group-hover:hidden mt-2 z-50 font-bold w-full h-[40px] line-clamp-2 capitalize">
                        {slide.caption}
                    </p>
                    <div
                        className={`absolute top-[18%] left-[30%] ${
                            selectedIndex === slide.id ? "block" : "hidden"
                        }`}
                    >
                        <img src="/bookmark.png" alt="" className="w-20 h-20" />
                    </div>
                    <div
                        className={`absolute bottom-5 left-2 ${
                            selectedIndex === slide.id ? "block" : "hidden"
                        }`}
                    >
                        <p className="text-[13px] text-white font-bold w-full h-[40px] line-clamp-2">
                            {slide.tahun}
                        </p>
                        <p className="-mt-5 text-[13px] text-white font-bold w-full h-[40px] line-clamp-2 capitalize">
                            {slide.caption}
                        </p>
                        <div className="flex gap-2">
                            <p className="mt-5 text-white text-[10px] w-20 text-center backdrop-opacity-10 bg-white/10 p-2 rounded-lg truncate">
                                {slide.kategori}
                            </p>
                            <p className="mt-5 text-white text-[10px] w-20 text-center backdrop-opacity-10 bg-white/10 p-2 rounded-lg truncate">
                                {slide.edisi}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Buku;
