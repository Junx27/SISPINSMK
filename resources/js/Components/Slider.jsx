import React from "react";
import { useState } from "react";

function Slider() {
    const data = [
        {
            id: 1,
            imageUrl:
                "https://w0.peakpx.com/wallpaper/364/693/HD-wallpaper-portrait-display-vertical-yin-and-yang-artwork-minimalism-digital-art-chinese-characters.jpg",
            caption: "Ketenangan dalam mencari jati diri",
            kategori: "Ilmu terapan",
            penerbit: "Jurnal Bisnis dan Manajemen (JURBISMAN)",
            tahun: "2018",
            edisi: "kelas XII Semester 1",
            desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali  melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
        },
        {
            id: 2,
            imageUrl:
                "https://i.pinimg.com/736x/c9/7e/e1/c97ee10c43feb76184d200736b71b8b8.jpg",
            caption:
                "Bermuka dua untuk mencari ketenangan jiwa seorang diri dalam kehidupan",
            kategori: "Ilmu terapan",
            penerbit: "Jurnal Bisnis dan Manajemen (JURBISMAN)",
            tahun: "2021",
            edisi: "kelas XII Semester 1",
            desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak  yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
        },
        {
            id: 3,
            imageUrl:
                "https://i.pinimg.com/736x/3d/34/2c/3d342cec18cac749f92c7fa0337c13c3.jpg",
            caption: "Kaneki episode 13 subtitle indonesia volume 23 terupdate",
            kategori: "Ilmu terapan",
            penerbit: "Jurnal Bisnis dan Manajemen (JURBISMAN)",
            tahun: "2024",
            edisi: "kelas XII Semester 1",
            desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda  tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
        },
        {
            id: 4,
            imageUrl:
                "https://w0.peakpx.com/wallpaper/492/528/HD-wallpaper-dark-vertical-portrait-display-thumbnail.jpg",
            caption: "Kesenian kehidupan",
            kategori: "Ilmu terapan",
            penerbit: "Jurnal Bisnis dan Manajemen (JURBISMAN)",
            tahun: "2022",
            edisi: "kelas XII Semester 1",
            desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang  ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
        },
        {
            id: 5,
            imageUrl:
                "https://i.pinimg.com/736x/aa/a9/42/aaa9428e3fc7f85a9472ce4fcde6673d.jpg",
            caption: "fantasi dunia menerkam segalanya",
            kategori: "Ilmu terapan",
            penerbit: "Jurnal Bisnis dan Manajemen (JURBISMAN)",
            tahun: "2020",
            edisi: "kelas XII Semester 1",
            desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang  ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
        },
        {
            id: 6,
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdYs_XkSh6TWe-G6K3LCPPFGsDkGOk6LGt_g&s",
            caption: "Kesenjangan sosial bagi kehidupan",
            kategori: "Ilmu terapan",
            penerbit: "Jurnal Bisnis dan Manajemen (JURBISMAN)",
            tahun: "2017",
            edisi: "kelas XII Semester 1",
            desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang  ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
        },
        {
            id: 7,
            imageUrl:
                "https://img.joomcdn.net/cfa80a4b34e4d2f54ee081ce82d547bdca018878_original.jpeg",
            caption: "Ketenangan dalam mencari jati diri",
            kategori: "Ilmu terapan",
            penerbit: "Jurnal Bisnis dan Manajemen (JURBISMAN)",
            tahun: "2018",
            edisi: "kelas XII Semester 1",
            desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali  melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
        },
        {
            id: 8,
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUOUyrrYheQ0QQrDxmgJUXNeFjQck9GPYAYA&s",
            caption:
                "Bermuka dua untuk mencari ketenangan jiwa seorang diri dalam kehidupan",
            kategori: "Ilmu terapan",
            penerbit: "Jurnal Bisnis dan Manajemen (JURBISMAN)",
            tahun: "2021",
            edisi: "kelas XII Semester 1",
            desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak  yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
        },
        {
            id: 9,
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53qRLU8GhTdPMqHc0WJgJBzDjKzBYvGErSA&s",
            caption: "Kaneki episode 13 subtitle indonesia volume 23 terupdate",
            kategori: "Ilmu terapan",
            penerbit: "Jurnal Bisnis dan Manajemen (JURBISMAN)",
            tahun: "2024",
            edisi: "kelas XII Semester 1",
            desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda  tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
        },
        {
            id: 10,
            imageUrl:
                "https://i.pinimg.com/236x/65/cc/a1/65cca1866650e63a45feacd0297b6d7b.jpg",
            caption: "Kesenian kehidupan",
            kategori: "Ilmu terapan",
            penerbit: "Jurnal Bisnis dan Manajemen (JURBISMAN)",
            tahun: "2022",
            edisi: "kelas XII Semester 1",
            desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang  ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
        },
        {
            id: 11,
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb2M4qofJIby3EtTx7At3I8PI8k0FEK06yrA&s",
            caption: "fantasi dunia menerkam segalanya",
            kategori: "Ilmu terapan",
            penerbit: "Jurnal Bisnis dan Manajemen (JURBISMAN)",
            tahun: "2020",
            edisi: "kelas XII Semester 1",
            desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang  ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
        },
        {
            id: 12,
            imageUrl:
                "https://c4.wallpaperflare.com/wallpaper/227/583/604/anime-anime-girls-digital-art-artwork-2d-hd-wallpaper-preview.jpg",
            caption: "Kesenjangan sosial bagi kehidupan",
            kategori: "Ilmu terapan",
            penerbit: "Jurnal Bisnis dan Manajemen (JURBISMAN)",
            tahun: "2017",
            edisi: "kelas XII Semester 1",
            desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang  ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
        },
    ];
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
                                    src={row.imageUrl}
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
                                    className={`absolute top-[18%] left-[30%] ${
                                        selectedIndex === row.id
                                            ? "block"
                                            : "hidden"
                                    }`}
                                >
                                    <img
                                        src="/bookmark.png"
                                        alt=""
                                        className="w-20 h-20"
                                    />
                                </div>
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
