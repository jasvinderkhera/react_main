// One compnent to add cart. User can add the product into cart. 
// We have limited stock for example: [item: hari oil, quantity is 10].
// user can add the item to cart.. and validate items with available stock...

import { useEffect, useState } from "react"

function AddCardItem(props) {
    const dummyProduct = { hairOil: 10 }
    const [userItem, setUserItem] = useState(0)

    function validateStock() {
        if (userItem === 0) return
        if (dummyProduct.hairOil < userItem) alert("out of stock")
    }

    // compoment will update
    useEffect(() => {
        validateStock()
    }, [userItem])

    function decrement() {
        setUserItem(userItem - 1)
    }

    function increment() {
        setUserItem(userItem + 1)
    }

    return <>
        total item in stock: {dummyProduct.hairOil}

        <section><span>Quantity Selector</span>
            <br />
            <button onClick={decrement} disabled={userItem === 0}>decrement</button>
            <span>{userItem}</span>
            <button onClick={increment}>increment</button>
        </section>
    </>

}

export default AddCardItem