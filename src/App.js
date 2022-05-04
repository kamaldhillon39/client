import React from "react";
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LogIn from "./components/LogIn";
import { Token } from "./components/Token";
import {SignUp} from  "./components/SignUp";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<LogIn/>}/>
        <Route path='/token' exact element={<><Token/></>}/>
        <Route path='/sign-up' exact element={<><SignUp/></>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
