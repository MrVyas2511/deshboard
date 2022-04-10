import React from 'react'
import { Typography, Button } from "@mui/material";
import { Link } from '@mui/material';
import './Styles.css';



function ActivityPoints() {
  return (
    <div>
      <div className="apoint">
        <Typography variant="h5" className="link" component="div">
          <strong>Useful Link: </strong>
          <t />
          <Link style={{ color: "black" }}>GTU 100 POINTS ACTIVITY</Link>
        </Typography>
        <br />

        <Typography variant="h4" className="head" gutterBottom component="div">
          Activity Points
        </Typography>

        <Typography variant="h6" className="alert" gutterBottom component="div">
          Have you added certificate details on GTU 100 Activity Portal?
          <br />
          (Upload Certificate to verify)
        </Typography>

        <Button
          style={{
            backgroundColor: "#060e40",
            // marginLeft: "30px",
          }}
          variant="contained"
        >
          {" "}
          Uplaod Certificate
        </Button>
      </div>
    </div>
  );
}

export default ActivityPoints