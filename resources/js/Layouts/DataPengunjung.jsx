import React, { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const label = ["januar", "februari", "maret"];
const analisis = [
    { tanggal: "12 januari 2020", pengunjung: 65 },
    { tanggal: "13 januari 2020", pengunjung: 59 },
    { tanggal: "14 januari 2020", pengunjung: 80 },
    { tanggal: "15 januari 2020", pengunjung: 67 },
    { tanggal: "16 januari 2020", pengunjung: 86 },
    { tanggal: "17 januari 2020", pengunjung: 40 },
    { tanggal: "18 januari 2020", pengunjung: 40 },
    { tanggal: "19 januari 2020", pengunjung: 44 },
    { tanggal: "20 januari 2020", pengunjung: 90 },
    { tanggal: "21 januari 2020", pengunjung: 44 },
    { tanggal: "22 januari 2020", pengunjung: 72 },
    { tanggal: "23 januari 2020", pengunjung: 55 },
    { tanggal: "24 januari 2020", pengunjung: 63 },
    { tanggal: "25 januari 2020", pengunjung: 78 },
    { tanggal: "26 januari 2020", pengunjung: 52 },
    { tanggal: "27 januari 2020", pengunjung: 67 },
    { tanggal: "28 januari 2020", pengunjung: 74 },
    { tanggal: "29 januari 2020", pengunjung: 60 },
    { tanggal: "30 januari 2020", pengunjung: 80 },
    { tanggal: "31 januari 2020", pengunjung: 85 },
    { tanggal: "01 februari 2020", pengunjung: 90 },
    { tanggal: "02 februari 2020", pengunjung: 57 },
    { tanggal: "03 februari 2020", pengunjung: 72 },
    { tanggal: "04 februari 2020", pengunjung: 68 },
    { tanggal: "05 februari 2020", pengunjung: 84 },
    { tanggal: "06 februari 2020", pengunjung: 50 },
    { tanggal: "07 februari 2020", pengunjung: 62 },
    { tanggal: "08 februari 2020", pengunjung: 76 },
    { tanggal: "09 februari 2020", pengunjung: 64 },
    { tanggal: "10 februari 2020", pengunjung: 83 },
    { tanggal: "11 februari 2020", pengunjung: 69 },
    { tanggal: "12 februari 2020", pengunjung: 77 },
    { tanggal: "13 februari 2020", pengunjung: 82 },
    { tanggal: "14 februari 2020", pengunjung: 55 },
    { tanggal: "15 februari 2020", pengunjung: 60 },
    { tanggal: "16 februari 2020", pengunjung: 90 },
    { tanggal: "17 februari 2020", pengunjung: 72 },
    { tanggal: "18 februari 2020", pengunjung: 68 },
    { tanggal: "19 februari 2020", pengunjung: 85 },
    { tanggal: "20 februari 2020", pengunjung: 64 },
    { tanggal: "21 februari 2020", pengunjung: 57 },
    { tanggal: "22 februari 2020", pengunjung: 79 },
    { tanggal: "23 februari 2020", pengunjung: 66 },
    { tanggal: "24 februari 2020", pengunjung: 52 },
    { tanggal: "25 februari 2020", pengunjung: 75 },
    { tanggal: "26 februari 2020", pengunjung: 83 },
    { tanggal: "27 februari 2020", pengunjung: 71 },
    { tanggal: "28 februari 2020", pengunjung: 63 },
    { tanggal: "29 februari 2020", pengunjung: 78 },
    { tanggal: "01 maret 2020", pengunjung: 60 },
    { tanggal: "02 maret 2020", pengunjung: 82 },
    { tanggal: "03 maret 2020", pengunjung: 69 },
    { tanggal: "04 maret 2020", pengunjung: 77 },
    { tanggal: "05 maret 2020", pengunjung: 64 },
    { tanggal: "06 maret 2020", pengunjung: 88 },
    { tanggal: "07 maret 2020", pengunjung: 52 },
    { tanggal: "08 maret 2020", pengunjung: 70 },
    { tanggal: "09 maret 2020", pengunjung: 65 },
    { tanggal: "10 maret 2020", pengunjung: 75 },
    { tanggal: "11 maret 2020", pengunjung: 80 },
    { tanggal: "12 maret 2020", pengunjung: 62 },
    { tanggal: "13 maret 2020", pengunjung: 90 },
    { tanggal: "14 maret 2020", pengunjung: 73 },
    { tanggal: "15 maret 2020", pengunjung: 67 },
    { tanggal: "16 maret 2020", pengunjung: 84 },
    { tanggal: "17 maret 2020", pengunjung: 79 },
    { tanggal: "18 maret 2020", pengunjung: 55 },
    { tanggal: "19 maret 2020", pengunjung: 72 },
    { tanggal: "20 maret 2020", pengunjung: 60 },
    { tanggal: "21 maret 2020", pengunjung: 68 },
    { tanggal: "22 maret 2020", pengunjung: 82 },
    { tanggal: "23 maret 2020", pengunjung: 75 },
    { tanggal: "24 maret 2020", pengunjung: 54 },
    { tanggal: "25 maret 2020", pengunjung: 64 },
    { tanggal: "26 maret 2020", pengunjung: 89 },
    { tanggal: "27 maret 2020", pengunjung: 70 },
    { tanggal: "28 maret 2020", pengunjung: 58 },
    { tanggal: "29 maret 2020", pengunjung: 80 },
    { tanggal: "30 maret 2020", pengunjung: 73 },
    { tanggal: "31 maret 2020", pengunjung: 85 },
    { tanggal: "01 april 2020", pengunjung: 61 },
    { tanggal: "02 april 2020", pengunjung: 78 },
    { tanggal: "03 april 2020", pengunjung: 69 },
    { tanggal: "04 april 2020", pengunjung: 82 },
    { tanggal: "05 april 2020", pengunjung: 77 },
    { tanggal: "06 april 2020", pengunjung: 64 },
    { tanggal: "07 april 2020", pengunjung: 90 },
    { tanggal: "08 april 2020", pengunjung: 72 },
    { tanggal: "09 april 2020", pengunjung: 63 },
    { tanggal: "10 april 2020", pengunjung: 80 },
    { tanggal: "11 april 2020", pengunjung: 67 },
    { tanggal: "12 april 2020", pengunjung: 85 },
    { tanggal: "13 april 2020", pengunjung: 60 },
    { tanggal: "14 april 2020", pengunjung: 74 },
    { tanggal: "15 april 2020", pengunjung: 90 },
    { tanggal: "16 april 2020", pengunjung: 72 },
    { tanggal: "17 april 2020", pengunjung: 66 },
    { tanggal: "18 april 2020", pengunjung: 82 },
    { tanggal: "19 april 2020", pengunjung: 55 },
    { tanggal: "20 april 2020", pengunjung: 68 },
    { tanggal: "21 april 2020", pengunjung: 78 },
    { tanggal: "22 april 2020", pengunjung: 63 },
    { tanggal: "23 april 2020", pengunjung: 70 },
    { tanggal: "24 april 2020", pengunjung: 76 },
    { tanggal: "25 april 2020", pengunjung: 85 },
    { tanggal: "26 april 2020", pengunjung: 58 },
    { tanggal: "27 april 2020", pengunjung: 64 },
    { tanggal: "28 april 2020", pengunjung: 69 },
    { tanggal: "29 april 2020", pengunjung: 72 },
    { tanggal: "30 april 2020", pengunjung: 81 },
];

function DataPengunjung() {
    const chartRef = useRef(null);
    const labels = [
        ...new Set(analisis.map((label) => label.tanggal.toLocaleLowerCase())),
    ];
    const labelsValue = [...analisis.map((label) => label.pengunjung + 1)];
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
