import React, { useState, useEffect } from "react";

const ProgressText = ({ initialValue }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= initialValue) {
                    clearInterval(interval);
                    return initialValue;
                }
                return prevProgress + 1;
            });
        }, 50);

        return () => clearInterval(interval);
    }, [initialValue]);

    return <p className="my-3 font-bold text-green-500">{progress}</p>;
};

export default ProgressText;
