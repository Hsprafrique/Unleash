import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full p-4 flex justify-between items-center bg-white shadow">
      <Link to="/" className="text-2xl font-bold">
        Unleashified
      </Link>

      <div className="flex gap-6">
        <Link to="/coming-soon" className="hover:text-blue-500">About</Link>
        <Link to="/coming-soon" className="hover:text-blue-500">Services</Link>
        <Link to="/coming-soon" className="hover:text-blue-500">Contact</Link>
        <Link to="/survey" className="px-4 py-2 bg-blue-600 text-white rounded">
          Start Survey
        </Link>
      </div>
    </nav>
  );
}