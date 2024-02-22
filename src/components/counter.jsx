import { useState } from "react";

function Counter(props) {
    const [count, setCount] = useState(0)

    return <>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)} >Counter</button>
    </>
}

export default Counter