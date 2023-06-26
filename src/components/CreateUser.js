import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Card, Typography, Button, stepButtonClasses } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";
function CreateUser() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [about, setAbout] = useState("");
  const [role, setRole] = useState("");
  const [com, setCom] = useState("");
  const [add, setAdd] = useState("");

  const { id } = useParams();
  const Cancell = () => {
    setName("");
    setUrl("");
    setAbout("");
    setRole("");
    setCom("");
    setAdd("");
  };
  const Submitt = async (e) => {
    let arr = {
      name,
      url,
      about,
      role,
      company: com,
      address: add,
    };

    e.preventDefault();

    if (
      name === "" ||
      url === "" ||
      about === "" ||
      role === "" ||
      com === "" ||
      add === ""
    )
      alert("YOu have to fill all the form");
    else {
      try {
        await axios
          .post(`https://crud-backend-qw7t.onrender.com/create-user`, arr)
          .then((res) => {
            console.log(res);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Box className="createuser">
      <Card
        style={{
          width: "400px",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "20px",
        }}
      >
        <div>
          <h3 style={{ margin: "20px" }}>User Name:</h3>
          <TextField
            style={{ margin: "10px", width: "300px" }}
            id="outlined-basic"
            label="Name:"
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
          />
        </div>
        <div>
          <h3 style={{ margin: "10px" }}>Image URL:</h3>
          <TextField
            style={{ margin: "10px", width: "300px" }}
            id="outlined-basic"
            label="URL:"
            onChange={(e) => setUrl(e.target.value)}
            variant="outlined"
          />
        </div>
        <div>
          <h3 style={{ margin: "10px" }}>About:</h3>
          <TextField
            style={{ margin: "10px", width: "300px", marginBottom: "30px" }}
            id="outlined-basic"
            label="About:"
            onChange={(e) => setAbout(e.target.value)}
            variant="outlined"
          />
        </div>
        <div>
          <h3 style={{ margin: "10px" }}>Role:</h3>
          <TextField
            style={{ margin: "10px", width: "300px", marginBottom: "30px" }}
            id="outlined-basic"
            label="Role:"
            onChange={(e) => setRole(e.target.value)}
            variant="outlined"
          />
        </div>
        <div>
          <h3 style={{ margin: "10px" }}>Company:</h3>
          <TextField
            style={{ margin: "10px", width: "300px", marginBottom: "30px" }}
            id="outlined-basic"
            label="Company:"
            onChange={(e) => setCom(e.target.value)}
            variant="outlined"
          />
        </div>
        <div>
          <h3 style={{ margin: "10px" }}>Address:</h3>
          <TextField
            style={{ margin: "10px", width: "300px", marginBottom: "30px" }}
            id="outlined-basic"
            label="Address:"
            onChange={(e) => setAdd(e.target.value)}
            variant="outlined"
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <Button
            style={{ margin: "10px" }}
            variant="outlined"
            onClick={(e) => Submitt(e)}
            color="success"
          >
            <NavLink to="/users" style={{ textDecoration: "none" }}>
              Submit
            </NavLink>
          </Button>
          <Button
            style={{ margin: "10px" }}
            onClick={(e) => Cancell(e)}
            variant="outlined"
            color="error"
          >
            <NavLink to="/users" style={{ textDecoration: "none" }}>
              Cancel
            </NavLink>
          </Button>
        </div>
      </Card>
      <Card
        style={{
          width: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "10px",
        }}
      >
        User List preview
        <CardMedia
          sx={{ height: 300, width: 300 }}
          image={`${url}`}
          title={`${name}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {`${name}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${about}`}
          </Typography>
        </CardContent>
      </Card>

      <Card
        style={{
          width: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "30px",
        }}
      >
        profile preview
        <CardMedia
          sx={{ height: 400, width: 400 }}
          image={`${url}`}
          title={`${name}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name:{name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <h3>About:</h3>
            {about}
          </Typography>
          <br />
          <Typography gutterBottom variant="body2" component="div">
            Role:{role}
          </Typography>
          <br />
          <Typography gutterBottom variant="body2" component="div">
            Company: {com}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <h5>adress:</h5>
            {add}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CreateUser;
