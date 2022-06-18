import React, { useState } from 'react';
import './App.css';

import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';

function App() {
  const [categories] = useState([
    { name: "portraits", description: "Collection of my squat PR progession" },
    { name: "food", description: "Collection of my deadlift PR progression" },
    { name: "landscape", description: "Collection of my bench press PR progression" },
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
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
