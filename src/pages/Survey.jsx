import { Link } from "react-router-dom";

export default function Survey() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 flex items-center justify-center p-6 animate-fadeIn">
      <div className="w-full max-w-xl bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 rounded-3xl shadow-2xl p-8 space-y-6 text-center">
        <h1 className="text-4xl font-bold text-black drop-shadow-lg">
          Welcome to the Survey
        </h1>
        <p className="text-black text-lg drop-shadow-md">
          Complete the 3-step survey to generate your score. Make sure to answer all questions!
        </p>

        <Link
          to="/step-1"
          className="block w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transform hover:scale-105 transition shadow-lg"
        >
          Begin Step 1
        </Link>

        <div className="text-black text-sm mt-4 drop-shadow-md">
          Tip: You must complete all steps to proceed to registration.
        </div>
      </div>
    </div>
  );
}