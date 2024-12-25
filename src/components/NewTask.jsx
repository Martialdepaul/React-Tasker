import { useState } from "react";
export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handlechange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }
  return (
    <div className="flex items-center gap-4 ">
      <input
        type="text"
        name=""
        id=""
        className="w-64 px-2 py-1 rounded-sm bg-gray-200"
        onChange={handlechange}
        value={enteredTask}
      />
      <button
        className="text-gray-700 hover:text-gray-950"
        onClick={handleClick}
      >
        + Add Task
      </button>
    </div>
  );
}
