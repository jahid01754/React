"use client";
import { useState } from "react";

export default function ToDoList(){

    const [addTask, setAddTask] = useState("");

    return(
    <>
        <div className="flex justify-center items-center mt-10">
            <div className="w-[40%] h-[40rem] bg-gray-100 shadow-2xl flex flex-col justify-around items-center">
                <div className="flex flex-col items-center justify-center  gap-4">
                    <input className="w-[20rem] h-[2rem] bg-gray-200 shadow-sm outline-none px-4 rounded-lg"></input>
                    <div className="flex gap-2">
                        <button className="bg-gray-300 border border-gray-300 px-6 py-3 hover:bg-slate-600 hover:text-white transition duration-150 rounded-lg active:bg-slate-700 active:shadow-lg">Add Task</button>
                        <button className="bg-gray-300 border border-gray-200 px-6 py-3 rounded-lg hover:bg-slate-600 hover:text-white transition duration-150 active:bg-slate-700 active:shadow-lg">Clear</button>
                    </div>
                </div>
                <div>
                    <p>Todays task</p>
                </div>
            </div>
        </div>
    
    </>
);
}