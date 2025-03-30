import React from "react";
import { Page } from "../services/PageService";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Avatar from "@mui/material/Avatar";
import { Link as RouterLink } from "react-router-dom";

interface Props {
  page: Page;
}

function DemoCard(props: Props) {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardActionArea component={RouterLink} to={props.page.link} sx={{ height: "100%" }}>
        <CardMedia>
          <Avatar sx={{ width: "100%", borderRadius: "unset", bgcolor: "primary.main" }}>
            <props.page.icon fontSize="large" />
          </Avatar>
        </CardMedia>
        <CardContent>
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
export default DemoCard;
