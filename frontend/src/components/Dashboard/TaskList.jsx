// import React, { useState, useEffect } from 'react';
// import api from '../../services/api';

// export default function TaskList({ project }) {
//   const [tasks, setTasks] = useState([]);
//   const [form, setForm] = useState({ title: '', description: '' });

//   const fetchTasks = async () => {
//     const res = await api.get(`/tasks/${project._id}`);
//     setTasks(res.data);
//   };

//   useEffect(() => { if (project) fetchTasks(); }, [project]);

//   const createTask = async () => {
//     await api.post('/tasks', { ...form, project: project._id });
//     setForm({ title: '', description: '' });
//     fetchTasks();
//   };

//   const updateTask = async (id, status) => {
//     await api.put(`/tasks/${id}`, { status });
//     fetchTasks();
//   };

//   const deleteTask = async id => {
//     await api.delete(`/tasks/${id}`);
//     fetchTasks();
//   };

//   return (
//     <div className="p-2">
//       <h3 className="font-bold">Tasks for: {project.name}</h3>
//       <input placeholder="Title" className="border p-1 mr-2" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
//       <input placeholder="Description" className="border p-1 mr-2" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
//       <button className="bg-green-500 text-white px-2 py-1" onClick={createTask}>Add</button>

//       <ul className="mt-4">
//         {tasks.map(t => (
//           <li key={t._id} className="border p-2 my-2">
//             <div className="flex justify-between items-center">
//               <span>{t.title} - <i>{t.status}</i></span>
//               <div>
//                 <select value={t.status} onChange={e => updateTask(t._id, e.target.value)} className="mr-2">
//                   <option>Pending</option>
//                   <option>In Progress</option>
//                   <option>Completed</option>
//                 </select>
//                 <button className="text-red-500" onClick={() => deleteTask(t._id)}>Delete</button>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { motion } from 'framer-motion';

export default function TaskList({ project }) {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: '', description: '' });

  const fetchTasks = async () => {
    const res = await api.get(`/tasks/${project._id}`);
    setTasks(res.data);
  };

  useEffect(() => {
    if (project) fetchTasks();
  }, [project]);

  const createTask = async () => {
    await api.post('/tasks', { ...form, project: project._id, status: 'Pending' });
    setForm({ title: '', description: '' });
    fetchTasks();
  };

  const updateTask = async (id, status) => {
    await api.put(`/tasks/${id}`, { status });
    fetchTasks();
  };

  const deleteTask = async id => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="font-bold text-xl mb-4">Tasks for: {project.name}</h3>

      <div className="flex mb-4 space-x-4">
        <input
          placeholder="Title"
          className="border p-4 w-full rounded-lg shadow-md"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />
        <input
          placeholder="Description"
          className="border p-4 w-full rounded-lg shadow-md"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />
        <button
          className="bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-all"
          onClick={createTask}
        >
          Add Task
        </button>
      </div>

      <ul className="space-y-4">
        {tasks.map(t => (
          <motion.li
          key={t._id}
          className="bg-indigo-100 p-4 rounded-lg shadow-md hover:bg-indigo-200 transition-all"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <li key={t._id} className="bg-indigo-100 p-4 rounded-lg shadow-md hover:bg-indigo-200 transition-all">
            <h4 className="font-semibold">{t.title} - <i>{t.status}</i></h4>
            <p>{t.description}</p>

            <div className="flex justify-between items-center mt-2">
              {/* Status Dropdown */}
              <select
                value={t.status}
                onChange={e => updateTask(t._id, e.target.value)}
                className="px-3 py-2 rounded-lg border bg-white shadow-md"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>

              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                onClick={() => deleteTask(t._id)}
              >
                Delete
              </button>
            </div>
          </li>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
