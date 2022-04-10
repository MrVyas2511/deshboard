import { Typography, Button } from "@mui/material";
import React from "react";
import "./styles/index.css";

function index() {
  return (
    <div className="scholarship_wrapper">
      <Typography variant="h5" component="div">
        Usefull Links : <a href="#">MYSY</a> | <a href="#">Digital Gujarat</a> |{" "}
        <a href="#">Food-Bill</a>
      </Typography>

      <Typography variant="h3" component="div" margin={"40px 0px 0px 0px"}>
        Scholarship
      </Typography>
      <hr style={{ width: "100%" }}></hr>

      <Typography variant="h6" component="div" margin={"40px 0px 10px 0px"}>
        Add Your Bank Details...
      </Typography>
      <Button
        style={{
          backgroundColor: "#060E40",
        }}
        variant="contained"
      >
        Add Details
      </Button>

      <Typography variant="h6" component="div" margin={"40px 0px 10px 0px"}>
        Have you applied for any type of scholarship?
      </Typography>
      <Button
        style={{
          backgroundColor: "#060E40",
        }}
        variant="contained"
      >
        Add Details
      </Button>

      <Typography variant="h6" component="div" margin={"40px 0px 10px 0px"}>
        Apply For,
      </Typography>
      <Button
        style={{
          backgroundColor: "#060E40",
        }}
        variant="contained"
      >
        Bonafied Cirtificate
      </Button>
    </div>
  );
}

export default index;
