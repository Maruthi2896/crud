import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Card, Typography, Button } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";
function ListUsers() {
  const [data, setData] = useState([]);
  const Delette = async (id) => {
    await axios
      .delete(`http://localhost:7000/user/delete/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch("http://localhost:7000/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  // console.log("data:", data);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {data.map((a, b) => (
          <Card style={{ width: "300px", margin: "10px" }}>
            <CardMedia
              sx={{ height: 300, width: 300 }}
              image={`${a.img}`}
              title={`${a.name}`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {`${a.name}`}
              </Typography>
              <div
                color="text.secondary"
                style={{ height: "100px", overflowWrap: "anywhere" }}
              >
                `${a.about}`
              </div>
            </CardContent>
            <CardActions
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0px 10px 0px 0px",
              }}
            >
              <Button size="small">
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={`/edit-user/${a._id}`}
                >
                  Edit
                </NavLink>
              </Button>
              <Button size="small" color="error" onClick={() => Delette(a._id)}>
                <NavLink to="/users" style={{ textDecoration: "none" }}>
                  Delete
                </NavLink>
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <Button variant="outlined" color="primary" style={{ margin: "50px" }}>
        <NavLink style={{ textDecoration: "none" }} to="/create-user">
          {" "}
          Create New User
        </NavLink>
      </Button>
    </div>
  );
}

export default ListUsers;
