const DownloadExcelButton = ({ elementId }) => {
    const downloadExcel = () => {
        if (window.XLSX) {
            const element = document.getElementById(elementId);
            if (element) {
                const ws = window.XLSX.utils.table_to_sheet(element);
                const wb = window.XLSX.utils.book_new();
                window.XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
                window.XLSX.writeFile(wb, "tabel.xlsx");
            } else {
                console.error(`Element with ID "${elementId}" not found.`);
            }
        } else {
            console.error("XLSX library not loaded.");
        }
    };

    return (
        <button
            onClick={downloadExcel}
            className="bg-green-50 w-32 p-1 rounded-sm cursor-pointer"
        >
            Download Excel
        </button>
    );
};

export default DownloadExcelButton;
