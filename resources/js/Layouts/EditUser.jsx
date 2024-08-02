import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { url } from "@/Data/Url";

function EditUser({ id }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: "",
        email: "",
        kontak: "",
        gender: "",
        status: "",
        foto_profil: null,
    });

    const [imagePreview, setImagePreview] = useState();

    useEffect(() => {
        const getUserById = async () => {
            try {
                const response = await axios.get(`/admin/user/${id}`);
                setData({
                    nama: response.data.nama,
                    email: response.data.email,
                    kontak: response.data.kontak,
                    gender: response.data.gender,
                    status: response.data.status,
                    foto_profil: response.data.foto_profil,
                });
            } catch (error) {
                console.error(error);
            }
        };
        getUserById();
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.put(`/admin/user-update/${id}`, data);
        window.location.reload();
    };
    return (
        <div>
            <img
                src={url + data.foto_profil} // Provide a default image URL if imagePreview is null
                alt="Profile"
                className="w-32 h-32 mx-auto rounded-full"
            />
            <form
                className="mt-5 text-xs mx-5 flex flex-col gap-3 pb-10"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
            >
                <p className="font-bold">Nama</p>
                <input
                    type="text"
                    name="nama"
                    className="text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                    value={data.nama}
                    onChange={(e) => setData("nama", e.target.value)}
                />
                {errors.nama && (
                    <div className="text-red-500">{errors.nama}</div>
                )}

                <p className="font-bold">Email</p>
                <input
                    type="email"
                    name="email"
                    className="text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                />
                {errors.email && (
                    <div className="text-red-500">{errors.email}</div>
                )}

                <p className="font-bold">Kontak</p>
                <input
                    type="text"
                    name="kontak"
                    className="text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                    value={data.kontak}
                    onChange={(e) => setData("kontak", e.target.value)}
                />
                {errors.kontak && (
                    <div className="text-red-500">{errors.kontak}</div>
                )}

                <p className="font-bold">Gender</p>
                <input
                    type="text"
                    name="gender"
                    className="text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                    value={data.gender}
                    onChange={(e) => setData("gender", e.target.value)}
                />
                {errors.gender && (
                    <div className="text-red-500">{errors.gender}</div>
                )}

                <p className="font-bold">Status</p>
                <input
                    type="text"
                    name="status_user"
                    className="text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                    value={data.status}
                    onChange={(e) => setData("status", e.target.value)}
                />
                {errors.status_user && (
                    <div className="text-red-500">{errors.status_user}</div>
                )}

                <button
                    type="submit"
                    className="bg-blue-500 text-white mt-5 rounded-md text-xs p-2"
                    disabled={processing}
                >
                    {processing ? "Saving..." : "Simpan perubahan"}
                </button>
            </form>
        </div>
    );
}

export default EditUser;
