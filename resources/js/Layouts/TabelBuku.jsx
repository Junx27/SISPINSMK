import Button from "@/Components/Button";
import MyContext from "@/Components/CreateContext";
import DownloadExcelButton from "@/Components/DownloadExcelButton";
import DownloadPDFButton from "@/Components/DownloadPDFButton";
import Dropdown from "@/Components/Dropdown";
import InputText from "@/Components/InputText";
import Pagination from "@/Components/Pagination";
import PopOver from "@/Components/PopOver";
import { url } from "@/Data/Url";
import React, { useContext, useState } from "react";
import EditBuku from "./EditBuku";
import axios from "axios";

function TabelBuku({ data }) {
    const { value, setValue } = useContext(MyContext);
    const uniqueCategories = [
        ...new Set(data.map((slide) => slide.kategori.toLocaleLowerCase())),
    ];
    const uniqueYears = [
        ...new Set(data.map((slide) => slide.tahun.toLocaleLowerCase())),
    ];
    const uniquePenerbit = [
        ...new Set(data.map((slide) => slide.penerbit.toLocaleLowerCase())),
    ];
    const uniqueEdisi = [
        ...new Set(data.map((slide) => slide.edisi.toLocaleLowerCase())),
    ];
    const ITEMS_PER_PAGE = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedIds, setSelectedIds] = useState([]);
    const [viewBuku, setViewBuku] = useState(null);
    const [filterDate, setFilterDate] = useState(null);
    const [filterKategori, setFilterKategori] = useState(null);
    const [filterPenerbit, setFilterPenerbit] = useState(null);
    const [filterEdisi, setFilterEdisi] = useState(null);
    const [openPopup, setOpenPopup] = useState(false);
    const [bukuId, setBukuId] = useState();

    const handleEditBuku = (id) => {
        setOpenPopup(true);
        setBukuId(id);
    };

    const handleRefresh = () => {
        setFilterDate(null);
        setFilterKategori(null);
        setFilterPenerbit(null);
        setFilterEdisi(null);
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
                item.caption.toLowerCase().includes(value.toLowerCase())
            );
        }
        if (filterDate) {
            filteredData = filteredData.filter((item) =>
                item.tahun.toLowerCase().includes(filterDate.toLowerCase())
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
        if (filterPenerbit) {
            filteredData = filteredData.filter((item) =>
                item.penerbit
                    .toLowerCase()
                    .includes(filterPenerbit.toLowerCase())
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
                await axios.delete(`/admin/buku/${id}`);
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
                {viewBuku !== null && (
                    <div className="absolute z-30 bg-black right-20 top-10 w-[400px] h-[600px] rounded-lg overflow-hidden shadow-lg">
                        {data
                            .filter((row) => row.id === viewBuku)
                            .map((row, index) => (
                                <div key={index} className="relative">
                                    <img
                                        src={
                                            (row.imageUrl === "null") |
                                            (row.imageUrl === null)
                                                ? "/default-book.jpg"
                                                : url + row.imageUrl
                                        }
                                        alt=""
                                        className="w-full h-full object-cover brightness-95 rounded-lg"
                                    />
                                    <div className="absolute text-white top-0 p-5 bg-gradient-to-b from-transparent to-black w-full h-full">
                                        <div className="flex flex-col justify-between gap-32">
                                            <div className="h-64">
                                                <h1 className="font-bold text-xl capitalize">
                                                    {row.caption}
                                                </h1>
                                                <p className="capitalize">
                                                    {row.penerbit}
                                                </p>
                                                <p className="capitalize">
                                                    {row.edisi}
                                                </p>
                                                <p className="capitalize">
                                                    {row.tahun}
                                                </p>
                                            </div>
                                            <div className="mt-10">
                                                <p className="capitalize mb-2">
                                                    {row.kategori}
                                                </p>
                                                <p className="text-xs line-clamp-6">
                                                    {row.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                )}
                <div className="flex justify-between mb-2 items-center">
                    <div className="flex items-center relative">
                        <div className="flex text-xs items-center relative">
                            <div onClick={handleRefresh}>
                                <Button name={"Refresh All"} />
                            </div>
                            {selectedIds.length > 0 && (
                                <div
                                    className="w-10 ml-3"
                                    onClick={handleDelete}
                                >
                                    <img
                                        src="/delete.png"
                                        alt=""
                                        className="w-5 h-5"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="text-xs flex gap-5">
                        <div>
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <Button
                                        name={`${
                                            filterKategori !== null
                                                ? filterKategori
                                                : "Kategori"
                                        }`}
                                        className={"bg-opacity-10 bg-white/50"}
                                    />
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <div
                                        className="absolute top-2 right-2 z-50"
                                        onClick={() => setFilterKategori(null)}
                                    >
                                        <img
                                            src="/close.png"
                                            alt=""
                                            className="w-3 h-3 cursor-pointer"
                                        />
                                    </div>
                                    <div
                                        className={`${
                                            uniqueCategories.length > 20
                                                ? "h-[600px] overflow-auto"
                                                : ""
                                        }`}
                                    >
                                        {uniqueCategories.map((row, index) => (
                                            <div
                                                key={index}
                                                className="p-2 px-5 cursor-pointer"
                                                onClick={() =>
                                                    setFilterKategori(row)
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
                                            filterDate !== null
                                                ? filterDate
                                                : "Tahun"
                                        }`}
                                        className={"bg-opacity-10 bg-white/50"}
                                    />
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <div
                                        className="absolute top-2 right-2 z-50"
                                        onClick={() => setFilterDate(null)}
                                    >
                                        <img
                                            src="/close.png"
                                            alt=""
                                            className="w-3 h-3 cursor-pointer"
                                        />
                                    </div>
                                    <div
                                        className={`${
                                            uniqueYears.length > 20
                                                ? "h-[600px] overflow-auto"
                                                : ""
                                        }`}
                                    >
                                        {uniqueYears.map((row, index) => (
                                            <div
                                                key={index}
                                                className="p-2 px-5 cursor-pointer"
                                                onClick={() =>
                                                    setFilterDate(row)
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
                                            filterPenerbit !== null
                                                ? filterPenerbit
                                                : "Penerbit"
                                        }`}
                                        className={"bg-opacity-10 bg-white/50"}
                                    />
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <div
                                        className="absolute top-2 right-2 z-50"
                                        onClick={() => setFilterPenerbit(null)}
                                    >
                                        <img
                                            src="/close.png"
                                            alt=""
                                            className="w-3 h-3 cursor-pointer"
                                        />
                                    </div>
                                    <div
                                        className={`${
                                            uniquePenerbit.length > 20
                                                ? "h-[600px] overflow-auto"
                                                : ""
                                        }`}
                                    >
                                        {uniquePenerbit.map((row, index) => (
                                            <div
                                                key={index}
                                                className="p-2 px-5 cursor-pointer"
                                                onClick={() =>
                                                    setFilterPenerbit(row)
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
                                            filterEdisi !== null
                                                ? filterEdisi
                                                : "Edisi"
                                        }`}
                                        className={"bg-opacity-10 bg-white/50"}
                                    />
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <div
                                        className="absolute top-2 right-2 z-50"
                                        onClick={() => setFilterEdisi(null)}
                                    >
                                        <img
                                            src="/close.png"
                                            alt=""
                                            className="w-3 h-3 cursor-pointer"
                                        />
                                    </div>
                                    <div
                                        className={`${
                                            uniqueEdisi.length > 20
                                                ? "h-[600px] overflow-auto"
                                                : ""
                                        }`}
                                    >
                                        {uniqueEdisi.map((row, index) => (
                                            <div
                                                key={index}
                                                className="p-2 px-5 cursor-pointer"
                                                onClick={() =>
                                                    setFilterEdisi(row)
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
                                            elementId={dataBukuPDF}
                                        />
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
                        className="absolute mt-0 table-auto w-full shadow-lg rounded-lg p-5"
                    >
                        <thead>
                            <tr className="">
                                <th className="border-r px-2 md:px-3 py-2 font-bold rounded-tl text-sm">
                                    No
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Nama Buku
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Kategori
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Penerbit
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-20">
                                    Tahun
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Edisi
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-20">
                                    Edit
                                </th>
                                <th className="px-2 md:px-3 py-4 font-bold text-start text-sm w-10">
                                    Detail
                                </th>
                            </tr>
                        </thead>
                        <tbody className="relative text-sm">
                            {getCurrentPageData().map((data, index) => (
                                <tr
                                    key={index}
                                    className={`border-t ${
                                        isSelected(data.id) ? "bg-blue-100" : ""
                                    }`}
                                >
                                    <td className="border-r px-3 py-2">
                                        {index + 1}
                                    </td>
                                    <td className="py-1 leading-6 px-3 capitalize line-clamp-2 overflow-hidden">
                                        {data.caption}
                                    </td>
                                    <td className="border-r border-l py-1 px-3 capitalize leading-6">
                                        {data.kategori}
                                    </td>
                                    <td className="py-1 leading-6 px-3 capitalize line-clamp-2 overflow-hidden">
                                        {data.penerbit}
                                    </td>
                                    <td className="border-r border-l py-1 px-3 capitalize leading-6">
                                        {data.tahun}
                                    </td>
                                    <td className="border-r py-1 px-3 capitalize leading-6">
                                        {data.edisi}
                                    </td>
                                    <td className="border-r py-1 px-3 capitalize">
                                        <button
                                            className="bg-blue-50 p-2 rounded-md"
                                            onClick={() =>
                                                handleViewDetail(data.id)
                                            }
                                        >
                                            <img
                                                src="/edit.png"
                                                alt=""
                                                className="w-5 h-5"
                                            />
                                        </button>
                                    </td>
                                    <td className="py-1 px-3 capitalize">
                                        <button
                                            className="bg-blue-50 p-2 rounded-md"
                                            onClick={() =>
                                                handleViewDetail(data.id)
                                            }
                                        >
                                            <img
                                                src="/eye.png"
                                                alt=""
                                                className="w-5 h-5"
                                            />
                                        </button>
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
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Nama Buku
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-56">
                                    Kategori
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Penerbit
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-20">
                                    Tahun
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Edisi
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Deskripsi
                                </th>
                                <th className="px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Cover
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
                                    <td className="border-r py-1 leading-6 px-3 capitalize line-clamp-2 overflow-hidden">
                                        {data.caption}
                                    </td>
                                    <td className="border-r py-1 px-3 capitalize leading-6">
                                        {data.kategori}
                                    </td>
                                    <td className="border-r py-1 leading-6 px-3 capitalize line-clamp-2 overflow-hidden">
                                        {data.penerbit}
                                    </td>
                                    <td className="border-r py-1 px-3 capitalize leading-6">
                                        {data.tahun}
                                    </td>
                                    <td className="border-r py-1 px-3 capitalize leading-6">
                                        {data.edisi}
                                    </td>
                                    <td className="border-r py-1 px-3 capitalize">
                                        {data.desc}
                                    </td>
                                    <td className="border-r py-1 px-3 capitalize">
                                        {data.imageUrl}
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
                                    Nama Buku
                                </th>
                                <th className="border-r border-l px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Kategori
                                </th>
                                <th className="px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Penerbit
                                </th>
                                <th className="border-r border-l px-2 md:px-3 py-4 font-bold text-start text-sm w-20">
                                    Tahun
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Edisi
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-20">
                                    Edit
                                </th>
                                <th className="px-2 md:px-3 py-4 font-bold text-start text-sm w-10">
                                    Detail
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
                                    <td className="py-1 leading-6 px-3 capitalize line-clamp-2 overflow-hidden">
                                        {data.caption}
                                    </td>
                                    <td className="border-r border-l py-1 px-3 capitalize leading-6">
                                        {data.kategori}
                                    </td>
                                    <td className="py-1 leading-6 px-3 capitalize line-clamp-2 overflow-hidden">
                                        {data.penerbit}
                                    </td>
                                    <td className="border-r border-l py-1 px-3 capitalize leading-6">
                                        {data.tahun}
                                    </td>
                                    <td className="border-r py-1 px-3 capitalize leading-6">
                                        {data.edisi}
                                    </td>
                                    <td className="border-r py-1 px-3 capitalize">
                                        <button
                                            className="bg-blue-50 p-2 rounded-md"
                                            onClick={() =>
                                                handleEditBuku(data.id)
                                            }
                                        >
                                            <img
                                                src="/edit.png"
                                                alt=""
                                                className="w-5 h-5"
                                            />
                                        </button>
                                    </td>
                                    <td className="py-1 px-3 capitalize">
                                        <button
                                            className="bg-blue-50 p-2 rounded-md"
                                            onMouseOver={() =>
                                                handleViewDetail(data.id)
                                            }
                                            onMouseOut={() =>
                                                handleViewDetail(null)
                                            }
                                        >
                                            <img
                                                src="/eye.png"
                                                alt=""
                                                className="w-5 h-5"
                                            />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div></div>
                {openPopup && (
                    <PopOver>
                        <div className="">
                            <EditBuku
                                id={bukuId}
                                handleClose={() => setOpenPopup(false)}
                            />
                        </div>
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

export default TabelBuku;
