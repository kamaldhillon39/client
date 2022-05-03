import React from "react";
import './App.css';
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom'
import LogIn from "./components/LogIn";
import { Token } from "./components/Token";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<LogIn/>}/>
        <Route path='/token' exact element={<Token/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
