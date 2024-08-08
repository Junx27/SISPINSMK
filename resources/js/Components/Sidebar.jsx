import { usePage } from "@inertiajs/react";
import React from "react";

function Sidebar({
    viewicon,
    bukus,
    users,
    pinjamans,
    bukuDikembalikan,
    bukuDipinjam,
    ratio,
    probabilitas,
}) {
    const { url } = usePage();
    const sidebar = [
        {
            nama: "Dashboard",
            iconActive: "/home.png",
            iconInActive: "/homeoutline.png",
            link: "/admin/dashboard",
        },
        {
            nama: "User",
            iconActive: "/user.png",
            iconInActive: "/useroutline.png",
            link: "/admin/user",
        },
        {
            nama: "Buku",
            iconActive: "/open-book.png",
            iconInActive: "/open-bookoutline.png",
            link: "/admin/buku",
        },
        {
            nama: "Daftar pinjaman",
            iconActive: "/document.png",
            iconInActive: "/documentoutline.png",
            link: "/admin/daftarpinjaman",
        },
    ];
    return (
        <div className="text-sm mt-20 flex flex-col gap-2" viewicon={false}>
            {sidebar.map((row, index) => (
                <div key={index}>
                    <a
                        href={row.link}
                        className={`pl-10 py-2 flex gap-5 items-center ${
                            url === row.link
                                ? "backdrop-blur-sm bg-white/75 font-bold"
                                : ""
                        }`}
                    >
                        <img
                            src={
                                url === row.link
                                    ? row.iconActive
                                    : row.iconInActive
                            }
                            alt=""
                            className="w-6 h-6"
                        />
                        <p>{row.nama}</p>
                    </a>
                </div>
            ))}
            {viewicon ? (
                <div className="mx-auto mt-10 bg-white p-5 px-12 rounded-lg shadow-md">
                    <div>
                        <h1 className="text-xs">Data Buku</h1>
                        <p className="my-3 font-bold text-blue-500">{bukus}</p>
                    </div>
                    <div>
                        <h1 className="text-xs">Data Anggota</h1>
                        <p className="my-3 font-bold text-orange-500">
                            {users}
                        </p>
                    </div>
                    <div>
                        <h1 className="text-xs">Data Peminjaman</h1>
                        <p className="my-3 font-bold text-purple-500">
                            {pinjamans}
                        </p>
                    </div>
                    <div>
                        <h1 className="text-xs">Buku Kembali</h1>
                        <p className="my-3 font-bold text-green-500">
                            {bukuDikembalikan}
                        </p>
                    </div>
                    <div>
                        <h1 className="text-xs">Buku Dipinjam</h1>
                        <p className="my-3 font-bold text-red-500">
                            {bukuDipinjam}
                        </p>
                    </div>
                    <div>
                        <h1 className="text-xs">Ratio Pinjaman</h1>
                        <p className="my-3 font-bold text-teal-500">
                            {ratio} %
                        </p>
                    </div>
                    <div>
                        <h1 className="text-xs">Probabilitas Peminjaman</h1>
                        <p className="mt-3 mb-5 font-bold text-black">
                            {probabilitas} %
                        </p>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default Sidebar;
