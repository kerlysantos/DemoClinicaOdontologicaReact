
import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import "./Home.css";

const Home = () => {
    const { state } = useContext(GlobalContext);
 
  return (
    <div className="container-home">
        
      <h1 className="clinica">  </h1>
      
    </div>
  );
};

export default Home;
