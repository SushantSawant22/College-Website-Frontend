import H_Page from "./H_Page";
import Course from "./Course"
import Registration from "./Registration";
import Cont from "./Cont";
import Gallery from "./Gallery";
import { BrowserRouter as Router, Routes, Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import React,{useState} from 'react';
import { AuthProvider } from "./Components/Auth";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<H_Page />} />
        <Route path="/Courses" element={<Course />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Cont />} />
        <Route path="/Register" element={<Registration />} />
        <Route path="/LoginPage" element={<LoginPage Login/>} />
      </Routes>
    </AuthProvider>
  )
}
export default App;
