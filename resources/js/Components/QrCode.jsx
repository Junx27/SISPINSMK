// src/QrCodeDisplay.js
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const QrCodeDisplay = ({ id }) => {
    const [qrCodeUrl, setQrCodeUrl] = useState("");

    useEffect(() => {
        // Fetch the QR code from the Laravel API
        axios
            .get(`http://127.0.0.1:8000/generate/${id}`, {
                responseType: "arraybuffer",
            })
            .then((response) => {
                // Create a Blob from the response and generate a URL
                const qrCodeBlob = new Blob([response.data], {
                    type: "image/png",
                });
                const qrCodeUrl = URL.createObjectURL(qrCodeBlob);
                setQrCodeUrl(qrCodeUrl);
            })
            .catch((error) => {
                console.error("Error fetching QR code:", error);
            });
    }, [id]);
    return (
        <div>
            <img src={qrCodeUrl} alt="QR Code" className="rounded-lg" />
        </div>
    );
};

export default QrCodeDisplay;
