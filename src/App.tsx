import React from 'react'
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/notfound';
import Home from './pages/home';
import Login from './pages/login';
import Users from './pages/users';
import Question from './pages/question';
import Message from './pages/message';
import Logs from './pages/logs';


 export default function App() {
  return (
    
    <React.Fragment>
      <Routes>
          <Route path="*" element={<NotFound/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/question" element={<Question/>} />
          <Route path="/message" element={<Message/>} />
          <Route path="/logs" element={<Logs/>} />
        
        
         
       </Routes>
    </React.Fragment>
  );
}

