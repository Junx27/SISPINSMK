const DownloadPDFButton = ({ elementId }) => {
    const downloadPDF = () => {
        const element = document.getElementById(elementId);
        if (element && window.html2canvas && window.jspdf) {
            window.html2canvas(element).then((canvas) => {
                const pdf = new window.jspdf.jsPDF("l", "mm", "a4");
                const imgData = canvas.toDataURL("image/png");
                const imgWidth = 297;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                const pageHeight = 210;

                pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
                pdf.save("tabel.pdf");
            });
        } else {
            console.error(
                `Element with ID "${elementId}" not found or libraries not loaded.`
            );
        }
    };

    return (
        <button
            onClick={downloadPDF}
            className="bg-red-50 w-32 p-1 rounded-sm cursor-pointer"
        >
            Download PDF
        </button>
    );
};

export default DownloadPDFButton;
