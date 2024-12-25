import NewTask from "./NewTask";
export default function Tasks({ tasks = [], onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-xl font-bold  text-gray-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-gray-800 my-4 ">
          This project does not have any Tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-gray-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              {" "}
              <span>{task.text}</span>
              <button
                className="text-gray-700 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
