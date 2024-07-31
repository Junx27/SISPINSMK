import { data } from "@/Data/DataBuku";
import React from "react";

function Riwayat() {
    return (
        <div className="flex flex-col gap-3">
            {data.map((row) => (
                <div
                    key={row.id}
                    className="hover:bg-blue-50 flex gap-3 items-center cursor-pointer"
                >
                    <img
                        src={row.imageUrl}
                        alt=""
                        className="w-8 h-12 object-cover"
                    />
                    <p className="line-clamp-2">{row.caption}</p>
                </div>
            ))}
        </div>
    );
}

export default Riwayat;
