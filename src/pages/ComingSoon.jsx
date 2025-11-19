import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6
      bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 animate-fadeIn">
      
      <h1 className="text-4xl font-bold mb-2 text-white drop-shadow-lg">
        COMING SOON !!!
      </h1>
      <p className="text-white mb-6 text-center drop-shadow-md">
        This page is under development.
      </p>
      <Link
        to="/"
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Return Home
      </Link>
    </div>
  );
}