import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="bg-hero-pattern">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/> 
        <Works/>
        <Feedbacks/>
        <div className="app__footer">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
