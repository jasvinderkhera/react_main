import { useEffect, useState } from "react"

function UserData() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json))
  }, [])

    return <ul>
    {!!data.length && data.map((item, index) => {
      // console.log(item)
      console.log(index, 'INDEX')
      return <>
        <h3>{index + 1}</h3>
        <li>{item.userId}</li>
        <li>{item.title}</li>
        <li>{item.body}</li>
        <br />
      </>
    })}
  </ul>

}

export default UserData