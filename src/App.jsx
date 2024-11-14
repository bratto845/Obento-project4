import { Route, Routes } from 'react-router-dom';
import './App.css';
import GamePage from './components/game_page/GamePage';
import StartPage from './components/start/StartPage';
import MenuPage from './components/menu_page/MenuPage';
import DishDetails from './components/dish_details/DishDetails';
import sound from './assets/music.mp3';
import { useState, useRef } from 'react';

function App() {
  const [isPlaying, setIsPlaying] = useState(false); // Start with music paused
  const audioRef = useRef(null);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause(); // Pause the music
    } else {
      audio.play(); // Play the music
      audio.loop = true; // Loop the music
    }
    setIsPlaying(!isPlaying); // Toggle the playing state
  };

  return (
    <>
      <audio ref={audioRef} src={sound} preload="auto" /> {/* Preload the audio but don't play yet */}
      
      {/* Button for toggling music */}
      <button className="audio-button" onClick={toggleAudio}>
        {isPlaying ? "Pause" : "Play"} Music
      </button>

      {/* Routes */}
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

// import { Route, Routes } from 'react-router-dom'
// import './App.css'
// import GamePage from './components/game_page/GamePage'
// import StartPage from './components/start/StartPage'
// import MenuPage from './components/menu_page/MenuPage'
// import DishDetails from './components/dish_details/DishDetails'
// import sound from './assets/music.mp3'
// import { useEffect, useState, useRef } from 'react'

// function App() {
//   const [isPlaying, setIsPlaying] = useState(true)
//   const audioRef = useRef(null)

//     const toggleAudio = () => {
//       const audio = audioRef.current;
//       if (isPlaying) {
//         audio.pause();
//       } else {
//         audio.play();
//         audio.loop = true;
//       }
//       setIsPlaying(!isPlaying);
//     }

//   return (
//     <>
//      <audio ref={audioRef} src={sound} /> 
//       <button onClick={toggleAudio}>
//         {isPlaying ? "Pause" : "Play"} Music
//       </button> 
//       <Routes>
//         <Route path="/" element={<StartPage />} />
//         <Route path="/menu" element={<MenuPage />} />
//         <Route path="/game-page" element={<GamePage />} />
//         <Route path='/dish' element={<DishDetails />} />
//       </Routes>
//     </>
//   )
// }

// export default App



  
      