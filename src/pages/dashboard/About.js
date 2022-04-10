import React from "react";
import { Typography, Divider, Grid } from "@mui/material";
import AboutCard from "./components/AboutCard";
const faculty = ["xyz", "xyz"];
const developers = ["xyz", "xyz", "xyz", "xyz"];
function About() {
  return (
    <div className="About_wrapper">
      <Typography variant="h3" gutterBottom component="div">
        About
      </Typography>
      <hr></hr>
      <Typography variant="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis
        elementum nibh. Sed nibh est, sollicitudin hendrerit volutpat vitae,
        pretium placerat mauris. Quisque sit amet imperdiet nibh. Nullam ut
        sollicitudin ipsum et.
      </Typography>

      <Typography variant="h5" className="About-heading">
        Faculty Guide :
      </Typography>

      <Grid container>
        {faculty.map(() => (
          <Grid item xs={3}>
            <AboutCard />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" className="About-heading">
        Developers :
      </Typography>

      <Grid container>
        {developers.map(() => (
          <Grid item xs={3}>
            <AboutCard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default About;
