// App.tsx
import { useEffect, useState } from "react";
import "./index.css";
import cardData from "./Data/cardData";       
import projectsData from "./Data/projectsData";
import CV from "../src/assets/docs/CV-Altin-Gashi.pdf";
import skillData from "./Data/skillData";
import SkillCard from "./Components/SkillCard";
import ProjectCard from "./Components/Project";
import FadeInUp from "./Animations/FadeInUp";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import "./index.css";
import ProjectsPage from "./Components/ProjectsPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/project/:id" element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;