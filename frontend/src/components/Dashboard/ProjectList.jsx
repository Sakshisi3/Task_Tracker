// import React, { useState, useEffect } from 'react';
// import api from '../../services/api';

// export default function ProjectList({ onSelect }) {
//   const [projects, setProjects] = useState([]);
//   const [name, setName] = useState('');

//   const fetchProjects = async () => {
//     const res = await api.get('/projects');
//     setProjects(res.data);
//   };

//   useEffect(() => { fetchProjects(); }, []);

//   const handleCreate = async () => {
//     await api.post('/projects', { name });
//     fetchProjects();
//   };

//   return (
//     <div className="p-2">
//       <input placeholder="New project" className="border p-2 mr-2" onChange={e => setName(e.target.value)} />
//       <button className="bg-blue-600 text-white px-2 py-1" onClick={handleCreate}>Create</button>
//       <ul className="mt-4">
//         {projects.map(p => (
//           <li key={p._id} onClick={() => onSelect(p)} className="cursor-pointer border p-2 my-2">
//             {p.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import api from '../../services/api';

export default function ProjectList({ onSelect }) {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState('');

  const fetchProjects = async () => {
    const res = await api.get('/projects');
    setProjects(res.data);
  };

  useEffect(() => { fetchProjects(); }, []);

  const handleCreate = async () => {
    await api.post('/projects', { name });
    fetchProjects();
  };

  return (
    <div className="p-4">
      <input placeholder="New project" className="border p-4 mb-4 w-full rounded-lg shadow-md" onChange={e => setName(e.target.value)} />
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all" onClick={handleCreate}>Create Project</button>
      <ul className="mt-4 space-y-4">
        {projects.map(p => (
          <li key={p._id} onClick={() => onSelect(p)} className="cursor-pointer bg-indigo-100 hover:bg-indigo-200 p-4 rounded-lg transition-all shadow-md">
            {p.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

