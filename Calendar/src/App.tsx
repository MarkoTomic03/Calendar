import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<h1>Pocetna strana</h1>} />
      </Routes>
    </Router>
  );
};

export default App;


