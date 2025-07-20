"use client";

import { useState } from "react";

export default function TodoListRadioButtton() {
  const [inputField, setInputField] = useState("");
  const [addTask, setAddTask] = useState([]);

  const handleTask = () => {
    if (inputField.trim() !== "") {
      const newTask = {
        text: inputField,
        completed: false,
      };
      setAddTask([...addTask, newTask]);
      setInputField("");
    }
  };

  const handleClear = () => {
    setInputField("");
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = [...addTask];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setAddTask(updatedTasks);
  };

  return (
    <>
      <div className="flex items-center justify-center mt-10 px-4">
        <div className="w-full max-w-xl h-[40rem] border border-gray-100 rounded-xl shadow-xl p-6 gap-8 flex flex-col">
          <div className="w-full flex flex-col items-center gap-4 flex-shrink-0">
            <input
              value={inputField}
              onChange={(e) => setInputField(e.target.value)}
              className="w-full h-10 bg-gray-200 border-none outline-none px-4 rounded-lg"
              placeholder="Add the task..."
            ></input>
            <div className="flex gap-2 w-full">
              <button
                className="flex-1 bg-green-400 py-2 rounded-md hover:bg-green-500 transition duration-200 active:shadow-lg"
                onClick={handleTask}
              >
                Add Task
              </button>
              <button
                className="flex-1 bg-red-400 py-2 rounded-md hover:bg-red-500 transition duration-200 active:shadow-lg"
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto w-full">
            <p className="text-center text-lg font-semibold">Today's Task</p>
            <ul className="list-disc space-y-2 pl-6">
              {addTask.map((task, taskIndex) => (
                <li key={taskIndex} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleComplete(taskIndex)}
                  />
                  <span
                    className={`${
                      task.completed ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {task.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
