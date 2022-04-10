import React from "react";
import { Typography, Button } from "@mui/material";
import "./styles/index.css";

function index() {
  return (
    <div className="payment_wrapper">
      <Typography variant="h5" component="div">
        Usefull Links : <a href="#">SBI Collect</a>
      </Typography>

      <Typography
        variant="h4"
        component="div"
        margin={"40px 0px 10px 0px"}
        className="title"
      >
        Payments/Fees
      </Typography>
      {/* <hr style={{ width: "100%", margin: "0px 0px 30px 0px" }}></hr> */}

      <Button
        style={{
          backgroundColor: "#060E40",
          margin: "30px 0px",
        }}
        variant="contained"
      >
        Add Payments Details
      </Button>
    </div>
  );
}

export default index;
