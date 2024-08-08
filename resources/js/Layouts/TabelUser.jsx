import Button from "@/Components/Button";
import MyContext from "@/Components/CreateContext";
import DownloadExcelButton from "@/Components/DownloadExcelButton";
import DownloadPDFButton from "@/Components/DownloadPDFButton";
import Dropdown from "@/Components/Dropdown";
import Pagination from "@/Components/Pagination";
import PopOver from "@/Components/PopOver";
import { useForm } from "@inertiajs/inertia-react";
import axios from "axios";
import React, { useContext, useState } from "react";
import EditUser from "./EditUser";
import { useRef } from "react";

function TabelUser({ data }) {
    const pdfRef = useRef();
    const { value, setValue } = useContext(MyContext);
    const uniqueGender = [...new Set(data.map((slide) => slide.gender))];
    const uniqueStatus = [...new Set(data.map((slide) => slide.status))];
    const ITEMS_PER_PAGE = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedIds, setSelectedIds] = useState([]);
    const [viewUser, setViewUser] = useState();
    const [filterStatus, setFilterStatus] = useState(null);
    const [filterGender, setFilterGender] = useState(null);

    const handleRefresh = () => {
        setFilterGender(null);
        setFilterGender(null);
        setValue(null);
        setViewUser(null);
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
        setViewUser(id);
        fetchUserData(id);
    };

    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;

        let filteredData = data;

        if (value) {
            filteredData = filteredData.filter((item) =>
                item.nama.toLowerCase().includes(value.toLowerCase())
            );
        }
        if (filterGender) {
            filteredData = filteredData.filter((item) =>
                item.gender.toLowerCase().includes(filterGender.toLowerCase())
            );
        }
        if (filterStatus) {
            filteredData = filteredData.filter((item) =>
                item.status.toLowerCase().includes(filterStatus.toLowerCase())
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
                await axios.delete(`/admin/user/${id}`);
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
                {viewUser && (
                    <PopOver>
                        <div className="bg-white w-[350px] p-5 rounded-lg">
                            <div className="flex justify-end">
                                <img
                                    src="/close.png"
                                    alt=""
                                    className="w-4 h-4"
                                    onClick={() => setViewUser(null)}
                                />
                            </div>
                            <EditUser id={viewUser} />
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
                                            filterGender !== null
                                                ? filterGender
                                                : "Gender"
                                        }`}
                                        className={"bg-opacity-10 bg-white/50"}
                                    />
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <div
                                        className="absolute top-2 right-2 z-50"
                                        onClick={() => setFilterGender(null)}
                                    >
                                        <img
                                            src="/close.png"
                                            alt=""
                                            className="w-3 h-3 cursor-pointer"
                                        />
                                    </div>
                                    {uniqueGender.map((row, index) => (
                                        <div
                                            key={index}
                                            className="p-2 px-5 cursor-pointer"
                                            onClick={() => setFilterGender(row)}
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
                                    <div
                                        className={`${
                                            uniqueStatus.length > 20
                                                ? "h-[600px] overflow-auto"
                                                : ""
                                        }`}
                                    >
                                        {uniqueStatus.map((row, index) => (
                                            <div
                                                key={index}
                                                className="p-2 px-5 cursor-pointer"
                                                onClick={() =>
                                                    setFilterStatus(row)
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
                                            pdfRef={pdfRef}
                                            fileName={"Daftar User"}
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
                        ref={pdfRef}
                        className="absolute mt-0 table-auto w-full shadow-lg rounded-lg p-5"
                    >
                        <thead>
                            <tr className="">
                                <th className="border-r px-2 md:px-3 py-2 font-bold rounded-tl text-sm">
                                    No
                                </th>
                                <th className="px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Nama Anggota
                                </th>
                                <th className="border-r border-l px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Email
                                </th>
                                <th className="px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Kontak
                                </th>
                                <th className="border-r border-l px-2 md:px-3 py-4 font-bold text-start text-sm w-20">
                                    Gender
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Status
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-20">
                                    Edit
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
                                        {data.nama}
                                    </td>
                                    <td className="border-r border-l py-1 px-3 leading-6">
                                        {data.email}
                                    </td>
                                    <td className="py-1 leading-6 px-3 capitalize line-clamp-2 overflow-hidden">
                                        {data.kontak}
                                    </td>
                                    <td className="border-r border-l py-1 px-3 capitalize leading-6">
                                        {data.gender}
                                    </td>
                                    <td className="border-r py-1 px-3 capitalize leading-6">
                                        {data.status}
                                    </td>
                                    <td className="border-r py-1 px-3 capitalize text-center">
                                        <button
                                            className="p-2 rounded-md"
                                            onClick={() =>
                                                handleViewDetail(data.id)
                                            }
                                        >
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
                                    Nama Anggota
                                </th>
                                <th className="border-r border-l px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Email
                                </th>
                                <th className="px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Kontak
                                </th>
                                <th className="border-r border-l px-2 md:px-3 py-4 font-bold text-start text-sm w-20">
                                    Gender
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Status
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-20">
                                    Role
                                </th>
                                <th className="px-2 md:px-3 py-4 font-bold text-start text-sm w-10">
                                    Foto Profil
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
                                    <td className="py-1 leading-6 px-3 capitalize line-clamp-2 overflow-hidden">
                                        {data.nama}
                                    </td>
                                    <td className="border-r border-l py-1 px-3 leading-6">
                                        {data.email}
                                    </td>
                                    <td className="py-1 leading-6 px-3 capitalize line-clamp-2 overflow-hidden">
                                        {data.kontak}
                                    </td>
                                    <td className="border-r border-l py-1 px-3 capitalize leading-6">
                                        {data.gender}
                                    </td>
                                    <td className="border-r py-1 px-3 capitalize leading-6">
                                        {data.status}
                                    </td>
                                    <td className="border-r py-1 px-3 capitalize">
                                        {data.role}
                                    </td>
                                    <td className="border-r py-1 px-3 capitalize">
                                        {data.foto_profil}
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
                                    Nama Anggota
                                </th>
                                <th className="border-r border-l px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Email
                                </th>
                                <th className="px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Kontak
                                </th>
                                <th className="border-r border-l px-2 md:px-3 py-4 font-bold text-start text-sm w-20">
                                    Gender
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-96">
                                    Status
                                </th>
                                <th className="border-r px-2 md:px-3 py-4 font-bold text-start text-sm w-20">
                                    Edit
                                </th>
                            </tr>
                        </thead>
                        <tbody className="relative text-sm">
                            {getCurrentPageData().map((data, index) => (
                                <tr
                                    key={index}
                                    className={`h-10 border-t ${
                                        isSelected(data.id) ||
                                        viewUser === data.id
                                            ? "bg-blue-100"
                                            : ""
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
                                        {data.nama}
                                    </td>
                                    <td className="border-r border-l py-1 px-3 leading-6">
                                        {data.email}
                                    </td>
                                    <td className="py-1 leading-6 px-3">
                                        {data.kontak}
                                    </td>
                                    <td className="border-r border-l py-1 px-3 capitalize leading-6">
                                        {data.gender}
                                    </td>
                                    <td className="border-r py-1 px-3 capitalize leading-6">
                                        {data.status}
                                    </td>
                                    <td className="border-r py-1 px-3 capitalize text-center">
                                        <button
                                            className="p-2 rounded-md"
                                            onClick={() =>
                                                handleViewDetail(data.id)
                                            }
                                        >
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

export default TabelUser;
