
import { Outlet } from "react-router-dom";
import "./navbar.css"
import Switch from "@mui/material/Switch";
import { GlobalContext } from "../../../context/GlobalContext";
import React, { useContext } from "react";





const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);
  






  const handleChange = () => {
    dispatch({ type: "SWITCH_MODE" });
  };


  return (

    
    <div>
      
      <div className=" conteiner-navbar">
         
        <a className="barra1" href="/">Home</a>
        <a className="barra1" href="/dentistas" >Dentistas</a>
        <a  className="barra1" href="/contacto">Contacto</a>
        <a  className="barra1" href="/favoritos">Favoritos</a>
        
        

        <Switch
        checked={state.isDark}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      
      
      </div>
      
      <Outlet />
     
    </div>
  );
};

export default Navbar;
