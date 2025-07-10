"use client";
import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        // setCount(count + 1);
        setCount((prev) => (
            prev + 1
        ));
    }

    const handleDecrement = () => {
        // setCount(count - 1);
        setCount((prev) => (
            prev - 1
        ));
    }

    const handleReset = () => {
        setCount(0);
    }
    return (
        
        <div className="flex flex-col justify-center items-center gap-10">
            <p>Number: {count}</p>

            <div className="flex flex-row gap-4 justify-center items-center">
                <button className="border p-4 rounded-full" onClick={handleIncrement}>Increment</button>
                
                <button className="border p-4 rounded-full" onClick={handleDecrement}>Decrement</button>
            </div>

            <button className="border p-4 rounded-full" onClick={handleReset}>Reset</button>

        </div>
        
        
    );
}