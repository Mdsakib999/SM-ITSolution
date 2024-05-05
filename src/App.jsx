import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import CountingNumber from "./components/CountingNumber";
import FooterH from "./components/FooterH";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Services from "./components/Services";
import LoadingComponent from "./components/LoadingComponent";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Creating a timeout within the useEffect hook
    setTimeout(() => {
      
      setIsLoading(false);
    }, 3000);
  }, []);
 if (isLoading) {
  return <LoadingComponent></LoadingComponent>
 }
  
 

  return (
    <div className="section-container">
      <Nav></Nav>

      <Home></Home>

      <div id="About">
        <About></About>
      </div>

    <div id ="Services">
      <Services></Services>
    </div>
      <CountingNumber></CountingNumber>

      <div id="contact">
      <Contact></Contact>
      </div>

      <FooterH></FooterH>
    </div>
  );
}

export default App;
