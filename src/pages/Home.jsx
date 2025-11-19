import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 flex items-center justify-center p-6 animate-fadeIn">
      <div className="w-full max-w-2xl bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 rounded-3xl shadow-2xl p-12 text-center space-y-8">
        <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          UNLEASHIFIED
        </h1>
        <p className="text-white text-lg mb-6 drop-shadow-md">
          Landing page for the assessment by Sam Ivere. Click below to start the survey flow.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/survey"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transform hover:scale-105 transition shadow-lg"
          >
            Start Survey
          </Link>
          <Link
            to="/COMING-SOON"
            className="px-8 py-4 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transform hover:scale-105 transition shadow-lg"
          >
            Other
          </Link>
        </div>

        <p className="text-white text-sm mt-6 drop-shadow-md">
          Complete all steps to generate your score and proceed to registration.
        </p>
      </div>
    </div>
  );
}