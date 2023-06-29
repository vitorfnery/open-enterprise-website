import Navbar from "@containers/Navbar";
import Footer from "@containers/Footer";
import { Route, Routes } from "react-router-dom";
import Contribute from "@pages/Contribute";
import Features from "@pages/Features";
import Home from "@pages";
import NoPage from "@pages/NoPage";

const App = () => {
  return (
    <div className="pl-4 md:pl-14 py-3 md:py-10 bg-ghost-white">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
