import "./App.css";

import { Route, Routes } from "react-router-dom";

import Notfound from "./components/Notfound";
import Aboutus from "./pages/Aboutus";
import Home from "./pages/Home";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutus/>} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default App;
