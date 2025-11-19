import { useSurvey } from "../context/SurveyContext";
import { useNavigate } from "react-router-dom";

export default function StepThree() {
  const { answers } = useSurvey();
  const nav = useNavigate();

  const scoreStepOne = answers.stepOne.name && answers.stepOne.age ? 50 : 0;
  const scoreStepTwo = (answers.stepTwo.q1 ? 25 : 0) + (answers.stepTwo.q2 ? 25 : 0);
  const score = scoreStepOne + scoreStepTwo;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-r from-green-50 to-green-100 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-6 text-green-900">Step 3: Review & Score</h2>

      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg space-y-4">
        <div>
          <h3 className="font-semibold text-gray-700">Step 1:</h3>
          <p>Name: {answers.stepOne.name || "Not filled"}</p>
          <p>Age: {answers.stepOne.age || "Not filled"}</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-700">Step 2:</h3>
          <p>Question 1: {answers.stepTwo.q1 || "Not answered"}</p>
          <p>Question 2: {answers.stepTwo.q2 || "Not answered"}</p>
        </div>

        <div className="mt-4 font-bold text-lg text-green-800">
          Score (simulated): {score} / 100
        </div>
      </div>

      {score === 100 ? (
        <button
          onClick={() => nav("/score")}
          className="mt-6 py-3 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transform hover:scale-105 transition"
        >
          Proceed to Score
        </button>
      ) : (
        <p className="mt-6 text-red-600">Score not sufficient. Fill all answers to proceed.</p>
      )}
    </div>
  );
}