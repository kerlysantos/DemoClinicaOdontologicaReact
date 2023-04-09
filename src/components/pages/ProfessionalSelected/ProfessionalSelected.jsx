import React from 'react'
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PublicIcon from "@mui/icons-material/Public";
const ProfessionalSelected = ({user}) => {
  return (
    <div>
 <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          margin: "1px",
          color:"black",

          
        }}
      >
        <Card sx={{ maxWidth: 603 }}>
          <CardActionArea>
            <CardMedia
              color='red'
              component="img"
              height="219"
              image="https://illustoon.com/photo/dl/4240.png"
              alt="destis"
            />
<CardContent>
              <Grid item xs={1} md={1} >
                <Typography sx={{ mt: 1, mb: 1 }} variant="h6" component="div">
                  {user.name}
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <EmailIcon />
                    </ListItemIcon>
                    <ListItemText primary={user.email} />
                    <h4>dentiskgmail.com</h4>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LocalPhoneIcon />
                    </ListItemIcon>
                    <ListItemText primary={user.phone} />
                    <h4>3510555</h4>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <PublicIcon />
                    </ListItemIcon>
                    <ListItemText primary={user.website} />
                    <h4>Dentis.com</h4>
                  </ListItem>
                </List>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </div>
  )
}

export default ProfessionalSelected