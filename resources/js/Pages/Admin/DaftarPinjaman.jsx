import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import { url } from "@/Data/Url";
import EditUser from "@/Layouts/EditUser";
import TabelPinjaman from "@/Layouts/TabelPinjaman";
import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

function DaftarPinjaman({ auth, pinjamans }) {
    const userRole = auth.user.role;
    useEffect(() => {
        if (userRole === "anggota") {
            window.location.href = "/daftar-buku";
        }
    });
    const [openMenu, setOpenMenu] = useState(false);
    const profile = "/profile.jpg";
    const logo = "/logo.png";

    const handleMenu = () => {
        setOpenMenu(!openMenu);
    };
    const [openPopUpSetting, setOpenPopUpSetting] = useState(false);

    const openSetting = () => {
        setOpenPopUpSetting(!openPopUpSetting);
    };
    return (
        <div>
            {userRole === "admin" && (
                <div>
                    <div
                        className={`transition-all duration-500 h-screen absolute z-50 backdrop-blur-md bg-opacity-10 bg-white/30 ${
                            openPopUpSetting ? "w-[300px]" : "w-0"
                        }`}
                    >
                        <div
                            className={`transition-all duration-200 p-5 ${
                                openPopUpSetting ? "block" : "hidden"
                            }`}
                        >
                            <div
                                className="flex justify-end cursor-pointer"
                                onClick={() => setOpenPopUpSetting(false)}
                            >
                                <img
                                    src="/close.png"
                                    alt=""
                                    className="w-3 h-3"
                                />
                            </div>
                            <EditUser id={auth.user.id} />
                        </div>
                    </div>
                    <Head title="Daftar Pinjaman" />
                    <Navbar
                        profile={url + auth.user.foto_profil}
                        logo={logo}
                        handleMenu={handleMenu}
                        showIcon={openMenu ? false : true}
                        auth={auth.user.nama}
                        handleSetting={openSetting}
                    />
                    <div className="absolute w-20 overflow-hidden">
                        <Sidebar />
                    </div>
                    <div
                        className={`absolute transition-all duration-500 w-[300px] z-50 backdrop-blur-sm bg-white/75 h-screen ${
                            openMenu ? "ml-0" : "-ml-96"
                        }`}
                    >
                        <button onClick={() => setOpenMenu(!openMenu)}>
                            <img
                                src="/close.png"
                                alt=""
                                className={`transition-all duration-1000 w-5 h-5 relative top-4 left-64 ${
                                    openMenu ? "rotate-0" : "rotate-90"
                                }`}
                            />
                        </button>
                        <div className="-mt-7">
                            <Sidebar viewicon={true} />
                        </div>
                    </div>
                    <div>
                        <div className="w-full h-screen">
                            <img
                                src="/footer.jpg"
                                alt=""
                                className="w-full h-screen object-cover"
                            />
                            <div className="inset-0 absolute top-20 left-0 ml-20 p-5 bg-opacity-10 bg-white/75 rounded-lg">
                                <TabelPinjaman data={pinjamans} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DaftarPinjaman;
