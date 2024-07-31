import MyContext from "@/Components/CreateContext";
import { data } from "@/Data/DataBuku";
import React, { useContext } from "react";

function SingleBuku() {
    const { getId } = useContext(MyContext);
    const newData = data.find((row) => row.id === getId);
    return (
        <div>
            <img
                src={newData.imageUrl}
                alt=""
                className="w-96 h-96 object-cover"
            />
        </div>
    );
}

export default SingleBuku;
