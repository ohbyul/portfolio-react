import React from "react";

//npm install react-router-dom --save
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  useParams
} from "react-router-dom";
import Home from "./view/home/Home";
import Main from "./view/main/Main";
import Video from "./view/pip/Video";
import Pip from "./view/pip/Pip";

function App() {

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/1/2">Home</Link></li>
            <li><Link to="/main">Main</Link></li>
            <li><Link to="/video">Video</Link></li>
            <li><Link to="/pip">PIP</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/:id/:key" element={<Home />}/>
          <Route path="/main" element={<Main />}/>
          <Route path="/video" element={<Video />}/>
          <Route path="/pip" element={<Pip />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
