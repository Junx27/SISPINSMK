import React, { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

function DataPengunjung({ analisis }) {
    const chartRef = useRef(null);
    const dataPengunjungPerTanggal = analisis.reduce((acc, cur) => {
        const tanggal = cur.tanggal_pinjam.toLowerCase(); // Ambil tanggal pinjam dalam huruf kecil

        // Jika tanggal sudah ada di accumulator, tambahkan jumlahnya
        if (acc[tanggal]) {
            acc[tanggal]++;
        } else {
            // Jika belum, inisialisasi dengan 1
            acc[tanggal] = 1;
        }
        return acc;
    }, {});

    // Membuat label (tanggal) dan nilai (jumlah peminjaman) berdasarkan data yang telah dikelompokkan
    const labels = Object.keys(dataPengunjungPerTanggal);
    const labelsValue = Object.values(dataPengunjungPerTanggal);
    useEffect(() => {
        if (chartRef.current) {
            new Chart(chartRef.current, {
                type: "line",
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: "Data Peminjam Buku",
                            data: labelsValue,
                            fill: false,
                            hoverBorderJoinStyle: "round",
                            borderWidth: 0.5,
                            showLine: true,
                            pointStyle: "rectRounded",
                            stepped: false,
                            pointBackgroundColor: "#2E236C",
                            borderColor: "#2E236C",
                            tension: 0.1,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: "top",
                        },
                        tooltip: {
                            callbacks: {
                                label: function (tooltipItem) {
                                    return ` ${tooltipItem.raw} orang`;
                                },
                            },
                        },
                    },
                },
            });
        }
    }, []);

    return (
        <div>
            <canvas ref={chartRef} />
        </div>
    );
}

export default DataPengunjung;
