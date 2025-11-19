import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-green-50">
      <h1 className="text-3xl font-bold mb-4 text-green-700">
        Registration Successful 🎉
      </h1>
      <p className="mb-6 text-center">
        Thanks — Sam Ivere Survey Complete.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}