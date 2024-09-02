"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
  const [input, setinput] = useState("");
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${input}`);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div>
        <h1 className="text-center text-xl">Enter your Name</h1>
      </div>
      <div className="flex flex-col">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="text-white m-[10px]"
            onChange={(e) => setinput(e.target.value)}
            value={input}
          />
          <button className="btn btn-primary m-[10px]">Predict Data</button>
        </form>
      </div>
    </div>
  );
}
