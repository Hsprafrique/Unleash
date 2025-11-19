import { createContext, useContext, useState } from "react";

const SurveyContext = createContext();

export function SurveyProvider({ children }) {
  const [answers, setAnswers] = useState({
    stepOne: {},
    stepTwo: {},
    stepThree: {}
  });

  const [score, setScore] = useState(0); // add score to context

  const updateAnswer = (step, data) => {
    setAnswers(prev => ({ ...prev, [step]: data }));
  };

  const calculateScore = () => {
    // simulate scoring logic
    const scoreStepOne =
      answers.stepOne.name && answers.stepOne.age ? 50 : 0;
    const scoreStepTwo =
      (answers.stepTwo.q1 ? 25 : 0) + (answers.stepTwo.q2 ? 25 : 0);
    const total = scoreStepOne + scoreStepTwo;
    setScore(total); // save in context
    return total;
  };

  return (
    <SurveyContext.Provider value={{ answers, updateAnswer, score, calculateScore }}>
      {children}
    </SurveyContext.Provider>
  );
}

export function useSurvey() {
  return useContext(SurveyContext);
}