import DownloadPDFButton from "@/Components/DownloadPDFButton";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import DataAnggota from "@/Layouts/DataAnggota";
import DataPengunjung from "@/Layouts/DataPengunjung";
import React, { useState } from "react";
const slides = [
    {
        id: 1,
        imageUrl:
            "https://w0.peakpx.com/wallpaper/364/693/HD-wallpaper-portrait-display-vertical-yin-and-yang-artwork-minimalism-digital-art-chinese-characters.jpg",
        caption: "Ketenangan dalam mencari jati diri",
        kategori: "Ilmu terapan",
        penerbit: "Jurnal Bisnis dan Manajemen (JURBISMAN)",
        tahun: "2018",
        edisi: "kelas XII Semester 1",
        desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali  melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
    },
    {
        id: 2,
        imageUrl:
            "https://i.pinimg.com/736x/c9/7e/e1/c97ee10c43feb76184d200736b71b8b8.jpg",
        caption:
            "Bermuka dua untuk mencari ketenangan jiwa seorang diri dalam kehidupan",
        kategori: "Ilmu terapan",
        penerbit: "Jurnal Bisnis dan Manajemen (JURBISMAN)",
        tahun: "2021",
        edisi: "kelas XII Semester 1",
        desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak  yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
    },
    {
        id: 3,
        imageUrl:
            "https://i.pinimg.com/736x/3d/34/2c/3d342cec18cac749f92c7fa0337c13c3.jpg",
        caption: "Kaneki episode 13 subtitle indonesia volume 23 terupdate",
        kategori: "Ilmu terapan",
        penerbit: "Jurnal Bisnis dan Manajemen (JURBISMAN)",
        tahun: "2024",
        edisi: "kelas XII Semester 1",
        desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda  tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
    },
    {
        id: 4,
        imageUrl:
            "https://w0.peakpx.com/wallpaper/492/528/HD-wallpaper-dark-vertical-portrait-display-thumbnail.jpg",
        caption: "Kesenian kehidupan",
        kategori: "Ilmu terapan",
        penerbit: "Jurnal Bisnis dan Manajemen (JURBISMAN)",
        tahun: "2022",
        edisi: "kelas XII Semester 1",
        desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang  ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
    },
    {
        id: 5,
        imageUrl:
            "https://i.pinimg.com/736x/aa/a9/42/aaa9428e3fc7f85a9472ce4fcde6673d.jpg",
        caption: "fantasi dunia menerkam segalanya",
        kategori: "Ilmu terapan",
        penerbit: "Jurnal Bisnis dan Manajemen (JURBISMAN)",
        tahun: "2020",
        edisi: "kelas XII Semester 1",
        desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang  ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
    },
    {
        id: 6,
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdYs_XkSh6TWe-G6K3LCPPFGsDkGOk6LGt_g&s",
        caption: "Kesenjangan sosial bagi kehidupan",
        kategori: "Ilmu terapan",
        penerbit: "Jurnal Bisnis dan Manajemen (JURBISMAN)",
        tahun: "2017",
        edisi: "kelas XII Semester 1",
        desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang  ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
    },
    {
        id: 7,
        imageUrl:
            "https://e0.pxfuel.com/wallpapers/775/753/desktop-wallpaper-walpaper-dengan-gambar-pretty-girl-aesthetic.jpg",
        caption: "Ketenangan dalam mencari jati diri",
        kategori: "Ilmu terapan",
        penerbit: "Jurnal Bisnis dan Manajemen (JURBISMAN)",
        tahun: "2018",
        edisi: "kelas XII Semester 1",
        desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali  melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
    },
    {
        id: 8,
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUOUyrrYheQ0QQrDxmgJUXNeFjQck9GPYAYA&s",
        caption:
            "Bermuka dua untuk mencari ketenangan jiwa seorang diri dalam kehidupan",
        kategori: "Ilmu terapan",
        penerbit: "Jurnal Bisnis dan Manajemen (JURBISMAN)",
        tahun: "2021",
        edisi: "kelas XII Semester 1",
        desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak  yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
    },
    {
        id: 9,
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53qRLU8GhTdPMqHc0WJgJBzDjKzBYvGErSA&s",
        caption: "Kaneki episode 13 subtitle indonesia volume 23 terupdate",
        kategori: "Ilmu terapan",
        penerbit: "Jurnal Bisnis dan Manajemen (JURBISMAN)",
        tahun: "2024",
        edisi: "kelas XII Semester 1",
        desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda  tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
    },
    {
        id: 10,
        imageUrl:
            "https://i.pinimg.com/236x/65/cc/a1/65cca1866650e63a45feacd0297b6d7b.jpg",
        caption: "Kesenian kehidupan",
        kategori: "Ilmu terapan",
        penerbit: "Jurnal Bisnis dan Manajemen (JURBISMAN)",
        tahun: "2022",
        edisi: "kelas XII Semester 1",
        desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang  ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
    },
    {
        id: 11,
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb2M4qofJIby3EtTx7At3I8PI8k0FEK06yrA&s",
        caption: "fantasi dunia menerkam segalanya",
        kategori: "Ilmu terapan",
        penerbit: "Jurnal Bisnis dan Manajemen (JURBISMAN)",
        tahun: "2020",
        edisi: "kelas XII Semester 1",
        desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang  ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
    },
    {
        id: 12,
        imageUrl:
            "https://c4.wallpaperflare.com/wallpaper/227/583/604/anime-anime-girls-digital-art-artwork-2d-hd-wallpaper-preview.jpg",
        caption: "Kesenjangan sosial bagi kehidupan",
        kategori: "Ilmu terapan",
        penerbit: "Jurnal Bisnis dan Manajemen (JURBISMAN)",
        tahun: "2017",
        edisi: "kelas XII Semester 1",
        desc: "Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang  ia sama sekali tidak punya bakat, Berkeliling dunia, menghadapi monster, melindungi orang-orang. Noor, pemuda yang ingin menjadi petualang, diberi tahu kalau ia sama sekali tidak punya bakat,",
    },
];

function Dashboard({ auth }) {
    const [openMenu, setOpenMenu] = useState(false);
    const profile = "/profile.jpg";
    const logo = "/logo.png";

    const handleMenu = () => {
        setOpenMenu(!openMenu);
    };
    const totalBuku = 6547;
    const jumlahAnggota = 234;
    const jumlahPeminjaman = 234;
    const hasilPembagian = totalBuku / jumlahAnggota;
    const ratio = Math.round(hasilPembagian);
    const probabilitas = Math.round(jumlahAnggota / jumlahPeminjaman);
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
            <div className="w-full h-screen">
                <img
                    src="/footer.jpg"
                    alt=""
                    className="w-full h-screen object-cover"
                />
                <div
                    id="dashboard"
                    className="inset-0 absolute top-20 left-0 ml-20 p-5 bg-opacity-10 bg-white/75 rounded-lg rounded-t-none"
                >
                    <div className="bg-white h-full rounded-lg">
                        <h1 className="font-bold text-3xl text-center pt-10 capitalize">
                            selamat datang di sistem peminjaman buku
                        </h1>
                        <div className="pt-32 flex gap-20 p-5">
                            <div className="w-[800px]">
                                <DataPengunjung />
                            </div>
                            <div className="w-[200px]">
                                <DataAnggota />
                                <div className="mt-8 text-xs flex flex-col gap-3">
                                    <h1 className="font-bold">Ratio Buku</h1>
                                    <p>{ratio} % setiap anggota</p>
                                    <h1 className="font-bold">
                                        Probabilitas Peminjaman
                                    </h1>
                                    <p>{probabilitas} % peminjaman</p>
                                    <h1 className="font-bold">
                                        Peminjaman Hari Terakhir
                                    </h1>
                                    <p>16 Buku</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h1 className="text-xs">Data Buku</h1>
                                    <p className="my-5 font-bold text-blue-500">
                                        6574
                                    </p>
                                </div>
                                <div>
                                    <h1 className="text-xs">Data Anggota</h1>
                                    <p className="my-5 font-bold text-orange-500">
                                        234
                                    </p>
                                </div>
                                <div>
                                    <h1 className="text-xs">Data Peminjaman</h1>
                                    <p className="my-5 font-bold text-purple-500">
                                        234
                                    </p>
                                </div>
                                <div>
                                    <h1 className="text-xs">Buku Kembali</h1>
                                    <p className="my-5 font-bold text-green-500">
                                        76
                                    </p>
                                </div>
                                <div>
                                    <h1 className="text-xs">Buku Dipinjam</h1>
                                    <p className="mt-5 font-bold text-red-500">
                                        34
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-xs absolute bottom-10 right-10">
                    <DownloadPDFButton elementId={"dashboard"} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
