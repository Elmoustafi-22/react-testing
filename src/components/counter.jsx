import { useState } from "react";
import Child from "./child";

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div className="text-center mt-10">
            <p>Count is : {count}</p>
            <button 
                onClick={() => setCount(count => count + 1)}
                className="mt-2 px-7 py-1 text-slate-50 rounded bg-gray-950"
            >
                Click
            </button>
            <Child count={count}/>
        </div>
    );
}

export default Counter;