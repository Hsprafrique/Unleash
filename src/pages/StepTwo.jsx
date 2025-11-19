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
    <div className="min-h-screen flex flex-col justify-center items-center p-8 
      bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 animate-fadeIn">
      
      <h2 className="text-3xl font-bold mb-8 text-white drop-shadow">
        Survey Questions
      </h2>

      <div className="w-full max-w-md p-6 bg-white/20 rounded-xl shadow-2xl space-y-6">
        <label className="block text-white font-semibold drop-shadow">
          Do you like my Background color?
          <input
            type="text"
            value={localAnswer.q1 || ""}
            onChange={e => setLocalAnswer({ ...localAnswer, q1: e.target.value })}
            className="mt-2 w-full border border-white/50 rounded px-3 py-2 bg-white/40 text-gray-900 focus:ring-2 focus:ring-indigo-400"
          />
        </label>

        <label className="block text-white font-semibold drop-shadow">
          How can I serve you better?
          <input
            type="text"
            value={localAnswer.q2 || ""}
            onChange={e => setLocalAnswer({ ...localAnswer, q2: e.target.value })}
            className="mt-2 w-full border border-white/50 rounded px-3 py-2 bg-white/40 text-gray-900 focus:ring-2 focus:ring-indigo-400"
          />
        </label>

        {error && <p className="text-red-500 font-medium">{error}</p>}

        <button
          onClick={handleNext}
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}