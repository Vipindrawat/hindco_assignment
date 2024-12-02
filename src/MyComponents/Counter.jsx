
import React, { useEffect, useState } from "react";

const Counter = ({ targetNumber, duration }) => {
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
        const increment = Math.ceil(targetNumber / (duration / 10)); 
        let current = 0;

        const interval = setInterval(() => {
            current += increment;
            if (current >= targetNumber) {
                setCurrentNumber(targetNumber);
                clearInterval(interval); 
            } else {
                setCurrentNumber(current);
            }
        }, 10); 

        return () => clearInterval(interval); 
    }, [targetNumber, duration]);

    return <h1 className="lg:text-4xl text-3xl text-blue-700 text-center">{currentNumber}</h1>;
};
export default Counter;


