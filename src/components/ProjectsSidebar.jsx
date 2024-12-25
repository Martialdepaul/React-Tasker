import Button from "./Button";
import SelectedProject from "./SelectedProject";
export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 bg-gray-800 px-8 py-16 text-gray-400 md:w-72 rounded-r-2xl shadow-lg">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-gray-100 tracking-wider">
        Your Projects
      </h2>
      <div className="mb-6">
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssclasses =
            "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-gray-200 hover:bg-gray-800";
          if (project.id === selectedProjectId) {
            cssclasses += "bg-gray-800 text-gray-200";
          } else {
            cssclasses += "text-gray-400";
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssclasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
