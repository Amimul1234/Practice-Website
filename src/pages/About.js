import { Link } from "react-router-dom";
import Head from "../images/headjpg.jpg"
import  "./About.css"



function About() {
  return (
    <div className="about_container">
      
      <img src={Head} style={{ width: "100%" }}></img>
      <div className="centered">
      This website is about printing 3D materials.
      3D printing or additive manufacturing is a process of making three dimensional solid objects from a digital file.
      The creation of a 3D printed object is achieved using additive processes. 
      In an additive process an object is created by laying down successive 
      layers of material until the object is created. Each of these layers can be seen
       as a thinly sliced cross-section of the object.This website enables customers to 
       order their customize 3d materials and buy it.
       <Link to="/teamPage" style={{marginLeft:"10px"}}>Team Page &#10154;</Link>
      </div>

    </div>
  );
}

export default About;
