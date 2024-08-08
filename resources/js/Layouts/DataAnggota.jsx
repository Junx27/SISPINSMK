import React, { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

function DataAnggota({ users }) {
    const jumlahWanita = users.filter(
        (row) => row.gender.toLowerCase() === "wanita"
    ).length;
    const jumlahPria = users.filter(
        (row) => row.gender.toLowerCase() === "pria"
    ).length;
    const dataPengunjung = [
        {
            id: 1,
            pria: jumlahPria,
        },
        {
            id: 2,
            wanita: jumlahWanita,
        },
    ];
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const labels = dataPengunjung.map((data) =>
                data.id === 1 ? "Pria" : "Wanita"
            );
            const dataValues = dataPengunjung.map(
                (data) => data.pria || data.wanita
            );

            new Chart(chartRef.current, {
                type: "pie",
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: "Jumlah Pengunjung",
                            data: dataValues,
                            borderWidth: 0,
                            backgroundColor: ["#17153B", "#4535C1"],
                            hoverOffset: 4,
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

export default DataAnggota;
