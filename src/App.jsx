import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Resume from './components/resume';
import User from './pages/user';
import GameDeveloper from './components/GameDeveloper';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Projects from './components/Projects';
import SocialMedias from './components/SocialMedias';
import CustomCursor from './components/CustomCursor';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CustomCursor />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/game-developer" element={<GameDeveloper />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/SocialMedias" element={<SocialMedias />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
