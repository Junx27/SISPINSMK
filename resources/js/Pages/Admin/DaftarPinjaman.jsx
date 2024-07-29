import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import TabelPinjaman from "@/Layouts/TabelPinjaman";
import React, { useState } from "react";

function DaftarPinjaman({ auth }) {
    const [openMenu, setOpenMenu] = useState(false);
    const profile = "/profile.jpg";
    const logo = "/logo.png";

    const handleMenu = () => {
        setOpenMenu(!openMenu);
    };
    return (
        <div>
            <Navbar
                profile={profile}
                logo={logo}
                handleMenu={handleMenu}
                showIcon={openMenu ? false : true}
            />
            <div className="absolute w-20 overflow-hidden">
                <Sidebar />
            </div>
            <div
                className={`absolute transition-all duration-500 w-[300px] z-50 backdrop-blur-sm bg-white/75 h-screen ${
                    openMenu ? "ml-0" : "-ml-96"
                }`}
            >
                <button onClick={() => setOpenMenu(!openMenu)}>
                    <img
                        src="/close.png"
                        alt=""
                        className={`transition-all duration-1000 w-5 h-5 relative top-4 left-64 ${
                            openMenu ? "rotate-0" : "rotate-90"
                        }`}
                    />
                </button>
                <div className="-mt-7">
                    <Sidebar viewicon={true} />
                </div>
            </div>
            <div>
                <div className="w-full h-screen">
                    <img
                        src="/footer.jpg"
                        alt=""
                        className="w-full h-screen object-cover"
                    />
                    <div className="inset-0 absolute top-20 left-0 ml-20 p-5 bg-opacity-10 bg-white/75 rounded-lg">
                        <TabelPinjaman />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DaftarPinjaman;
