import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { useEffect } from "react";
import { toast } from "react-toastify"; 


const App = () => {
  useEffect(() => {
    toast.success("Welcome");
  }, []); 

  return <h1 className="text-3xl font-bold">Hello world!</h1>;
};

export default App;
