import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function DependencyArray() {
  const [count, setCount] = useState({ value: 0 });
  const [name, setName] = useState({ value: "" });
  useEffect(
    function () {
      increaseValue();
    },
    [count]
  );
  useEffect(
    function () {
      console.log("API call");
    },
    [name]
  );

  function increaseValue() {
    console.log("Value: ", count.value + 1);
  }
  return (
    <div>
      <button onClick={() => setCount({ value: count.value + 1 })}>
        Count {count.value}
      </button>
      <br />
      <input
        type="text"
        placeholder="Enter your Search"
        onChange={(event) => setName({ value: event.target.value })}
        name="name"
        value={name.value}
      />
      <h1>{name.value}</h1>
    </div>
  );
}

export default DependencyArray;
