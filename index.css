import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FloatingDecor from "./components/FloatingDecor";
import WelcomeGate from "./components/WelcomeGate";
import BackgroundMusic from "./components/BackgroundMusic";
import Hero from "./components/Hero";
import CountdownCounter from "./components/CountdownCounter";
import MessagesSection from "./components/MessagesSection";
import TimelineSection from "./components/TimelineSection";
import CacaPalavrasSection from "./components/CacaPalavrasSection";
import GallerySection from "./components/GallerySection";
import PlaylistSection from "./components/PlaylistSection";
import SiteFooter from "./components/SiteFooter";

const Home = () => {
  // musicStarted controla quando o site é "revelado" e a música começa
  const [musicStarted, setMusicStarted] = useState(false);

  return (
    <main className="relative" data-testid="home-page">
      <AnimatePresence>
        {!musicStarted && (
          <WelcomeGate key="gate" onEnter={() => setMusicStarted(true)} />
        )}
      </AnimatePresence>

      <BackgroundMusic musicStarted={musicStarted} />

      <FloatingDecor />
      <div className="relative z-10">
        <Hero />
        <CountdownCounter />
        <MessagesSection />
        <TimelineSection />
        <CacaPalavrasSection />
        <PlaylistSection musicStarted={musicStarted} />
        <GallerySection />
        <SiteFooter />
      </div>
    </main>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
