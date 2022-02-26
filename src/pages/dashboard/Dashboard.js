import React from "react";
import "../../App.css";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Grid, Typography, Button } from "@mui/material";
import "./styles/style.css";
const data = {
  name: "xyz",
  Enrollment: "190130107111",
  gender: "Male",
  AdharNumber: "10101010101",
  BloodGroup: "B+",
  ParetMobile: "9999999999",
  instituteEmail: "xyz@gecg28.ac.in",
  MobileNumber: "9999999909",
  PersonalEmail: "xyz.email@gmail.com",
  DOB: "01/01/2020",
  ParentEMail: "xyz@gmail.com",
};

const data2 = [
  {
    title: "Mid semester is starting from...",
    date: "10/2/2022",
    postby: "admin",
  },
  {
    title: "Mid semester is starting from...",
    date: "10/2/2022",
    postby: "admin",
  },
  {
    title: "Mid semester is starting fro...",
    date: "10/2/2022",
    postby: "admin",
  },
  {
    title: "Mid semester is starting from...",
    date: "10/2/2022",
    postby: "admin",
  },
];

function Dashboard() {
  return (
    <>
      <div className="header">
        <Grid container>
          <Grid item xs={10}>
            News & Updates
          </Grid>
          <Grid item xs={2}>
            <NotificationsActiveIcon fontSize="medium"></NotificationsActiveIcon>
          </Grid>

          <hr></hr>

          {data2.map((key, id) => {
            return (
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  className="heading"
                  component="div"
                  gutterBottom={false}
                >
                  {key.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  className="textfield"
                  gutterBottom
                  component="div"
                >
                  {key.date} | {key.postby}
                </Typography>
                <hr></hr>
              </Grid>
            );
          })}
        </Grid>
      </div>
      <Grid container>
        <Grid item xs={6}>
          <div className="student_details">
            <h2>Student Details</h2>
            <Grid container>
              {Object.keys(data).map((key, id) => {
                return (
                  <Grid item xs={6}>
                    <Typography
                      variant="h6"
                      className="heading"
                      component="div"
                      gutterBottom={false}
                    >
                      {key}
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      className="textfield"
                      gutterBottom
                      component="div"
                    >
                      {data[key]}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="student_details">
            <h2>Student Details</h2>

            <Grid container justifyContent="center" style={{ height: "70%" }}>
              <div className="addButton">
                <Typography
                  variant="subtitle1"
                  className="textfield"
                  gutterBottom
                  component="div"
                  textAlign="center"
                >
                  You haven't filled data
                </Typography>
                <Button variant="contained" style={{ background: "#060E40" }}>
                  Add Now
                </Button>
              </div>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
