import Buku from "@/Components/Buku";
import Button from "@/Components/Button";
import MyContext from "@/Components/CreateContext";
import NavbarUser from "@/Components/NavbarUser";
import React, { useContext, useState } from "react";
import Riwayat from "./Riwayat";
import { useEffect } from "react";
import axios from "axios";
import { url } from "@/Data/Url";
import EditUser from "@/Layouts/EditUser";
import QrCodeGenerator from "@/Components/QrCode";

function DaftarBuku({ auth, bukus, pinjamans }) {
    const pinjamanSelesai = pinjamans.filter(
        (row) =>
            row.status_peminjaman === "dikembalikan" &&
            row.user_id === auth.user.id
    );
    const pinjamanBelumSelesai = pinjamans.filter(
        (row) =>
            row.status_peminjaman === "meminjam" && row.user_id === auth.user.id
    );
    const data = bukus;
    const userRole = auth.user.role.toLowerCase();
    useEffect(() => {
        if (userRole === "admin") {
            window.location.href = "/admin/dashboard";
        }
    });
    const { value, setValue } = useContext(MyContext);
    const [openKategori, setOpenKategori] = useState(false);
    const [openEdisi, setOpenEdisi] = useState(false);
    const [openTahun, setOpenTahun] = useState(false);
    const [filterKategori, setFilterKategori] = useState(null);
    const [filterEdisi, setFilterEdisi] = useState(null);
    const [filterTahun, setFilterTahun] = useState(null);
    const [handleSetting, setHandleSetting] = useState(false);
    const [handleBookmark, setHandleBookmark] = useState(false);
    const [editUser, setEditUser] = useState([]);

    const [nama, setNama] = useState();

    const openSetting = () => {
        setHandleSetting(!handleSetting);
        setHandleBookmark(false);
    };
    const openBookmark = () => {
        setHandleBookmark(!handleBookmark);
        setHandleSetting(false);
    };

    const handleKategori = () => {
        setOpenKategori(!openKategori);
        setOpenTahun(false);
        setOpenEdisi(false);
    };
    const handleEdisi = () => {
        setOpenEdisi(!openEdisi);
        setOpenTahun(false);
        setOpenKategori(false);
    };
    const handleTahun = () => {
        setOpenTahun(!openTahun);
        setOpenEdisi(false);
        setOpenKategori(false);
    };
    const handleReset = () => {
        setFilterEdisi(null);
        setFilterKategori(null);
        setFilterTahun(null);
        setValue("");
    };

    const getCurrentPageData = () => {
        let filteredData = data;
        if (value) {
            filteredData = filteredData.filter((item) =>
                item.caption.toLowerCase().includes(value.toLowerCase())
            );
        }
        if (filterKategori) {
            filteredData = filteredData.filter((item) =>
                item.kategori
                    .toLowerCase()
                    .includes(filterKategori.toLowerCase())
            );
        }
        if (filterEdisi) {
            filteredData = filteredData.filter((item) =>
                item.edisi.toLowerCase().includes(filterEdisi.toLowerCase())
            );
        }
        if (filterTahun) {
            filteredData = filteredData.filter((item) =>
                item.tahun.toLowerCase().includes(filterTahun.toLowerCase())
            );
        }

        return filteredData;
    };
    const kategori = [...new Set(data.map((row) => row.kategori))];
    const edisi = [...new Set(data.map((row) => row.edisi))];
    const tahun = [...new Set(data.map((row) => row.tahun))];

    useEffect(() => {
        const fetchUserData = async (id) => {
            try {
                const response = await axios.get(`/admin/user/${id}`);

                setEditUser(response.data);
                setNama(response.data.nama);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUserData(auth.user.id);
    }, [auth.user.id]);

    return (
        <div>
            {userRole !== "admin" && (
                <div>
                    <div
                        className={`transition-all duration-500 h-screen absolute z-50 backdrop-blur-md bg-opacity-10 bg-white/30 ${
                            handleSetting ? "w-[300px]" : "w-0"
                        }`}
                    >
                        <div
                            className={`transition-all duration-200 p-5 ${
                                handleSetting ? "block" : "hidden"
                            }`}
                        >
                            <div
                                className="flex justify-end cursor-pointer"
                                onClick={() => openSetting(false)}
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
                        className={`overflow-auto transition-all duration-500 h-screen absolute z-50 bg-white ${
                            handleBookmark ? "w-[300px]" : "w-0"
                        }`}
                    >
                        <div
                            className={`transition-all duration-200 ${
                                handleBookmark ? "block" : "hidden"
                            }`}
                        >
                            <div
                                className="flex justify-end cursor-pointer"
                                onClick={() => openBookmark(false)}
                            >
                                <img
                                    src="/close.png"
                                    alt=""
                                    className="w-3 h-3 mt-2 mr-2"
                                />
                            </div>

                            <div className="text-xs mt-5 h-96 overflow-auto">
                                <h1 className="font-bold fixed bg-white w-72 p-2 ml-2">
                                    Daftar Peminjaman
                                </h1>
                                <div className=" mt-10 mx-5">
                                    <Riwayat pinjaman={pinjamanBelumSelesai} />
                                </div>
                            </div>
                            <div className="fixed w-72 text-xs mt-10 h-96 overflow-auto">
                                <h1 className="font-bold fixed bg-white w-72 p-2 ml-2">
                                    Riwayat Peminjaman
                                </h1>
                                <div className="mt-10 mx-5">
                                    <Riwayat pinjaman={pinjamanSelesai} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <NavbarUser
                        logo={"/logo.png"}
                        profile={url + auth.user.foto_profil}
                        handleSettting={openSetting}
                        handleBookmark={openBookmark}
                        auth={auth.user.nama}
                    />
                    <div>
                        <img
                            src="/footer.jpg"
                            alt=""
                            className="w-full h-screen"
                        />
                    </div>
                    <div className="inset-0 absolute top-20 left-0 p-5 bg-opacity-10 bg-white/75 rounded-lg overflow-auto">
                        <div className="grid">
                            <div className="text-sm fixed bg-white w-[275px] z-20 h-screen rounded-lg p-5">
                                <div>
                                    <h1 className="font-bold pb-1">Kategori</h1>
                                    <div className="flex flex-col mt-3 cursor-pointer">
                                        {kategori.slice(0, 6).map((row) => (
                                            <div
                                                key={row.id}
                                                onClick={() =>
                                                    setFilterKategori(row)
                                                }
                                            >
                                                <p className="hover:bg-blue-50 p-2">
                                                    {row}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    {openKategori && (
                                        <div
                                            className="z-10 absolute top-0 w-[250px] h-screen bg-white rounded-lg left-[300px] p-5"
                                            onClick={() =>
                                                setOpenKategori(false)
                                            }
                                        >
                                            <div className="flex flex-col cursor-pointer w-full h-screen overflow-auto">
                                                {kategori.map((row) => (
                                                    <div
                                                        key={row.id}
                                                        className="hover:bg-blue-50 p-2"
                                                        onClick={() =>
                                                            setFilterKategori(
                                                                row
                                                            )
                                                        }
                                                    >
                                                        <p className="">
                                                            {row}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    <p
                                        className="group relative mt-2 p-2 text-blue-500 hover:bg-blue-50 flex justify-between items-center cursor-pointer"
                                        onClick={handleKategori}
                                    >
                                        Lebih banyak
                                        <img
                                            src={`${
                                                openKategori
                                                    ? "/close.png"
                                                    : "/arrow.png"
                                            }`}
                                            alt=""
                                            className={`group-hover:rotate-90 transition-all duration-500 w-3 h-3  ${
                                                openKategori ? "" : "rotate-180"
                                            }`}
                                        />
                                        {openKategori && (
                                            <p className="bg-white w-10 h-10 absolute top-0 -right-20 rotate-45 z-0"></p>
                                        )}
                                    </p>
                                </div>
                                <div className="mt-5">
                                    <h1 className="font-bold pb-1">Edisi</h1>
                                    <div className="flex flex-col mt-3 cursor-pointer">
                                        {edisi.slice(0, 2).map((row) => (
                                            <div
                                                key={row.id}
                                                onClick={() =>
                                                    setFilterEdisi(row)
                                                }
                                            >
                                                <p className="hover:bg-blue-50 p-2">
                                                    {row}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    {openEdisi && (
                                        <div
                                            className="z-10 absolute top-0 w-[250px] h-screen bg-white rounded-lg left-[300px] p-5"
                                            onClick={() => setOpenEdisi(false)}
                                        >
                                            <div className="flex flex-col cursor-pointer w-full h-screen overflow-auto">
                                                {edisi.map((row) => (
                                                    <div
                                                        key={row.id}
                                                        className="hover:bg-blue-50 p-2"
                                                        onClick={() =>
                                                            setFilterEdisi(row)
                                                        }
                                                    >
                                                        <p className="">
                                                            {row}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    <p
                                        className="group relative mt-2 p-2 text-blue-500 hover:bg-blue-50 flex justify-between items-center cursor-pointer"
                                        onClick={handleEdisi}
                                    >
                                        Lebih banyak
                                        <img
                                            src={`${
                                                openEdisi
                                                    ? "/close.png"
                                                    : "/arrow.png"
                                            }`}
                                            alt=""
                                            className={`group-hover:rotate-90 transition-all duration-500 w-3 h-3  ${
                                                openEdisi ? "" : "rotate-180"
                                            }`}
                                        />
                                        {openEdisi && (
                                            <p className="bg-white w-10 h-10 absolute top-0 -right-20 rotate-45 z-0"></p>
                                        )}
                                    </p>
                                </div>
                                <div className="mt-5">
                                    <h1 className="font-bold pb-1">
                                        Tahun Terbit
                                    </h1>
                                    <div className="flex flex-wrap gap-2 mt-3 cursor-pointer">
                                        {tahun.slice(0, 5).map((row) => (
                                            <div
                                                key={row.id}
                                                onClick={() =>
                                                    setFilterTahun(row)
                                                }
                                            >
                                                <p className="text-xs bg-blue-50 hover:bg-blue-100 p-1 px-3">
                                                    {row}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    {openTahun && (
                                        <div
                                            className="z-10 absolute top-0 w-[250px] h-screen bg-white rounded-lg left-[300px] p-5"
                                            onClick={() => setOpenTahun(false)}
                                        >
                                            <div className="flex flex-col cursor-pointer w-full h-screen overflow-auto">
                                                {tahun.map((row) => (
                                                    <div
                                                        key={row.id}
                                                        className="hover:bg-blue-50 p-2"
                                                        onClick={() =>
                                                            setFilterTahun(row)
                                                        }
                                                    >
                                                        <p className="">
                                                            {row}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    <p
                                        className="group relative mt-2 p-2 text-blue-500 hover:bg-blue-50 flex justify-between items-center cursor-pointer"
                                        onClick={handleTahun}
                                    >
                                        Lebih banyak
                                        <img
                                            src={`${
                                                openTahun
                                                    ? "/close.png"
                                                    : "/arrow.png"
                                            }`}
                                            alt=""
                                            className={`group-hover:rotate-90 transition-all duration-500 w-3 h-3  ${
                                                openTahun ? "" : "rotate-180"
                                            }`}
                                        />
                                        {openTahun && (
                                            <p className="bg-white w-10 h-10 absolute top-0 -right-20 rotate-45 z-0"></p>
                                        )}
                                    </p>
                                    <div
                                        className="text-xs -ml-2 mt-2 hover:bg-blue-50 p-2"
                                        onClick={handleReset}
                                    >
                                        <Button name={"Refresh All"} />
                                    </div>
                                </div>
                            </div>
                            <div className="ml-[300px] -mt-10">
                                {getCurrentPageData().length === 0 ? (
                                    <div className="mt-32">
                                        <p className="text-center text-3xl font-bold">
                                            Data tidak ditemukan
                                        </p>
                                        <p className="text-center mt-2">
                                            Pastikan memasukan data dengan benar
                                        </p>
                                        <div
                                            className="mt-5 flex justify-center cursor-pointer"
                                            onClick={handleReset}
                                        >
                                            <button className="bg-black p-3 text-white rounded-lg">
                                                Refresh Halaman Disini
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <Buku slides={getCurrentPageData()} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DaftarBuku;
