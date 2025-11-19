import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Score from "./pages/Score";
import Register from "./pages/Register";
import ComingSoon from "./pages/ComingSoon";
import Welcome from "./pages/Welcome";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import Summary from "./pages/Summary";
import Success from "./pages/Success";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/survey" element={<Survey />} />
        <Route path="/step-1" element={<StepOne />} />
        <Route path="/step-2" element={<StepTwo />} />
        <Route path="/step-3" element={<StepThree />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/score" element={<Score />} />
 	<Route path="/success" element={<Success />} />
        <Route path="/register" element={<Register />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;