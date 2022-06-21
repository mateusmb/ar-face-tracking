import React, { useState } from "react";


 import "mind-ar/dist/mindar-face.prod.js";
 import "aframe";
 import "mind-ar/dist/mindar-face-aframe.prod.js";

import "./App.css";
import MindARViewer from "./components/MindARViewer";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="App">
      <h1>Face tracking</h1>

    
        <div className="container">
          <MindARViewer />
          <video></video>
        </div>
     
    </div>
  );
}

export default App;
