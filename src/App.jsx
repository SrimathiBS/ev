// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignupLoginForm from './pages/manufactures/SignupLoginForm';
import ManufacturerDashboard from './pages/manufactures/ManufacturerDashboard';
import Home from './pages/user/Home'; // make sure path is correct

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SignupLoginForm />} />
      <Route path="/manufacturer-dashboard" element={<ManufacturerDashboard />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
