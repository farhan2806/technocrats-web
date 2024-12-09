import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FeatureSection from "./components/FeatureSection";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
import Members from "./components/Members";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Home />
        <FeatureSection />
        <Events />
        <Blogs />
        <Members />
        <Footer />
      </div>
    </>
  );
};

export default App;
