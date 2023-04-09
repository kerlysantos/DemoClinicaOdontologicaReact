import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";


const FavoritesContainer = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div className="favorito">

      
      <h1>Favoritos Seleccionados</h1>
      {state.favs.map((e) => (
        <h4 key={e.id}>{e.name}</h4>
        ))}


    </div>
  );
};

export default FavoritesContainer;
