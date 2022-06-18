import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';

function App() {
  const [categories] = useState([
    { name: "squat", description: "Collection of my squat PR progession" },
    { name: "deadlift", description: "Collection of my deadlift PR progression" },
    { name: "bench", description: "Collection of my bench press PR progression" },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav  
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <Gallery></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
