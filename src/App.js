import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Concerts from './pages/Concerts';
import Collections from './pages/Collections';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <div>
    <Router>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/Concerts" Component={Concerts} />
          <Route path="/Collections" Component={Collections} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
