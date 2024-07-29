import React, { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const dataPengunjung = [
    {
        id: 1,
        pria: 50,
    },
    {
        id: 2,
        wanita: 100,
    },
];

function Analytics() {
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
                            backgroundColor: [
                                "rgb(255, 99, 132)",
                                "rgb(54, 162, 235)",
                            ],
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

export default Analytics;
