import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Resume from './components/resume';
import User from './pages/user';
import Acc from './pages/Acc';
import Navbar from './components/navbar';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={< Resume/>} />
        <Route path="/profile" element={<Home />} />
        <Route path="/acc" element={<Acc />} />
      </Routes>
    </Router>
  );
}

export default App;
