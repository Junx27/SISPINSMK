import React from "react";
import QRCode from "qrcode.react";

const QRCodeComponent = ({ data }) => {
    return <QRCode value={JSON.stringify(data)} size={270} />;
};

export default QRCodeComponent;
