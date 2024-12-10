import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/routes";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <AppRoutes />
      </div>
      <Footer />
    </>
  );
};

export default App;
