import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-2">COMING SOON !!!</h1>
      <p className="text-gray-600 mb-6">This page is under development.</p>
      <Link to="/" className="px-4 py-2 bg-gray-200 rounded">Return Home</Link>
    </div>
  );
}