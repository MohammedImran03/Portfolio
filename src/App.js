import React,{useState} from "react";
import Navbar from "./components/Navbar";
import Home  from "./components/Home";
import Sociallinks from "./components/Sociallinks";
import Mail from "./components/mail";
import About from "./components/About";
function App() {
  const [isNight,setIsNight]=useState(false);
  return (
    <>
   <Navbar setIsNight={setIsNight} isNight={isNight} />
   <Home isNight={isNight} />
    <Sociallinks isNight={isNight}/>
    <Mail isNight={isNight} />
    <About isNight={isNight}/> 
    {/* <Home isNight={isNight} /> */}
    </>
  );
}

export default App;
