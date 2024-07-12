"use client"
import { useState } from "react";
const UseState =()=>{
    const [plus,setPlus ] = useState(0)
    const [name,setName]= useState("")
    const zayidConter = () => {
        setPlus(plus +1);
    }
    const na9isConter = () => {
        setPlus(plus -1);
    }

    return(
        <div>
            <input className="border border-lime-950 " type="text" onChange={e=> setName(e.target.value)}/>
            <h1> {name} has clicked</h1>
            <h1> Counter : {plus}</h1>
            <div className="m-2  ">
            <button className="border-zinc-800 border-2 p-2 ml-2 mr-4" onClick={zayidConter }> + </button>
            <button className="border-zinc-800 border-2 p-2 mr-2" onClick={na9isConter}> - </button>
            </div>
        </div>
    )
}
export default UseState ;