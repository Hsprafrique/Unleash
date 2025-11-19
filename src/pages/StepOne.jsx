import { useSurvey } from "../context/SurveyContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function StepOne() {
  const { updateAnswer, answers } = useSurvey();
  const nav = useNavigate();
  const [localAnswer, setLocalAnswer] = useState(answers.stepOne || {});
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!localAnswer.name || !localAnswer.age) {
      setError("Please fill in both name and age to proceed.");
      return;
    }
    updateAnswer("stepOne", localAnswer);
    nav("/step-2");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8 
      bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 animate-fadeIn">

      <h2 className="text-3xl font-bold mb-8 text-black drop-shadow">
        Basic Info
      </h2>

      <div className="w-full max-w-md p-6 bg-white/20 rounded-xl shadow-2xl space-y-6">
        <label className="block text-white font-semibold drop-shadow">
          Name:
          <input
            type="text"
            value={localAnswer.name || ""}
            onChange={e => setLocalAnswer({ ...localAnswer, name: e.target.value })}
            className="mt-2 w-full border border-white/50 rounded px-3 py-2 bg-white/40 text-gray-900 focus:ring-2 focus:ring-indigo-400"
          />
        </label>

        <label className="block text-white font-semibold drop-shadow">
          Age:
          <input
            type="number"
            value={localAnswer.age || ""}
            onChange={e => setLocalAnswer({ ...localAnswer, age: e.target.value })}
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