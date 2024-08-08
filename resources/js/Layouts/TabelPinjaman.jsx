import Button from "@/Components/Button";
import MyContext from "@/Components/CreateContext";
import DownloadExcelButton from "@/Components/DownloadExcelButton";
import DownloadPDFButton from "@/Components/DownloadPDFButton";
import Dropdown from "@/Components/Dropdown";
import InputText from "@/Components/InputText";
import Pagination from "@/Components/Pagination";
import PopOver from "@/Components/PopOver";
import { url } from "@/Data/Url";
import DetailDaftarPinjaman from "@/Pages/Admin/DetailDaftarPinjaman";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useRef } from "react";

function TabelPinjaman({ data }) {
    const pdfRef = useRef();
    const tanggal = new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const { value, setValue } = useContext(MyContext);
    const uniquePeminjam = [
        ...new Set(
            data.map((slide) => slide.nama_peminjam.toLocaleLowerCase())
        ),
    ];
    const uniqueMeminjam = [
        ...new Set(
            data.map((slide) => slide.tanggal_pinjam.toLocaleLowerCase())
        ),
    ];
    const uniquePengembalian = [
        ...new Set(
            data.map((slide) => slide.tanggal_pengembalian.toLocaleLowerCase())
        ),
    ];
    const uniqueStatus = [
        ...new Set(
            data.map((slide) => slide.status_peminjaman.toLocaleLowerCase())
        ),
    ];
    const ITEMS_PER_PAGE = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedIds, setSelectedIds] = useState([]);
    const [filterPeminjam, setFilterPeminjam] = useState(null);
    const [filterMeminjam, setFilterMeminjam] = useState(null);
    const [filterPengembalian, setFilterPengembalian] = useState(null);
    const [filterStatus, setFilterStatus] = useState(null);
    const [viewBuku, setViewBuku] = useState();
    const [printInvoice, setPrintInvoice] = useState(false);

    const handleRefresh = () => {
        setFilterPeminjam(null);
        setFilterMeminjam(null);
        setFilterPengembalian(null);
        setFilterStatus(null);
        setValue(null);
    };

    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleCheckboxChange = (e, id) => {
        if (e.target.checked) {
            setSelectedIds([...selectedIds, id]);
        } else {
            setSelectedIds(
                selectedIds.filter((selectedId) => selectedId !== id)
            );
        }
    };

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            const allIds = data.map((item) => item.id);
            setSelectedIds(allIds);
        } else {
            setSelectedIds([]);
        }
    };
    const handleViewDetail = (id) => {
        setViewBuku(id);
    };

    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;

        let filteredData = data;

        if (value) {
            filteredData = filteredData.filter((item) =>
                item.nama_buku.toLowerCase().includes(value.toLowerCase())
            );
        }
        if (filterPeminjam) {
            filteredData = filteredData.filter((item) =>
                item.nama_peminjam
                    .toLowerCase()
                    .includes(filterPeminjam.toLowerCase())
            );
        }
        if (filterMeminjam) {
            filteredData = filteredData.filter((item) =>
                item.tanggal_pinjam
                    .toLowerCase()
                    .includes(filterMeminjam.toLowerCase())
            );
        }
        if (filterPengembalian) {
            filteredData = filteredData.filter((item) =>
                item.tanggal_pengembalian
                    .toLowerCase()
                    .includes(filterPengembalian.toLowerCase())
            );
        }
        if (filterStatus) {
            filteredData = filteredData.filter((item) =>
                item.status_peminjaman
                    .toLowerCase()
                    .includes(filterStatus.toLowerCase())
            );
        }

        return filteredData.slice(startIndex, endIndex);
    };

    const isSelected = (id) => {
        return selectedIds.includes(id);
    };

    const handleDelete = () => {
        selectedIds.forEach(async (id) => {
            try {
                await axios.delete(`/admin/daftarpinjaman-delete/${id}`);
                window.location.reload();
            } catch (error) {
                console.error("Error deleting data:", error);
            }
        });
    };
    const dataBuku = "data-buku";
    const dataBukuPDF = "data-buku-pdf";

    return (
        <div>
            <div className="relative">
                {printInvoice && (
                    <PopOver>
                        <div className="bg-white p-5 rounded-lg text-xs w-[842px]">
                            <div
                                className="flex justify-end cursor-pointer"
                                onClick={() => setPrintInvoice(false)}
                            >
                                <img
                                    src="/close.png"
                                    alt=""
                                    className="w-4 h-4"
                                />
                            </div>
                            <div
                                className="px-5"
                                id="downloadInvoice"
                                ref={pdfRef}
                            >
                                <div className="flex flex-row gap-5 border-b-2 pb-2 border-black border-double mb-5">
                                    <div className="">
                                        <img
                                            src="/logo.png"
                                            alt=""
                                            className="w-[60px]"
                                        />
                                    </div>
                                    <div className="text-center w-full">
                                        <h1 className="font-bold uppercase">
                                            surat keterangan peminjam buku
                                        </h1>
                                        <h1 className="font-bold uppercase">
                                            perpustakaan smk muhammadiyah
                                            bobotsari
                                        </h1>
                                        <p className="text-[10px]">
                                            Jl. RS. Yosomiharjo No.8, Bobotsari,
                                            Purbalingga
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3 mt-2">
                                    <div>
                                        <h1 className="font-bold w-32">
                                            Nama Peminjam
                                        </h1>
                                    </div>
                                    <div>
                                        {(() => {
                                            const uniqueBooks = {};
                                            return getCurrentPageData()
                                                .filter((row) => {
                                                    if (
                                                        !uniqueBooks[
                                                            row.nama_peminjam
                                                        ]
                                                    ) {
                                                        uniqueBooks[
                                                            row.nama_peminjam
                                                        ] = true;
                                                        return true;
                                                    }
                                                    return false;
                                                })
                                                .map((row) => (
                                                    <div key={row.id}>
                                                        <p className="uppercase font-bold">
                                                            :{" "}
                                                            {row.nama_peminjam}
                                                        </p>
                                                    </div>
                                                ));
                                        })()}
                                    </div>
                                </div>
                                <div className="flex gap-3 mt-2">
                                    <div>
                                        <h1 className="font-bold w-32">
                                            Nama Buku
                                        </h1>
                                    </div>
                                    <div>
                                        {getCurrentPageData().map(
                                            (row, index) => (
                                                <div key={row.id}>
                                                    <p>
                                                        : {index + 1}.{" "}
                                                        <span className="ml-2">
                                                            {row.nama_buku}
                                                        </span>
                                                    </p>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                                <div className="flex gap-3 mt-2">
                                    <div>
                                        <h1 className="font-bold w-32">
                                            Tanggal Pinjam
                                        </h1>
                                    </div>
                                    <div>
                                        {(() => {
                                            const uniqueBooks = {};
                                            return getCurrentPageData()
                                                .filter((row) => {
                                                    if (
                                                        !uniqueBooks[
                                                            row.tanggal_pinjam
                                                        ]
                                                    ) {
                                                        uniqueBooks[
                                                            row.tanggal_pinjam
                                                        ] = true;
                                                        return true;
                                                    }
                                                    return false;
                                                })
                                                .map((row) => (
                                                    <div key={row.id}>
                                                        <p>
                                                            :{" "}
                                                            {row.tanggal_pinjam}
                                                        </p>
                                                    </div>
                                                ));
                                        })()}
                                    </div>
                                </div>
                                <div className="flex gap-3 mt-2">
                                    <div>
                                        <h1 className="font-bold w-32">
                                            Tanggal Kembalikan
                                        </h1>
                                    </div>
                                    <div>
                                        {(() => {
                                            const uniqueBooks = {};
                                            return getCurrentPageData()
                                                .filter((row) => {
                                                    if (
                                                        !uniqueBooks[
                                                            row
                                                                .tanggal_pengembalian
                                                        ]
                                                    ) {
                                                        uniqueBooks[
                                                            row.tanggal_pengembalian
                                                        ] = true;
                                                        return true;
                                                    }
                                                    return false;
                                                })
                                                .map((row) => (
                                                    <div key={row.id}>
                                                        <p>
                                                            :{" "}
                                                            {
                                                                row.tanggal_pengembalian
                                                            }
                                                        </p>
                                                    </div>
                                                ));
                                        })()}
                                    </div>
                                </div>
                                <div>
                                    <p className="indent-8 mt-3 leading-6 text-justify">
                                        Surat keterangan peminjaman buku ini
                                        digunakan sebagai bukti peminjaman buku
                                        di perpustakaan SMK Muhammadiyah
                                        Bobotsari,{" "}
                                        <span className="font-bold">
                                            harap dikembalikan sebagai bukti
                                            pengembalian peminjaman buku.
                                        </span>
                                    </p>
                                </div>
                                <div className="flex justify-end mt-5">
                                    <div className="flex flex-col gap-1">
                                        <p>Purbalingga, {tanggal}</p>
                                        <p>Pengurus,</p>
                                        <img
                                            src="/ttd.png"
                                            alt=""
                                            className="w-32 mx-auto absolute"
                                        />
                                        <p className="mt-12 font-bold text-center pb-5">
                                            Sulistyo S.T., M.Pd.,
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <DownloadPDFButton
                                pdfRef={pdfRef}
                                fileName={"Invoice.pdf"}
                            />
                        </div>
                    </PopOver>
                )}

                <div className="flex justify-between mb-2 items-center">
                    <div className="flex text-xs items-center relative">
                        <div onClick={handleRefresh}>
                            <Button name={"Refresh All"} />
                        </div>
                        {selectedIds.length > 0 && (
                            <div className="w-10 ml-3" onClick={handleDelete}>
                                <img
                                    src="/delete.png"
                                    alt=""
                                    className="w-5 h-5"
                                />
                            </div>
                        )}
                    </div>
                    <div className="text-xs flex gap-5">
                        <div>
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <Button
                                        name={`${
                                            filterPeminjam !== null
                                                ? filterPeminjam
                                                : "Nama Peminjam"
                                        }`}
                                        className={"bg-opacity-10 bg-white/50"}
                                    />
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <div
                                        className="absolute top-2 right-2 z-50"
                                        onClick={() => setFilterPeminjam(null)}
                                    >
                                        <img
                                            src="/close.png"
                                            alt=""
                                            className="w-3 h-3 cursor-pointer"
                                        />
                                    </div>
                                    <div
                                        className={`${
                                            uniquePeminjam.length > 20
                                                ? "h-[600px] overflow-auto"
                                                : ""
                                        }`}
                                    >
                                        {uniquePeminjam.map((row, index) => (
                                            <div
                                                key={index}
                                                className="p-2 px-5 cursor-pointer"
                                                onClick={() =>
                                                    setFilterPeminjam(row)
                                                }
                                            >
                                                <p>{row}</p>
                                            </div>
                                        ))}
                                    </div>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                        <div>
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <Button
                                        name={`${
                                            filterMeminjam !== null
                                                ? filterMeminjam
                                                : "Tanggal Meminjam"
                                        }`}
                                        className={"bg-opacity-10 bg-white/50"}
                                    />
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <div
                                        className="absolute top-2 right-2 z-50"
                                        onClick={() => setFilterMeminjam(null)}
                                    >
                                        <img
                                            src="/close.png"
                                            alt=""
                                            className="w-3 h-3 cursor-pointer"
                                        />
                                    </div>
                                    <div
                                        className={`${
                                            uniqueMeminjam.length > 20
                                                ? "h-[600px] overflow-auto"
                                                : ""
                                        }`}
                                    >
                                        {uniqueMeminjam.map((row, index) => (
                                            <div
                                                key={index}
                                                className="p-2 px-5 cursor-pointer"
                                                onClick={() =>
                                                    setFilterMeminjam(row)
                                                }
                                            >
                                                <p>{row}</p>
                                            </div>
                                        ))}
                                    </div>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                        <div>
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <Button
                                        name={`${
                                            filterPengembalian !== null
                                                ? filterPengembalian
                                                : "Tanggal Pengembalian"
                                        }`}
                                        className={"bg-opacity-10 bg-white/50"}
                                    />
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <div
                                        className="absolute top-2 right-2 z-50"
                                        onClick={() =>
                                            setFilterPengembalian(null)
                                        }
                                    >
                                        <img
                                            src="/close.png"
                                            alt=""
                                            className="w-3 h-3 cursor-pointer"
                                        />
                                    </div>
                                    <div
                                        className={`${
                                            uniquePengembalian.length > 20
                                                ? "h-[600px] overflow-auto"
                                                : ""
                                        }`}
                                    >
                                        {uniquePengembalian.map(
                                            (row, index) => (
                                                <div
                                                    key={index}
                                                    className="p-2 px-5 cursor-pointer"
                                                    onClick={() =>
                                                        setFilterPengembalian(
                                                            row
                                                        )
                                                    }
                                                >
                                                    <p>{row}</p>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                        <div>
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <Button
                                        name={`${
                                            filterStatus !== null
                                                ? filterStatus
                                                : "Status"
                                        }`}
                                        className={"bg-opacity-10 bg-white/50"}
                                    />
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <div
                                        className="absolute top-2 right-2 z-50"
                                        onClick={() => setFilterStatus(null)}
                                    >
                                        <img
                                            src="/close.png"
                                            alt=""
                                            className="w-3 h-3 cursor-pointer"
                                        />
                                    </div>
                                    {uniqueStatus.map((row, index) => (
                                        <div
                                            key={index}
                                            className="p-2 px-5 cursor-pointer"
                                            onClick={() => setFilterStatus(row)}
                                        >
                                            <p>{row}</p>
                                        </div>
                                    ))}
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                        <div>
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <Button
                                        name={"Download"}
                                        className={"bg-blue-50"}
                                    />
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <div className="flex flex-col gap-3 p-3 justify-start text-xs">
                                        <DownloadExcelButton
                                            elementId={dataBuku}
                                        />
                                        <DownloadPDFButton
                                            pdfRef={pdfRef}
                                            fileName={"Data peminjam"}
                                        />
                                        <div className="bg-black text-white w-32 p-1 rounded-sm cursor-pointer text-center">
                                            <button
                                                onClick={() =>
                                                    setPrintInvoice(true)
                                                }
                                            >
                                                Print Invoice
                                            </button>
                                        </div>
                                    </div>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                {getCurrentPageData().length === 0 && (
                    <p className="text-red-500 text-center mb-5 text-xs">
                        Data tidak ditemukan, tidak ada data dengan nama
                        tersebut
                    </p>
                )}
                <div className="flex flex-col md:flex-row">
                    <table
                        id={dataBukuPDF}
                        ref={pdfRef}
                        className="absolute mt-0 table-auto w-full shadow-lg rounded-lg p-5"
                    >
                        <thead>
                            <tr className="border-t">
                                <th className="border-r px-2 md:px-3 py-2 font-bold rounded-tl text-sm">
                                    No
                                </th>
                                <th className="px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Nama Peminjam
                                </th>
                                <th className="border-r border-l px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Nama Buku
                                </th>
                                <th className="px-2 md:px-3 py-4 font-bold text-start text-sm w-64">
                                    Tanggal Pinjam
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-64">
                                    Tanggal Pengembalian
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-64">
                                    Status
                                </th>
                                <th className=" border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Keterangan
                                </th>
                            </tr>
                        </thead>
                        <tbody className="relative text-sm border-b">
                            {getCurrentPageData().map((data, index) => (
                                <tr
                                    key={index}
                                    className={`h-10 border-t ${
                                        isSelected(data.id) ? "bg-blue-100" : ""
                                    }`}
                                >
                                    <td className="border-r px-3 py-2">
                                        <input
                                            type="checkbox"
                                            id={`select-${data.id}`}
                                            className="rounded outline-0"
                                            checked={isSelected(data.id)}
                                            onChange={(e) =>
                                                handleCheckboxChange(e, data.id)
                                            }
                                        />
                                    </td>
                                    <td className="py-1 leading-6 px-3 capitalize">
                                        {data.nama_peminjam}
                                    </td>
                                    <td className="border-r border-l py-1 px-3 capitalize leading-6 line-clamp-1 pt-2">
                                        {data.nama_buku}
                                    </td>
                                    <td className="py-1 leading-6 px-3 capitalize">
                                        {data.tanggal_pinjam}
                                    </td>
                                    <td className="border-r py-1 px-3 capitalize leading-6">
                                        {data.tanggal_pengembalian}
                                    </td>

                                    <td
                                        className={`border-r py-1 px-3 capitalize leading-6 ${
                                            data.status_peminjaman.toLowerCase() ===
                                            "dikembalikan"
                                                ? "text-green-500"
                                                : "text-red-500"
                                        }`}
                                    >
                                        {data.status_peminjaman}
                                    </td>
                                    <td className="border-r border-l py-1 px-3 leading-6 truncate">
                                        {data.keterangan === null
                                            ? "Belum ada keterangan"
                                            : data.keterangan}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <table
                        id={dataBuku}
                        className="hidden mt-10 md:mt-0 table-auto w-full shadow-lg rounded-lg p-5 bg-white"
                    >
                        <thead>
                            <tr className="">
                                <th className="border-r px-2 md:px-3 py-2 font-bold rounded-tl text-sm">
                                    No
                                </th>
                                <th className="px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Nama Peminjam
                                </th>
                                <th className="border-r border-l px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Nama Buku
                                </th>
                                <th className="px-2 md:px-3 py-4 font-bold text-start text-sm w-64">
                                    Tanggal Pinjam
                                </th>
                                <th className="border-r border-l px-2 md:px-3 py-4 font-bold text-start text-sm w-20">
                                    Estimasi
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-64">
                                    Tanggal Pengembalian
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-64">
                                    Status
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-64">
                                    Kontak
                                </th>
                            </tr>
                        </thead>
                        <tbody className="relative text-sm">
                            {data.map((data, index) => (
                                <tr
                                    key={index}
                                    className={`h-10 border-t ${
                                        isSelected(data.id) ? "bg-blue-100" : ""
                                    }`}
                                >
                                    <td className="border-r px-3 py-2">
                                        {index + 1}
                                    </td>
                                    <td className="py-1 leading-6 px-3 capitalize">
                                        {data.nama_peminjam}
                                    </td>
                                    <td className="border-r border-l py-1 px-3 capitalize leading-6 line-clamp-1 pt-2">
                                        {data.nama_buku}
                                    </td>
                                    <td className="py-1 leading-6 px-3 capitalize">
                                        {data.tanggal_pinjam}
                                    </td>
                                    <td className="border-r border-l py-1 px-3 capitalize leading-6">
                                        {data.estimasi} Hari
                                    </td>
                                    <td className="border-r py-1 px-3 capitalize leading-6">
                                        {data.tanggal_pengembalian}
                                    </td>
                                    <td
                                        className={`border-r py-1 px-3 capitalize leading-6 ${
                                            data.status_peminjaman.toLowerCase() ===
                                            "dikembalikan"
                                                ? "bg-green-50"
                                                : "bg-red-50"
                                        }`}
                                    >
                                        {data.status_peminjaman}
                                    </td>
                                    <td className="border-r py-1 px-3 capitalize leading-6">
                                        {data.kontak_peminjam}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <table className="relative mt-10 md:mt-0 table-auto w-full shadow-lg rounded-lg p-5 bg-white">
                        <thead>
                            <tr className="">
                                <th className="border-r px-2 md:px-3 py-2 font-bold rounded-tl text-start text-blue-500">
                                    <input
                                        type="checkbox"
                                        className="rounded outline-0"
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className="px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Nama Peminjam
                                </th>
                                <th className="border-r border-l px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Nama Buku
                                </th>
                                <th className="px-2 md:px-3 py-4 font-bold text-start text-sm w-64">
                                    Tanggal Pinjam
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-64">
                                    Tanggal Pengembalian
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-64">
                                    Status
                                </th>
                                <th className=" border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Keterangan
                                </th>
                                <th className="px-2 md:px-3 py-4 font-bold text-start text-sm w-20">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody className="relative text-sm">
                            {getCurrentPageData().map((data, index) => (
                                <tr
                                    key={index}
                                    className={`h-10 border-t ${
                                        isSelected(data.id) ? "bg-blue-100" : ""
                                    }`}
                                >
                                    <td className="border-r px-3 py-2">
                                        <input
                                            type="checkbox"
                                            id={`select-${data.id}`}
                                            className="rounded outline-0"
                                            checked={isSelected(data.id)}
                                            onChange={(e) =>
                                                handleCheckboxChange(e, data.id)
                                            }
                                        />
                                    </td>
                                    <td className="py-1 leading-6 px-3 capitalize">
                                        {data.nama_peminjam}
                                    </td>
                                    <td className="border-r border-l py-1 px-3 capitalize leading-6 line-clamp-1 pt-2">
                                        {data.nama_buku}
                                    </td>
                                    <td className="py-1 leading-6 px-3 capitalize">
                                        {data.tanggal_pinjam}
                                    </td>
                                    <td className="border-r py-1 px-3 capitalize leading-6">
                                        {data.tanggal_pengembalian}
                                    </td>

                                    <td
                                        className={`border-r py-1 px-3 capitalize leading-6 ${
                                            data.status_peminjaman.toLowerCase() ===
                                            "dikembalikan"
                                                ? "text-green-500"
                                                : "text-red-500"
                                        }`}
                                    >
                                        {data.status_peminjaman}
                                    </td>
                                    <td className="border-r border-l py-1 px-3 leading-6 truncate">
                                        {data.keterangan === null
                                            ? "Belum ada keterangan"
                                            : data.keterangan}
                                    </td>
                                    <td
                                        className="relative group border-r py-1 px-3 capitalize text-center hover:bg-blue-50 cursor-pointer"
                                        onClick={() =>
                                            handleViewDetail(data.id)
                                        }
                                    >
                                        <button>
                                            <img
                                                src="/edit.png"
                                                alt=""
                                                className="w-3 h-3"
                                            />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {viewBuku && (
                    <PopOver>
                        <DetailDaftarPinjaman
                            id={viewBuku}
                            handleClose={() => setViewBuku(null)}
                        />
                    </PopOver>
                )}

                <div className="mb-20">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        data={data}
                    />
                </div>
            </div>
        </div>
    );
}

export default TabelPinjaman;
