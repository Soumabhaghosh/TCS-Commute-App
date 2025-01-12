import React from 'react'

import './App.css'
import {BrowserRouter,Routes, Route, Router } from "react-router-dom"

import LoginPage from "./components/LoginPage";
import CreateAccount from './components/CreateAccount';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/create-account' element={<CreateAccount/>}/>
      </Routes>
    </BrowserRouter>
      
    
);
};

export default App;
