import React from "react";

function InputText({ className, value, onChange }) {
    return (
        <div>
            <input
                type="text"
                className={`text-xs rounded-lg outline-0 border-0 h-7 ${className}`}
                value={value}
                onChange={onChange}
                placeholder="Masukan nama...."
            />
        </div>
    );
}

export default InputText;
