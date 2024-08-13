import { useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { url } from "@/Data/Url";
import PopOver from "@/Components/PopOver";

function EditFotoBuku({ buku }) {
    const [openPopup, setOpenPopup] = useState(false);
    const { data, setData, post, progress } = useForm({
        _method: "PUT",
        imageUrl: null,
    });

    const handleFileChange = (e) => {
        setData("imageUrl", e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpenPopup(true);
        post(`/admin/buku-foto/${buku.id}`, {
            forceFormData: true,
        });
    };

    const handleKonfirmasi = () => {
        window.location.href = "/admin/buku";
    };

    return (
        <div className="w-full h-screen">
            {openPopup && (
                <PopOver>
                    <div className="bg-white p-5 rounded-md w-64 h-32">
                        <p className="text-center text-xs">
                            Data berhasil dirubah
                        </p>
                        <div
                            className="flex justify-center mt-5 cursor-pointer"
                            onClick={handleKonfirmasi}
                        >
                            <button className="bg-blue-500 text-white rounded-md w-32 p-2">
                                ok
                            </button>
                        </div>
                    </div>
                </PopOver>
            )}
            <img
                src="/footer.jpg"
                alt=""
                className="w-full h-screen object-cover"
            />

            <div className="inset-0 absolute left-0 p-5 bg-opacity-10 bg-white/75">
                <div className="bg-white p-5 rounded-lg shadow-lg w-96 mx-auto">
                    <h2 className="text-xl font-semibold mb-4">
                        Edit Foto Buku
                    </h2>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="mb-4">
                            <img
                                src={
                                    data.imageUrl
                                        ? URL.createObjectURL(data.imageUrl)
                                        : url + buku.imageUrl
                                }
                                alt="Current Book"
                                className="w-full h-64 object-cover rounded-lg"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="file"
                                name="foto_profil"
                                accept="image/*"
                                className="block w-full text-sm text-gray-500
                                   file:mr-4 file:py-2 file:px-4
                                   file:rounded-full file:border-0
                                   file:text-sm file:font-semibold
                                   file:bg-blue-50 file:text-blue-700
                                   hover:file:bg-blue-100"
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="text-right">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm"
                            >
                                Update Foto
                            </button>
                        </div>
                        {progress && (
                            <div className="w-full bg-gray-200 mt-4">
                                <div
                                    className="bg-blue-500 text-xs leading-none py-1 text-center text-white"
                                    style={{ width: `${progress.percentage}%` }}
                                >
                                    {progress.percentage}%
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditFotoBuku;
