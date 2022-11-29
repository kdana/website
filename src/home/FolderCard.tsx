import React from "react";
import { Page } from "../services/PageService";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Avatar from "@mui/material/Avatar";

interface Props {
  page: Page;
}

function FolderCard(props: Props) {
  return (
    <Card sx={{ maxWidth: 345, height: "fit-content", m: 2 }}>
      <CardActionArea>
        <CardMedia>
          <Avatar sx={{ height: "50px", width: "100%", borderRadius: "unset", bgcolor: "primary.main" }}>
            {props.page.icon}
          </Avatar>
        </CardMedia>
          <Typography gutterBottom variant="h5" component="div">
            {props.page.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.page.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default FolderCard;
