import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
/*import {TimelineLite ,TweenMax, Power3} from 'gsap/all';*/
import "./Appeye.css";
import myLogo from "./gandalf.jpg";

function Appeye() {
  const [background, setBackground] = useState("#262645");
  const headerRef = useRef(null);
  const clipRef = useRef(null);

  useEffect(() => {
   gsap.timeline({
      scrollTrigger: {
        trigger: ".front-page",
        start: "top",
        end: "10%",
        scrub: "true",
        pin: true,
        markers: true,
       
      },
    }).fromTo(clipRef.current,
      {
        clipPath: "circle(5%)",
      },
      {
        clipPath: "circle(75%)",
        duration: 8,
      }
    );
  });


  return (
    
    <div className="Appeye">
      <header ref={headerRef} className="App-header">
        <div ref={clipRef} className="front-page">
          <img className="myLogo" src={myLogo} alt="Marc Muylaert" /> 
          <p>
            
          <br /> 
          <br />

          “ALL WE HAVE TO DECIDE IS WHAT TO DO WITH THE TIME THAT IS GIVEN US.”

          </p>
        </div>
      </header>
      
     </div>
  );
}

export default Appeye;
