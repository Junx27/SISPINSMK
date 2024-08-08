import DownloadPDFButton from "@/Components/DownloadPDFButton";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import { url } from "@/Data/Url";
import CreateBook from "@/Layouts/CreateBook";
import DataAnggota from "@/Layouts/DataAnggota";
import DataPengunjung from "@/Layouts/DataPengunjung";
import EditUser from "@/Layouts/EditUser";
import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { useRef } from "react";

function Dashboard({ auth, bukus, users, pinjamans, analisis }) {
    const pdfRef = useRef();
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
    const now = new Date();
    const peminjamanTerakhir = pinjamans.filter((row) => {
        const tanggalPinjam = new Date(row.created_at).toLocaleDateString(
            "id-ID",
            {
                day: "numeric",
                month: "long",
                year: "numeric",
            }
        );
        const tanggalSekarang = now.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
        return tanggalPinjam === tanggalSekarang;
    }).length;

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
                    <Head title="Dashboard" />
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
                    <div className="w-full h-screen">
                        <img
                            src="/footer.jpg"
                            alt=""
                            className="w-full h-screen object-cover"
                        />
                        <div
                            ref={pdfRef}
                            className="inset-0 absolute top-20 left-0 ml-20 p-5 bg-opacity-10 bg-white/75 rounded-lg rounded-t-none"
                        >
                            <div className="bg-white h-full rounded-lg">
                                <h1 className="font-bold text-3xl text-center pt-10 capitalize">
                                    selamat datang di sistem peminjaman buku
                                </h1>
                                <div className="pt-32 flex gap-20 p-5">
                                    <div className="w-[800px]">
                                        <DataPengunjung analisis={analisis} />
                                    </div>
                                    <div className="w-[200px]">
                                        <DataAnggota users={users} />
                                        <div className="mt-8 text-xs flex flex-col gap-3">
                                            <h1 className="font-bold">
                                                Ratio Buku
                                            </h1>
                                            <p>{ratio} % setiap anggota</p>
                                            <h1 className="font-bold">
                                                Probabilitas Peminjaman
                                            </h1>
                                            <p>{probabilitas} % peminjaman</p>
                                            <h1 className="font-bold">
                                                Peminjaman Hari Terakhir
                                            </h1>
                                            <p>{peminjamanTerakhir} Buku</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h1 className="text-xs">
                                                Data Buku
                                            </h1>
                                            <p className="my-5 font-bold text-blue-500">
                                                {bukus.length}
                                            </p>
                                        </div>
                                        <div>
                                            <h1 className="text-xs">
                                                Data Anggota
                                            </h1>
                                            <p className="my-5 font-bold text-orange-500">
                                                {users.length}
                                            </p>
                                        </div>
                                        <div>
                                            <h1 className="text-xs">
                                                Data Peminjaman
                                            </h1>
                                            <p className="my-5 font-bold text-purple-500">
                                                {pinjamans.length}
                                            </p>
                                        </div>
                                        <div>
                                            <h1 className="text-xs">
                                                Buku Kembali
                                            </h1>
                                            <p className="my-5 font-bold text-green-500">
                                                {bukuDikembalikan.length}
                                            </p>
                                        </div>
                                        <div>
                                            <h1 className="text-xs">
                                                Buku Dipinjam
                                            </h1>
                                            <p className="mt-5 font-bold text-red-500">
                                                {bukuDipinjam.length}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-xs absolute bottom-10 right-10">
                            <DownloadPDFButton
                                pdfRef={pdfRef}
                                fileName={"Dashboard"}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dashboard;
