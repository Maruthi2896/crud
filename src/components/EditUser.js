import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Card, Typography, Button } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";

function EditUser() {
  const [data, setData] = useState({
    name: "",
    img: "",
    about: "",
    role: "",
    company: "",
    address: "",
  });

  const { id } = useParams();

  const Cancell = () => {
    setData({
      name: "",
      url: "",
      about: "",
      role: "",
      company: "",
      address: "",
    });
  };
  useEffect(() => {
    fetch(`https://crud-backend-qw7t.onrender.com/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setData(data));
    console.log("test data:", data);
  }, []);

  const { name, img, about, role, company, address } = data;

  const handleChange = (e) => {
    const user = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setData(user);
  };
  const Submitt = (e) => {
    e.preventDefault();
    axios
      .put(`https://crud-backend-qw7t.onrender.com/edit-user/${id}`, data)
      .then(() =>
        setData({
          name: "",
          img: "",
          about: "",
          role: "",
          company: "",
          address: "",
        })
      );
  };
  return (
    <div>
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
            <h3 style={{ margin: "20px" }}>Enter the User Name:</h3>
            <TextField
              style={{ margin: "10px", width: "300px" }}
              id="outlined-basic"
              label="Name:"
              name="name"
              value={name}
              variant="outlined"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <h3 style={{ margin: "10px" }}>Image URL:</h3>
            <TextField
              style={{ margin: "10px", width: "300px" }}
              id="outlined-basic"
              label="URL:"
              name="url"
              value={img}
              variant="outlined"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <h3 style={{ margin: "10px" }}>About:</h3>
            <TextField
              style={{ margin: "10px", width: "300px", marginBottom: "30px" }}
              id="outlined-basic"
              label="About:"
              value={about}
              name="about"
              onChange={(e) => handleChange(e)}
              variant="outlined"
            />
          </div>
          <div>
            <h3 style={{ margin: "10px" }}>Enter Role:</h3>
            <TextField
              style={{ margin: "10px", width: "300px", marginBottom: "30px" }}
              id="outlined-basic"
              label="Role:"
              name="role"
              value={role}
              onChange={(e) => handleChange(e)}
              variant="outlined"
            />
          </div>
          <div>
            <h3 style={{ margin: "10px" }}>Address:</h3>
            <TextField
              style={{ margin: "10px", width: "300px", marginBottom: "30px" }}
              id="outlined-basic"
              label="Address:"
              value={address}
              name="address"
              variant="outlined"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <h3 style={{ margin: "10px" }}>Company:</h3>
            <TextField
              style={{ margin: "10px", width: "300px", marginBottom: "30px" }}
              id="outlined-basic"
              label="Company:"
              name="company"
              variant="outlined"
              value={company}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <Button
              style={{ margin: "10px" }}
              variant="outlined"
              color="success"
              onClick={(e) => Submitt(e)}
            >
              <NavLink to="/users" style={{ textDecoration: "none" }}>
                Submit
              </NavLink>
            </Button>

            <NavLink to="/users" style={{ textDecoration: "none" }}>
              <Button
                style={{ margin: "10px" }}
                variant="outlined"
                color="error"
                onClick={() => Cancell()}
              >
                Cancel
              </Button>
            </NavLink>
          </div>
        </Card>

        <Card style={{ width: "300px", margin: "10px" }}>
          User List Preview:
          <CardMedia
            sx={{ height: 300, width: 300 }}
            image={`${img}`}
            title={`${name}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {about}
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
            image={`${img}`}
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
              Company: {company}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <h5>adress:</h5>
              {address}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default EditUser;
