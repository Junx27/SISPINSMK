import PopOver from "@/Components/PopOver";
import { useForm } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";

function ImportBuku({ auth }) {
    const [openPopUp, setOpenPopUp] = useState(false);
    const userRole = auth.user.role;
    useEffect(() => {
        if (userRole === "anggota") {
            window.location.href = "/daftar-buku";
        }
    });
    const { data, setData, post } = useForm({
        file: null,
    });

    const handleFileChange = (event) => {
        setData("file", event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        post("/import", {
            forceFormData: true,
            onSuccess: () => {
                console.log("File uploaded successfully");
            },
            onError: () => {
                console.log("File upload failed");
            },
        });
        setOpenPopUp(true);
    };
    const downloadCSV = (url, filename, link) => {
        url = "/CSV.xlsx";
        filename = "Format Buku";
        link = document.createElement("a");
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            {openPopUp && (
                <PopOver>
                    <div className="-mt-32 bg-white p-5 rounded-lg">
                        <h1 className="font-bold text-center mb-3 text-2xl">
                            Data sudah dimasukan
                        </h1>
                        <p className="text-xs text-center mb-5">
                            Pastikan format yang dimasukan benar, sesuai format
                            petunjuk
                        </p>
                        <a href="/admin/buku">
                            <div className="flex justify-center text-xs">
                                <button className="bg-black p-2 rounded-md text-white">
                                    Lihat buku
                                </button>
                            </div>
                        </a>
                    </div>
                </PopOver>
            )}
            {userRole === "admin" && (
                <div className="w-full h-screen">
                    <img
                        src="/footer.jpg"
                        alt=""
                        className="w-full h-screen object-cover"
                    />

                    <div className="inset-0 absolute left-0 p-5 bg-opacity-10 bg-white/75">
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white p-5 rounded-lg flex flex-col w-64 text-xs mx-auto mt-32"
                        >
                            <div className="flex justify-end">
                                <a href="/admin/buku">
                                    <img
                                        src="/close.png"
                                        alt=""
                                        className="w-4 h-4 mb-5 cursor-pointer"
                                    />
                                </a>
                            </div>
                            <input
                                type="file"
                                name="file"
                                id="file"
                                className="block w-full text-sm text-gray-500
                                   file:mr-4 file:py-2 file:px-4
                                   file:rounded-full file:border-0
                                   file:text-sm file:font-semibold
                                   file:bg-blue-50 file:text-blue-700
                                   hover:file:bg-blue-100"
                                onChange={handleFileChange}
                                required
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 p-2 rounded-md text-white mt-5"
                            >
                                Upload
                            </button>
                            <p
                                className="text-blue-500 mt-3 text-end"
                                onClick={downloadCSV}
                            >
                                Download format buku?
                            </p>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ImportBuku;
