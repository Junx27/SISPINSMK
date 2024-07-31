import React, { createContext, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [value, setValue] = useState("");
    const [getId, setGetId] = useState(1);

    return (
        <MyContext.Provider value={{ value, setValue, getId, setGetId }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyContext;
