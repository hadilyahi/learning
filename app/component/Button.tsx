"use client";
import axios from "axios";
import { useState } from "react";

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  const [click, setClick] = useState<{
    content: string;
    author: string;
  } | null>(null);

  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        setClick(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {props.title ? (
        <div className="flex-col">
          <button
            onClick={getQuote}
            className="bg-pink-700 rounded-md text-white text-xs p-6 hover:bg-pink-400"
          >
            {props.title}
          </button>
          {click && (
            <div className="flex ">
              <p>{click.content}</p>
              
            </div>
          )}
        </div>
      ) : null}
    </>
  );
}

export default Button;
