// import React, { useState } from 'react';
// import ProjectList from '../components/Dashboard/ProjectList';
// import TaskList from '../components/Dashboard/TaskList';

// export default function Dashboard() {
//   const [selectedProject, setSelectedProject] = useState(null);
//   return (
//     <div className="flex p-4">
//       <div className="w-1/3 border-r">
//         <ProjectList onSelect={setSelectedProject} />
//       </div>
//       <div className="w-2/3 p-4">
//         {selectedProject ? (
//           <TaskList project={selectedProject} />
//         ) : (
//           <p>Select a project to view tasks</p>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import ProjectList from '../components/Dashboard/ProjectList';
import TaskList from '../components/Dashboard/TaskList';

export default function Dashboard() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="flex p-6 bg-gradient-to-r from-indigo-300 to-purple-300 min-h-screen">
      <div className="w-1/4 p-4 border-r bg-white shadow-lg rounded-lg">
        <ProjectList onSelect={setSelectedProject} />
      </div>
      <div className="w-3/4 p-6">
        {selectedProject ? (
          <TaskList project={selectedProject} />
        ) : (
          <p className="text-center text-gray-500">Select a project to view tasks</p>
        )}
      </div>
    </div>
  );
}

