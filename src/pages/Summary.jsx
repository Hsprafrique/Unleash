import { useSurvey } from "../context/SurveyContext";
import { useNavigate } from "react-router-dom";

export default function Summary() {
  const { answers, calculateScore } = useSurvey();
  const nav = useNavigate();

  const score = calculateScore();

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-semibold">Summary</h1>
      <pre className="mt-4 p-4 bg-gray-100 rounded">{JSON.stringify(answers, null, 2)}</pre>

      <p className="mt-4">Score: <strong>{score}</strong></p>

      {score === 100 ? (
        <button onClick={() => nav("/register")} className="mt-6 px-4 py-2 bg-green-600 text-white rounded">Proceed to Register</button>
      ) : (
        <p className="mt-6 text-red-600">Not eligible yet.</p>
      )}
    </div>
  );
}