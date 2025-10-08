import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-box">
        <h1>🎵 Music Festival</h1>
        <p>Welcome to the Music Festival Ticket Management System.</p>
        <button onClick={() => navigate("/tickets")}>Go to Ticket Manager</button>
      </div>
    </div>
  );
}

export default Home;
