import React, { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    const incrementation = () =>{
        setCount(count+1)
    }
    const decrementation = () =>{
        setCount(count-1)
    }

    return(
        <div className="container text-center fs-2 ">
            <h1 className="">Counter</h1>
            <h2>Valeur de Count:{count}</h2>
            <button className="btn btn-success btn-lg" onClick={incrementation}>+</button>
            <button className="btn btn-danger btn-lg" onClick={decrementation}>-</button>
        </div>
    )
}


export default Counter