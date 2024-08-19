/* eslint-disable react/display-name */
import { memo, useCallback, useState } from "react";

const Button = memo(({ onClick, children }) => {
    console.log(`Render button ${children}`);
    return (
        <button
            className={`px-3 py-2 ${children === "Increment" ? "bg-green-700" : "bg-red-700"}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
});

export default function UseCallback() {
    const [count, setCount] = useState(0);
    useCallback(()=>{},[])
    // Increment function
    const increment = useCallback(() => {
        console.log(`Inside the increment function`);
        setCount((prevValue) => prevValue + 1);
    },[]);

    // Decrement function
    const decrement = useCallback(() => {
        console.log(`Inside the decrement function`);
        setCount((prevValue) => prevValue - 1);
    },[]);

    return (
        <div className="h-lvh p-4 font-display tracking-wider flex flex-col justify-center items-center bg-black text-white">
            <h1 className="mb-4">Counter: {count}</h1>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
        </div>
    );
}
