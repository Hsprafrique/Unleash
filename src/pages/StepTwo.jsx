import { useSurvey } from "../context/SurveyContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function StepTwo() {
  const { updateAnswer, answers } = useSurvey();
  const nav = useNavigate();
  const [localAnswer, setLocalAnswer] = useState(answers.stepTwo || {});
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!localAnswer.q1 || !localAnswer.q2) {
      setError("Please answer both questions to proceed.");
      return;
    }
    updateAnswer("stepTwo", localAnswer);
    nav("/step-3");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-r from-purple-50 to-purple-100 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-8 text-purple-900">Step 2: Survey Questions</h2>

      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg space-y-6">
        <label className="block text-gray-700 font-semibold">
          Question 1: What is your favorite color?
          <input
            type="text"
            value={localAnswer.q1 || ""}
            onChange={e => setLocalAnswer({ ...localAnswer, q1: e.target.value })}
            className="mt-2 w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-purple-400"
          />
        </label>

        <label className="block text-gray-700 font-semibold">
          Question 2: What city are you from?
          <input
            type="text"
            value={localAnswer.q2 || ""}
            onChange={e => setLocalAnswer({ ...localAnswer, q2: e.target.value })}
            className="mt-2 w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-purple-400"
          />
        </label>

        {error && <p className="text-red-600">{error}</p>}

        <button
          onClick={handleNext}
          className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transform hover:scale-105 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}