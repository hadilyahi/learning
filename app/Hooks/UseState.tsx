"use client"
import { useState } from "react";
const UseState =()=>{
    const [plus,setPlus ] = useState(0)
    const [name,setName]= useState("")
    const inscreaseConter = () => {
        setPlus(plus +1);
    }
    const na9isConter = () => {
        setPlus(plus -1);
    }

    return(
        <div>
            <input className="border border-lime-950 " type="text" onChange={e=> setName(e.target.value)}/>
            <h1> {name} has clicked {plus}</h1>
            <h1> Counter : {plus}</h1>
            <button onClick={inscreaseConter}> + </button>
            <button onClick={na9isConter}> - </button>
        </div>
    )
}
export default UseState ;