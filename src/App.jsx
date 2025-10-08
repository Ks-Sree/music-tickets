import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TicketManager from "./components/TicketManager";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<TicketManager />} />
      </Routes>
    </Router>
  );
}

export default App;
