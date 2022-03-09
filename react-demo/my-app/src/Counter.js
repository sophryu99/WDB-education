import React, {useState} from "react";

function Counter() {
    // Initial Value
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick = {() => setCount(count + 1)}> Add</button>
            <button onClick = {() => setCount(count - 1)}> Subtract</button>
        </div>
    )
}

export default Counter;