import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { NavLink } from "react-router-dom";
import axios from "axios";
import {
  CardContent,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import maruthiTripPic from "./assets/maruthiTripPic.jpg";
const Profile = maruthiTripPic;

function Developer() {
  let [mail, setMail] = useState("");
  let [num, setNum] = useState("");
  let [mes, setMes] = useState("");
  let [sub, setSub] = useState("");
  let [name, setName] = useState("");
  let [test, setTest] = useState(true);
  let [tes, setTes] = useState(true);
  let [te, setTe] = useState(true);

  return (
    <div
      style={{
        display: "flex",
        gap: "50px",
        alignItems: "center",
        justifyItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Card sx={{ maxWidth: 500 }}>
          <CardActionArea style={{ alignItems: "center" }}>
            <CardMedia
              component="img"
              height="300"
              image={Profile}
              alt="green iguana"
              style={{
                width: 250,
                height: 150,
                marginTop: "20px",
              }}
            />
            <CardContent
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "10px",
              }}
            ></CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div style={{ width: "500px" }}>
        <h1>Maruthi K J</h1>
        <h4>MERN Stack web developer</h4>
        <h3>maruthikj4@gmail.com</h3>
        <h3>+919663458560</h3>
        <p>
          Completed MERN Stack 6 month Course At Guvi an IIT Madras and IIM
          Ahmedabad incubated company based in Chennai, India
        </p>
        <p>❤️❤️❤️</p>
      </div>
    </div>
  );
}

export default Developer;
