// src/App.js
import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";

const Test = () => {
    const downloadPDF = () => {
        html2canvas(document.getElementById("dataTable")).then((canvas) => {
            const pdf = new jsPDF();
            pdf.addImage(canvas.toDataURL("image/png"), "PNG", 10, 10);
            pdf.save("tabel.pdf");
        });
    };

    const downloadExcel = () => {
        const ws = XLSX.utils.table_to_sheet(
            document.getElementById("dataTable")
        );
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
        XLSX.writeFile(wb, "tabel.xlsx");
    };

    return (
        <div>
            <h2>Data Karyawan</h2>
            <table
                id="dataTable"
                border="1"
                style={{ width: "100%", borderCollapse: "collapse" }}
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama</th>
                        <th>Posisi</th>
                        <th>Gaji</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>001</td>
                        <td>John Doe</td>
                        <td>Manajer</td>
                        <td>Rp10.000.000</td>
                    </tr>
                    <tr>
                        <td>002</td>
                        <td>Jane Smith</td>
                        <td>Staf Akuntansi</td>
                        <td>Rp7.000.000</td>
                    </tr>
                    <tr>
                        <td>003</td>
                        <td>Samuel Brown</td>
                        <td>Pengembang</td>
                        <td>Rp9.000.000</td>
                    </tr>
                    <tr>
                        <td>004</td>
                        <td>Emily White</td>
                        <td>Desainer</td>
                        <td>Rp8.000.000</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <button onClick={downloadPDF}>Download PDF</button>
            <button onClick={downloadExcel}>Download Excel</button>
        </div>
    );
};

export default Test;
