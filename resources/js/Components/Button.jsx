import React from "react";

function Button({ name, className }) {
    return (
        <div
            className={`group cursor-pointer capitalize flex gap-3 items-center p-1 px-2 rounded-md ${className}`}
        >
            {name}
            <img
                src="/arrow.png"
                alt=""
                className="transition-all duration-500 w-3 h-3 group-hover:rotate-90 rotate-180"
            />
        </div>
    );
}

export default Button;
