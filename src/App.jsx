import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import VaccineRecommendations from "./pages/VaccineRecommendations.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/recommendations" element={<VaccineRecommendations />} />
      </Routes>
    </Router>
  );
}

export default App;
