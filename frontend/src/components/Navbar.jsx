// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md p-4 flex justify-between items-center">
//       <Link to="/" className="text-xl font-bold text-indigo-600">TaskTracker</Link>
//       <div className="space-x-4">
//         <Link to="/login" className="text-gray-700 hover:text-indigo-600">Login</Link>
//         <Link to="/signup" className="text-gray-700 hover:text-indigo-600">Signup</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-blue-600 shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-3xl font-bold text-white hover:text-indigo-200 transition-colors">TaskTracker</Link>
      <div className="space-x-6">
        <Link to="/login" className="text-white hover:text-indigo-300 transition-colors">Login</Link>
        <Link to="/signup" className="text-white hover:text-indigo-300 transition-colors">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;

