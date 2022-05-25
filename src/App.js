
import { useRef, useEffect, useCallback } from "react"
import Border from "../src/components/Border/Border"
import Home from "../src/components/Home/Home.jsx"
import About from "../src/components/About/About"
import Qualification from "./components/Qualification/Qualification"
import Experience from "./components/Experience/Experience"
import Skill from "../src/components/Skill/Skill"
import Works from "../src/components/Works/Work"
import Contact from "../src/components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import { useNormalizedMouseRef } from "./hooks";

import './App.scss'
import "./components/Animtion/canvas"
// import "./components/Animtion/mouse.js"

function Cursor() {
  const ref = useRef();
  const handleMouseUpdate = useCallback((mousePos) => {
    if (ref.current) {
      const aspect = window.innerWidth / window.innerHeight;
      ref.current.style.transform = `translate3d(${
        ((mousePos[0] + aspect) / aspect) * 0.5 * window.innerWidth
      }px, ${(1 - (mousePos[1] + 1) * 0.5) * window.innerHeight}px, 0)`;
    }
  }, []);
  useNormalizedMouseRef({
    smoothing: 0.05,
    onChange: handleMouseUpdate
  });

  return <div ref={ref} className="cursor" />;
}

function Cursor_2() {
  const ref = useRef();
  const handleMouseUpdate = useCallback((mousePos) => {
    if (ref.current) {
      const aspect = window.innerWidth / window.innerHeight;
      ref.current.style.transform = `translate3d(${
        ((mousePos[0] + aspect) / aspect) * 0.5 * window.innerWidth
      }px, ${(1 - (mousePos[1] + 1) * 0.5) * window.innerHeight}px, 0)`;
    }
  }, []);
  useNormalizedMouseRef({
    smoothing: 1,
    onChange: handleMouseUpdate
  });

  return <div ref={ref} className="cursor_2" />;
}

function App() {
  return (
    <>
      <Cursor/>
      <Cursor_2/>
      <canvas className="plane-can" id="plane-canvas"></canvas>
      <canvas className="main-can" id="main-canvas"></canvas>
      <div className="background">
        <div className="home-background">
          <div className="bg-home-stars"></div>
        </div>
      </div>
      <Border/>
      <Home/>
      <About/>
      {/* <Qualification/> */}
      <Experience/>
      <Skill/>
      <Works/>
      <Contact/>
    </>
  );
}



export default App;
