import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import CountingNumber from "./components/CountingNumber";
import FooterH from "./components/FooterH";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Creating a timeout within the useEffect hook
    setTimeout(() => {
      
      setIsLoading(false);
    }, 2000);
  }, []);
 if (isLoading) {
  return <p>Loading</p>
 }
  
 

  return (
    <div className="section-container">
      <Nav></Nav>

      <Home></Home>

      <div id="About">
        <About></About>
      </div>

      <CountingNumber></CountingNumber>
      <Contact></Contact>

      <FooterH></FooterH>
    </div>
  );
}

export default App;
