import React from "react";

const TaskCard = ({ task }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 border-l-4 border-indigo-500">
      <h3 className="text-lg font-semibold">{task.title}</h3>
      <p className="text-sm text-gray-600">{task.description}</p>
      <div className="mt-2 text-xs text-gray-400">
        Created: {new Date(task.createdAt).toLocaleDateString()}
      </div>
      <div className={`text-sm mt-1 font-medium text-${task.status === "completed" ? "green" : "yellow"}-500`}>
        {task.status}
      </div>
    </div>
  );
};

export default TaskCard;
