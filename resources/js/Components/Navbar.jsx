import { Link } from "@inertiajs/react";
import React, { useContext } from "react";
import { useState } from "react";
import MyContext from "./CreateContext";

function Navbar({ profile, logo, handleMenu, handleProfile, showIcon }) {
    const { value, setValue } = useContext(MyContext);
    const [popUp, setPopUp] = useState(false);
    const [cs, setCs] = useState(false);
    const [bookmark, setBookmark] = useState(false);
    const [anggota, setAnggota] = useState(false);
    const [setting, setSetting] = useState(false);
    const [valueNama, setValueNama] = useState();
    const handleCariBuku = () => {
        setValue(valueNama);
    };

    return (
        <div>
            <div className="absolute z-50 py-2 w-full">
                <div className="flex px-10 justify-between items-center">
                    <div
                        onClick={handleMenu}
                        showIcon={false}
                        className={`${showIcon ? "visible" : "invisible"}`}
                    >
                        <img src="/menu.png" alt="" className="w-8 h-8" />
                    </div>
                    <div className="flex items-center">
                        <img src={logo} alt="" className="w-[50px] h-[50px]" />
                        <h1 className="font-bold text-white text-xl uppercase ml-2">
                            sispinsmk
                        </h1>
                    </div>
                    <div className="flex gap-3">
                        <div className="relative">
                            <input
                                type="text"
                                className="w-[600px] text-xs rounded-lg outline-0 border-0"
                                placeholder="cari berdasarkan nama..."
                                value={valueNama}
                                onChange={(e) => setValueNama(e.target.value)}
                            />
                            {valueNama && (
                                <div
                                    className="absolute top-2 right-2 z-50"
                                    onClick={() => setValueNama("")}
                                >
                                    <img
                                        src="/close.png"
                                        alt=""
                                        className="w-3 h-3 cursor-pointer"
                                    />
                                </div>
                            )}
                        </div>
                        <button
                            className="text-white w-20 text-xs py-2 rounded-lg text-center bg-blue-500"
                            onClick={handleCariBuku}
                        >
                            cari
                        </button>
                    </div>
                    <div className="flex flex-row gap-10 items-center">
                        <div
                            className="relative"
                            onMouseOver={() => setCs(!cs)}
                            onMouseLeave={() => setCs(!cs)}
                        >
                            <img src="/cs.png" alt="" className="w-10 h-10" />
                            {cs && (
                                <p className="text-center text-[10px] w-32 absolute bg-white p-2 rounded-lg top-12 right-0">
                                    Customer service
                                    <span className="absolute -mt-3 rotate-45 w-3 h-3 bg-white right-5"></span>
                                </p>
                            )}
                        </div>
                        <div
                            className="relative"
                            onMouseOver={() => setBookmark(!bookmark)}
                            onMouseLeave={() => setBookmark(!bookmark)}
                        >
                            <img
                                src="/bookmark.png"
                                alt=""
                                className="w-8 h-8"
                            />
                            {bookmark && (
                                <p className="text-center text-[10px] w-32 absolute bg-white p-2 rounded-lg top-12 right-0">
                                    Bookmark
                                    <span className="absolute -mt-3 rotate-45 w-3 h-3 bg-white right-5"></span>
                                </p>
                            )}
                        </div>
                        <div
                            className="relative"
                            onMouseOver={() => setAnggota(!anggota)}
                            onMouseLeave={() => setAnggota(!anggota)}
                        >
                            <img
                                src="/invitewhite.png"
                                alt=""
                                className="w-8 h-8"
                            />
                            {anggota && (
                                <p className="text-center text-[10px] w-32 absolute bg-white p-2 rounded-lg top-12 right-0">
                                    Anggota
                                    <span className="absolute -mt-3 rotate-45 w-3 h-3 bg-white right-5"></span>
                                </p>
                            )}
                        </div>
                        <div
                            className="relative"
                            onMouseOver={() => setSetting(!setting)}
                            onMouseLeave={() => setSetting(!setting)}
                        >
                            <img
                                src="/setting.png"
                                alt=""
                                className="w-8 h-8"
                            />
                            {setting && (
                                <p className="text-center text-[10px] w-32 absolute bg-white p-2 rounded-lg top-12 right-0">
                                    Pengaturan
                                    <span className="absolute -mt-3 rotate-45 w-3 h-3 bg-white right-5"></span>
                                </p>
                            )}
                        </div>
                    </div>
                    <div onClick={() => setPopUp(!popUp)} className="relative">
                        <img
                            src={profile}
                            alt=""
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        {popUp && (
                            <Link
                                href="/logout"
                                method="post"
                                className="bg-white w-20 rounded-lg text-xs p-2 text-center absolute right-5 top-12 shadow-md"
                            >
                                Logout
                                <span className="absolute -mt-3 rotate-45 w-3 h-3 bg-white"></span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
