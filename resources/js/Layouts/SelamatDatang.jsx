import Buku from "@/Components/Buku";
import Carosel from "@/Components/Carosel";
import PopOver from "@/Components/PopOver";
import Slider from "@/Components/Slider";
import Login from "@/Pages/Auth/Login";
import Register from "@/Pages/Auth/Register";
import React from "react";
import { useState } from "react";

function SelamatDatang({
    data,
    bukuBanyakDipijnam,
    karyaIlmiah,
    karyaNonIlmiah,
    ekonomi,
    karyaIlmiahSlider,
    karyaNonIlmiahSlider,
    ekonomiSlider,
    slider,
}) {
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    return (
        <div>
            <div className="absolute z-50 py-2 w-full">
                {login && (
                    <PopOver>
                        <Login handleClose={() => setLogin(false)} />
                    </PopOver>
                )}
                {register && (
                    <PopOver>
                        <Register handleClose={() => setRegister(false)} />
                    </PopOver>
                )}

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
                        <button
                            className="ml-5 text-white w-20 text-xs py-2 rounded-lg text-center bg-blue-500"
                            onClick={() => setLogin(true)}
                        >
                            cari
                        </button>
                    </div>
                    <div className="flex flex-row gap-10 items-center">
                        <img
                            src="/cs.png"
                            alt=""
                            className="w-10 h-10"
                            onClick={() => setLogin(true)}
                        />
                        <img
                            src="/bookmark.png"
                            alt=""
                            className="w-8 h-8"
                            onClick={() => setLogin(true)}
                        />
                    </div>
                    <div className="flex gap-10">
                        <button
                            className="bg-blue-500 w-20 text-white text-xs rounded-md p-2"
                            onClick={() => setRegister(true)}
                        >
                            Register
                        </button>
                        <button
                            className="bg-white w-20 text-xs rounded-md p-2"
                            onClick={() => setLogin(true)}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <Carosel data={slider} />
            </div>
            <div className="mb-10">
                <h1 className="font-bold mx-20 text-2xl">Banyak Dipinjam</h1>
                <Slider data={bukuBanyakDipijnam} />
            </div>
            <div className="mx-20 z-30 relative">
                <h1 className="font-bold text-2xl">Rekomendasi</h1>
                <Buku slides={data} />
            </div>
            <div className="mb-10 bg-blue-200 pt-12 pb-10">
                <div className="flex justify-between">
                    <h1 className="font-bold mx-20 text-2xl">Karya Ilmiah</h1>
                    <div
                        className="mr-20 flex items-center cursor-pointer"
                        onClick={() => setLogin(true)}
                    >
                        Lebih banyak
                        <span className="ml-3">
                            <img
                                src="/arrow.png"
                                alt=""
                                className="w-5 h-5 rotate-90"
                            />
                        </span>
                    </div>
                </div>
                <Slider data={karyaIlmiahSlider} />
            </div>
            <div className="mx-20 z-30 relative">
                <Buku slides={karyaIlmiah} />
            </div>
            <div className="mb-10 bg-orange-200 pt-12 pb-10">
                <div className="flex justify-between">
                    <h1 className="font-bold mx-20 text-2xl">
                        Karya Non-Ilmiah
                    </h1>
                    <div
                        className="mr-20 flex items-center cursor-pointer"
                        onClick={() => setLogin(true)}
                    >
                        Lebih banyak
                        <span className="ml-3">
                            <img
                                src="/arrow.png"
                                alt=""
                                className="w-5 h-5 rotate-90"
                            />
                        </span>
                    </div>
                </div>
                <Slider data={karyaNonIlmiahSlider} />
            </div>
            <div className="mx-20 z-30 relative">
                <Buku slides={karyaNonIlmiah} />
            </div>
            <div className="mb-10 bg-teal-200 pt-12 pb-10">
                <div className="flex justify-between">
                    <h1 className="font-bold mx-20 text-2xl">
                        Ekonomi dan Bisnis
                    </h1>
                    <div
                        className="mr-20 flex items-center cursor-pointer"
                        onClick={() => setLogin(true)}
                    >
                        Lebih banyak
                        <span className="ml-3">
                            <img
                                src="/arrow.png"
                                alt=""
                                className="w-5 h-5 rotate-90"
                            />
                        </span>
                    </div>
                </div>
                <Slider data={ekonomiSlider} />
            </div>
            <div className="mx-20 z-30 relative">
                <Buku slides={ekonomi} />
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
                    <button
                        className="-ml-12 text-white flex items-center font-bold bg-black text-2xl p-4 rounded-lg"
                        onClick={() => setRegister(true)}
                    >
                        <img
                            src="/invitewhite.png"
                            alt=""
                            className="w-10 h-10 mx-3"
                        />
                        Daftar anggota sekarang
                    </button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
            </div>
        </div>
    );
}

export default SelamatDatang;
