import MyContext from "@/Components/CreateContext";
import React, { useContext } from "react";

function GenerateQrCode() {
    const { getId, setGetId } = useContext(MyContext);

    return (
        <div>
            <input
                type="number"
                name=""
                id=""
                value={getId}
                onChange={(e) => setGetId(e.target.value)}
            />
            <a href={`/generate/${getId}`}>generate kode</a>
        </div>
    );
}

export default GenerateQrCode;
