// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <h1 className="text-3xl mb-6">Task Tracker App</h1>
//       <div className="flex space-x-4">
//         <Link to="/login" className="bg-green-500 px-4 py-2 text-white">Login</Link>
//         <Link to="/signup" className="bg-blue-500 px-4 py-2 text-white">Signup</Link>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-indigo-200"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold mb-6 text-indigo-700">Task Tracker App</h1>
      <div className="flex space-x-4">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link to="/login" className="bg-green-500 px-6 py-3 text-white rounded-lg shadow-md hover:bg-green-600 transition-all">
            Login
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link to="/signup" className="bg-blue-500 px-6 py-3 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all">
            Signup
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
