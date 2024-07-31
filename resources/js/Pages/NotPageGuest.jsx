import { Inertia } from "@inertiajs/inertia";
import React from "react";

function NotPgaeGuest() {
    const handleButton = () => {
        Inertia.post("/logout");
    };
    return (
        <div className="w-full h-screen">
            <img
                src="/footer.jpg"
                alt=""
                className="w-full h-full object-cover"
            />
            <div className="inset-0 absolute bg-gradient-to-t from-white to-transparent w-full h-full">
                <h1 className="font-bold text-3xl text-center mt-64">
                    Halaman tidak ditemukan
                </h1>
                <div className="flex justify-center" onClick={handleButton}>
                    <button className="bg-black p-2 rounded-md mt-5 text-white">
                        Kembali ke halaman sebelumnya
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NotPgaeGuest;
