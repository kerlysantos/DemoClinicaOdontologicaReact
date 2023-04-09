import { Box } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

import { DentistCard } from "../../Common/DentistCard";
import "./favorito.css"



export const Favorites = ({ favoritesState }) => {
  return (
    <div>
  
      {favoritesState.favorites.map((e) => (
        <h1 key={e.id}>{e.name}</h1>
        
      ))}
    </div>
  );
};
