import { useState } from "react"
import Home from "./components/home"
import Counter from "./components/counter"
import UserData from "./components/conditional"

function App() {
    const [data, setData] = useState({ age: 28, name: 'sooraj' })

    return <>
        {/* <Home data={data} />
        <button onClick={() => set  Data({ age: 21, name: 'abhijeet' })} >Click on me</button> */}
        {/* <Counter data={data}/> */}
        <UserData />    
    </>
}

export default App