import React from 'react'
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/notfound';
import Home from './pages/home';
import Login from './pages/login';
import Question from './pages/question';
import Message from './pages/message';


 export default function App() {
  return (
    
    <React.Fragment>
      <Routes>
          <Route path="*" element={<NotFound/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/question" element={<Question/>} />
          <Route path="/message" element={<Message/>} />
        
         
       </Routes>
    </React.Fragment>
  );
}

