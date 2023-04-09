import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import React from "react";
import { Link } from "react-router-dom";
import "./Professional.css"

const Professional = ({ users, dispatch, favs }) => {
  return (
      <div className = "card1"> 
      
      {users.map((user) => {

      
        
        return (
          
          <Card sx={{ maxWidth: 350 }} key={user.id}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
                  ID
                </Avatar>
              }
              title={user.name}
            />
            <CardMedia
              component="img"
              height="284"
              image={
                "https://illustoon.com/photo/dl/4240.png"
              }
              alt="Paella dish"
              />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="add to favorites"
                onClick={() =>
                  dispatch({ type: "HANDLE_FAVORITE", payload: user })
                }
                >
                <FavoriteIcon
                  color={
                    favs.some((fav) => fav.id === user.id)
                    ? "error"
                    : "disabled"
                  }
                  />
              </IconButton>
              <Link to={`/dentista/${user.id}`}>
                <Button variant="contained">Ver detalle</Button>
              </Link>
            </CardActions>
          </Card>
      
     
        );
      })}
    </div>
  );
};

export default Professional;
