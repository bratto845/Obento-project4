import { Route, Routes } from 'react-router-dom';
import './App.css';
import GamePage from './components/game_page/GamePage';
import StartPage from './components/start/StartPage';
import MenuPage from './components/menu_page/MenuPage';
import DishDetails from './components/dish_details/DishDetails';
import sound from './assets/music.mp3';
import { useState, useRef } from 'react';

function App() {
  const [isPlaying, setIsPlaying] = useState(false); 
  const audioRef = useRef(null);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause(); 
    } else {
      audio.play(); 
      audio.loop = true; 
    }
    setIsPlaying(!isPlaying); 
  };

  return (
    <>
      <audio ref={audioRef} src={sound} preload="auto" /> 
      
    
      <button className="audio-button" onClick={toggleAudio}>
        {isPlaying ? "Pause" : "Play"} Music
      </button>

    
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/game-page" element={<GamePage />} />
        <Route path="/dish" element={<DishDetails />} />
      </Routes>
    </>
  );
}

export default App;


  
      