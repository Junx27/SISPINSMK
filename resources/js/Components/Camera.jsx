import React, { useEffect } from "react";

const Camera = () => {
    useEffect(() => {
        // Ensure the script is loaded before using Html5QrcodeScanner
        const script = document.createElement("script");
        script.src = "https://unpkg.com/html5-qrcode";
        script.async = true;
        script.onload = () => {
            const onScanSuccess = (decodedText, decodedResult) => {
                // Redirect to the URL found in the QR code
                console.log(`Code matched = ${decodedText}`, decodedResult);
                window.location.href = decodedText;
            };

            const onScanFailure = (error) => {
                // handle scan failure, usually better to ignore and keep scanning.
                console.warn(`Code scan error = ${error}`);
            };

            const html5QrcodeScanner = new window.Html5QrcodeScanner(
                "reader",
                { fps: 10, qrbox: { width: 250, height: 250 } }, // Size of the QR box
                /* verbose= */ false
            );
            html5QrcodeScanner.render(onScanSuccess, onScanFailure);
        };
        document.body.appendChild(script);

        return () => {
            // Cleanup script if the component unmounts
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            id="reader"
            style={{
                width: "250px", // Adjust to match the qrbox size
                height: "250px",
                margin: "0 auto", // Center the camera box
                overflow: "hidden", // Hide overflow to limit the view to the QR box
            }}
        ></div>
    );
};

export default Camera;
