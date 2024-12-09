import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Events from "./Events";
import Blogs from "./Blogs";
import Members from "./Members";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
