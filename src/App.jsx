import React, { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import './App.css'
import {BrowserRouter,Routes, Route, Router } from "react-router-dom"
import { Button,Stack } from '@chakra-ui/react';
import LoginPage from "./components/LoginPage";
import CreateAccount from './components/CreateAccount';
import NotFound from './components/NotFound';

const App = () => {
  const [loggedIn,setLoggedIn]=useState(false); //here we have to check if token is available in localstorage or not
  const login = () =>{
      setLoggedIn(true)
  }
  return (
     
       
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={loggedIn?<>LoggedIn</>:<LoginPage login={login}/>}/>
        <Route path='/create-account' element={<CreateAccount/>}/>
        <Route path="*" element={<NotFound/>} />
        
      </Routes>
    </BrowserRouter>
    
      
    
);
};

export default App;
