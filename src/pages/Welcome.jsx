import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Welcome</h1>
        <p className="mt-4">Alternate intro page.</p>
        <Link to="/survey" className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded">Start Survey</Link>
      </div>
    </div>
  );
}