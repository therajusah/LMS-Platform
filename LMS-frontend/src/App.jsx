import { useEffect } from 'react';
import './App.css';

const App = () => {
useEffect(() => {
  toast.success('hello');
})


  return (
    <h1 className="text-3xl font-bold ">
            Hello world!
          </h1>
  )
}

export default App