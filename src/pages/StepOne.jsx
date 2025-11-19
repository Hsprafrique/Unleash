import { useSurvey } from "../context/SurveyContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function StepOne() {
  const { updateAnswer, answers } = useSurvey();
  const nav = useNavigate();
  const [localAnswer, setLocalAnswer] = useState(answers.stepOne || {});

  const handleNext = () => {
    updateAnswer("stepOne", localAnswer);
    nav("/step-2");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8 
      bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 animate-fadeIn">
      
      <h2 className="text-3xl font-bold mb-8 text-white drop-shadow">
        Step 1: Your Details
      </h2>

      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg space-y-6">
        <label className="block text-gray-700 font-semibold">
          Name:
          <input
            type="text"
            value={localAnswer.name || ""}
            onChange={e => setLocalAnswer({ ...localAnswer, name: e.target.value })}
            className="mt-2 w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-indigo-400"
          />
        </label>

        <label className="block text-gray-700 font-semibold">
          Age:
          <input
            type="number"
            value={localAnswer.age || ""}
            onChange={e => setLocalAnswer({ ...localAnswer, age: e.target.value })}
            className="mt-2 w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-indigo-400"
          />
        </label>

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