import React from 'react'
import { Grid, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';


function ActivityPoint() {
  return (
   <div className="container">
      <Typography>hello students</Typography>
  

  <Grid container spacing={2} >
    
  <Grid item>
    <Paper style={{color:"#333"}}/>
  </Grid>

  <Grid item>
    <Paper style={{color:"#333"}}/>
  </Grid>

  <Grid item>
    <Paper style={{color:"#333"}}/>
  </Grid>

  </Grid>
   </div>

  )
}

export default ActivityPoint