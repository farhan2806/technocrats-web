import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Events from "../components/Events";
import Blogs from "../components/Blogs";
import Vision from "../components/Vision";
import FeatureSection from "../components/FeatureSection";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeatureSection />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/vision" element={<Vision />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
