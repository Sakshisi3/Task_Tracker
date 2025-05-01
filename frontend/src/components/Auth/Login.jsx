// import React, { useState } from 'react';
// import api from '../../services/api';
// import { useNavigate } from 'react-router-dom';

// export default function Login() {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const res = await api.post('/auth/login', form);
//     localStorage.setItem('token', res.data.token);
//     navigate('/dashboard');
//   };

//   return (
//     <form className="p-4 max-w-md mx-auto" onSubmit={handleSubmit}>
//       <h2 className="text-xl font-bold mb-4">Login</h2>
//       {['email', 'password'].map(field => (
//         <input
//           key={field}
//           name={field}
//           type={field === 'password' ? 'password' : 'text'}
//           placeholder={field}
//           className="block w-full mb-3 p-2 border"
//           onChange={handleChange}
//         />
//       ))}
//       <button className="bg-green-500 text-white px-4 py-2" type="submit">Login</button>
//     </form>
//   );
// }


import React, { useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await api.post('/auth/login', form);
    console.log(res.data);
    localStorage.setItem('token', res.data.token);
    navigate('/dashboard');
  };

  return (
    <motion.form
    className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg space-y-6 mt-20"
    onSubmit={handleSubmit}
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
  >
    <form className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg space-y-6" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold text-center text-indigo-600">Login</h2>
      {['email', 'password'].map(field => (
        <input
          key={field}
          name={field}
          type={field === 'password' ? 'password' : 'text'}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          className="block w-full p-4 border-2 border-gray-300 rounded-lg shadow-md transition-all hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={handleChange}
        />
      ))}
      <button className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all" type="submit">Login</button>
    </form>
    </motion.form>
  );
  
}
