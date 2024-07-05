"use client";

import { useState } from "react";
import axios from "axios";

function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post("https://66882ed60bc7155dc01ab3d0.mockapi.io/Crud", {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then((response) => {
        console.log("Data submitted successfully:", response.data);

        setName("");
        setAge("");
        setEmail("");
      })
      .catch((error) => {
        console.error("There was an error submitting the data!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="bg-sky-400 border-2 border-gray-900 p-2" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Create;
