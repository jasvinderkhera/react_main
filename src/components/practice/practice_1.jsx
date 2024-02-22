import { useEffect, useState } from "react"

function Practice() {

    const [val, SetVal] = useState(0)

    useEffect(() => {
        console.log("re-render")
    }, [val]) // hook

    return <button onClick={() => SetVal(val + 1)}>Re-render on click {val}</button>
}

export default Practice