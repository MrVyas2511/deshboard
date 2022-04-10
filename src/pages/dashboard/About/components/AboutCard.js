import React from "react";
import {
  Card,
  CardActionArea,
  Typography,
  CardMedia,
  Avatar,
  CardContent,
} from "@mui/material";

function AboutCard() {
  return (
    <Card
      sx={{ maxWidth: 180 }}
      style={{ background: "#C4C4C4", margin: "5px" }}
    >
      <CardContent>
        <Avatar
          alt="Remy Sharp"
          textAlign="center"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 100, height: 100 }}
          style={{ margin: "10% 20%" }}
        />
        <Typography
          textAlign="center"
          gutterBottom
          variant="h6"
          component="div"
        >
          Pro. Name
        </Typography>
        <Typography
          variant="h6"
          component="p"
          textAlign="center"
          color="text.secondary"
        >
          Designation
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AboutCard;
