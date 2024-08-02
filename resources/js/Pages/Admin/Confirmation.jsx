import PopOver from "@/Components/PopOver";
import React from "react";

function Confirmation() {
    return (
        <div>
            <PopOver>
                <div className="bg-white w-20 h-20 rounded-md p-5">
                    <button className="bg-black p-2 rounded-md text-white w-20">
                        ok
                    </button>
                </div>
            </PopOver>
        </div>
    );
}

export default Confirmation;
