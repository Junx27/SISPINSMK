import React, { useContext, useState } from "react";
import MyQRCodeComponent from "./QrCode";
import MyContext from "./CreateContext";
import { url } from "@/Data/Url";

function Buku({ slides }) {
    const { getId, setGetId } = useContext(MyContext);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [selectedQR, setSelectedQR] = useState(null);
    const handleIndex = (id) => {
        setSelectedIndex(id);
        setSelectedQR(handleQRcode(id));
        setGetId(id);
    };
    const handleQRcode = () => {
        if (selectedIndex) {
            const dataQRCode = slides.filter((row) => row.id === selectedIndex);
            return dataQRCode;
        }
        return [];
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
                        src={
                            (slide.imageUrl === "null") |
                            (slide.imageUrl === null)
                                ? "/default-book.jpg"
                                : url + slide.imageUrl
                        }
                        alt=""
                        className="w-full h-[240px] object-cover brightness-95 rounded-lg"
                    />
                    <div
                        className={`absolute inset-0 bg-gradient-to-t from-black to-transparent ${
                            selectedIndex === slide.id ? "block" : "hidden"
                        }`}
                    ></div>
                    <p className="text-[13px] group-hover:hidden mt-2 z-50 font-bold w-full h-[40px] line-clamp-2 capitalize">
                        {slide.caption}
                    </p>
                    <a
                        href={`/daftar-buku-detail/${getId}`}
                        className={`absolute z-50 top-0 p-10 ${
                            selectedIndex === slide.id ? "block" : "hidden"
                        }`}
                    >
                        <img src="/bookmark.png" alt="" className="w-20 ml-2" />
                    </a>
                    <div
                        className={`absolute inset-0 p-2 pt-[200px] ${
                            selectedIndex === slide.id ? "block" : "hidden"
                        }`}
                    >
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
                        <p className="text-[10px] mt-2 text-end px-3 text-white font-bold w-full">
                            {slide.tahun}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Buku;
