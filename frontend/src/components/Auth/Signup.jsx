// import React, { useState } from 'react';
// import api from '../../services/api';
// import { useNavigate } from 'react-router-dom';

// export default function Signup() {
//   const [form, setForm] = useState({ name: '', email: '', password: '', country: '' });
//   const navigate = useNavigate();

//   const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async e => {
//     e.preventDefault();
//     await api.post('/auth/signup', form);
//     navigate('/login');
//   };

//   return (
//     <form className="p-4 max-w-md mx-auto" onSubmit={handleSubmit}>
//       <h2 className="text-xl font-bold mb-4">Signup</h2>
//       {['name', 'email', 'password', 'country'].map(field => (
//         <input
//           key={field}
//           name={field}
//           type={field === 'password' ? 'password' : 'text'}
//           placeholder={field}
//           className="block w-full mb-3 p-2 border"
//           onChange={handleChange}
//         />
//       ))}
//       <button className="bg-blue-500 text-white px-4 py-2" type="submit">Register</button>
//     </form>
//   );
// }


import React, { useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '', country: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await api.post('/auth/signup', form);
    navigate('/login');
  };

  return (
    <form className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg space-y-6" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold text-center text-indigo-600">Create an Account</h2>
      {['name', 'email', 'password', 'country'].map(field => (
        <input
          key={field}
          name={field}
          type={field === 'password' ? 'password' : 'text'}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          className="block w-full p-4 border-2 border-gray-300 rounded-lg shadow-md transition-all hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={handleChange}
        />
      ))}
      <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all" type="submit">Register</button>
    </form>
  );
}
