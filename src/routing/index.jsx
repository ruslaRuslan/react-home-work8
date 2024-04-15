import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact/";
import ContextPage from "../pages/ContextPage";


const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/context" element={<ContextPage />} />

      </Routes>
    </>
  );
};

export default Routing;
