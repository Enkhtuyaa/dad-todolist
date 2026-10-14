"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [task, setTask] = useState([]);

  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log("e", e.target.value);
  };
  const handleAddButtonClick = () => {
    if (inputText.trim() === "") {
      return "";
    }
    const newTask = { id: Date.now(), text: inputText, completed: false };

    setTask([...task, newTask]);
    setInputText("");
  };
  return (
    <div className="flex justify-center p-20 w-screen h-screen bg-gray-200">
      <div className="w-[377px] h-[290px] bg-white rounded-md">
        <div className="flex flex-col gap-5 px-4 pt-6">
          <div className="flex justify-center items-center">
            <h1 className="font-bold">To-Do list</h1>
          </div>
          <div className=" flex gap-2">
            <input
              placeholder="Add a new task.."
              className="w-[280px] h-[40px] border rounded-md font-normal text-gray-500"
              value={inputText}
              onChange={handleChange}
            />
            <button
              className="w-[59px] h-[40px] rounded-md bg-blue-400 font-normal text-white"
              onClick={() => handleAddButtonClick()}
              style={{ cursor: "pointer" }}
            >
              Add
            </button>
          </div>
          <div className="flex justify-start gap-2">
            <button
              className="w-[47px] h-[33px] bg-gray-300 rounded-md font-normal"
              style={{ cursor: "pointer" }}
            >
              All
            </button>
            <button
              className="w-[60px] h-[32px] bg-gray-300 rounded-md font-normal"
              style={{ cursor: "pointer" }}
            >
              Active
            </button>
            <button
              className="w-[87px] h-[32px] bg-gray-300 rounded-md font-normal"
              style={{ cursor: "pointer" }}
            >
              {" "}
              Completed
            </button>
          </div>
        </div>
        {task.length === 0 ? (
          <div className="flex gap-8 items-center justify-center flex-col">
            <div className="flex justify-center items-center pt-8">
              <p className="font-normal text-gray-400">
                No tasks yet. Add one above!
              </p>
            </div>
            <div className="flex pb-6 gap-1">
              <p className="font-normal text-gray-400">Powered by</p>
              <p className="font-normal text-blue-500">Pinecone academy</p>
            </div>
          </div>
        ) : (
          task.map((item) => <div key={item.id}>{item.text}</div>)
        )}
      </div>
    </div>
  );
}
