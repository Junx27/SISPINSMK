import { url } from "@/Data/Url";
import { useForm } from "@inertiajs/inertia-react";
import axios from "axios";
import React, { useEffect, useState } from "react";

function DetailDaftarPinjaman({ id, handleClose }) {
    const [KonfirmasiStokBuku, setKonfirmasiStokBuku] = useState(false);
    const handleOptionChange = (e) => {
        setData("status_peminjaman", e.target.value);
    };

    const { data, setData, put } = useForm({
        nama_peminjam: "",
        kontak_peminjam: "",
        nama_buku: "",
        tanggal_pinjam: "",
        tanggal_pengembalian: "",
        status_peminjaman: "",
        keterangan: "",
        user_id: "",
        buku_id: "",
        foto_buku: "",
    });
    useEffect(() => {
        const getPinjamanById = async () => {
            try {
                const response = await axios.get(`/admin/daftarpinjaman/${id}`);
                setData({
                    nama_peminjam: response.data.nama_peminjam,
                    kontak_peminjam: response.data.kontak_peminjam,
                    nama_buku: response.data.nama_buku,
                    tanggal_pinjam: response.data.tanggal_pinjam,
                    tanggal_pengembalian: response.data.tanggal_pengembalian,
                    status_peminjaman: response.data.status_peminjaman,
                    keterangan: response.data.keterangan,
                    user_id: response.data.user_id,
                    buku_id: response.data.buku_id,
                    foto_buku: response.data.buku.imageUrl,
                });
            } catch (error) {
                console.error(error);
            }
        };
        getPinjamanById();
    }, [id]);
    const handleSubmit = (e) => {
        e.preventDefault();

        put(`/admin/daftarpinjaman-update/${id}`);
        setKonfirmasiStokBuku(true);
    };
    const handleUpdateStok = () => {
        put(`/admin/buku-stok-kembali/${data.buku_id}`);
        window.location.reload();
    };

    return (
        <div
            className={`bg-white p-5 rounded-lg ${
                KonfirmasiStokBuku ? " w-[300px]" : "w-[650px]"
            }`}
        >
            <div className="flex justify-end" onClick={handleClose}>
                <img
                    src="/close.png"
                    alt=""
                    className={`w-5 h-5 cursor-pointer ${
                        KonfirmasiStokBuku ? " hidden" : "block"
                    }`}
                />
            </div>
            <div
                className={`text-xs text-center ${
                    KonfirmasiStokBuku ? " block" : "hidden"
                }`}
            >
                <h1 className="mt-3">Konfirmasi untuk update stok buku</h1>
                <div className="mt-5 flex gap-5">
                    <button
                        type="button"
                        className="bg-black text-white mt-3 rounded-md text-xs p-2 w-64"
                        onClick={() => window.location.reload()}
                    >
                        Stok buku tetap
                    </button>
                    <button
                        type="button"
                        className="bg-blue-500 text-white mt-3 rounded-md text-xs p-2 w-64"
                        onClick={handleUpdateStok}
                    >
                        Update stok buku
                    </button>
                </div>
            </div>
            <form
                action=""
                onSubmit={handleSubmit}
                className={`${KonfirmasiStokBuku ? " hidden" : "block"}`}
            >
                <div className="flex gap-8">
                    <div className="w-full h-[450px]">
                        <img
                            src={
                                (data.foto_buku === "null") |
                                (data.foto_buku === null)
                                    ? "/default-book.jpg"
                                    : url + data.foto_buku
                            }
                            alt=""
                            className="w-full h-full object-cover brightness-95 rounded-lg"
                        />
                    </div>
                    <div className="w-full text-xs">
                        <div>
                            <p className="font-bold">Nama peminjam</p>
                            <input
                                type="text"
                                name="nama_peminjam"
                                className="w-full mt-2 text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0 capitalize"
                                value={data.nama_peminjam}
                                onChange={(e) =>
                                    setData("nama_peminjam", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <p className="mt-3 font-bold">Nama Buku</p>
                            <input
                                type="text"
                                name="nama_buku"
                                className="w-full mt-2 text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                                value={data.nama_buku}
                                onChange={(e) =>
                                    setData("nama_buku", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <p className="mt-3 font-bold">Tanggal pinjam</p>
                            <input
                                type="text"
                                name="tanggal_pinjam"
                                className="w-full mt-2 text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                                value={data.tanggal_pinjam}
                                onChange={(e) =>
                                    setData("tanggal_pinjam", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <p className="mt-3 font-bold">
                                Tanggal pengembalian
                            </p>
                            <input
                                type="text"
                                name="tanggal_pengembalian"
                                className="w-full mt-2 text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                                value={data.tanggal_pengembalian}
                                onChange={(e) =>
                                    setData(
                                        "tanggal_pengembalian",
                                        e.target.value
                                    )
                                }
                            />
                        </div>
                        <div>
                            <p className="mt-3 font-bold">Status peminjaman</p>
                            <div className="flex gap-3 mt-3">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="status_peminjaman"
                                        value="meminjam"
                                        checked={
                                            data.status_peminjaman ===
                                            "meminjam"
                                        }
                                        onChange={handleOptionChange}
                                        className="cursor-pointer"
                                    />
                                    <span className="ml-2">Meminjam</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="status_peminjaman"
                                        value="dikembalikan"
                                        checked={
                                            data.status_peminjaman ===
                                            "dikembalikan"
                                        }
                                        onChange={handleOptionChange}
                                        className="cursor-pointer"
                                    />
                                    <span className="ml-2">Dikembalikan</span>
                                </label>
                            </div>
                        </div>
                        <p className="mt-3 font-bold">Keterangan</p>
                        <textarea
                            name="keterangan"
                            className="text-xs w-full mt-3 bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                            value={
                                data.keterangan === null ? "" : data.keterangan
                            }
                            onChange={(e) =>
                                setData("keterangan", e.target.value)
                            }
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white mt-3 rounded-md text-xs p-2 w-full"
                        >
                            Konfirmasi perubahan
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default DetailDaftarPinjaman;
