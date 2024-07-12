"use client";
import { useState,useEffect } from "react";
const UseEffect = () => {
  const [counter, setcounter] = useState(0);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const zayidConter = () => {
    setcounter(counter + 1);
  };
  const na9isConter = () => {
    setcounter(counter - 1);
  };
  const handleTitle = () => {
    setTitle("");
  };
  useEffect(()=> {
    console.log("inside useEffect 1");
    document.title = title;
    return () =>{
      setTimeout(() =>{

        setTitle('hadil tech')
        console.log("clean up");
      },1000)
    }
  },[title])
  useEffect(()=> {
    console.log("inside useEffect 2");
    document.title = `You have clicked ${counter} time`;
  },[counter])
  
  return (
    <div>
      <input
        className="border border-lime-950 "
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <h1> {name} has clicked</h1>
      <h1> Counter : {counter}</h1>
      <div className="m-2  ">
        <button
          className="border-zinc-800 border-2 p-2 ml-2 mr-4"
          onClick={zayidConter}
        >
          {" "}
          +{" "}
        </button>
        <button
          className="border-zinc-800 border-2 p-2 mr-2"
          onClick={na9isConter}
        >
          {" "}
          -{" "}
        </button>
      </div>
      <button
      onClick={handleTitle}
       className="border-black border-2 bg-slate-200 hover:bg-slate-300  p-4">
        Change Title
      </button>
    </div>
  );
};
export default UseEffect;
