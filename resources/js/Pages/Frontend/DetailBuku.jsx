import PopOver from "@/Components/PopOver";
import { url } from "@/Data/Url";
import { useForm } from "@inertiajs/inertia-react";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";

function DetailBuku({ buku, auth }) {
    const [open, setOpen] = useState(false);
    const inputDate = new Date();
    const [outputDate, setOutputDate] = useState(() => {
        const newDate = new Date(inputDate);
        newDate.setDate(newDate.getDate() + 7);
        return newDate;
    });

    const { data, setData, post, put } = useForm({
        nama_peminjam: auth.user.nama,
        kontak_peminjam: auth.user.email,
        nama_buku: buku.caption,
        tanggal_pinjam: inputDate.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }),
        tanggal_pengembalian: outputDate.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }),
        status_peminjaman: "meminjam",
        user_id: auth.user.id,
        buku_id: buku.id,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        post("/buat-pinjaman-buku");
    };
    return (
        <div>
            {open && (
                <PopOver>
                    <div className="bg-white p-5 rounded-lg w-64">
                        <p className="text-xs text-center">
                            Konfirmasi peminjaman
                        </p>
                        <form
                            className="mt-0 flex flex-col gap-5"
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="text"
                                name="nama_peminjam"
                                className="hidden text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                                value={data.nama_peminjam}
                                required
                            />
                            <input
                                type="text"
                                name="kontak_peminjam"
                                className="hidden text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                                value={data.kontak_peminjam}
                                required
                            />
                            <input
                                type="text"
                                name="nama_buku"
                                className="hidden text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                                value={data.nama_buku}
                                required
                            />
                            <input
                                type="text"
                                name="tanggal_pinjam"
                                className="hidden text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                                value={data.tanggal_pinjam}
                                required
                            />
                            <input
                                type="text"
                                name="tanggal_pengembalian"
                                className="hidden text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                                value={data.tanggal_pengembalian}
                                required
                            />
                            <input
                                type="text"
                                name="status_peminjaman"
                                className="hidden text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                                value={data.status_peminjaman}
                                required
                            />
                            <input
                                type="number"
                                name="buku_id"
                                className="hidden text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                                value={data.buku_id}
                                required
                            />
                            <input
                                type="number"
                                name="user_id"
                                className="hidden text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                                value={data.user_id}
                                required
                            />
                            <div className="flex gap-5">
                                <button
                                    type="button"
                                    className="bg-black hover:bg-gray-700 text-white mt-5 rounded-md text-xs p-2 w-32"
                                    onClick={() => setOpen(false)}
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-400 text-white mt-5 rounded-md text-xs p-2 w-32"
                                >
                                    ok
                                </button>
                            </div>
                        </form>
                    </div>
                </PopOver>
            )}
            <Head title="Konfirmasi Peminjaman" />
            <img
                src="/footer.jpg"
                alt=""
                className="w-full h-screen object-cover"
            />
            <div className="inset-0 absolute left-0 p-5 md:p-10 bg-opacity-10 bg-white/75">
                <div className="bg-white p-5 rounded-lg mx-auto w-full md:w-[800px]">
                    <div className="flex justify-end">
                        <a href="/daftar-buku">
                            <img src="/close.png" alt="" className="w-4 h-4" />
                        </a>
                    </div>
                    <div className="mt-5 px-0 md:px-5 flex flex-col md:flex-row gap-5 md:gap-10 w-full mb-5">
                        <div className="w-full h-32 md:w-[350px] md:h-[450px]">
                            <h1 className="mb-5 font-bold capitalize truncate">
                                {buku.caption}
                            </h1>
                            <img
                                src={
                                    (buku.imageUrl === "null") |
                                    (buku.imageUrl === null)
                                        ? "/default-book.jpg"
                                        : url + buku.imageUrl
                                }
                                alt=""
                                className="w-full h-full object-cover brightness-95 rounded-lg"
                            />
                            <div className="hidden md:block text-xs text-blue-500 mt-3">
                                <div className="flex flex-col gap-1">
                                    <p>Tata cara meminjam buku</p>
                                    <p>Tata cara pengembalian buku</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="mt-5 text-xs">
                                <div className="my-3">
                                    <h1 className="font-bold">Edisi</h1>
                                    <p className="mt-3 w-full md:w-96 bg-blue-50 p-2 rounded-md">
                                        {buku.edisi}
                                    </p>
                                </div>
                                <div className="my-3">
                                    <h1 className="font-bold">Kategori</h1>
                                    <p className="mt-3 w-full md:w-96 bg-blue-50 p-2 rounded-md">
                                        {buku.kategori}
                                    </p>
                                </div>
                                <div className="my-3">
                                    <h1 className="font-bold">Tahun</h1>
                                    <p className="mt-3 w-full md:w-96 bg-blue-50 p-2 rounded-md">
                                        {buku.tahun}
                                    </p>
                                </div>
                                <div className="my-3">
                                    <h1 className="font-bold">Stok</h1>
                                    <p className="mt-3 w-full md:w-96 bg-blue-50 p-2 rounded-md">
                                        {buku.stok}
                                    </p>
                                </div>
                                <div className="mt-3">
                                    <h1 className="font-bold">Deskripsi</h1>
                                    <p className="mt-3 w-full md:w-96 h-32 bg-blue-50 p-2 rounded-md overflow-auto">
                                        {buku.desc}
                                    </p>
                                </div>
                                <div
                                    className="flex justify-end w-full mt-5"
                                    onClick={() => setOpen(true)}
                                >
                                    <button className="bg-blue-500 text-white p-2 rounded-md">
                                        Pinjam sekarang
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailBuku;
