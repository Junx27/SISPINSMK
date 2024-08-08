import { Link } from "@inertiajs/react";
import React, { useContext } from "react";
import { useState } from "react";
import MyContext from "./CreateContext";

function NavbarUser({
    profile,
    logo,
    handleBookmark,
    handleSettting,
    auth,
    data,
}) {
    const { value, setValue } = useContext(MyContext);
    const [popUp, setPopUp] = useState(false);
    const [cs, setCs] = useState(false);
    const [bookmark, setBookmark] = useState(false);
    const [setting, setSetting] = useState(false);
    const [valueNama, setValueNama] = useState("");
    const [openRecomen, setOpenRecom] = useState(false);

    const recomendasiNama = [
        ...new Set(
            data
                .filter((item) =>
                    item.caption.toLowerCase().includes(valueNama.toLowerCase())
                )
                .map((row) => row.caption)
        ),
    ];

    const handleCariBuku = () => {
        setValue(valueNama);
    };
    return (
        <div>
            {openRecomen ? (
                <div onClick={() => setOpenRecom(false)}>
                    {valueNama.length > 0 && (
                        <div className="absolute text-sm bg-white rounded-lg shadow-lg w-[600px] z-50 top-20 left-64 overflow-hidden">
                            {recomendasiNama.slice(0, 12).map((row) => (
                                <div
                                    key={row.id}
                                    className="p-2 px-5 cursor-pointer hover:bg-blue-50"
                                    onClick={() => setValueNama(row)}
                                >
                                    <p>{row}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ) : (
                <div></div>
            )}

            <div className="absolute z-40 py-2 w-full">
                <div className="flex px-10 justify-between items-center">
                    <div className="flex items-center">
                        <img src={logo} alt="" className="w-[50px] h-[50px]" />
                        <h1 className="font-bold text-white text-xl uppercase ml-5">
                            sispinsmk
                        </h1>
                    </div>
                    <div className="flex gap-3">
                        <div
                            className="relative"
                            onClick={() => setOpenRecom(true)}
                        >
                            <input
                                type="text"
                                className="w-[600px] text-xs rounded-lg outline-0 border-0 truncate"
                                placeholder="cari buku..."
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
                        <a
                            href="https://wa.me/62813269032897?text=hallo..."
                            target="blank"
                        >
                            <div
                                className="relative"
                                onMouseOver={() => setCs(!cs)}
                                onMouseLeave={() => setCs(!cs)}
                            >
                                <img
                                    src="/cs.png"
                                    alt=""
                                    className="w-10 h-10"
                                />
                                {cs && (
                                    <p className="text-center text-[10px] w-32 absolute bg-white p-2 rounded-lg top-12 right-0">
                                        Customer service
                                        <span className="absolute -mt-3 rotate-45 w-3 h-3 bg-white right-5"></span>
                                    </p>
                                )}
                            </div>
                        </a>
                        <div
                            className="relative"
                            onMouseOver={() => setBookmark(!bookmark)}
                            onMouseLeave={() => setBookmark(!bookmark)}
                            onClick={handleBookmark}
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
                            onMouseOver={() => setSetting(!setting)}
                            onMouseLeave={() => setSetting(!setting)}
                            onClick={handleSettting}
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
                    <div
                        onClick={() => setPopUp(!popUp)}
                        className="relative cursor-pointer"
                    >
                        <div className="flex gap-2 items-center">
                            <p className="text-white text-sm font-bold w-12 truncate capitalize">
                                {auth}
                            </p>
                            <img
                                src={profile}
                                alt=""
                                className="w-10 h-10 rounded-full object-cover"
                            />
                        </div>
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

export default NavbarUser;
