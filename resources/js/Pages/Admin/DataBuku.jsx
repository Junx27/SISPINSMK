import React, { useState, useEffect } from "react";

// Fungsi untuk menghitung estimasi hari menggunakan moment dari global window
const hitungEstimasi = (tanggalPinjam, tanggalPengembalian) => {
    const formatTanggal = "DD MMMM YYYY";

    // Parse tanggal
    const tanggalPinjamMoment = window.moment(tanggalPinjam, formatTanggal);
    const tanggalPengembalianMoment = window.moment(
        tanggalPengembalian,
        formatTanggal
    );

    // Validasi tanggal
    if (
        !tanggalPinjamMoment.isValid() ||
        !tanggalPengembalianMoment.isValid()
    ) {
        return NaN; // Mengembalikan NaN jika tanggal tidak valid
    }

    // Hitung perbedaan dalam hari
    return tanggalPengembalianMoment.diff(tanggalPinjamMoment, "days");
};

// Fungsi untuk menghitung hitung mundur
const hitungMundur = (tanggalPengembalian) => {
    const sekarang = window.moment();
    const tanggalPengembalianMoment = window.moment(
        tanggalPengembalian,
        "DD MMMM YYYY"
    );

    if (!tanggalPengembalianMoment.isValid()) {
        return { status: "Tanggal tidak valid", text: "" };
    }

    const durasi = window.moment.duration(
        tanggalPengembalianMoment.diff(sekarang)
    );
    const hari = Math.floor(durasi.asDays());
    const jam = Math.floor(durasi.asHours()) % 24;
    const menit = Math.floor(durasi.asMinutes()) % 60;
    const detik = Math.floor(durasi.asSeconds()) % 60;

    // Mengatur status jika waktu hitung mundur mencapai 0
    const status =
        hari <= 0 && jam <= 0 && menit <= 0 && detik <= 0 ? "Habis" : "";

    return {
        status,
        text: `${hari} : ${jam} : ${menit} : ${detik}`,
    };
};

const DataPinjaman = () => {
    // State untuk menyimpan data pinjaman
    const [dataPinjaman, setDataPinjaman] = useState([]);
    const [namaPeminjam, setNamaPeminjam] = useState("");
    const [namaBuku, setNamaBuku] = useState("");
    const [tanggalPinjam, setTanggalPinjam] = useState("");
    const [tanggalPengembalian, setTanggalPengembalian] = useState("");

    // Fungsi untuk konversi format dari YYYY-MM-DD ke DD MMMM YYYY
    const formatTanggal = (tanggal) => {
        return window.moment(tanggal).format("DD MMMM YYYY");
    };

    // Fungsi untuk menambahkan data pinjaman
    const tambahPinjaman = () => {
        // Konversi tanggal dari format YYYY-MM-DD ke DD MMMM YYYY
        const tanggalPinjamFormat = formatTanggal(tanggalPinjam);
        const tanggalPengembalianFormat = formatTanggal(tanggalPengembalian);

        const estimasi = hitungEstimasi(
            tanggalPinjamFormat,
            tanggalPengembalianFormat
        );

        const newPinjaman = {
            id: dataPinjaman.length + 1,
            nama_peminjam: namaPeminjam,
            nama_buku: namaBuku,
            tanggal_pinjam: tanggalPinjamFormat,
            tanggal_pengembalian: tanggalPengembalianFormat,
            estimasi,
            hitungMundur: hitungMundur(tanggalPengembalianFormat),
        };

        setDataPinjaman([...dataPinjaman, newPinjaman]);

        // Reset form
        setNamaPeminjam("");
        setNamaBuku("");
        setTanggalPinjam("");
        setTanggalPengembalian("");
    };

    // Update hitung mundur setiap detik
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDataPinjaman((prevData) =>
                prevData.map((pinjaman) => ({
                    ...pinjaman,
                    hitungMundur: hitungMundur(pinjaman.tanggal_pengembalian),
                }))
            );
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1>Data Pinjaman</h1>

            {/* Form Input */}
            <div>
                <h2>Tambah Pinjaman</h2>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        tambahPinjaman();
                    }}
                >
                    <div>
                        <label>Nama Peminjam: </label>
                        <input
                            type="text"
                            value={namaPeminjam}
                            onChange={(e) => setNamaPeminjam(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Nama Buku: </label>
                        <input
                            type="text"
                            value={namaBuku}
                            onChange={(e) => setNamaBuku(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Tanggal Pinjam: </label>
                        <input
                            type="date"
                            value={tanggalPinjam}
                            onChange={(e) => setTanggalPinjam(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Tanggal Pengembalian: </label>
                        <input
                            type="date"
                            value={tanggalPengembalian}
                            onChange={(e) =>
                                setTanggalPengembalian(e.target.value)
                            }
                            required
                        />
                    </div>
                    <button type="submit">Tambah Pinjaman</button>
                </form>
            </div>

            {/* Tabel Data Pinjaman */}
            <div>
                <h2>Daftar Pinjaman</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nama Peminjam</th>
                            <th>Nama Buku</th>
                            <th>Tanggal Pinjam</th>
                            <th>Tanggal Pengembalian</th>
                            <th>Estimasi (Hari)</th>
                            <th>Hitung Mundur</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataPinjaman.map((pinjaman) => (
                            <tr key={pinjaman.id}>
                                <td>{pinjaman.id}</td>
                                <td>{pinjaman.nama_peminjam}</td>
                                <td>{pinjaman.nama_buku}</td>
                                <td>{pinjaman.tanggal_pinjam}</td>
                                <td>{pinjaman.tanggal_pengembalian}</td>
                                <td>{pinjaman.estimasi}</td>
                                <td
                                    className={
                                        pinjaman.hitungMundur.status === "Habis"
                                            ? "bg-red-500 text-white font-bold"
                                            : ""
                                    }
                                >
                                    {pinjaman.hitungMundur.text}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataPinjaman;
