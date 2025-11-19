import { useSurvey } from "../context/SurveyContext";
import { useNavigate } from "react-router-dom";

export default function Score() {
  const { calculateScore } = useSurvey();
  const nav = useNavigate();
  const score = calculateScore();

  // Determine card color based on score
  const isPerfect = score === 100;
  const cardBg = isPerfect ? "from-green-200 via-green-300 to-green-400" : "from-yellow-200 via-yellow-300 to-yellow-400";
  const textColor = isPerfect ? "text-green-900" : "text-yellow-900";
  const btnBg = isPerfect ? "bg-green-600 hover:bg-green-700" : "bg-yellow-600 hover:bg-yellow-700";

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 bg-gradient-to-br from-green-50 via-green-100 to-green-200 animate-fadeIn">
      <div className={`w-full max-w-md p-8 rounded-2xl shadow-2xl bg-gradient-to-br ${cardBg} text-center space-y-6`}>
        <h1 className={`text-3xl font-bold ${textColor}`}>Score</h1>
        <p className="text-lg">
          Your generated score: <strong>{score}</strong>
        </p>

        {isPerfect ? (
          <button
            onClick={() => nav("/register")}
            className={`py-3 px-6 ${btnBg} text-white rounded-lg font-semibold transform hover:scale-105 transition`}
          >
            Proceed to Register
          </button>
        ) : (
          <p className="text-red-700 font-medium">Score not sufficient. Try again.</p>
        )}
      </div>
    </div>
  );
}