import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Onboard from "./pages/Onboard";

import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div>
    {/* <h1 className="text-3xl bg-red-200 font-bold underline">
      Hello world!
    </h1> */}

    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={ <Home/>} /> 
      <Route path={"/bashboard"} element={<Dashboard/>}/> 

      <Route path={"/onboard"} element={<Onboard/>} /> 
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
