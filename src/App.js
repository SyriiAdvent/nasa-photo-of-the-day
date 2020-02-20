import React from "react";
import NavigationBar from './Components/Navigation'
import Display from "./Components/Display";
import Footer from './Components/Footer'
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <header className="nav">
        <img
          src={`https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png`}
          alt="Official NASA Logo"
        />
      </header> */}
      <NavigationBar />
      <Display />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
