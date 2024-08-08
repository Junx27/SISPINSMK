import Button from "@/Components/Button";
import Dropdown from "@/Components/Dropdown";
import PopOver from "@/Components/PopOver";
import { url } from "@/Data/Url";
import { useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";

function Riwayat({ pinjaman, handleClose }) {
    const [idPinjaman, setIdPinjaman] = useState();
    const [openEditPinjaman, setOpenEditPinjaman] = useState(false);
    const [filterTanggal, setFilterTanggal] = useState(null);

    const uniqueTanggal = [
        ...new Set(pinjaman.map((row) => row.tanggal_pengembalian)),
    ];
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
    const getCurrentPageData = () => {
        let filteredData = pinjaman;
        if (filterTanggal) {
            filteredData = filteredData.filter((item) =>
                item.tanggal_pengembalian
                    .toLowerCase()
                    .includes(filterTanggal.toLowerCase())
            );
        }

        return filteredData;
    };
    return (
        <div className="flex flex-col gap-3 pb-20">
            <img
                src="/close.png"
                alt=""
                className="w-3 h-3 absolute z-50 right-2 top-2 cursor-pointer"
                onClick={handleClose}
            />
            <div className="fixed bg-white w-[260px] pt-5 pb-2">
                <div className="flex justify-between items-center text-[10px]">
                    <h1>Daftar Pinjaman</h1>
                    <div className="text-[10px]">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <Button
                                    name={`${
                                        filterTanggal !== null
                                            ? filterTanggal
                                            : "Tanggal"
                                    }`}
                                />
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <div className="">
                                    {uniqueTanggal.map((row, index) => (
                                        <div
                                            key={index}
                                            className="hover:bg-blue-50 p-2"
                                            onClick={() =>
                                                setFilterTanggal(row)
                                            }
                                        >
                                            <p>{row}</p>
                                        </div>
                                    ))}
                                </div>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                {getCurrentPageData().map((row) => (
                    <div
                        key={row.id}
                        className="hover:bg-blue-50 flex flex-row mt-2 gap-3 items-center cursor-pointer"
                    >
                        <img
                            src={
                                (row.buku.imageUrl === "null") |
                                (row.buku.imageUrl === null)
                                    ? "/default-book.jpg"
                                    : url + row.buku.imageUrl
                            }
                            alt=""
                            className="w-8 h-12 object-cover"
                        />
                        <div>
                            <p className="line-clamp-2 font-bold">
                                {row.buku.caption}
                            </p>
                            <p className="text-red-500 text-[8px] mt-2">
                                <span className="text-black mr-2">
                                    Tanggal kembalikan:
                                </span>
                                {row.tanggal_pengembalian}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Riwayat;
