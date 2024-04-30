import "./App.css";

import { Route, Routes } from "react-router-dom";

import Notfound from "./components/Notfound";
import Aboutus from "./pages/Aboutus";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutus/>} />
      <Route path="*" element={<Notfound />} />
      <Route path="signup" element={<Signup />}/>
    </Routes>
  );
};

export default App;
