import PopOver from "@/Components/PopOver";
import { useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";

function Riwayat({ pinjaman }) {
    const [idPinjaman, setIdPinjaman] = useState();
    const [openEditPinjaman, setOpenEditPinjaman] = useState(false);
    const { data, setData, put } = useForm({
        status_peminjaman: "dikembalikan",
        keterangan: "dikembalikan tepat waktu",
    });
    const handlePinjaman = (id) => {
        setOpenEditPinjaman(true);
        setIdPinjaman(id);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/update-pinjaman-buku/${idPinjaman}`);
        window.location.href = "/daftar-buku";
    };
    return (
        <div className="flex flex-col gap-3 pb-20">
            {openEditPinjaman && (
                <PopOver>
                    <div className="bg-white p-5 rounded-lg">
                        <div
                            className="flex justify-end"
                            onClick={() => setOpenEditPinjaman(false)}
                        >
                            <img
                                src="/close.png"
                                alt=""
                                className="w-5 h-5 cursor-pointer"
                            />
                        </div>
                        <form action="" onSubmit={handleSubmit}>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white mt-3 rounded-md text-xs p-2 w-full"
                            >
                                Konfirmasi pengembalian
                            </button>
                        </form>
                    </div>
                </PopOver>
            )}
            {pinjaman.map((row) => (
                <div
                    key={row.id}
                    className="hover:bg-blue-50 flex gap-3 items-center cursor-pointer"
                    onClick={() => handlePinjaman(row.id)}
                >
                    <img
                        src={
                            (row.foto_buku === "null") |
                            (row.foto_buku === null)
                                ? "/default-book.jpg"
                                : url + row.foto_buku
                        }
                        alt=""
                        className="w-8 h-12 object-cover"
                    />
                    <p className="line-clamp-2">{row.nama_buku}</p>
                </div>
            ))}
        </div>
    );
}

export default Riwayat;
