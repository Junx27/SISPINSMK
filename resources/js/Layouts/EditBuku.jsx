import PopOver from "@/Components/PopOver";
import { url } from "@/Data/Url";
import { useForm } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";

function EditBuku({ id, handleClose }) {
    const [openPopup, setOpenPopup] = useState(false);
    const { data, setData, put } = useForm({
        caption: "",
        kategori: "",
        stok: "",
        penerbit: "",
        tahun: "",
        edisi: "",
        desc: "",
        imageUrl: null,
    });
    useEffect(() => {
        const getBukuById = async () => {
            try {
                const response = await axios.get(`/admin/buku/${id}`);
                setData({
                    caption: response.data.caption,
                    kategori: response.data.kategori,
                    stok: response.data.stok,
                    penerbit: response.data.penerbit,
                    tahun: response.data.tahun,
                    edisi: response.data.edisi,
                    desc: response.data.desc,
                    imageUrl: response.data.imageUrl,
                });
            } catch (error) {
                console.error(error);
            }
        };
        getBukuById();
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpenPopup(true);
        put(`/admin/buku-update/${id}`);
    };

    return (
        <div className="bg-white p-5 rounded-lg w-[700px] shadow-lg">
            {openPopup && (
                <PopOver>
                    <div className="bg-white p-5 rounded-md w-64 h-32">
                        <p className="text-center text-xs">
                            Data berhasil dirubah
                        </p>
                        <div
                            className="flex justify-center mt-5 cursor-pointer"
                            onClick={() => window.location.reload()}
                        >
                            <button className="bg-blue-500 text-white rounded-md w-32 p-2">
                                ok
                            </button>
                        </div>
                    </div>
                </PopOver>
            )}
            <div className="flex justify-end" onClick={handleClose}>
                <img src="/close.png" alt="" className="w-5 h-5" />
            </div>
            <form
                className="mt-5 text-xs mx-5 flex flex-row gap-5"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
            >
                <div className="w-full mt-3">
                    <a href={`/admin/buku-foto/${id}`}>
                        <img
                            src={
                                (data.imageUrl === "null") |
                                (data.imageUrl === null)
                                    ? "/default-book.jpg"
                                    : url + data.imageUrl
                            }
                            alt=""
                            className="w-full h-64 object-cover brightness-95 rounded-lg"
                        />
                    </a>
                    <p className="font-bold mt-5">Caption</p>
                    <input
                        type="text"
                        name="caption"
                        className="w-full mt-3 text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                        value={data.caption}
                        onChange={(e) => setData("caption", e.target.value)}
                        required
                    />
                    <p className="font-bold">Kategori</p>
                    <input
                        type="text"
                        name="kategori"
                        className="w-full mt-3 text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                        value={data.kategori}
                        onChange={(e) => setData("kategori", e.target.value)}
                        required
                    />
                    <p className="font-bold mt-3">Stok</p>
                    <input
                        type="number"
                        name="stok"
                        className="w-full mt-3 text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                        value={data.stok}
                        onChange={(e) => setData("stok", e.target.value)}
                        required
                    />
                </div>
                <div className="w-full">
                    <p className="font-bold mt-3">Penerbit</p>
                    <input
                        type="text"
                        name="penerbit"
                        className="w-full mt-3 text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                        value={data.penerbit}
                        onChange={(e) => setData("penerbit", e.target.value)}
                        required
                    />
                    <p className="font-bold mt-3">Tahun</p>
                    <input
                        type="number"
                        name="tahun"
                        className="w-full mt-3 text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                        value={data.tahun}
                        onChange={(e) => setData("tahun", e.target.value)}
                        required
                    />
                    <p className="font-bold mt-3">Edisi</p>
                    <input
                        type="text"
                        name="edisi"
                        className="w-full mt-3 text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                        value={data.edisi}
                        onChange={(e) => setData("edisi", e.target.value)}
                        required
                    />
                    <p className="font-bold mt-3">Deskripsi</p>
                    <textarea
                        name="desc"
                        className="w-full mt-3 text-xs bg-blue-50 hover:bg-blue-100 cursor-pointer rounded-sm outline-none border-0"
                        value={data.desc}
                        rows={10}
                        onChange={(e) => setData("desc", e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white mt-3 rounded-md text-xs p-2 w-full"
                    >
                        Simpan perubahan
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditBuku;
