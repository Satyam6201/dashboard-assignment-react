import React, { useState } from "react";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      <header className="app-header">
        <h1 className="title">📊 Executive Dashboard</h1>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>
      <Dashboard />
    </div>
  );
};

export default App;
