import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import { url } from "@/Data/Url";
import CreateBook from "@/Layouts/CreateBook";
import EditUser from "@/Layouts/EditUser";
import TabelUser from "@/Layouts/TabelUser";
import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
function User({ auth, bukus, users, pinjamans }) {
    const bukuDipinjam = pinjamans.filter(
        (row) => row.status_peminjaman === "meminjam"
    );
    const bukuDikembalikan = pinjamans.filter(
        (row) => row.status_peminjaman === "dikembalikan"
    );
    const totalBuku = bukus.length;
    const jumlahAnggota = users.length;
    const jumlahPeminjaman = pinjamans.length;
    const hasilPembagian = totalBuku / jumlahAnggota;
    const ratio = Math.round(hasilPembagian);
    const probabilitas = Math.round(jumlahPeminjaman / jumlahAnggota);

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
    const [openPopUpBookmark, setOpenPopUpBookmark] = useState(false);

    const openSetting = () => {
        setOpenPopUpSetting(!openPopUpSetting);
    };
    const openBookmark = () => {
        setOpenPopUpBookmark(!openPopUpBookmark);
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
                    <div
                        className={`transition-all duration-500 h-screen absolute z-50 bg-white ${
                            openPopUpBookmark ? "w-[300px]" : "w-0"
                        }`}
                    >
                        <div
                            className={`transition-all duration-200 p-5 ${
                                openPopUpBookmark ? "block" : "hidden"
                            }`}
                        >
                            <div
                                className="flex justify-end cursor-pointer"
                                onClick={() => setOpenPopUpBookmark(false)}
                            >
                                <img
                                    src="/close.png"
                                    alt=""
                                    className="w-3 h-3"
                                />
                            </div>
                            <CreateBook id={auth.user.id} />
                        </div>
                    </div>
                    <Head title="Daftar User" />
                    <Navbar
                        profile={url + auth.user.foto_profil}
                        logo={logo}
                        handleMenu={handleMenu}
                        showIcon={openMenu ? false : true}
                        auth={auth.user.nama}
                        handleSetting={openSetting}
                        handleBookmark={openBookmark}
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
                            <Sidebar
                                viewicon={true}
                                bukus={bukus.length}
                                pinjamans={pinjamans.length}
                                bukuDikembalikan={bukuDikembalikan.length}
                                bukuDipinjam={bukuDipinjam.length}
                                users={users.length}
                                ratio={ratio}
                                probabilitas={probabilitas}
                            />
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
                                <TabelUser data={users} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default User;
