// Import React to use JSX
import React from "react"; 
// Importing React Router for page navigation
import { Route, Routes, BrowserRouter } from "react-router-dom"; 
// Importing the external CSS file for styling
import "./App.css"; 

// Importing pages
import Home from "./pages/Home";
import Projects from "./pages/Projects"; 
import About from "./pages/About";
import BlenzPage from "./pages/BlenzPage";
import VioletPage from "./pages/VioletPage"; 
import CFestivalPage from "./pages/CFestivalPage";
import GvfbPage from "./pages/GvfbPage";
import JobzzPage from "./pages/JobzzPage";
import KinemiPage from "./pages/KinemiPage";

// Importing components
import Layout from "./components/Layout";


// <BrowserRouter> is the router to the navigation
// <Routes> define routes for the application 
// <Layout> is used to wrap the pages for consistent structure across routes

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home />} />
          <Route path="/Projects" element={ <Projects />} />
          <Route path="/Blenz" element={ <BlenzPage />} />
          <Route path="/Violet" element={ <VioletPage />} />
          <Route path="/Cfestival" element={ <CFestivalPage />} />
          <Route path="/Gvfb" element={ <GvfbPage />} />
          <Route path="/Jobzz" element={ <JobzzPage />} />
          <Route path="/Kinemi" element={ <KinemiPage />} />
          <Route path="/About" element={ <About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
