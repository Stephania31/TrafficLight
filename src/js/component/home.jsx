import React, { useState, useEffect } from "react";
import "../../styles/index.css"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [active, setActive] = useState("")
  const [purple, setPurple] = useState (false)
 

 
  
  useEffect(()=> {console.log(active)},[active])

 
  
  return (
    <div className="semaforo">

      <div>
        <div id="trafficTop"></div>
        <div id="container">
          <div className={"red-light" + `${active==="red-light"? " red-light-active" : ""}` + `${purple ? " purple-light-active" : "" }`} onClick={(e)=>{setActive(e.target.className)}}></div>
  
      <br/>
          <div className={"yellow-light" + `${active==="yellow-light"? " yellow-light-active" : ""}`} onClick={(e)=>{setActive(e.target.className)}}></div>
		  <br />
          <div className={"green-light" + `${active==="green-light"? " green-light-active" : ""}`} onClick={(e)=>{setActive(e.target.className)}}></div>
        </div>
        <br />
        <button type="button" className="purple-button text-white border border-white rounded mb-3" onClick={(e) => setPurple(!purple)}>I´m Purple</button>
        
        
      
      </div>
    </div>
  );
};

export default Home;
