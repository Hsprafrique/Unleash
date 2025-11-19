import { useSurvey } from "../context/SurveyContext";
import { useNavigate } from "react-router-dom";

export default function Score() {
  const { calculateScore } = useSurvey();
  const nav = useNavigate();
  const score = calculateScore();

  const isPerfect = score === 100;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 
      bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 animate-fadeIn">

      <div className="w-full max-w-md p-8 bg-white/20 rounded-2xl shadow-2xl text-center space-y-6">
        <h1 className="text-3xl font-bold text-white drop-shadow">Score</h1>
        <p className="text-lg text-white">
          Your generated score: <strong>{score}</strong>
        </p>

        {isPerfect ? (
          <button
            onClick={() => nav("/register")}
            className="py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold transform hover:scale-105 hover:bg-blue-700 transition"
          >
            Proceed to Register
          </button>
        ) : (
          <p className="text-red-500 font-medium">Score not sufficient. Try again.</p>
        )}
      </div>
    </div>
  );
}