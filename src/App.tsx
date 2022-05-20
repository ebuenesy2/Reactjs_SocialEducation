import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Admin from './components/Admin';
import NotFound from './components/NotFound';
import Web from './components/Web';

 export default function App() {
  return (
    
    <React.Fragment>
      <Routes>
          <Route path="/" element={<Web/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="*" element={<NotFound/>} />
       </Routes>
    </React.Fragment>
  );
}

