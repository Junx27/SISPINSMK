import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";

function CreateBook() {
    const [formData, setFormData] = useState({
        imageUrl: null,
        caption: "",
        kategori: "",
        stok: "",
        penerbit: "",
        tahun: "",
        edisi: "",
        desc: "",
        user_id: 1,
    });

    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const form = new FormData();
        for (const key in formData) {
            if (formData[key]) {
                form.append(key, formData[key]);
            }
        }

        try {
            await Inertia.post("/admin/buku-create", form, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                onSuccess: () => {
                    alert("Buku berhasil dibuat!");
                    setProcessing(false);
                },
                onError: (errors) => {
                    setErrors(errors);
                    setProcessing(false);
                },
            });
        } catch (error) {
            console.error("Error creating book:", error);
            setProcessing(false);
        }
    };
    return (
        <div>
            <form
                className="text-xs mx-5 flex flex-col gap-3"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
            >
                <label htmlFor="imageUrl">
                    <input
                        type="file"
                        name="imageUrl"
                        id="imageUrl"
                        onChange={handleChange}
                        className="mt-10 block w-full text-xs text-gray-500
                                   file:mr-4 file:py-2 file:px-4
                                   file:rounded-sm file:border-0
                                   file:text-xs file:font-semibold
                                   file:bg-blue-50 file:text-blue-700
                                   hover:file:bg-blue-100"
                        required
                    />
                </label>
                {errors.imageUrl && (
                    <div className="text-red-500">{errors.imageUrl}</div>
                )}

                <p className="font-bold">Caption</p>
                <input
                    type="text"
                    name="caption"
                    className="text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                    value={formData.caption}
                    onChange={handleChange}
                    required
                />
                {errors.caption && (
                    <div className="text-red-500">{errors.caption}</div>
                )}

                <p className="font-bold">Kategori</p>
                <input
                    type="text"
                    name="kategori"
                    className="text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                    value={formData.kategori}
                    onChange={handleChange}
                    required
                />
                {errors.kategori && (
                    <div className="text-red-500">{errors.kategori}</div>
                )}
                <p className="font-bold">Stok</p>
                <input
                    type="number"
                    name="stok"
                    className="text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                    value={formData.stok}
                    onChange={handleChange}
                    required
                />
                {errors.stok && (
                    <div className="text-red-500">{errors.stok}</div>
                )}

                <p className="font-bold">Penerbit</p>
                <input
                    type="text"
                    name="penerbit"
                    className="text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                    value={formData.penerbit}
                    onChange={handleChange}
                    required
                />
                {errors.penerbit && (
                    <div className="text-red-500">{errors.penerbit}</div>
                )}

                <p className="font-bold">Tahun</p>
                <input
                    type="number"
                    name="tahun"
                    className="text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                    value={formData.tahun}
                    onChange={handleChange}
                    required
                />
                {errors.tahun && (
                    <div className="text-red-500">{errors.tahun}</div>
                )}

                <p className="font-bold">Edisi</p>
                <input
                    type="text"
                    name="edisi"
                    className="text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                    value={formData.edisi}
                    onChange={handleChange}
                    required
                />
                {errors.edisi && (
                    <div className="text-red-500">{errors.edisi}</div>
                )}

                <p className="font-bold">Deskripsi</p>
                <textarea
                    name="desc"
                    className="text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                    value={formData.desc}
                    onChange={handleChange}
                    rows={5}
                    required
                />
                {errors.desc && (
                    <div className="text-red-500">{errors.desc}</div>
                )}

                <button
                    type="submit"
                    className="bg-blue-500 text-white mt-5 rounded-md text-xs p-2"
                    disabled={processing}
                >
                    {processing ? "Saving..." : "Simpan"}
                </button>
                <a
                    href="/import"
                    className="text-blue-500 text-xs text-end"
                    onClick={() => setOpenUploadCSV(true)}
                >
                    Upload CSV?
                </a>
            </form>
        </div>
    );
}

export default CreateBook;
