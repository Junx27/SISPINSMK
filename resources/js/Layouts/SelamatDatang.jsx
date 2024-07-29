import Buku from "@/Components/Buku";
import Carosel from "@/Components/Carosel";
import Slider from "@/Components/Slider";
import { data } from "@/Data/DataBuku";
import React from "react";

function SelamatDatang() {
    const navbar = [
        {
            nama: "login",
            href: "/login",
        },
        {
            nama: "register",
            href: "/register",
        },
    ];
    return (
        <div>
            <div className="absolute z-50 py-2 w-full">
                <div className="flex px-10 justify-between items-center">
                    <div className="flex items-center">
                        <img
                            src="logo.png"
                            alt=""
                            className="w-[50px] h-[50px]"
                        />
                        <h1 className="font-bold text-white text-xl uppercase ml-2">
                            sispinsmk
                        </h1>
                    </div>
                    <div>
                        <input
                            type="text"
                            className="w-[600px] text-xs rounded-lg outline-0 border-0"
                            placeholder="cari buku..."
                        />
                        <button className="ml-5 text-white w-20 text-xs py-2 rounded-lg text-center bg-blue-500">
                            cari
                        </button>
                    </div>
                    <div className="flex flex-row gap-10 items-center">
                        <img src="/cs.png" alt="" className="w-10 h-10" />
                        <img src="/bookmark.png" alt="" className="w-8 h-8" />
                    </div>
                    <div className="flex gap-10">
                        {navbar.map((row, index) => (
                            <div
                                key={index}
                                className={`w-20 text-xs py-2 rounded-lg text-center ${
                                    row.nama === "register"
                                        ? "bg-blue-500 text-white"
                                        : "bg-white text-black"
                                }`}
                            >
                                <a href={row.href}>{row.nama}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <Carosel />
            </div>
            <div className="mb-10">
                <h1 className="font-bold mx-20 text-2xl">Banyak Dipinjam</h1>
                <Slider />
            </div>
            <div className="z-30 relative">
                <h1 className="font-bold mx-20 text-2xl">Rekomendasi</h1>
                <Buku slides={data} />
            </div>
            <div className="mb-10 bg-teal-200 pt-12 pb-10">
                <div className="flex justify-between">
                    <h1 className="font-bold mx-20 text-2xl">
                        Berdasarkan Kategori
                    </h1>
                    <p className="mr-20 flex items-center">
                        Lebih banyak
                        <span className="ml-3">
                            <img
                                src="/arrow.png"
                                alt=""
                                className="w-5 h-5 rotate-90"
                            />
                        </span>
                    </p>
                </div>
                <Slider />
            </div>
            <div className="mt-20 z-30 relative">
                <div className="flex justify-between">
                    <h1 className="font-bold mx-20 text-2xl">
                        Karya Fiksi Ilmiah
                    </h1>
                    <p className="mr-20 flex items-center">
                        Lebih banyak
                        <span className="ml-3">
                            <img
                                src="/arrow.png"
                                alt=""
                                className="w-5 h-5 rotate-90"
                            />
                        </span>
                    </p>
                </div>
                <Buku slides={data} />
            </div>
            <div className="mt-20 z-30 relative">
                <div className="flex justify-between">
                    <h1 className="font-bold mx-20 text-2xl">
                        Karya Non-Fiksi Ilmiah
                    </h1>
                    <p className="mr-20 flex items-center">
                        Lebih banyak
                        <span className="ml-3">
                            <img
                                src="/arrow.png"
                                alt=""
                                className="w-5 h-5 rotate-90"
                            />
                        </span>
                    </p>
                </div>
                <Buku slides={data} />
            </div>
            <div className="mb-10 bg-orange-200 pt-12 pb-10">
                <div className="flex justify-between">
                    <h1 className="font-bold mx-20 text-2xl">
                        Teknik dan Sains
                    </h1>
                    <p className="mr-20 flex items-center">
                        Lebih banyak
                        <span className="ml-3">
                            <img
                                src="/arrow.png"
                                alt=""
                                className="w-5 h-5 rotate-90"
                            />
                        </span>
                    </p>
                </div>
                <Slider />
            </div>
            <div className="mt-5 z-30 relative">
                <Buku slides={data} />
            </div>
            <div className="mb-10 bg-blue-200 pt-12 pb-10">
                <div className="flex justify-between">
                    <h1 className="font-bold mx-20 text-2xl">
                        Sosial dan Humaniora
                    </h1>
                    <p className="mr-20 flex items-center">
                        Lebih banyak
                        <span className="ml-3">
                            <img
                                src="/arrow.png"
                                alt=""
                                className="w-5 h-5 rotate-90"
                            />
                        </span>
                    </p>
                </div>
                <Slider />
            </div>
            <div className="mt-5 z-30 relative">
                <Buku slides={data} />
            </div>
            <div className="relative w-full">
                <img
                    src="/footer.jpg"
                    alt=""
                    className="w-full h-[500px] object-cover"
                />
                <div className="absolute top-[45%] left-[45%] z-30">
                    <h1 className="font-bold text-2xl mb-5">
                        Tampilkan lebih banyak
                    </h1>
                    <a href="/register">
                        <button className="-ml-12 text-white flex items-center font-bold bg-black text-2xl p-4 rounded-lg">
                            <img
                                src="/invitewhite.png"
                                alt=""
                                className="w-10 h-10 mx-3"
                            />
                            Daftar anggota sekarang
                        </button>
                    </a>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
            </div>
        </div>
    );
}

export default SelamatDatang;
